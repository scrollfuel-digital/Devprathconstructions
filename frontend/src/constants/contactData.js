/**
 * Contact Page Data & Configuration Constants
 * Centralized data for offices, coordinates, contact info, and statistics counters.
 */

export const OPERATIONS_OFFICE = {
  id: "operations",
  label: "Operations Office",
  shortLabel: "Operations",
  address: "Arpitshrushti, Behind Ganpati Temple, Near Tatya Tope Hall, Surendra Nagar, Nagpur - 440015",
  lat: 21.1151078,
  lng: 79.0634154,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=21.1151078,79.0634154",
  phoneNumbers: ["+91 9923203281", "+91 9921141299"],
  email: "devprathconstructions@gmail.com",
};

export const REGISTERED_OFFICE = {
  id: "registered",
  label: "Registered Office",
  shortLabel: "Registered",
  address: "32 A, Deep Apartment, Pande Layout, Khamla Road, Nagpur - 440025",
  lat: 21.1149348,
  lng: 79.0608019,
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=21.1149348,79.0608019",
  phoneNumbers: ["+91 9923203281"],
  email: "devprathconstructions@gmail.com",
};

export const OFFICES = {
  operations: OPERATIONS_OFFICE,
  registered: REGISTERED_OFFICE,
};

export const CONTACT_CHANNELS = {
  email: "devprathconstructions@gmail.com",
  phonePrimary: "+91 9923203281",
  phoneSecondary: "+91 9921141299",
  workingHours: "Mon – Sat: 10 AM – 7 PM",
  whatsappUrl: "https://wa.me/919923203281?text=Hi%20Devprath%20Team,%20I%20am%20interested%20in%20learning%20more%20about%20your%20projects.",
};

export const CONTACT_STATS = [
  { value: 160, suffix: "+", label: "Happy Families" },
  { value: 9, suffix: "+", label: "Expert Team Members" },
];
