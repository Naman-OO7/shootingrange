import React, { useState, useRef, useEffect } from 'react';

interface HeroProps {
  onDiscoverClick: () => void;
}

interface VideoStream {
  id: string;
  label: string;
  webmSrc: string;
  fallbackSrc: string;
  poster: string;
}

const RANGE_STREAMS: VideoStream[] = [
  {
    id: 'lone-star',
    label: 'Live Range · Firing Line 1',
    webmSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/7/72/Man_firing_an_AR-15_semi-automatic_riffle_at_Lone_Star_Gun_Range_in_Lockhart%2C_Texas_%28IMG_4574%29.webm/Man_firing_an_AR-15_semi-automatic_riffle_at_Lone_Star_Gun_Range_in_Lockhart%2C_Texas_%28IMG_4574%29.webm.480p.vp9.webm',
    fallbackSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/7/72/Man_firing_an_AR-15_semi-automatic_riffle_at_Lone_Star_Gun_Range_in_Lockhart%2C_Texas_%28IMG_4574%29.webm/Man_firing_an_AR-15_semi-automatic_riffle_at_Lone_Star_Gun_Range_in_Lockhart%2C_Texas_%28IMG_4574%29.webm.360p.mpeg4.mov',
    poster:
      'https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'target-line',
    label: 'Live Range · Target Line 2',
    webmSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/U.S._Marines_and_Singapore_Armed_Forces_Rifle_and_Machine_Gun_Range_%28B-Roll%29.ogv/U.S._Marines_and_Singapore_Armed_Forces_Rifle_and_Machine_Gun_Range_%28B-Roll%29.ogv.480p.vp9.webm',
    fallbackSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/4/43/U.S._Marines_and_Singapore_Armed_Forces_Rifle_and_Machine_Gun_Range_%28B-Roll%29.ogv/U.S._Marines_and_Singapore_Armed_Forces_Rifle_and_Machine_Gun_Range_%28B-Roll%29.ogv.360p.mpeg4.mov',
    poster:
      'https://images.unsplash.com/photo-1584281722573-b248a3c8cb69?auto=format&fit=crop&w=1920&q=80',
  },
  {
    id: 'tactical-range',
    label: 'Live Range · Tactical Point 3',
    webmSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Gun_shooting_NRA.webm/Gun_shooting_NRA.webm.480p.vp9.webm',
    fallbackSrc:
      'https://upload.wikimedia.org/wikipedia/commons/transcoded/f/f1/Gun_shooting_NRA.webm/Gun_shooting_NRA.webm.360p.mpeg4.mov',
    poster:
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1920&q=80',
  },
];

export const Hero: React.FC<HeroProps> = ({ onDiscoverClick }) => {
  const [selectedStreamIndex, setSelectedStreamIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentStream = RANGE_STREAMS[selectedStreamIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay policy fallback: ensure muted and retry
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => {});
          }
        });
    }
  }, [selectedStreamIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-black flex items-end justify-center pb-20 md:pb-28 text-center select-none"
      aria-label="Hero Shooting Range Showcase"
    >
      {/* Background Video Moving in Loop with Fallback & Vignettes */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          ref={videoRef}
          key={currentStream.id}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={currentStream.poster}
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-80'
          }`}
        >
          <source src={currentStream.webmSrc} type="video/webm" />
          <source src={currentStream.fallbackSrc} type="video/mp4" />
          {/* Fallback image if video element not supported */}
          <img
            src={currentStream.poster}
            alt="Holland & Holland Outdoor Shooting Range"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Layer: Vignette Gradient Overlays for High-Contrast Luxury Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/90 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102620] via-transparent to-transparent opacity-95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] pointer-events-none" />
      </div>

      {/* Video Control & Range Cam Switcher Overlay (Top Right / Bottom Right) */}
      <div className="absolute top-28 right-6 md:right-12 z-20 flex flex-col items-end gap-2 text-xs">
        {/* Live Status Badge */}
        <div className="bg-black/60 backdrop-blur-md border border-[#C6C6BC]/25 px-3 py-1.5 rounded-full flex items-center gap-2 text-[#C6C6BC] text-[10px] tracking-widest uppercase">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span>{currentStream.label}</span>
        </div>

        {/* Quick Stream Angle Switcher & Playback Controls */}
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-[#C6C6BC]/20 p-1 rounded-full text-[10px]">
          {RANGE_STREAMS.map((stream, idx) => (
            <button
              key={stream.id}
              onClick={() => setSelectedStreamIndex(idx)}
              className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer uppercase ${
                selectedStreamIndex === idx
                  ? 'bg-[#16362D] text-white font-semibold'
                  : 'text-[#C6C6BC]/70 hover:text-white'
              }`}
              title={stream.label}
            >
              Cam {idx + 1}
            </button>
          ))}
          <span className="text-[#C6C6BC]/30 mx-0.5">|</span>
          <button
            onClick={togglePlay}
            className="p-1.5 text-[#C6C6BC] hover:text-white transition-colors cursor-pointer"
            title={isPlaying ? 'Pause video' : 'Play video'}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button
            onClick={toggleMute}
            className="p-1.5 text-[#C6C6BC] hover:text-white transition-colors cursor-pointer"
            title={isMuted ? 'Unmute video' : 'Mute video'}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
      </div>

      {/* Hero Content Box - Exact Texts Preserved */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        <span className="text-[#C6C6BC] text-[11px] md:text-xs font-sans tracking-[0.3em] uppercase mb-4 opacity-90 drop-shadow">
          THE HALLMARK OF FINE BRITISH GUNMAKING
        </span>

        <h1 className="text-white font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wide leading-tight md:leading-[1.15] mb-8 max-w-3xl drop-shadow-lg">
          Perfecting the art of shooting since 1835.
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onDiscoverClick}
            className="px-10 py-3.5 bg-[#16362D] text-[#C6C6BC] font-sans text-[11px] tracking-[0.25em] uppercase rounded-full hover:bg-[#102620] hover:text-white hover:border-[#C6C6BC]/40 border border-transparent transition-all duration-300 shadow-xl cursor-pointer"
          >
            DISCOVER
          </button>
          <a
            href="https://www.hollandandholland.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 bg-black/40 backdrop-blur-sm text-[#C6C6BC] font-sans text-[11px] tracking-[0.25em] uppercase rounded-full hover:bg-black/70 hover:text-white border border-[#C6C6BC]/30 transition-all duration-300 cursor-pointer"
          >
            EXPLORE ARCHIVES
          </a>
        </div>

        {/* Subtle scroll down indicator */}
        <div className="mt-12 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
          <span className="text-[10px] tracking-widest text-[#C6C6BC] uppercase mb-1">SCROLL</span>
          <div className="w-[1px] h-8 bg-[#C6C6BC]/40 relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#C6C6BC] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
