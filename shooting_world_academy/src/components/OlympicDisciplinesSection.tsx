import React, { useState } from 'react';

interface Discipline {
  id: string;
  name: string;
  distance: number;
  environment: string;
  subtitle: string;
  description: string;
  calibre: string;
  tenRing: string;
  position: string;
  olympic: string;
  targetScale: number; // For variable depth rendering
  pelletSize: number;
}

const DISCIPLINES: Discipline[] = [
  {
    id: '10m-pistol',
    name: '10M AIR PISTOL',
    distance: 10,
    environment: 'INDOOR',
    subtitle: 'AIR PISTOL',
    description:
      "The flagship Olympic pistol event and the academy's core discipline — Zakir Khan's own speciality. Fired one-handed, standing, at a target whose 10-ring is smaller than the pellet itself. Success is decided almost entirely by trigger control and the ability to hold absolute stillness in the final second before release.",
    calibre: '4.5mm (.177)',
    tenRing: '11.5 mm',
    position: 'Standing, one hand',
    olympic: 'Yes — M & W',
    targetScale: 1.0,
    pelletSize: 6,
  },
  {
    id: '10m-rifle',
    name: '10M AIR RIFLE',
    distance: 10,
    environment: 'INDOOR',
    subtitle: 'AIR RIFLE',
    description:
      'The ultimate test of microscopic precision. Shooters wear stiffened leather and canvas suits, firing at a 10-ring that measures just 0.5 millimetres across — the size of a printed full stop. Even a heartbeat at the moment of trigger release can push a shot from a 10.9 into an 8.',
    calibre: '4.5mm (.177)',
    tenRing: '0.5 mm (dot)',
    position: 'Standing, both hands',
    olympic: 'Yes — M, W & Mixed',
    targetScale: 0.95,
    pelletSize: 5,
  },
  {
    id: '25m-pistol',
    name: '25M PISTOL',
    distance: 25,
    environment: 'OUTDOOR / SEMI-INDOOR',
    subtitle: 'RAPID FIRE & SPORT PISTOL',
    description:
      'A thrilling combination of precision and lightning reflexes. Contested with .22 calibre rimfire pistols, shooters must engage 5 turning targets in series of 8, 6, and 4 seconds. Hand-eye coordination and rapid recoil absorption are paramount.',
    calibre: '.22 LR Rimfire',
    tenRing: '50.0 mm',
    position: 'Standing, one hand',
    olympic: 'Yes — Men & Women',
    targetScale: 0.65,
    pelletSize: 8,
  },
  {
    id: '50m-pistol',
    name: '50M PISTOL',
    distance: 50,
    environment: 'OUTDOOR RANGE',
    subtitle: 'FREE PISTOL',
    description:
      'Historically revered as the purest, most uncompromising pistol discipline in competitive shooting. Fired at 50 metres with set hair-triggers measuring only grams of pull weight, out in the open air against wind and changing light.',
    calibre: '.22 LR Free Pistol',
    tenRing: '50.0 mm',
    position: 'Standing, one hand',
    olympic: 'World Championship Status',
    targetScale: 0.45,
    pelletSize: 9,
  },
  {
    id: '50m-rifle',
    name: '50M RIFLE',
    distance: 50,
    environment: 'OUTDOOR RANGE',
    subtitle: '3 POSITIONS & PRONE',
    description:
      'The marathon event of target shooting. Athletes compete across three distinct postures: kneeling, prone, and standing, firing 3x20 or 3x40 shots. Shooters must master reading wind vanes and mirage over the 50-metre trajectory.',
    calibre: '.22 LR Match',
    tenRing: '10.4 mm',
    position: '3 Positions (K, P, S)',
    olympic: 'Yes — M & W',
    targetScale: 0.4,
    pelletSize: 7,
  },
];

interface ShotHole {
  x: number;
  y: number;
  score: number;
}

