import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { OPERATIONS_OFFICE } from "../../../constants/contactData";
import CTAButton from "../../../components/common/CTAButton";

// Clean architectural DivIcon in Devprath gold and charcoal
const officeMarker = L.divIcon({
  className: "custom-devprath-marker",
  html: `
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; transform: translate(-50%, -100%);">
      <div style="width: 28px; height: 28px; background: #B9935A; border: 2.5px solid #FAF7F2; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(31,30,28,0.35);">
        <div style="width: 7px; height: 7px; background: #FAF7F2; border-radius: 50%;"></div>
      </div>
      <div style="background: #1F1E1C; color: #FAF7F2; border: 1px solid #B9935A; font-family: 'Manrope', sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.12em; padding: 2px 8px; border-radius: 2px; margin-top: 4px; white-space: nowrap; text-transform: uppercase; box-shadow: 0 4px 10px rgba(0,0,0,0.25);">
        ${OPERATIONS_OFFICE.shortLabel}
      </div>
    </div>
  `,
  iconSize: [36, 52],
  iconAnchor: [18, 52],
});

export default function ContactMap() {
  return (
    <div className="space-y-6">
      {/* Header Row: Office Title/Address + Google Maps CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#B9935A]/25">
        <div className="text-xs sm:text-sm font-body text-[#6D675E]">
          <span className="font-semibold text-[#1F1E1C] uppercase tracking-wider block text-xs">
            {OPERATIONS_OFFICE.label}
          </span>
          <p className="font-light mt-0.5 max-w-2xl leading-relaxed">
            {OPERATIONS_OFFICE.address}
          </p>
        </div>

        <div className="shrink-0">
          <CTAButton
            href={OPERATIONS_OFFICE.googleMapsUrl}
            label="OPEN IN GOOGLE MAPS"
          />
        </div>
      </div>

      {/* Architectural Leaflet Map (OpenStreetMap with .premium-map-tiles filter) */}
      <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden border border-[#B9935A]/25 bg-[#F2EDE4]">
        <MapContainer
          center={[OPERATIONS_OFFICE.lat, OPERATIONS_OFFICE.lng]}
          zoom={16.5}
          scrollWheelZoom={false}
          className="premium-map-tiles w-full h-full z-0"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            maxZoom={19}
          />

          <Marker position={[OPERATIONS_OFFICE.lat, OPERATIONS_OFFICE.lng]} icon={officeMarker}>
            <Popup>
              <div className="p-1 font-body text-xs text-[#1F1E1C]">
                <h4 className="font-bold text-[#B9935A] uppercase text-[11px] mb-1">
                  {OPERATIONS_OFFICE.label}
                </h4>
                <p className="text-[11px] text-[#6D675E] leading-relaxed mb-2">
                  {OPERATIONS_OFFICE.address}
                </p>
                <a
                  href={OPERATIONS_OFFICE.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[10px] font-semibold text-[#8F6E3B] hover:underline"
                >
                  Open in Google Maps &rarr;
                </a>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
