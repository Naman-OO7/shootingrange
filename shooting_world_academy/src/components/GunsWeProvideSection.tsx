import React from 'react';

interface GunsWeProvideSectionProps {
  onBespokeInquiry?: () => void;
  onExploreArsenal?: () => void;
}

export const GunsWeProvideSection: React.FC<GunsWeProvideSectionProps> = ({
  onBespokeInquiry,
  onExploreArsenal,
}) => {
  return (
    <section id="guns-we-provide" className="bg-[#102620] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column: Competition Target Rifles & Match Pistols Media */}
        <div className="relative group overflow-hidden bg-[#16362D]">
          <div className="aspect-[4/3] md:aspect-[5/4] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1200&q=80"
              alt="Olympic Match Air Rifles and Target Pistols Provided by Champion Shooting Academy"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src =
                  'https://images.unsplash.com/photo-1584281722573-b248a3c8cb69?auto=format&fit=crop&w=1200&q=80';
              }}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Corner Hallmark Badge */}
          <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm border border-[#E5A93C]/40 px-3.5 py-1.5 text-[10px] tracking-widest text-[#E5A93C] uppercase font-mono shadow-md">
            ISSF CERTIFIED · OLYMPIC ARMORY
          </div>
        </div>

        {/* Right Column: Indian Preference Arsenal Narrative */}
        <div className="flex flex-col items-start lg:pl-6">
          <span className="text-[#E5A93C] text-[11px] font-sans tracking-[0.3em] uppercase mb-3 font-semibold">
            PRECISION ARSENAL · OLYMPIC EQUIPMENT
          </span>

          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide leading-tight mb-6">
            The Guns We Provide
          </h2>

          <div className="space-y-4 text-[#C6C6BC]/90 font-sans text-sm md:text-base font-light leading-relaxed mb-6 max-w-xl">
            <p>
              At Champion Shooting Academy, athletes train with the exact Olympic-grade weapons favored by
              India’s national squad and international champions. We provide world-acclaimed match air rifles
              and precision target pistols from{' '}
              <strong className="text-white font-semibold">
                Walther, Feinwerkbau, Steyr, Pardini, and Morini
              </strong>.
            </p>
            <p>
              Every weapon in our armory is calibrated to stringent competition tolerances — featuring
              micro-adjustable electronic and mechanical two-stage triggers, custom anatomic walnut grips
              shaped to the shooter’s hand, carbon-fiber compressed air cylinders, and batch-matched RWS R10 and
              JSB match pellets tested in our electronic shooting tunnel.
            </p>
            <p>
              Whether an athlete is preparing for District, State, All India GV Mavalankar, or the National
              Shooting Championship, we eliminate mechanical variance so raw discipline and muscle memory
              decide the medal.
            </p>
          </div>

          {/* Weapons Spec Badges */}
          <div className="flex flex-wrap gap-2 mb-8 max-w-xl">
            {[
              'Walther LG400 Anatomic 10M Rifle',
              'Feinwerkbau 800X Match Series',
              'Steyr EVO 10 / EVO 10E Electronic Pistol',
              'Pardini SP .22 LR 25M Sport Pistol',
              'Morini CM 162EI Titanium Air Pistol',
              'Scatt MX-W2 Optical Training Sensors',
            ].map((weapon, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono bg-[#16362D] text-[#C6C6BC] px-2.5 py-1 border border-[#C6C6BC]/20 rounded"
              >
                ✓ {weapon}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                if (onExploreArsenal) onExploreArsenal();
                else {
                  const el = document.getElementById('disciplines');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-[#E5A93C] text-black font-sans text-[10px] font-bold tracking-widest rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase cursor-pointer shadow-lg"
            >
              EXPLORE ARSENAL SPECS
            </button>
            <button
              onClick={() => {
                if (onBespokeInquiry) onBespokeInquiry();
                else {
                  const el = document.getElementById('disciplines');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-3 bg-transparent border border-[#C6C6BC]/40 text-[#C6C6BC] font-sans text-[10px] tracking-widest rounded-full hover:bg-[#16362D] hover:text-white transition-all duration-300 uppercase cursor-pointer"
            >
              REQUEST WEAPON ALLOCATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
