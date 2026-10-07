import React, { useState, useEffect, useRef } from 'react';

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  quote: string;
  avatarUrl: string;
  actionImageUrl: string;
  rating: number;
  discipline: string;
  medals: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Dhanush Srikanth',
    title: 'Deaflympic Gold Medalist · 10m Air Rifle',
    quote:
      'I want to thank my coaches and mentors for helping in achieving this stage. Without their correct technical guidance on trigger control and mental stillness, standing on the international podium would not have been possible.',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '10m Air Rifle',
    medals: 'Deaflympics Gold',
  },
  {
    id: 't-2',
    name: 'Elavenil Valarivan',
    title: 'Arjuna Awardee & Olympian · World No. 1',
    quote:
      'I am really thrilled with this achievement and want to thank my coaches, my mental conditioning trainer, and the range staff who prepared every pellet and lane to perfection during our rigorous championship camps.',
    avatarUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '10m Air Rifle',
    medals: 'ISSF World Cup Gold',
  },
  {
    id: 't-3',
    name: 'Manu Bhaker',
    title: 'Double Olympic Medalist · Commonwealth Gold',
    quote:
      'The precision standards, SIUS electronic targets, and psychological pressure simulation here replicate the finals hall in Paris and Cairo. It builds an iron mindset before you even step on the firing line.',
    avatarUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '10m & 25m Pistol',
    medals: 'Olympic Bronze & Gold',
  },
  {
    id: 't-4',
    name: 'Rudrankksh Patil',
    title: 'World Champion · ISSF President’s Cup Gold',
    quote:
      'At 10 metres, microscopic errors in barrel cant or heart rate rhythm ruin a shot. The coaching breakdown here transforms raw dedication into scientific consistency. Best indoor range facilities in the country.',
    avatarUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '10m Air Rifle',
    medals: 'World Championship Gold',
  },
  {
    id: 't-5',
    name: 'Tilottama Sen',
    title: 'World Championship Bronze · Asian Champion',
    quote:
      'I began training here at age twelve with basic equipment. The personalized try-gun fitting, scatt sensor analysis, and senior mentorship gave me the foundation to represent India and medal in Cairo.',
    avatarUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '10m Air Rifle Women',
    medals: 'World Championship Bronze',
  },
  {
    id: 't-6',
    name: 'Sarabjot Singh',
    title: 'Asian Games Gold Medalist · Olympian',
    quote:
      'The quiet discipline and technical rigor taught by Coach Zakir and the team instill supreme self-belief. When you need that 10.5 in the sudden-death shoot-off, muscle memory and breath control take over.',
    avatarUrl:
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '10m Air Pistol Men',
    medals: 'Asian Games Gold',
  },
  {
    id: 't-7',
    name: 'Rhythm Sangwan',
    title: 'World Record Holder · Asian Championship Gold',
    quote:
      'Competing across both 10m Air Pistol and 25m Rapid Fire demands continuous transitions. The academy range infrastructure with turning targets and match-grade ammunition gave me the winning edge.',
    avatarUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '25m Pistol & 10m Pistol',
    medals: 'World Cup Gold',
  },
  {
    id: 't-8',
    name: 'Mehuli Ghosh',
    title: 'Youth Olympic Silver · World Cup Gold Medalist',
    quote:
      'Every young shooter deserves an environment where dreams are met with world-standard weapons, unbiased coaching, and unconditional encouragement. That is exactly what this academy delivers every single day.',
    avatarUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '10m Air Rifle',
    medals: 'World Championship Bronze',
  },
  {
    id: 't-9',
    name: 'Aishwary Pratap Singh Tomar',
    title: 'Asian Games Multi-Gold Medalist · 50m 3P Specialist',
    quote:
      'Long-distance 50m rifle demands mastering wind, pulse, and ammunition lot matching. The academy coaching staff provides technical guidance that rivals European national centers.',
    avatarUrl:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    actionImageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    rating: 5,
    discipline: '50m Rifle 3 Positions',
    medals: 'Asian Games Triple Gold',
  },
];

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalCards = TESTIMONIALS.length;

  // Auto-movement of carousel every 4.5 seconds
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalCards);
      }, 4500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, totalCards]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
  };

  return (
    <section
      id="reviews"
      className="bg-[#0b1713] py-24 md:py-32 border-b border-[#C6C6BC]/15 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header matching Image 7 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#C6C6BC]/15 gap-6">
          <div>
            <h2 className="text-white font-sans text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-3">
              REAL <span className="text-[#E5A93C]">STORIES</span>
            </h2>
            <p className="text-[#C6C6BC]/90 font-sans text-base sm:text-lg font-light tracking-wide">
              Check out our Testimonials from National Athletes & Champions
            </p>
          </div>

          {/* Carousel Navigation Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-12 h-12 rounded-full border border-[#C6C6BC]/30 bg-[#102620] hover:bg-[#E5A93C] hover:text-black hover:border-[#E5A93C] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-12 h-12 rounded-full border border-[#C6C6BC]/30 bg-[#102620] hover:bg-[#E5A93C] hover:text-black hover:border-[#E5A93C] text-white flex items-center justify-center transition-all duration-300 cursor-pointer shadow-md"
            >
              →
            </button>
            <span className="text-xs font-mono text-[#E5A93C] ml-2">
              {currentIndex + 1} / {totalCards}
            </span>
          </div>
        </div>

        {/* Carousel Moving Track Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="w-full shrink-0"
              >
                <div className="bg-[#102620] border border-[#C6C6BC]/20 hover:border-[#E5A93C]/50 rounded-2xl p-6 md:p-10 shadow-2xl transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left: Athlete Photo with Target / Medal Backdrop */}
                    <div className="lg:col-span-5 relative">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden bg-black relative shadow-lg">
                        <img
                          src={item.actionImageUrl}
                          alt={item.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = item.avatarUrl;
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                        {/* Medal Honor Ribbon Badge */}
                        <div className="absolute top-4 left-4 bg-[#E5A93C] text-black font-sans font-bold text-[10px] tracking-widest uppercase px-3 py-1 rounded shadow">
                          🏅 {item.medals}
                        </div>

                        {/* Circular Avatar Inset matching Image 7 */}
                        <div className="absolute -bottom-2 right-4 w-16 h-16 rounded-full border-2 border-[#E5A93C] overflow-hidden shadow-2xl bg-black">
                          <img
                            src={item.avatarUrl}
                            alt={`${item.name} portrait`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Right: Testimonial Quote & Athlete Attribution matching Image 7 */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                      <div>
                        {/* Rating stars */}
                        <div className="flex items-center gap-1 text-[#E5A93C] text-sm mb-4">
                          {'★'.repeat(item.rating)}
                          <span className="text-xs font-mono text-[#C6C6BC]/60 ml-2">
                            {item.discipline}
                          </span>
                        </div>

                        {/* Quote Text in Quotes */}
                        <blockquote className="text-white font-sans text-lg sm:text-xl md:text-2xl font-light italic leading-relaxed mb-6">
                          "{item.quote}"
                        </blockquote>
                      </div>

                      {/* Name and Achievements */}
                      <div className="border-t border-[#C6C6BC]/15 pt-4">
                        <h3 className="font-sans text-xl md:text-2xl font-bold text-white tracking-wide">
                          {item.name}
                        </h3>
                        <p className="text-xs md:text-sm font-mono text-[#E5A93C] mt-1">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Pagination Dots */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === dotIdx
                  ? 'w-8 bg-[#E5A93C]'
                  : 'w-2 bg-[#C6C6BC]/30 hover:bg-[#C6C6BC]/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
