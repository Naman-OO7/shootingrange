import React from 'react';
import { EVENTS, CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/mockData';
import { EventItem, Currency } from '../types';

interface EventsSectionProps {
  currency: Currency;
  onBookEvent: (event: EventItem) => void;
}

export const EventsSection: React.FC<EventsSectionProps> = ({ currency, onBookEvent }) => {
  const formatPrice = (priceGBP: number) => {
    const rate = CURRENCY_RATES[currency];
    const symbol = CURRENCY_SYMBOLS[currency];
    return `${symbol}${(priceGBP * rate).toFixed(0)}`;
  };

  return (
    <section id="events" className="bg-[#16362D] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#C6C6BC]/15 gap-4">
          <div>
            <span className="text-[#C6C6BC]/80 text-[11px] font-sans tracking-[0.3em] uppercase block mb-2">
              SPORTING CALENDAR · NORTHWOOD
            </span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
              Upcoming Shoots & Fixtures
            </h2>
          </div>
          <a
            href="https://shooting-grounds.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] tracking-widest uppercase text-[#C6C6BC] hover:text-white transition-colors underline decoration-dotted"
          >
            VIEW FULL GROUNDS CALENDAR ↗
          </a>
        </div>

        {/* 4 Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {EVENTS.map((evt) => (
            <div
              key={evt.id}
              className="bg-[#102620] border border-[#C6C6BC]/20 flex flex-col justify-between group hover:border-[#C6C6BC]/50 transition-all duration-300"
            >
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-black relative">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = evt.fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-[#16362D]/90 backdrop-blur-sm px-2 py-0.5 text-[9px] tracking-widest uppercase text-[#C6C6BC] border border-[#C6C6BC]/20">
                    {evt.spotsLeft} pegs remaining
                  </div>
                </div>

                <div className="p-5">
                  <div className="text-[10px] tracking-widest text-[#C6C6BC]/60 uppercase mb-1">
                    {evt.date} · {evt.time}
                  </div>
                  <h3 className="text-white font-serif text-xl font-light tracking-wide mb-2 line-clamp-2">
                    {evt.title}
                  </h3>
                  <div className="text-sm font-medium text-[#C6C6BC] mb-2 font-sans">
                    {formatPrice(evt.priceGBP)} <span className="text-xs font-light text-[#C6C6BC]/60">per Gun</span>
                  </div>
                  <p className="text-[#C6C6BC]/70 text-xs font-light line-clamp-3 leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => onBookEvent(evt)}
                  className="w-full py-2.5 text-[10px] tracking-widest uppercase font-sans bg-[#16362D] text-[#C6C6BC] hover:bg-[#C6C6BC] hover:text-[#102620] border border-[#C6C6BC]/30 transition-all duration-300 rounded-full cursor-pointer text-center"
                >
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
