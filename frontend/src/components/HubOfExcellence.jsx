import React, { useState, useEffect, memo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Project Coordinates: Mangalmurti Residency (Nagpur, MH)
const MANGALMURTI_LOCATION = {
  name: "Mangalmurti Residency",
  lat: 21.0357708,
  lng: 79.0476286,
  url: "https://maps.app.goo.gl/xoJxvjEaiTdhvUbNA",
};

const LOCATIONS_DATA = [
  {
    id: "metro",
    title: "Khapri Metro Station",
    category: "Rapid Transit",
    icon: "directions_subway",
    lat: 21.0496483,
    lng: 79.0471023,
    url: "https://www.google.com/maps/place/Khapri+Metro+Station/@21.0496483,79.0471023",
  },
  {
    id: "aiims",
    title: "AIIMS Nagpur",
    category: "Super-Specialty Healthcare",
    icon: "local_hospital",
    lat: 21.0359743,
    lng: 79.0267258,
    url: "https://www.google.com/maps/place/All+India+Institute+Of+Medical+Sciences+Nagpur/@21.0359743,79.0267258",
  },
  {
    id: "gcoen",
    title: "Government College of Engineering (GCOEN)",
    category: "Premier Institute",
    icon: "school",
    lat: 21.0515686,
    lng: 79.0603312,
    url: "https://www.google.com/maps/place/Government+College+of+Engineering,+Nagpur/@21.0515686,79.0603312",
  },
  {
    id: "stadium",
    title: "VCA Cricket Stadium (Jamtha)",
    category: "Sports & Entertainment",
    icon: "sports_cricket",
    lat: 21.013504,
    lng: 79.039739,
    url: "https://www.google.com/maps/place/Vidarbha+Cricket+Association+Stadium/@21.0145383,79.0395771",
  },
  {
    id: "airport",
    title: "Dr. Babasaheb Ambedkar Airport",
    category: "International Airport",
    icon: "flight_takeoff",
    lat: 21.0901569,
    lng: 79.0548086,
    url: "https://www.google.com/maps/place/Dr.+Babasaheb+Ambedkar+International+Airport/@21.0901569,79.0548086",
  },
];

/**
 * Calculates Haversine geodesic distance in KM between two (lat, lng) coordinates
 */
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
    Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
};

const calculateTime = (distanceKm) => {
  const mins = Math.max(3, Math.round((distanceKm / 30) * 60));
  return `${mins} Mins`;
};

// Custom Leaflet DivIcon Generators for React
const mangalmurtiIcon = L.divIcon({
  className: "custom-mangalmurti-pin",
  html: `
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); font-family: 'Poppins', sans-serif;">
      <div style="width: 40px; height: 40px; background-color: #B9935A; border: 3px solid #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 6px 16px rgba(0,0,0,0.3);">
        <span class="material-symbols-outlined" style="color: #ffffff; font-size: 22px;">domain</span>
      </div>
      <div style="background: #172235; color: #ffffff; border: 1px solid #B9935A; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 12px; margin-top: 4px; white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,0.25);">
        Mangalmurti Residency
      </div>
    </div>
  `,
  iconSize: [40, 64],
  iconAnchor: [20, 44],
});

