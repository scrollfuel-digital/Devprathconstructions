import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import CTAButton from "./common/CTAButton";
import ScrollReveal from "./common/ScrollReveal";
// =============================================================================
// STRICT DATA SOURCE OF TRUTH (AS REQUESTED)
// =============================================================================
const MANGALMURTI_LOCATION = {
  name: "Mangalmurti Residency",
  lat: 21.0357708,
  lng: 79.0476286,
};

const LOCATIONS_DATA = [
  {
    id: "metro",
    title: "Khapri Metro Station",
    category: "Rapid Transit",
    lat: 21.0496483,
    lng: 79.0471023,
  },
  {
    id: "aiims",
    title: "AIIMS Nagpur",
    category: "Super-Specialty Healthcare",
    lat: 21.0359743,
    lng: 79.0267258,
  },
  {
    id: "gcoen",
    title: "Government College of Engineering",
    category: "Premier Institute",
    lat: 21.0515686,
    lng: 79.0603312,
  },
  {
    id: "stadium",
    title: "VCA Cricket Stadium",
    category: "Sports & Entertainment",
    lat: 21.013504,
    lng: 79.039739,
  },
  {
    id: "airport",
    title: "Dr. Babasaheb Ambedkar Airport",
    category: "International Airport",
    lat: 21.0901569,
    lng: 79.0548086,
  },
];

// Nagpur & MIHAN Corridor Bounds (Locks map so user cannot zoom out past corridor)
const NAGPUR_BOUNDS = [
  [20.98, 78.96], // South-West
  [21.14, 79.12], // North-East
];

// Custom HTML Markers for Leaflet (Devprath Architectural Palette)
const mangalmurtiIcon = L.divIcon({
  className: "custom-mangalmurti-marker",
  html: `
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%);">
      <div style="width: 24px; height: 24px; background: #B9935A; border: 2.5px solid #FAF7F2; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(31,30,28,0.35);">
        <div style="width: 7px; height: 7px; background: #FAF7F2; border-radius: 50%;"></div>
      </div>
      <div style="background: #1F1E1C; color: #FAF7F2; border: 1px solid #B9935A; font-family: 'Manrope', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.1em; padding: 2px 8px; border-radius: 2px; margin-top: 4px; white-space: nowrap; text-transform: uppercase; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
        Mangalmurti Residency
      </div>
    </div>
  `,
  iconSize: [32, 50],
  iconAnchor: [16, 50],
});

