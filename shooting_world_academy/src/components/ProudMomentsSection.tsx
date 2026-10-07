import React, { useState } from 'react';

export interface ProudMoment {
  id: string;
  athlete: string;
  headline: string;
  tournament: string;
  category: string;
  medals: string[];
  score?: string;
  year: string;
  description: string;
  badge: string;
  imageUrl: string;
}

const PROUD_MOMENTS: ProudMoment[] = [
  {
    id: 'pm-1',
    athlete: 'Coach Zakir Khan',
    headline: 'Selected as Indian Shooting Team Coach',
    tournament: 'Junior World Championship Suhl 2026 (Germany)',
    category: 'National Coaching Appointment',
    medals: ['Indian Team Coach Selection'],
    year: '2026',
    description:
      'Official appointment by NRAI as coach for the Indian National Shooting Team representing India at the Junior World Championships in Suhl, Germany.',
    badge: 'NATIONAL COACH',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pm-2',
    athlete: 'Niyamicka Rana',
    headline: 'Signed by Bengaluru Bullseyes in SPL Auction',
    tournament: 'School Premium League (SPL 2026)',
    category: 'Pistol Shooter Auction',
    medals: ['Auction Draft Selection'],
    year: '2026',
    description:
      'Selected in the prestigious School Premium League franchise auction by Bengaluru Bullseyes for standout performances in junior pistol circuits.',
    badge: 'FRANCHISE DRAFT',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pm-3',
    athlete: 'Arshia Chaudhary',
    headline: 'Gold & Silver Medal in 25M Standard Pistol',
    tournament: 'Jaspal Rana Memorial Cup 2026 (Dehradun)',
    category: '25m Standard Event · Senior & Junior',
    medals: ['Gold Medal', 'Silver Medal'],
    score: '574 / 600',
    year: '2026',
    description:
      'Double podium finish securing qualification for the National Shooting Championship in both Senior and Junior categories.',
    badge: 'DOUBLE PODIUM',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pm-4',
    athlete: 'Azeem',
    headline: '2 Gold, Silver & Bronze Medal Triumph',
    tournament: '49th U.P. State Shooting Championship 2026',
    category: '10m Air Pistol & 50m Free Pistol',
    medals: ['Gold (10m Team)', 'Gold (50m Team)', 'Silver (10m Indiv)', 'Bronze (50m Indiv)'],
    score: '580 / 600 (10m), 536 / 600 (50m)',
    year: '2026',
    description:
      'Outstanding quad-medal achievement at Dr. Karni Singh Shooting Range, New Delhi, anchoring the state senior men squad.',
    badge: 'QUAD MEDALIST',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pm-5',
    athlete: 'Karika Upadhyay',
    headline: 'Silver Medalist at 55th KVS National Championship',
    tournament: '55th KVS National Shooting Championship 2026',
    category: '10m Air Pistol Women',
    medals: ['Silver Medal'],
    score: '568 / 600',
    year: '2026',
    description:
      'Stellar performance securing the national silver medal representing Kendriya Vidyalaya Sangathan on the national stage.',
    badge: 'NATIONAL SILVER',
    imageUrl:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pm-6',
    athlete: 'Niyamicka Rana',
    headline: 'Individual Gold Medal in Under-17 Category',
    tournament: 'CBSE Central Zone Shooting Championship 2026',
    category: 'Women Individual U-17',
    medals: ['Gold Medal (Individual)'],
    score: '382 / 400',
    year: '2026',
    description:
      'Champion finish in the CBSE Central Zone Inter-School Tournament, asserting dominant precision shooting in the youth category.',
    badge: 'ZONE CHAMPION',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pm-7',
    athlete: 'Arshia Chaudhary',
    headline: 'Treble Gold & Silver Sweep at 41st Delhi State',
    tournament: '41st Delhi State Shooting Championship 2026',
    category: 'Youth & Junior Women 25m & 10m',
    medals: ['Gold (Youth Indiv)', 'Gold (Junior Indiv)', 'Silver (Standard)'],
    score: 'Top State Rank',
    year: '2026',
    description:
      'Clean sweep across individual and team events in her maiden year of competitive 25m sport pistol shooting.',
    badge: 'STATE CHAMPION',
    imageUrl:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pm-8',
    athlete: 'Karika Upadhyay',
    headline: 'Gold Team & Bronze Individual Medalist',
    tournament: '49th U.P. State Shooting Championship 2026',
    category: '10m Air Pistol Girls (Sub-Youth)',
    medals: ['Gold (Team)', 'Bronze (Individual)'],
    score: '565 / 600',
    year: '2026',
    description:
      'Double podium finish in the sub-youth division, cementing her standing as one of the state brightest emerging prospects.',
    badge: 'STATE PODIUM',
    imageUrl:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=800&q=80',
  },
];