const createLandmarkIcon = (iconName, title) =>
  L.divIcon({
    className: "custom-landmark-pin",
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); font-family: 'Poppins', sans-serif;">
        <div style="width: 36px; height: 36px; background-color: #172235; border: 2.5px solid #B9935A; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.3);">
          <span class="material-symbols-outlined" style="color: #F0D060; font-size: 20px; font-weight: bold;">${iconName}</span>
        </div>
        <div style="background: #ffffff; color: #172235; font-size: 10px; font-weight: 700; padding: 2px 8px; border-radius: 12px; margin-top: 4px; white-space: nowrap; box-shadow: 0 3px 10px rgba(0,0,0,0.2); border: 1px solid #B9935A;">
          ${title}
        </div>
      </div>
    `,
    iconSize: [36, 58],
    iconAnchor: [18, 38],
  });

/**
 * Idiomatic React component using useMap hook to smoothly fit map bounds when route changes
 */
const MapViewController = ({ bounds }) => {
  const map = useMap();
  useEffect(() => {
    if (bounds && bounds.length >= 2) {
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15, animate: true });
    }
  }, [bounds, map]);
  return null;
};

// Magical Depth-Blur Motion Variant (Emerging from Background, Zero Delay, Slow Pace)
const magicalBehindVariant = (shouldReduceMotion) => ({
  hidden: {
    opacity: 0,
    scale: shouldReduceMotion ? 1 : 0.88,
    y: shouldReduceMotion ? 0 : 35,
    filter: shouldReduceMotion ? "none" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.25,
      delay: 0,
      ease: [0.25, 1, 0.5, 1],
    },
  },
});

export const HubOfExcellence = memo(() => {
  const [selectedLandmark, setSelectedLandmark] = useState(LOCATIONS_DATA[0]);
  const [routeCoords, setRouteCoords] = useState([
    [MANGALMURTI_LOCATION.lat, MANGALMURTI_LOCATION.lng],
    [selectedLandmark.lat, selectedLandmark.lng],
  ]);

  const shouldReduceMotion = useReducedMotion();

  const mainLatLng = [MANGALMURTI_LOCATION.lat, MANGALMURTI_LOCATION.lng];
  const activeLatLng = [selectedLandmark.lat, selectedLandmark.lng];

  // Fetch real road driving route path from OSRM API
  useEffect(() => {
    let isMounted = true;
    const fetchRoute = async () => {
      try {
        const url = `https://router.project-osrm.org/route/v1/driving/${MANGALMURTI_LOCATION.lng},${MANGALMURTI_LOCATION.lat};${selectedLandmark.lng},${selectedLandmark.lat}?overview=full&geometries=geojson`;
        const res = await fetch(url);
        const data = await res.json();
        if (data && data.routes && data.routes[0] && data.routes[0].geometry) {
          const coords = data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]);
          if (isMounted) {
            setRouteCoords(coords);
          }
        } else {
          if (isMounted) {
            setRouteCoords([mainLatLng, activeLatLng]);
          }
        }
      } catch {
        if (isMounted) {
          setRouteCoords([mainLatLng, activeLatLng]);
        }
      }
    };

    fetchRoute();

    return () => {
      isMounted = false;
    };
  }, [selectedLandmark]);

  const activeDistance = calculateDistance(
    MANGALMURTI_LOCATION.lat,
    MANGALMURTI_LOCATION.lng,
    selectedLandmark.lat,
    selectedLandmark.lng
  );
  const activeTime = calculateTime(parseFloat(activeDistance));

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&origin=${MANGALMURTI_LOCATION.lat},${MANGALMURTI_LOCATION.lng}&destination=${selectedLandmark.lat},${selectedLandmark.lng}`;

  return (
    <section
      id="location"
      className="py-24 bg-[#F8F5EF] border-t border-[#B9935A]/20 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column - Magical Depth Blur Emergence */}
          <div className="lg:col-span-1 text-left space-y-3.5">
            {/* Header Block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
              className="mb-8"
            >
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#B9935A] mb-3 block text-left">
                Prime Location &amp; Connectivity
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172235] tracking-tight mb-6 font-heading text-left">
                Everything Within <span className="gold-gradient-text">Reach</span>
              </h2>
              <p className="text-sm text-gray-600 font-light text-left">
                Located strategically in Nagpur's prime growth corridor near Wardha Road &amp; MIHAN, Mangalmurti Residency provides seamless access to transit, top institutes, healthcare, and sports centers.
              </p>
            </motion.div>

            {/* Individual Location Cards - Per-Item Magical Emergence */}
            {LOCATIONS_DATA.map((item) => {
              const distance = calculateDistance(
                MANGALMURTI_LOCATION.lat,
                MANGALMURTI_LOCATION.lng,
                item.lat,
                item.lng
              );
              const time = calculateTime(parseFloat(distance));
              const isSelected = selectedLandmark.id === item.id;

              return (
                <motion.div
                  key={item.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.05 }}
                  variants={magicalBehindVariant(shouldReduceMotion)}
                  style={{ willChange: "transform, opacity, filter" }}
                  onClick={() => setSelectedLandmark(item)}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { scale: 1.02, transition: { duration: 0.2 } }
                  }
                  className={`flex items-center justify-between p-4 rounded-2xl border transition-all cursor-pointer shadow-sm ${isSelected
                      ? "bg-[#FDFBF7] border-[#B9935A] ring-2 ring-[#B9935A]/20 shadow-md"
                      : "bg-white border-gray-200/80 hover:border-[#B9935A]/50 hover:bg-white"
                    }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0 flex-1">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-colors ${isSelected
                          ? "bg-[#B9935A] text-white"
                          : "bg-[#F8F5EF] text-[#B9935A]"
                        }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {item.icon}
                      </span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="text-sm sm:text-base font-bold text-gray-900 truncate leading-snug">
                        {item.title}
                      </h4>
                      <span className="text-xs sm:text-[13px] text-gray-600 font-medium truncate block mt-0.5">
                        {item.category} • {distance} km away
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 ml-2">
                    <span className="text-xs sm:text-sm font-bold px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#B9935A]/15 text-[#785926] whitespace-nowrap shrink-0">
                      {time}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column - Map Container Showcase */}
          <div className="lg:col-span-1 sticky top-24 min-h-[500px]">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.05 }}
              variants={magicalBehindVariant(shouldReduceMotion)}
              style={{ willChange: "transform, opacity, filter" }}
              className="relative rounded-3xl overflow-hidden bg-white text-gray-900 p-6 sm:p-8 flex flex-col justify-between shadow-xl shadow-black/5 border border-gray-100 min-h-[500px]"
            >
              {/* Header Bar */}
              <div className="relative z-10 flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#B9935A] block">
                    Interactive Road Driving Route
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 mt-0.5">
                    Mangalmurti Residency &rarr; {selectedLandmark.title}
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-[#B9935A] block">
                    {activeDistance} km
                  </span>
                  <span className="text-[10px] text-gray-500 font-medium">
                    Est. {activeTime} Drive
                  </span>
                </div>
              </div>

              {/* React-Leaflet Satellite Map Container */}
              <div className="relative z-10 w-full h-[300px] sm:h-[320px] rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                <MapContainer
                  center={mainLatLng}
                  zoom={14}
                  scrollWheelZoom={false}
                  attributionControl={false}
                  className="w-full h-full z-0"
                >
                  <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={18}
                  />

                  <TileLayer
                    url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
                    maxZoom={18}
                  />

                  <MapViewController bounds={routeCoords} />

                  <Marker position={mainLatLng} icon={mangalmurtiIcon}>
                    <Popup>
                      <div className="text-center font-sans text-xs">
                        <strong>Mangalmurti Residency</strong>
                        <p className="m-0 text-gray-600">Main Project Location</p>
                      </div>
                    </Popup>
                  </Marker>

                  <Marker
                    position={activeLatLng}
                    icon={createLandmarkIcon(selectedLandmark.icon, selectedLandmark.title)}
                  >
                    <Popup>
                      <div className="text-center font-sans text-xs">
                        <strong>{selectedLandmark.title}</strong>
                        <p className="m-0 text-gray-600">
                          {activeDistance} km • {activeTime} Drive
                        </p>
                      </div>
                    </Popup>
                  </Marker>

                  <Polyline
                    positions={routeCoords}
                    pathOptions={{
                      color: "#B9935A",
                      weight: 4.5,
                      opacity: 0.95,
                      lineCap: "round",
                      lineJoin: "round",
                    }}
                  />
                </MapContainer>
              </div>

              {/* Action Buttons */}
              <div className="relative z-10 pt-4 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 w-full rounded-full bg-[#B9935A] py-3.5 text-xs font-semibold uppercase tracking-[2px] text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#B9935A] hover:to-[#8B6732] hover:border-transparent shadow-md text-center flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-base">
                    directions
                  </span>
                  <span>View Route on Google Maps</span>
                </a>

                <a
                  href={MANGALMURTI_LOCATION.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white text-[#B9935A] border border-[#B9935A] transition-all duration-300 hover:bg-[#B9935A] hover:text-white py-3.5 px-6 text-xs font-semibold uppercase tracking-[1px] flex items-center justify-center gap-1 cursor-pointer text-center shadow-sm"
                >
                  <span className="material-symbols-outlined text-base">
                    my_location
                  </span>
                  <span>Project Location</span>
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
});

export default HubOfExcellence;
