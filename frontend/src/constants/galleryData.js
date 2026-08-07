// Import all first_slider images
import glScaled from "../assets/Gallery/first_slider/Grand-Launch-scaled.jpeg";
import gl1 from "../assets/Gallery/first_slider/Grand-Launch-1-scaled.jpeg";
import gl2 from "../assets/Gallery/first_slider/Grand-Launch-2-scaled.jpeg";
import gl3 from "../assets/Gallery/first_slider/Grand-Launch-3-scaled.jpeg";
import gl4 from "../assets/Gallery/first_slider/Grand-Launch-4-scaled.jpeg";
import gl5 from "../assets/Gallery/first_slider/Grand-Launch-5-scaled.jpeg";
import gl6 from "../assets/Gallery/first_slider/Grand-Launch-6-scaled.jpeg";
import gl7 from "../assets/Gallery/first_slider/Grand-Launch-7-scaled.jpeg";
import gl8 from "../assets/Gallery/first_slider/Grand-Launch-8-scaled.jpeg";
import gl9 from "../assets/Gallery/first_slider/Grand-Launch-9-scaled.jpeg";
import gl10 from "../assets/Gallery/first_slider/Grand-Launch-10-scaled.jpeg";
import gl11 from "../assets/Gallery/first_slider/Grand-Launch-11-scaled.jpeg";
import gl12 from "../assets/Gallery/first_slider/Grand-Launch-12-scaled.jpeg";
import gl13 from "../assets/Gallery/first_slider/Grand-Launch-13-scaled.jpeg";
import gl14 from "../assets/Gallery/first_slider/Grand-Launch-14-scaled.jpeg";
import gl15 from "../assets/Gallery/first_slider/Grand-Launch-15-scaled.jpeg";
import gl16 from "../assets/Gallery/first_slider/Grand-Launch-16-scaled.jpeg";
import gl17 from "../assets/Gallery/first_slider/Grand-Launch-17-scaled.jpeg";
import gl19 from "../assets/Gallery/first_slider/Grand-Launch-19-scaled.jpeg";

// Import regular gallery images
import gall1 from "../assets/Gallery/Gallery1.jpg";
import gall1_1 from "../assets/Gallery/Gallery1-1.jpg";
import gall2 from "../assets/Gallery/Gallery2.jpg";
import gall2_1 from "../assets/Gallery/Gallery2-1.jpg";
import gall3 from "../assets/Gallery/Gall3.jpg";
import mainImg from "../assets/AboutUsImg/HomePage.jpg"

// Import Pooja images
import pooja1 from "../assets/Gallery/Pooja.jpg";
import pooja2 from "../assets/Gallery/Pooja2.jpg";
import pooja3 from "../assets/Gallery/Pooja3.jpg";

/**
 * Top Slider Images Data (first_slider)
 */
export const firstSliderImages = [
  { id: 1, src: glScaled, title: "Sample Flat Living Room", alt: "Grand Launch Sample Flat Living Room" },
  { id: 2, src: gl1, title: "Modern Master Bedroom", alt: "Grand Launch Master Bedroom" },
  { id: 3, src: gl2, title: "Elegant Interior Decor", alt: "Grand Launch Interior Layout" },
  { id: 4, src: gl3, title: "Spacious Living Area", alt: "Grand Launch Spacious Living" },
  { id: 5, src: gl4, title: "Luxury Finishing Touch", alt: "Grand Launch Luxury Finishing" },
  { id: 6, src: gl5, title: "Architectural Detail Showcase", alt: "Grand Launch Architectural Detail" },
  { id: 7, src: gl6, title: "Contemporary Bedroom Design", alt: "Grand Launch Contemporary Bedroom" },
  { id: 8, src: gl7, title: "Premium Kitchen Fitting", alt: "Grand Launch Kitchen Fitting" },
  { id: 9, src: gl8, title: "Balcony Scenic View", alt: "Grand Launch Balcony View" },
  { id: 10, src: gl9, title: "Sample Flat Inauguration Walk", alt: "Grand Launch Ribbon Walk" },
  { id: 11, src: gl10, title: "VIP Guests & Leadership Walkthrough", alt: "Grand Launch Guest Walkthrough" },
  { id: 12, src: gl11, title: "Director Ribbon Cutting Ceremony", alt: "Grand Launch Ribbon Ceremony" },
  { id: 13, src: gl12, title: "Team Welcome & Felicitation", alt: "Grand Launch Team Welcome" },
  { id: 14, src: gl13, title: "Model Flat Experience", alt: "Grand Launch Model Experience" },
  { id: 15, src: gl14, title: "Interior Lighting Ambience", alt: "Grand Launch Lighting Ambience" },
  { id: 16, src: gl15, title: "Custom Woodwork & Storage", alt: "Grand Launch Woodwork" },
  { id: 17, src: gl16, title: "Dining & Dining Showcase", alt: "Grand Launch Dining Showcase" },
  { id: 18, src: gl17, title: "Walkthrough with Homeowners", alt: "Grand Launch Homeowner Walkthrough" },
  { id: 19, src: gl19, title: "Residency Entrance Welcome", alt: "Grand Launch Entrance Welcome" },
];

