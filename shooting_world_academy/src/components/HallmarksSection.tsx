import React from 'react';

interface HallmarksSectionProps {
  onBespokeInquiry: () => void;
}

export const HallmarksSection: React.FC<HallmarksSectionProps> = ({ onBespokeInquiry }) => {
  return (
    <section id="hallmarks" className="bg-[#102620] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Hand-Craftsmanship Media */}
        <div className="relative group overflow-hidden bg-[#16362D]">
          <div className="aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden">
            <img
              src="https://www.datocms-assets.com/102945/1770145194-dsc_2922_1.jpg?auto=format&crop=focalpoint&fit=fillmax&h=775&w=844"
              alt="Holland & Holland Master Gunmaking & Hand Engraving"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=844&h=775&q=80';
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Subtle Corner Hallmark Badge */}
          <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm border border-[#C6C6BC]/20 px-3.5 py-1.5 text-[10px] tracking-widest text-[#C6C6BC] uppercase">
            London Workshop · Circa 1835
          </div>
        </div>

        {/* Right Column: Narrative */}
        <div className="flex flex-col items-start lg:pl-6">
          <span className="text-[#C6C6BC]/80 text-[11px] font-sans tracking-[0.3em] uppercase mb-3">
            HERITAGE & CRAFTSMANSHIP
          </span>

          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight mb-6">
            Hallmarks & Heirlooms
          </h2>

          <div className="space-y-4 text-[#C6C6BC]/90 font-sans text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
            <p>
              Holland & Holland is the very hallmark of fine British gunmaking and shooting.
              For nearly two centuries, our master craftsmen in London have engineered firearms
              celebrated across the globe for supreme balance, exquisite hand-engraving, and
              unmatched mechanical precision.
            </p>
            <p>
              From the patented 'Royal' sidelock action introduced in 1883 to our contemporary
              over-and-under game guns, each piece requires up to 1,000 hours of meticulous hand-fitting.
              They are not merely sporting arms; they are cherished heirlooms destined to be handed down
              through generations.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.hollandandholland.com/heritage/hallmarks-heirlooms"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#16362D] text-[#C6C6BC] font-sans text-[10px] tracking-widest rounded-full hover:bg-[#102620] hover:text-white border border-[#C6C6BC]/30 transition-all duration-300 uppercase cursor-pointer"
            >
              DISCOVER
            </a>
            <button
              onClick={onBespokeInquiry}
              className="px-8 py-3 bg-transparent border border-[#C6C6BC]/40 text-[#C6C6BC] font-sans text-[10px] tracking-widest rounded-full hover:bg-[#16362D] hover:text-white transition-all duration-300 uppercase cursor-pointer"
            >
              BESPOKE COMMISSION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