export const OlympicDisciplinesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [shots, setShots] = useState<ShotHole[]>([
    { x: 0, y: 0, score: 10.8 },
    { x: 3, y: -2, score: 10.5 },
    { x: -2, y: 4, score: 10.3 },
  ]);
  const [isFiring, setIsFiring] = useState(false);
  const [lastScore, setLastScore] = useState<number | null>(10.8);

  const current = DISCIPLINES[activeTab];

  const handleSimulateShot = () => {
    setIsFiring(true);
    // Random shot offset tightly centered around bullseye
    const randomRadius = Math.random() * 22;
    const randomAngle = Math.random() * Math.PI * 2;
    const x = Math.round(Math.cos(randomAngle) * randomRadius);
    const y = Math.round(Math.sin(randomAngle) * randomRadius);
    const scoreVal = +(10.9 - randomRadius / 25).toFixed(1);

    setTimeout(() => {
      setShots((prev) => [...prev.slice(-6), { x, y, score: scoreVal }]);
      setLastScore(scoreVal);
      setIsFiring(false);
    }, 250);
  };

  const handleClearTarget = () => {
    setShots([]);
    setLastScore(null);
  };

  return (
    <section id="disciplines" className="bg-[#0b1713] py-24 md:py-32 border-b border-[#C6C6BC]/15 relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#E5A93C] text-xs font-mono tracking-[0.25em] font-semibold uppercase">
              02 — THE SPORT
            </span>
          </div>

          <h2 className="text-white font-sans text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.08] mb-4">
            OLYMPIC <span className="text-[#E5A93C]">DISCIPLINES WE TRAIN</span>
          </h2>

          <p className="text-[#C6C6BC]/80 font-sans text-sm md:text-base font-light max-w-2xl leading-relaxed">
            Shooting is contested across precision and rapid-fire events at distances of 10, 25 and 50 metres. Each
            demands a different balance of stillness, timing and nerve. Select an event below.
          </p>
        </div>

        {/* Tab Bar - Variable Depth Distance Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border border-[#C6C6BC]/20 bg-[#102620]/60 mb-8 overflow-hidden">
          {DISCIPLINES.map((disc, idx) => (
            <button
              key={disc.id}
              onClick={() => {
                setActiveTab(idx);
                setShots([{ x: 0, y: 0, score: 10.7 }]);
                setLastScore(10.7);
              }}
              className={`py-4 px-3 text-[11px] md:text-xs font-mono tracking-widest uppercase transition-all duration-300 text-center cursor-pointer border-r last:border-r-0 border-[#C6C6BC]/15 ${
                activeTab === idx
                  ? 'bg-[#E5A93C] text-[#0a1813] font-bold shadow-inner'
                  : 'text-[#C6C6BC]/70 hover:text-white hover:bg-[#16362D]'
              }`}
            >
              {disc.name}
            </button>
          ))}
        </div>

        {/* Main Interactive Variable-Depth Range Bay Container */}
        <div className="bg-[#102620] border border-[#C6C6BC]/20 p-8 md:p-12 shadow-2xl relative">
          {/* Range Distance Depth Indicator Header */}
          <div className="flex flex-wrap items-center justify-between pb-6 border-b border-[#C6C6BC]/15 gap-4 mb-8">
            <div className="flex items-baseline gap-3">
              <span className="text-6xl md:text-7xl font-sans font-black text-[#E5A93C] tracking-tight leading-none">
                {current.distance}
              </span>
              <div>
                <span className="text-sm md:text-base font-mono tracking-[0.25em] text-white font-semibold block uppercase">
                  METRES · {current.environment}
                </span>
                <span className="text-[10px] text-[#C6C6BC]/60 font-mono tracking-widest uppercase">
                  Electronic SIUS Scoring Target
                </span>
              </div>
            </div>

            {/* Depth Level Indicator */}
            <div className="flex items-center gap-3 bg-[#0a1813] px-4 py-2 border border-[#C6C6BC]/15 rounded-full text-xs font-mono">
              <span className="text-[#C6C6BC]/60 uppercase">Range Depth:</span>
              <div className="flex items-center gap-1.5">
                {[10, 25, 50].map((d) => (
                  <span
                    key={d}
                    className={`px-2 py-0.5 rounded text-[10px] ${
                      current.distance === d
                        ? 'bg-[#E5A93C] text-black font-bold'
                        : 'bg-white/5 text-[#C6C6BC]/40'
                    }`}
                  >
                    {d}M
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Discipline Details & Specs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-white font-sans text-2xl sm:text-4xl font-black uppercase tracking-tight mb-4">
                  {current.subtitle}
                </h3>

                <p className="text-[#C6C6BC]/90 font-sans text-sm md:text-base font-light leading-relaxed mb-8">
                  {current.description}
                </p>

                {/* 4-Column Spec Matrix matching Image 4 */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#0a1813] border border-[#C6C6BC]/15 mb-8">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C6C6BC]/60 block mb-1">
                      CALIBRE
                    </span>
                    <span className="text-xs md:text-sm font-sans font-semibold text-white">
                      {current.calibre}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C6C6BC]/60 block mb-1">
                      10-RING
                    </span>
                    <span className="text-xs md:text-sm font-sans font-semibold text-[#E5A93C]">
                      {current.tenRing}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C6C6BC]/60 block mb-1">
                      POSITION
                    </span>
                    <span className="text-xs md:text-sm font-sans font-semibold text-white">
                      {current.position}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-[#C6C6BC]/60 block mb-1">
                      OLYMPIC
                    </span>
                    <span className="text-xs md:text-sm font-sans font-semibold text-white">
                      {current.olympic}
                    </span>
                  </div>
                </div>
              </div>

              {/* Range Simulation Triggers */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleSimulateShot}
                  disabled={isFiring}
                  className={`px-8 py-3.5 bg-[#E5A93C] text-black font-sans text-xs font-bold tracking-widest uppercase rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2 shadow-lg ${
                    isFiring ? 'scale-95 bg-white opacity-90' : 'hover:bg-white hover:text-black'
                  }`}
                >
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-ping" />
                  <span>{isFiring ? 'FIRING SHOT...' : 'TEST FIRE TARGET'}</span>
                </button>

                <button
                  onClick={handleClearTarget}
                  className="px-6 py-3.5 bg-transparent border border-[#C6C6BC]/30 text-[#C6C6BC] hover:text-white hover:border-[#C6C6BC] text-xs font-mono tracking-wider uppercase rounded-full transition-colors cursor-pointer"
                >
                  CLEAR CARD
                </button>

                {lastScore !== null && (
                  <div className="text-xs font-mono text-[#E5A93C] flex items-center gap-1.5 ml-2">
                    <span>Last Shot:</span>
                    <span className="text-base font-bold text-white bg-black/60 px-2.5 py-1 border border-[#E5A93C]/40 rounded">
                      {lastScore} pts
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Interactive Variable Depth Target Simulator matching Image 4 */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div
                className="relative aspect-square w-full max-w-[380px] bg-[#07120e] border border-[#C6C6BC]/25 flex items-center justify-center p-6 shadow-2xl transition-transform duration-700 overflow-hidden"
                style={{
                  transform: `perspective(800px) scale(${0.85 + current.targetScale * 0.15})`,
                }}
              >
                {/* Target Concentric Rings SVG */}
                <svg
                  viewBox="-160 -160 320 320"
                  className="w-full h-full select-none"
                  style={{
                    filter: isFiring ? 'drop-shadow(0 0 12px rgba(229, 169, 60, 0.8))' : 'none',
                    transition: 'filter 0.2s',
                  }}
                >
                  {/* Outer rings 1 to 9 */}
                  {[140, 120, 100, 80, 60, 45, 32, 20].map((r, i) => (
                    <circle
                      key={r}
                      cx="0"
                      cy="0"
                      r={r}
                      fill={r <= 45 ? '#0e231c' : 'none'}
                      stroke={r <= 45 ? '#E5A93C' : '#C6C6BC'}
                      strokeWidth={r <= 20 ? '1.5' : '1'}
                      strokeOpacity={r <= 45 ? 0.7 : 0.25}
                    />
                  ))}

                  {/* 10-Ring Bullseye */}
                  <circle cx="0" cy="0" r="10" fill="#E5A93C" stroke="#fff" strokeWidth="1" />
                  <circle cx="0" cy="0" r="2.5" fill="#000" />

                  {/* Reticle / Crosshair grid lines */}
                  <line x1="-150" y1="0" x2="150" y2="0" stroke="#E5A93C" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 3" />
                  <line x1="0" y1="-150" x2="0" y2="150" stroke="#E5A93C" strokeWidth="0.75" strokeOpacity="0.4" strokeDasharray="3 3" />

                  {/* Fired Shot Holes */}
                  {shots.map((sh, idx) => (
                    <g key={idx} className="transition-all duration-300">
                      <circle
                        cx={sh.x * 2.5}
                        cy={sh.y * 2.5}
                        r={current.pelletSize}
                        fill="#1a1a1a"
                        stroke="#fff"
                        strokeWidth="1.2"
                      />
                      <circle
                        cx={sh.x * 2.5}
                        cy={sh.y * 2.5}
                        r={current.pelletSize * 0.4}
                        fill="#ff4444"
                      />
                    </g>
                  ))}
                </svg>

                {/* Subtitle bottom label */}
                <div className="absolute bottom-3 text-center text-[10px] font-mono tracking-[0.25em] text-[#C6C6BC]/50 uppercase">
                  {current.distance}M · {current.subtitle} TARGET
                </div>
              </div>

              {/* Shot Summary Telemetry */}
              <div className="mt-4 flex items-center justify-between w-full max-w-[380px] text-[11px] font-mono text-[#C6C6BC]/70 px-2">
                <span>Total Shots: {shots.length}</span>
                <span>
                  Series Avg:{' '}
                  {shots.length > 0
                    ? (shots.reduce((a, b) => a + b.score, 0) / shots.length).toFixed(1)
                    : '0.0'}
                </span>
                <span className="text-[#E5A93C]">SIUS V9.4 OK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
