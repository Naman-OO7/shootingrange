import React, { useState } from 'react';
import { GUNROOM_LOCATIONS } from '../data/mockData';
import { GunroomLocation } from '../types';

interface LocationsSectionProps {
  onBookAppointment: (loc: GunroomLocation) => void;
}

export const LocationsSection: React.FC<LocationsSectionProps> = ({ onBookAppointment }) => {
  const [selectedLoc, setSelectedLoc] = useState<GunroomLocation | null>(null);

  return (
    <section id="locations" className="bg-[#16362D] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#C6C6BC]/80 text-[11px] font-sans tracking-[0.3em] uppercase block mb-3">
            INTERNATIONAL PRESENCE
          </span>
          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-4">
            Locations
          </h2>
          <p className="text-[#C6C6BC]/80 font-sans text-sm font-light">
            Visit our prestigious gunrooms in London and Dallas, or experience our world-famous
            Northwood shooting grounds. Private appointments and gun fittings available upon request.
          </p>
        </div>

        {/* 3 Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GUNROOM_LOCATIONS.map((loc) => (
            <div
              key={loc.id}
              className="bg-[#102620] border border-[#C6C6BC]/20 flex flex-col justify-between overflow-hidden group hover:border-[#C6C6BC]/50 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden bg-black">
                <img
                  src={loc.image}
                  alt={loc.name}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = loc.fallbackImage;
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm px-2.5 py-1 text-[9px] tracking-widest uppercase text-[#C6C6BC]">
                  {loc.city}, {loc.country}
                </div>
              </div>

              {/* Body */}
              <div className="p-6 md:p-8 flex flex-col grow justify-between">
                <div>
                  <h3 className="text-white font-serif text-2xl font-light tracking-wide mb-2">
                    {loc.name}
                  </h3>
                  <p className="text-[#C6C6BC]/75 text-xs font-light leading-relaxed mb-4">
                    {loc.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-[#C6C6BC]/90 font-light border-t border-[#C6C6BC]/10 pt-4 mb-6">
                    <div className="flex items-start gap-2">
                      <span className="text-[#C6C6BC]/50 shrink-0">Address:</span>
                      <span>{loc.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#C6C6BC]/50 shrink-0">Tel:</span>
                      <a href={`tel:${loc.phone}`} className="hover:text-white underline decoration-dotted">
                        {loc.phone}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#C6C6BC]/50 shrink-0">Hours:</span>
                      <span>{loc.hours}</span>
                    </div>
                  </div>

                  {/* Amenities features */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {loc.features.map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#16362D] text-[#C6C6BC]/80 px-2 py-0.5 border border-[#C6C6BC]/10"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-4 border-t border-[#C6C6BC]/10">
                  <a
                    href={loc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 text-center text-[10px] tracking-widest uppercase font-sans bg-[#16362D] text-[#C6C6BC] hover:bg-[#C6C6BC] hover:text-[#102620] transition-colors rounded-full border border-[#C6C6BC]/20 cursor-pointer"
                  >
                    GUNROOM GUIDE
                  </a>
                  <button
                    onClick={() => onBookAppointment(loc)}
                    className="flex-1 py-2.5 text-center text-[10px] tracking-widest uppercase font-sans bg-transparent text-[#C6C6BC] hover:bg-[#16362D] hover:text-white transition-colors rounded-full border border-[#C6C6BC]/40 cursor-pointer"
                  >
                    APPOINTMENT
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