export const ProudMomentsSection: React.FC = () => {
  const [selectedMoment, setSelectedMoment] = useState<ProudMoment | null>(null);

  return (
    <section id="proud-moments" className="bg-[#0e211b] py-24 md:py-32 border-b border-[#C6C6BC]/15 relative">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header matching Image 5 */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#E5A93C] text-xs font-mono tracking-[0.25em] font-semibold uppercase">
              03 — THE ATHLETES
            </span>
          </div>

          <h2 className="text-white font-sans text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] mb-4">
            PROUD <span className="text-[#E5A93C]">MOMENTS</span>
          </h2>

          <p className="text-[#C6C6BC]/80 font-sans text-sm md:text-base font-light max-w-2xl leading-relaxed">
            Medals, podiums and milestones earned by the shooters of Champion Shooting Academy across state,
            national and international competition. Tap any card to view it in full.
          </p>
        </div>

        {/* 8 Achievement Poster Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROUD_MOMENTS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedMoment(item)}
              className="bg-[#102620] border border-[#C6C6BC]/20 hover:border-[#E5A93C]/60 flex flex-col justify-between overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            >
              {/* Poster Visual Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-black">
                <img
                  src={item.imageUrl}
                  alt={item.athlete}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />

                {/* Poster Graphic Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1813] via-[#0a1813]/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 bg-[#E5A93C] text-black text-[9px] font-sans font-bold tracking-widest uppercase px-2.5 py-0.5 shadow-md">
                  {item.badge}
                </div>

                {/* Year Tag */}
                <div className="absolute top-3 right-3 text-[10px] font-mono font-semibold text-white/80 bg-black/60 px-2 py-0.5 rounded">
                  {item.year}
                </div>

                {/* Athlete Name & Tournament Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="text-[10px] font-mono tracking-wider text-[#E5A93C] uppercase mb-1">
                    {item.tournament}
                  </div>
                  <h3 className="text-white font-sans text-xl font-black uppercase tracking-tight leading-snug drop-shadow">
                    {item.athlete}
                  </h3>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col grow justify-between bg-[#0e211b]">
                <div>
                  <h4 className="text-sm font-sans font-bold text-white mb-2 leading-snug line-clamp-2">
                    {item.headline}
                  </h4>
                  <p className="text-[#C6C6BC]/70 text-xs font-light leading-relaxed line-clamp-2 mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Medals Pills */}
                <div className="pt-3 border-t border-[#C6C6BC]/15 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {item.medals.map((m, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-mono font-semibold text-[#E5A93C] bg-[#16362D] px-2 py-0.5 border border-[#E5A93C]/30 rounded"
                      >
                        🏅 {m}
                      </span>
                    ))}
                  </div>
                  <span className="text-[11px] text-[#C6C6BC]/60 group-hover:text-white font-mono transition-colors">
                    VIEW ↗
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tap-to-View Full Achievement Poster Modal */}
      {selectedMoment && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
        >
          <div className="bg-[#102620] border border-[#E5A93C]/50 text-[#C6C6BC] w-full max-w-2xl relative shadow-2xl my-8 overflow-hidden">
            <button
              onClick={() => setSelectedMoment(null)}
              aria-label="Close achievement"
              className="absolute top-4 right-4 z-20 text-white bg-black/70 hover:bg-black p-2 text-xl cursor-pointer"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-5 relative aspect-square md:aspect-auto bg-black">
                <img
                  src={selectedMoment.imageUrl}
                  alt={selectedMoment.athlete}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#102620] via-transparent to-transparent md:hidden" />
              </div>

              <div className="md:col-span-7 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-[#E5A93C] text-black text-[9px] font-bold tracking-widest px-2.5 py-0.5 uppercase">
                      {selectedMoment.badge}
                    </span>
                    <span className="text-xs font-mono text-[#C6C6BC]/70">{selectedMoment.year}</span>
                  </div>

                  <h3 className="font-sans text-3xl font-black text-white uppercase tracking-tight mb-2">
                    {selectedMoment.athlete}
                  </h3>

                  <div className="text-xs font-mono text-[#E5A93C] uppercase tracking-wider mb-4">
                    {selectedMoment.tournament}
                  </div>

                  <div className="p-3 bg-[#0a1813] border border-[#C6C6BC]/15 mb-4 text-xs">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#C6C6BC]/60">Event Category:</span>
                      <span className="text-white font-medium">{selectedMoment.category}</span>
                    </div>
                    {selectedMoment.score && (
                      <div className="flex justify-between">
                        <span className="text-[#C6C6BC]/60">Match Score:</span>
                        <span className="text-[#E5A93C] font-mono font-bold">{selectedMoment.score}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-xs md:text-sm text-[#C6C6BC]/90 font-light leading-relaxed mb-6">
                    {selectedMoment.description}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[10px] font-mono tracking-widest text-[#C6C6BC]/60 uppercase block">
                      HONORS ACHIEVED:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMoment.medals.map((m, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-mono text-white bg-[#16362D] border border-[#E5A93C]/40 px-3 py-1 rounded"
                        >
                          🥇 {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#C6C6BC]/15 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-[#C6C6BC]/50 uppercase">
                    Champion Shooting Academy · Official Record
                  </span>
                  <button
                    onClick={() => setSelectedMoment(null)}
                    className="px-6 py-2 bg-[#E5A93C] text-black text-xs font-bold uppercase rounded-full hover:bg-white transition-colors cursor-pointer"
                  >
                    CLOSE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
