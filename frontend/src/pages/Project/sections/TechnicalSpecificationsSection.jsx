import React from 'react';
import Button from '../../../components/common/Button';

/**
 * TechnicalSpecificationsSection Component
 * Minimalist 2-column specifications grid detailing engineering standards:
 * - Structure, Flooring, Kitchen, Electrical, Doors & Windows, Bathrooms, Finishes, Utilities
 * - Typography: Cormorant Garamond headings & Manrope body in --text-charcoal (#1F1E1C)
 * - Divider lines: Ultra-thin 1px --accent-gold-matte (#B9935A/30)
 */
export const TECHNICAL_SPECS = [
  {
    category: 'Structure & Foundation',
    specs: [
      {
        item: 'Seismic Engineering',
        detail: 'Earthquake-resistant RCC framed superstructure designed strictly to IS 1893 & IS 456 codes.',
      },
      {
        item: 'Reinforcement & Concrete',
        detail: 'High-yield Fe-500D corrosion-resistant TMT steel with automated batch-mixed M25/M30 grade concrete.',
      },
      {
        item: 'Masonry Walls',
        detail: 'Precision autoclaved aerated concrete (AAC) blocks delivering enhanced thermal and acoustic insulation.',
      },
    ],
  },
  {
    category: 'Flooring & Surfacing',
    specs: [
      {
        item: 'Living, Dining & Bedrooms',
        detail: 'Large format 800mm × 800mm double-charged nano-polished vitrified tiles with matching flush skirting.',
      },
      {
        item: 'Balconies & Open Decks',
        detail: 'Matte-finish anti-skid rustic ceramic tiles with UV-resistant weather sealing.',
      },
      {
        item: 'Corridors & Lobbies',
        detail: 'Imported natural granite and polished composite stone borders along lift lobbies and corridors.',
      },
    ],
  },
  {
    category: 'Kitchen Architecture',
    specs: [
      {
        item: 'Counter Platform',
        detail: 'Mirror-polished premium jet black granite counter slab with chamfered bullnose edge.',
      },
      {
        item: 'Sink & Plumbing',
        detail: 'Heavy-gauge stainless steel double-bowl sink with swivel gooseneck tap and water purifier provision.',
      },
      {
        item: 'Dado Tiling & Power',
        detail: 'Digital glazed ceramic dado tiles up to lintel height; dedicated points for chimney and microwave.',
      },
    ],
  },
  {
    category: 'Electrical & Communication',
    specs: [
      {
        item: 'Concealed Wiring',
        detail: 'Fire-retardant low-smoke (FRLS) concealed copper wiring by Polycab / Finolex equivalent.',
      },
      {
        item: 'Switches & Protection',
        detail: 'Architectural modular switches with miniature circuit breakers (MCB) and ELCB earth leakage protection.',
      },
      {
        item: 'Air Conditioning',
        detail: 'Pre-installed copper piping conduits and dedicated high-amp points in living room and all bedrooms.',
      },
    ],
  },
  {
    category: 'Doors, Fenestration & Glazing',
    specs: [
      {
        item: 'Main Entrance Door',
        detail: 'Engineered solid hardwood frame with decorative teakwood veneer, digital biometric lock and brass viewer.',
      },
      {
        item: 'Balcony Windows',
        detail: 'Heavy-gauge 3-track powder-coated aluminum sliding profiles with integrated stainless-steel mosquito mesh.',
      },
      {
        item: 'Internal Bedroom Doors',
        detail: 'Pre-hung laminated flush doors with premium mortise cylindrical locksets.',
      },
    ],
  },
  {
    category: 'Bathrooms & Sanitary Architecture',
    specs: [
      {
        item: 'CP Fittings',
        detail: 'Chrome-plated single-lever basin mixers and divertor shower valves by Jaquar / Grohe or equivalent.',
      },
      {
        item: 'Sanitary Fixtures',
        detail: 'Wall-hung water closets with soft-close antibacterial seats and dual-flush concealed cisterns.',
      },
      {
        item: 'Water Heating',
        detail: 'Dual hot and cold plumbing line provision integrated with central rooftop solar water heating system.',
      },
    ],
  },
  {
    category: 'Wall Finishes & Protective Coatings',
    specs: [
      {
        item: 'Interior Surfaces',
        detail: 'Smooth gypsum plaster finished with dual coats of primer, wall putty, and washable low-VOC acrylic emulsion.',
      },
      {
        item: 'Exterior Facade',
        detail: 'Triple-layer weatherproof elastomeric textured paint with silicone water-repellent protective coat.',
      },
    ],
  },
  {
    category: 'Elevators & Sustainable Infrastructure',
    specs: [
      {
        item: 'Passenger Elevators',
        detail: 'Dual 8-passenger high-speed automated elevators equipped with Automatic Rescue Device (ARD) and intercom.',
      },
      {
        item: 'Eco Sustainability',
        detail: 'Central Rainwater Harvesting (RWH) recharge pits and tertiary Sewage Treatment Plant (STP) for irrigation.',
      },
    ],
  },
];

export default function TechnicalSpecificationsSection() {
  return (
    <section
      id="specifications"
      className="py-24 sm:py-36 bg-[#FAF7F2] border-t border-[#B9935A]/20 relative"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <span className="font-body text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-[#B9935A] block mb-3">
              Engineering Rigor
            </span>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-normal text-[#1F1E1C] tracking-tight leading-tight">
              Technical <span className="font-bold text-brand-primary">Specifications.</span>
            </h2>
          </div>
          <div className="text-left md:text-right">
            <span className="font-body text-xs sm:text-sm text-[#1F1E1C] font-semibold tracking-wider uppercase block">
              Built for Generations
            </span>
            <span className="text-xs text-[#6D675E] font-light block mt-1">
              Grade-A Materials &amp; Seismic Structural Discipline
            </span>
          </div>
        </div>

        {/* =====================================================================
            MINIMALIST 2-COLUMN SPECIFICATIONS GRID
            With Ultra-Thin 1px Matte Gold Divider Lines
            ===================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-12 sm:gap-y-16">
          {TECHNICAL_SPECS.map((group, gIdx) => (
            <div
              key={gIdx}
              className="border-t border-[#B9935A]/30 pt-6 sm:pt-8 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-display text-base sm:text-lg font-light text-[#B9935A]">
                    0{gIdx + 1}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-normal text-[#1F1E1C] tracking-tight">
                    {group.category}
                  </h3>
                </div>

                {/* Sub-items with fine lines */}
                <div className="divide-y divide-[#1F1E1C]/10 border-b border-[#1F1E1C]/10 mb-4">
                  {group.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="py-3.5 sm:py-4">
                      <span className="font-body text-xs uppercase tracking-[0.16em] text-[#B9935A] font-semibold block mb-1">
                        {spec.item}
                      </span>
                      <p className="font-body text-xs sm:text-sm text-[#1F1E1C] font-light leading-relaxed">
                        {spec.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Guarantee Bar */}
        <div className="mt-16 sm:mt-24 p-8 sm:p-10 bg-[#F2EDE4] border border-[#B9935A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="font-display text-2xl sm:text-3xl font-normal text-[#1F1E1C] mb-2">
              Request Full Technical Structural Dossier
            </h4>
            <p className="font-body text-xs sm:text-sm text-[#6D675E] font-light leading-relaxed">
              Complete civil engineering schematics, concrete core test certifications, and MahaRERA approved blueprints are available upon confidential request.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <Button
              href="/MANGALMURTI-BROCHURE.pdf"
              download="MANGALMURTI-BROCHURE.pdf"
              variant="primary"
            >
              Download Full Dossier PDF
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