const landmarkIcon = L.divIcon({
  className: "custom-landmark-marker",
  html: `
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%);">
      <div style="width: 18px; height: 18px; background: #1F1E1C; border: 2px solid #B9935A; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
        <div style="width: 5px; height: 5px; background: #B9935A; border-radius: 50%;"></div>
      </div>
    </div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 20],
});

// Viewport controller to automatically fit route bounds on landmark selection
function MapViewController({ bounds }) {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length > 0) {
      map.fitBounds(bounds, {
        padding: [50, 50],
        maxZoom: 15,
        animate: true,
      });
    }
  }, [bounds, map]);
  return null;
}

/**
 * Section 7: Where Life Connects (Connectivity & React-Leaflet Map)
 * - Zero third-party routing plugins (pure raw JS fetch to OSRM API)
 * - Coordinate Bridging: [Origin, ...decoded_OSRM_coords, Destination] to connect right to markers
 * - Fallback UI: draws direct straight dashed line if OSRM rate-limits or fails
 * - Precise marker placement at exact hardcoded coordinates
 * - CartoDB Positron tiles with .premium-map-filter sepia theming
 * - Zoom & Pan locked to Nagpur corridor (minZoom={12}, maxBounds)
 */
export const HubOfExcellence = () => {
  const [activeId, setActiveId] = useState(LOCATIONS_DATA[0].id);
  const [routeCoords, setRouteCoords] = useState([
    [MANGALMURTI_LOCATION.lat, MANGALMURTI_LOCATION.lng],
    [LOCATIONS_DATA[0].lat, LOCATIONS_DATA[0].lng],
  ]);
  const [isFallback, setIsFallback] = useState(false);
  const [isMapActive, setIsMapActive] = useState(false);
  const [routeMeta, setRouteMeta] = useState({
    distance: "1.5 km",
    duration: "3 MIN",
  });

  const activePoint =
    LOCATIONS_DATA.find((p) => p.id === activeId) || LOCATIONS_DATA[0];

  // Raw JavaScript Fetch to Free OSRM Routing API with Coordinate Bridging & Fallback
  useEffect(() => {
    let isMounted = true;
    const originLng = MANGALMURTI_LOCATION.lng;
    const originLat = MANGALMURTI_LOCATION.lat;
    const destLng = activePoint.lng;
    const destLat = activePoint.lat;

    const osrmUrl = `https://router.project-osrm.org/route/v1/driving/${originLng},${originLat};${destLng},${destLat}?overview=full&geometries=geojson`;

    fetch(osrmUrl)
      .then((res) => {
        if (!res.ok) throw new Error(`OSRM HTTP error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        if (!isMounted) return;
        if (data.routes && data.routes.length > 0) {
          const route = data.routes[0];
          const decodedCoords = route.geometry.coordinates.map(([lng, lat]) => [
            lat,
            lng,
          ]);

          // Coordinate Bridging: Inject exact origin and destination coordinates
          // to eliminate snapping gaps at start & end of the route
          const bridgedCoords = [
            [originLat, originLng],
            ...decodedCoords,
            [destLat, destLng],
          ];

          setRouteCoords(bridgedCoords);
          setIsFallback(false);

          const km = (route.distance / 1000).toFixed(1);
          const mins = Math.max(1, Math.round(route.duration / 60));
          setRouteMeta({
            distance: `${km} km`,
            duration: `${mins} MIN`,
          });
        } else {
          throw new Error("No OSRM routes found");
        }
      })
      .catch((err) => {
        if (!isMounted) return;
        console.warn("OSRM routing unavailable, using direct fallback line:", err);
        // Fallback UI: direct straight dashed line between origin and destination
        setRouteCoords([
          [originLat, originLng],
          [destLat, destLng],
        ]);
        setIsFallback(true);
      });

    return () => {
      isMounted = false;
    };
  }, [activePoint.lat, activePoint.lng]);

  const externalMapUrl = `https://www.google.com/maps/dir/?api=1&origin=${MANGALMURTI_LOCATION.lat},${MANGALMURTI_LOCATION.lng}&destination=${activePoint.lat},${activePoint.lng}`;

  return (
    <section
      id="location"
      className="py-24 sm:py-32 bg-cream  overflow-hidden"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 sm:mb-20">
          <ScrollReveal>
            <div>
              <span className="arch-eyebrow mb-3">
                Connectivity
              </span>
              <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl !font-bold text-black tracking-tight leading-tight">
                Where Life <span className=" font-bold text-[#8F6E3B]">Connects</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="text-left lg:text-right">
            <ScrollReveal>
              <span className="font-body text-xs sm:text-sm text-black font-semibold tracking-wider uppercase block">
                Parsodi,Wardha Road,Nagpur
              </span>
              <span className="text-xs text-black/60 font-bold block mt-1">
                Adjacent to MIHAN SEZ &amp; Metro Corridor
              </span>
            </ScrollReveal>
          </div>
        </div>

        {/* Two-Column Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">

          {/* LEFT COLUMN: INTERACTIVE CONNECTIVITY LIST */}
          <div className="lg:col-span-6 space-y-2">
            <ScrollReveal>
              <div className="border-t border-[#B9935A]/25">
                {LOCATIONS_DATA.map((item, idx) => {
                  const isActive = item.id === activeId;
                  const num = `0${idx + 1}`;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveId(item.id)}
                      className={`connectivity-item ${
                        isActive ? "active" : ""
                      } min-h-[76px] sm:min-h-[82px] md:min-h-[86px] py-2.5 sm:py-3 px-3 sm:px-4 flex items-center justify-between gap-3 sm:gap-6 cursor-pointer transition-all duration-300`}
                    >
                      {/* Left: Number + Landmark Title & Category (Full name displayed with natural line breaks, no "..." truncation) */}
                      <div className="flex items-center gap-3 sm:gap-5 min-w-0 flex-1">
                        <span className="connectivity-num font-display text-base sm:text-xl md:text-2xl font-bold text-brand-primary shrink-0 transition-colors">
                          {num}
                        </span>
                        <div className="min-w-0 flex-1">
                          <span className="connectivity-title font-body text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.04em] sm:tracking-[0.07em] block text-[#1F1E1C] transition-colors leading-snug break-normal">
                            {item.title}
                          </span>
                          <span className="text-[10px] sm:text-[11px] text-black/55 font-medium block mt-0.5 leading-tight">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Right: Duration or "VIEW ROUTE" (Symmetrical 2-line height maintained across all rows) */}
                      <div className="shrink-0 text-right pl-2 sm:pl-4 flex flex-col justify-center items-end">
                        <span className="font-display text-xs sm:text-sm md:text-base font-bold tracking-wider text-brand-primary whitespace-nowrap block leading-tight">
                          {isActive ? routeMeta.duration : "VIEW ROUTE"}
                        </span>
                        <span
                          className={`text-[9px] sm:text-[10px] font-medium block font-body tracking-normal whitespace-nowrap mt-1 leading-tight transition-opacity duration-300 ${
                            isActive
                              ? "text-black/50 opacity-100"
                              : "opacity-0 select-none pointer-events-none"
                          }`}
                        >
                          {isActive ? routeMeta.distance : "0.0 km"}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* External Directions CTA */}
            <div className="pt-4 sm:pt-6">
              <ScrollReveal>
                <CTAButton
                  href={externalMapUrl}
                  label="VIEW ON GOOGLE MAPS"
                  className="!w-full sm:!w-auto min-w-0 sm:min-w-[270px] text-nowrap"
                />
              </ScrollReveal>
            </div>
          </div>

          {/* RIGHT COLUMN: REACT-LEAFLET ARCHITECTURAL MAP */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal>
              <div
                onClick={() => setIsMapActive(true)}
                onMouseLeave={() => setIsMapActive(false)}
                className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] max-h-[400px] lg:max-h-none overflow-hidden border border-[#B9935A]/25 bg-[#F2EDE4]"
              >
                {/* Mobile Scroll-Trap Guard Overlay */}
                {!isMapActive && (
                  <div
                    onClick={() => setIsMapActive(true)}
                    className="absolute inset-0 z-[400] flex items-center justify-center bg-black/5 cursor-pointer lg:hidden"
                  >
                    <div className="bg-[#FAF7F2]/95 backdrop-blur-md px-4 py-2 border border-[#B9935A]/40 text-[#1F1E1C] shadow-sm text-center">
                      <span className="font-body text-[10px] uppercase tracking-[0.2em] font-semibold block text-[#8F6E3B]">
                        Tap to interact with map
                      </span>
                    </div>
                  </div>
                )}

                <MapContainer
                  center={[MANGALMURTI_LOCATION.lat, MANGALMURTI_LOCATION.lng]}
                  zoom={13}
                  minZoom={12}
                  maxZoom={17}
                  maxBounds={NAGPUR_BOUNDS}
                  maxBoundsViscosity={1.0}
                  scrollWheelZoom={false}
                  attributionControl={false}
                  className={`premium-map-tiles w-full h-full z-0 ${!isMapActive ? "pointer-events-none lg:pointer-events-auto" : "pointer-events-auto"
                    }`}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    maxZoom={19}
                  />

                  <MapViewController bounds={routeCoords} />

                  {/* Mangalmurti Residency Marker */}
                  <Marker
                    position={[MANGALMURTI_LOCATION.lat, MANGALMURTI_LOCATION.lng]}
                    icon={mangalmurtiIcon}
                  >
                    <Popup>
                      <div className="font-sans text-xs">
                        <strong>Mangalmurti Residency</strong>
                        <p className="text-[10px] text-gray-600 mt-0.5">
                          Parsodi, Wardha Road, Nagpur
                        </p>
                      </div>
                    </Popup>
                  </Marker>

                  {/* Destination Marker */}
                  <Marker
                    position={[activePoint.lat, activePoint.lng]}
                    icon={landmarkIcon}
                  >
                    <Popup>
                      <div className="font-sans text-xs">
                        <strong>{activePoint.title}</strong>
                        <p className="text-[10px] text-gray-600 mt-0.5">
                          {activePoint.category} · {routeMeta.distance}
                        </p>
                      </div>
                    </Popup>
                  </Marker>

                  {/* Real Driving Route Polyline */}
                  <Polyline
                    positions={routeCoords}
                    pathOptions={{
                      color: "#B89C72",
                      weight: 4,
                      opacity: 0.9,
                      dashArray: isFallback ? "6, 8" : undefined,
                      lineJoin: "round",
                    }}
                  />
                </MapContainer>

                {/* Status Overlay Info Pill (Responsive max-width & truncate) */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-[#FAF7F2]/95 backdrop-blur-md px-3 sm:px-4 py-2 sm:py-2.5 text-[#1F1E1C] border-l-2 border-[#B9935A] shadow-sm pointer-events-none z-[500] max-w-[calc(100%-1.5rem)] sm:max-w-[calc(100%-2rem)]">
                  <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-brand-maroon font-bold block">
                    Driving Route · Wardha Road
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-[#1F1E1C] block truncate">
                    {activePoint.title} · {routeMeta.duration} ({routeMeta.distance})
                  </span>
                </div>

                {/* Sector Tag Accent (Hidden on small mobile to keep map clean) */}
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-[#FAF7F2]/90 backdrop-blur-sm px-2.5 sm:px-3 py-1 text-[8px] sm:text-[9px] uppercase tracking-[0.2em] text-[#6D675E] font-semibold pointer-events-none z-[500] border border-[#B9935A]/20 hidden sm:block">
                  Origin: Mangalmurti Residency
                </div>

              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section >
  );
};

export default HubOfExcellence;
