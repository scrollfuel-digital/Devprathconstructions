import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ExternalLink, MapPin } from "lucide-react";
import { OFFICES } from "../../../constants/contactData";

// Helper component to smoothly re-center Leaflet map camera when active office changes
function RecenterMap({ lat, lng }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo([lat, lng], 16.5, {
      duration: 1.2,
      easeLinearity: 0.25,
    });
  }, [lat, lng, map]);
  return null;
}

// Custom Leaflet DivIcon Generators for Devprath Office Markers
const createGoldOfficeIcon = (title, isActive) =>
  L.divIcon({
    className: "custom-office-gold-pin",
    html: `
      <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%); font-family: 'Outfit', sans-serif;">
        <div style="width: ${isActive ? "44px" : "36px"}; height: ${isActive ? "44px" : "36px"}; background-color: ${isActive ? "#B9935A" : "#1B1C1C"}; border: 3px solid ${isActive ? "#ffffff" : "#B9935A"}; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 20px rgba(0,0,0,0.4); transition: all 0.3s ease;">
          <span class="material-symbols-outlined" style="color: ${isActive ? "#ffffff" : "#B9935A"}; font-size: ${isActive ? "24px" : "20px"};">location_on</span>
        </div>
        <div style="background: ${isActive ? "#B9935A" : "#1B1C1C"}; color: #ffffff; border: 1px solid #B9935A; font-size: 10px; font-weight: 700; padding: 3px 10px; border-radius: 12px; margin-top: 4px; white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,0.3); text-transform: uppercase; letter-spacing: 1px;">
          ${title}
        </div>
      </div>
    `,
    iconSize: isActive ? [44, 70] : [36, 60],
    iconAnchor: isActive ? [22, 50] : [18, 40],
  });

export default function ContactMap({ activeOfficeId, onSelectOffice }) {
  const activeOffice = OFFICES[activeOfficeId] || OFFICES.operations;

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#B9935A]/30 space-y-6">
      {/* Header & Toggle Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#B9935A] block mb-1">
            Interactive Satellite Map
          </span>
          <h3 className="text-lg sm:text-2xl font-bold font-heading text-[#1B1C1C] leading-snug">
            Office Locations
          </h3>
        </div>

        {/* Office Switcher Tabs */}
        <div className="inline-flex p-1 rounded-xl bg-[#F8F5EF] border border-[#B9935A]/30 w-full sm:w-auto">
          {Object.values(OFFICES).map((office) => {
            const isSelected = activeOfficeId === office.id;
            return (
              <button
                key={office.id}
                onClick={() => onSelectOffice(office.id)}
                className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg text-[11px] font-bold uppercase tracking-[1.5px] transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#B9935A] text-white shadow-md"
                    : "text-[#4E453A] hover:text-[#B9935A]"
                }`}
              >
                {office.shortLabel}
              </button>
            );
          })}
        </div>
      </div>

      {/* Address Bar Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#F8F5EF] p-4 rounded-2xl border border-[#B9935A]/20 gap-3.5 text-xs sm:text-sm">
        <div className="flex items-start sm:items-center gap-3 min-w-0 flex-1">
          <div className="p-2 rounded-lg bg-[#B9935A]/15 text-[#B9935A] shrink-0 mt-0.5 sm:mt-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="min-w-0 flex-1">
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#785926] block">
              {activeOffice.label}
            </span>
            <p className="font-medium text-[#1B1C1C] text-xs sm:text-sm leading-relaxed break-words">
              {activeOffice.address}
            </p>
          </div>
        </div>

        <a
          href={activeOffice.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 bg-[#B9935A]/15 hover:bg-[#B9935A] text-[#785926] hover:text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 shrink-0 border border-[#B9935A]/30 w-full sm:w-auto"
        >
          <span>Get Directions</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Leaflet Satellite Map Frame */}
      <div className="w-full h-80 sm:h-[420px] rounded-2xl overflow-hidden shadow-md border border-[#B9935A]/30 relative z-10 bg-[#1B1C1C]">
        <MapContainer
          center={[activeOffice.lat, activeOffice.lng]}
          zoom={16.5}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          {/* High-Res Esri Satellite Layer */}
          <TileLayer
            attribution="Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          />
          {/* Esri Reference Labels Layer */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
          />

          <RecenterMap lat={activeOffice.lat} lng={activeOffice.lng} />

          {/* Render markers for both offices */}
          {Object.values(OFFICES).map((office) => {
            const isCurrent = activeOfficeId === office.id;
            return (
              <Marker
                key={office.id}
                position={[office.lat, office.lng]}
                icon={createGoldOfficeIcon(office.shortLabel, isCurrent)}
                eventHandlers={{
                  click: () => onSelectOffice(office.id),
                }}
              >
                <Popup className="custom-gold-popup">
                  <div className="p-1 font-body text-xs text-[#1B1C1C]">
                    <h4 className="font-bold text-[#B9935A] uppercase text-[11px] mb-1">
                      {office.label}
                    </h4>
                    <p className="text-[11px] text-[#4E453A] leading-relaxed mb-2">
                      {office.address}
                    </p>
                    <a
                      href={office.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[10px] font-bold text-[#785926] hover:underline"
                    >
                      Open in Google Maps &rarr;
                    </a>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}