/**
 * Gallery Sections Data following Reference Image 1 Structure
 */
export const gallerySections = [
  {
    id: "section-1",
    badge: "GALLERY",
    title: "Grand Launch of Sample Flat at Mangalmurti Residency",
    hasSlider: true, // Indicates top line has the auto slider
    images: [
      { id: "sec1-1", src: gall1, title: "Leadership & Guest Arrival", alt: "Guest Arrival at Mangalmurti Residency", aspect: "aspect-[4/3]" },
      { id: "sec1-2", src: mainImg, title: "Ribbon Cutting & Grand Ceremony", alt: "Ribbon Cutting Grand Ceremony", aspect: "aspect-[3/4]" },
      { id: "sec1-3", src: gall2, title: "Team & Director Group Photo", alt: "Team & Director Group Photo", aspect: "aspect-[4/3]" },
    ],
  },
  {
    id: "section-2",
    badge: "UNITY AND PROSPERITY",
    title: "Inaugural Pooja With Team",
    hasSlider: false,
    images: [
      { id: "sec2-1", src: pooja1, title: "Team Group Pooja Blessing", alt: "Devprath Team Group Pooja", aspect: "aspect-[4/3]" },
      { id: "sec2-2", src: pooja3, title: "Auspicious Pooja Rituals", alt: "Sacred Pooja Rituals with Directors", aspect: "aspect-[3/4]" },
      { id: "sec2-3", src: pooja2, title: "Founders & Staff Gathering", alt: "Founders & Staff Pooja Gathering", aspect: "aspect-[4/3]" },
    ],
  },
  {
    id: "section-3",
    badge: "TEAM BONDING",
    title: "Fun-filled Picnic & Corporate Activities",
    hasSlider: false,
    images: [
      { id: "sec3-1", src: gall2_1, title: "Fun Tug-of-War Activity", alt: "Devprath Team Tug-of-War Game", aspect: "aspect-[4/3]" },
      { id: "sec3-2", src: gall3, title: "Outdoor Team Outdoor Games", alt: "Outdoor Team Outdoor Activity", aspect: "aspect-[4/3]" },
      { id: "sec3-3", src: gall1_1, title: "Celebration & Milestone Toast", alt: "Celebration & Milestone Group Photo", aspect: "aspect-[4/3]" },
    ],
  },
];

/**
 * Combined list of all gallery images for global lightbox indexing
 */
export const allGalleryImages = [
  ...firstSliderImages,
  { id: "sec1-1", src: gall1, title: "Leadership & Guest Arrival", alt: "Guest Arrival at Mangalmurti Residency" },
  { id: "sec1-2", src: gall1_1, title: "Ribbon Cutting & Grand Ceremony", alt: "Ribbon Cutting Grand Ceremony" },
  { id: "sec1-3", src: gall2, title: "Team & Director Group Photo", alt: "Team & Director Group Photo" },
  { id: "sec2-1", src: pooja1, title: "Team Group Pooja Blessing", alt: "Devprath Team Group Pooja" },
  { id: "sec2-2", src: pooja2, title: "Auspicious Pooja Rituals", alt: "Sacred Pooja Rituals with Directors" },
  { id: "sec2-3", src: pooja3, title: "Founders & Staff Gathering", alt: "Founders & Staff Pooja Gathering" },
  { id: "sec3-1", src: gall2_1, title: "Fun Tug-of-War Activity", alt: "Devprath Team Tug-of-War Game" },
  { id: "sec3-2", src: gall3, title: "Outdoor Team Outdoor Games", alt: "Outdoor Team Outdoor Activity" },
];
