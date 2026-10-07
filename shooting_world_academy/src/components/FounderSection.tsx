import React, { useState } from 'react';

interface FounderSectionProps {
  onBookSession?: () => void;
  onExploreHistory?: () => void;
}

export const FounderSection: React.FC<FounderSectionProps> = ({
  onBookSession,
  onExploreHistory,
}) => {
  return (
    <section id="founder" className="bg-[#0e211b] py-24 md:py-32 border-b border-[#C6C6BC]/15 relative overflow-hidden">
      {/* Subtle background ambient aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E5A93C]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#16362D]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Founder Hero Card with Athlete Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[440px] bg-[#102620] border border-[#C6C6BC]/25 overflow-hidden shadow-2xl group">
              {/* Top Red Badge */}
              <div className="absolute top-4 left-4 z-20 bg-[#D32F2F] text-white text-[10px] font-sans font-bold tracking-[0.2em] uppercase px-3 py-1 shadow-md">
                FOUNDER
              </div>

              {/* Poster Image: Indian Sportsman in White/Blue Athletic Jersey */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#0d1c16]">
                <img
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
                  alt="Sachin Shrivastav - International Shooter and Head Coach"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src =
                      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80';
                  }}
                  className="w-full h-full object-cover object-top contrast-105 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1813] via-[#0a1813]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E5A93C]/10 to-[#138808]/20 mix-blend-overlay pointer-events-none" />

                {/* Team India Emblem & Walther Crest Badge */}
                <div className="absolute top-16 right-4 flex flex-col items-center gap-2 opacity-90">
                  <div className="w-12 h-12 rounded-full border border-white/30 bg-black/50 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-white tracking-widest text-center shadow-lg">
                    🇮🇳
                  </div>
                  <span className="text-[9px] tracking-widest text-[#E5A93C] font-semibold bg-black/60 px-2 py-0.5 rounded">
                    TEAM INDIA
                  </span>
                </div>

                {/* Lower Quote & Name Tag */}
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-3xl font-serif text-[#E5A93C] leading-none">“</span>
                    <p className="text-[11px] font-sans font-medium tracking-wider text-white/95 uppercase leading-tight">
                      AIMING HIGH. WORKING HARD. SHOOTING FOR INDIA.
                    </p>
                  </div>

                  <div className="border-t border-white/20 pt-3">
                    <h3 className="font-sans text-2xl font-black tracking-wide text-[#E5A93C] uppercase">
                      SACHIN SHRIVASTAV
                    </h3>
                    <p className="text-[10px] font-sans tracking-[0.22em] text-[#C6C6BC] uppercase mt-0.5">
                      INTERNATIONAL SHOOTER · HEAD COACH
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Tricolor Status Line */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]" />
            </div>
          </div>

          {/* Right Column: Founder Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#E5A93C] text-xs font-mono tracking-[0.25em] font-semibold uppercase">
                01 — THE FOUNDER
              </span>
            </div>

            {/* Display Headline */}
            <h2 className="text-white font-sans text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] mb-6">
              FROM BORROWED PISTOLS TO{' '}
              <span className="text-[#E5A93C] drop-shadow-sm">BUILDING A RANGE</span>
            </h2>

            {/* Prose */}
            <div className="space-y-4 text-[#C6C6BC]/90 font-sans text-sm md:text-base font-light leading-relaxed mb-6">
              <p>
                Sachin Shrivastav grew up in a middle-class family in{' '}
                <strong className="text-white font-semibold">Shahjahanpur, Meerut</strong>, the son of a generator
                mechanic. His love for the sport began at his grandmother's home in{' '}
                <strong className="text-white font-semibold">Johri village, Baghpat</strong> — the legendary village
                that has given India some of its finest international shooters.
              </p>

              <p>
                He did not own a pistol until 2006. He competed at the{' '}
                <strong className="text-white font-semibold">World Shooting Championships in Zagreb</strong> with a
                borrowed weapon — and returned with a{' '}
                <strong className="text-[#E5A93C] font-semibold">bronze medal</strong> in the 10m air pistol team
                event. Over the next four years he added Commonwealth gold, Asian Championship bronze, and a
                Hungarian Open title to his name.
              </p>
            </div>

            {/* Highlighted Callout Quote Block */}
            <div className="border-l-4 border-[#E5A93C] bg-[#16362D]/60 p-5 md:p-6 mb-6 w-full">
              <p className="font-sans text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide text-white leading-snug">
                "I WANTED TO SHARE MY EXPERIENCE WITH THE{' '}
                <span className="text-[#E5A93C]">FUTURE OF OUR COUNTRY</span> — WITH PROPER GUIDANCE FROM THE VERY
                BEGINNING."
              </p>
              <span className="block mt-2.5 text-[10px] md:text-xs font-mono tracking-widest text-[#C6C6BC]/80 uppercase">
                — SACHIN SHRIVASTAV, ON WHY HE BUILT THE ACADEMY
              </span>
            </div>

            {/* Paragraph 3 */}
            <p className="text-[#C6C6BC]/90 font-sans text-sm md:text-base font-light leading-relaxed mb-6">
              Today he runs Champion Shooting Academy in Delhi with international-grade weapons, official SIUS
              target cards, and competition-standard match pellets — the world-class infrastructure he never had
              access to as a young athlete. In 2026 he was{' '}
              <strong className="text-white font-semibold">
                selected as a coach for the Indian Shooting Team
              </strong>{' '}
              at the Junior World Championship in Suhl, Germany, and his students now medal regularly at state,
              national, and international championships.
            </p>

            {/* Footnote Source */}
            <p className="text-[11px] font-mono text-[#C6C6BC]/50 italic mb-8 border-b border-[#C6C6BC]/15 pb-4 w-full">
              Biography sourced from Sachin Shrivastav's interview with Sportsmatik, July 2018.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (onBookSession) onBookSession();
                  else {
                    const el = document.getElementById('disciplines');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3.5 bg-[#E5A93C] text-[#0a1813] font-sans text-[11px] font-bold tracking-[0.2em] rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase shadow-lg cursor-pointer"
              >
                TRAIN WITH COACH SACHIN
              </button>
              <button
                onClick={() => {
                  if (onExploreHistory) onExploreHistory();
                  else {
                    const el = document.getElementById('guns-we-provide');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="px-8 py-3.5 bg-transparent border border-[#C6C6BC]/40 text-[#C6C6BC] font-sans text-[11px] tracking-[0.2em] rounded-full hover:bg-[#16362D] hover:text-white transition-all duration-300 uppercase cursor-pointer"
              >
                EXPLORE ACADEMY STORY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
