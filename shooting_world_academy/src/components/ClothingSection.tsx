import React from 'react';

interface ClothingSectionProps {
  onScrollToProducts: () => void;
}

export const ClothingSection: React.FC<ClothingSectionProps> = ({ onScrollToProducts }) => {
  return (
    <section id="clothing" className="bg-[#102620] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Media */}
        <div className="relative group overflow-hidden bg-[#16362D]">
          <div className="aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=928&h=853&q=80"
              alt="Holland & Holland Luxury Field Clothing and Leather Accessories"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=928&h=853&q=80&sig=4';
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-sm border border-[#C6C6BC]/20 px-3.5 py-1.5 text-[10px] tracking-widest text-[#C6C6BC] uppercase">
            Featherweight Fieldwear Collection
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col items-start lg:pl-6">
          <span className="text-[#C6C6BC]/80 text-[11px] font-sans tracking-[0.3em] uppercase mb-3">
            TECHNICAL LUXURY · BRITISH TAILORING
          </span>

          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight mb-6">
            Clothing & Accessories
          </h2>

          <div className="space-y-4 text-[#C6C6BC]/90 font-sans text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
            <p>
              Our approach to true modern luxury is steeped in traditional craftsmanship, refined
              aesthetics, and rigorous functionality in the field.
            </p>
            <p>
              From bespoke Scottish estate tweeds and featherweight ventilated shooting vests to English
              bridle-leather cartridge bags and hand-finished silk ties, each piece is engineered with precision
              to provide effortless movement, durable weather protection, and timeless British elegance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onScrollToProducts}
              className="px-8 py-3 bg-[#16362D] text-[#C6C6BC] font-sans text-[10px] tracking-widest rounded-full hover:bg-[#102620] hover:text-white border border-[#C6C6BC]/30 transition-all duration-300 uppercase cursor-pointer"
            >
              SHOP COLLECTION
            </button>
            <a
              href="https://www.hollandandholland.com/shop"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-transparent border border-[#C6C6BC]/40 text-[#C6C6BC] font-sans text-[10px] tracking-widest rounded-full hover:bg-[#16362D] hover:text-white transition-all duration-300 uppercase cursor-pointer"
            >
              EXPLORE ONLINE BOUTIQUE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
