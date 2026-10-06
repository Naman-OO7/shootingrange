import React from 'react';

interface ShootingGroundsSectionProps {
  onBookGrounds: () => void;
}

export const ShootingGroundsSection: React.FC<ShootingGroundsSectionProps> = ({ onBookGrounds }) => {
  return (
    <section id="shooting-grounds" className="bg-[#16362D] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start lg:pr-6 order-2 lg:order-1">
          <span className="text-[#C6C6BC]/80 text-[11px] font-sans tracking-[0.3em] uppercase mb-3">
            NORTHWOOD · HERTFORDSHIRE
          </span>

          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight mb-6">
            Holland & Holland Shooting Grounds
          </h2>

          <div className="space-y-4 text-[#C6C6BC]/90 font-sans text-sm md:text-base font-light leading-relaxed mb-8 max-w-xl">
            <p>
              Our Shooting Grounds and world-class instructors have proudly provided the pinnacle of sporting clay
              instruction, simulated game drives, and private tuition since 1932.
            </p>
            <p>
              Spanning sixty acres of pristine countryside just 17 miles from Mayfair, the grounds feature over 100
              clay stands, high-pheasant towers up to 130 feet, an enclosed cinema shooting range, and fine dining
              at The Lodge and Conservatory Restaurant.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-6 py-4 border-y border-[#C6C6BC]/15 w-full max-w-lg mb-8 text-center sm:text-left">
            <div>
              <div className="text-xl md:text-2xl font-serif text-white">60+</div>
              <div className="text-[10px] tracking-widest text-[#C6C6BC]/70 uppercase">Acres Parkland</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-white">100+</div>
              <div className="text-[10px] tracking-widest text-[#C6C6BC]/70 uppercase">Clay Stands</div>
            </div>
            <div>
              <div className="text-xl md:text-2xl font-serif text-white">1932</div>
              <div className="text-[10px] tracking-widest text-[#C6C6BC]/70 uppercase">Founded</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://www.hollandandholland.com/shooting-grounds"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#102620] text-[#C6C6BC] font-sans text-[10px] tracking-widest rounded-full hover:bg-black hover:text-white border border-[#C6C6BC]/30 transition-all duration-300 uppercase cursor-pointer"
            >
              DISCOVER MORE
            </a>
            <button
              onClick={onBookGrounds}
              className="px-8 py-3 bg-transparent border border-[#C6C6BC]/40 text-[#C6C6BC] font-sans text-[10px] tracking-widest rounded-full hover:bg-[#102620] hover:text-white transition-all duration-300 uppercase cursor-pointer"
            >
              BOOK TUITION
            </button>
          </div>
        </div>

        {/* Right Column: Media */}
        <div className="relative group overflow-hidden bg-[#102620] order-1 lg:order-2">
          <div className="aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=928&h=853&q=80"
              alt="Holland & Holland Shooting Grounds in Northwood"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=928&h=853&q=80&sig=3';
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-sm border border-[#C6C6BC]/20 px-3.5 py-1.5 text-[10px] tracking-widest text-[#C6C6BC] uppercase">
            Northwood, London HA6
          </div>
        </div>
      </div>
    </section>
  );
};
