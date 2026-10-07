import React from 'react';
import { BrandLogoSVG } from './Icons';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenNewsletter: () => void;
  onOpenConsultation: () => void;
  onScrollToSection: (id: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onOpenNewsletter,
  onOpenConsultation,
  onScrollToSection,
}) => {
  if (!isOpen) return null;

  const handleNav = (sectionId: string) => {
    onClose();
    onScrollToSection(sectionId);
  };

  return (
    <div
      role="navigation"
      aria-label="Main Navigation Drawer"
      className="fixed inset-0 z-[90] bg-black/85 backdrop-blur-md flex transition-opacity duration-300"
    >
      <div className="w-full max-w-xl bg-[#102620] h-full overflow-y-auto border-r border-[#C6C6BC]/20 p-8 md:p-12 flex flex-col justify-between text-[#C6C6BC]">
        {/* Top Header in Drawer */}
        <div>
          <div className="flex items-center justify-between pb-8 border-b border-[#C6C6BC]/15">
            <BrandLogoSVG className="h-[28px] w-[110px]" color="#C6C6BC" />
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="text-[#C6C6BC] hover:text-white p-2 text-xl font-light cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <div className="py-8 space-y-6">
            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#E5A93C] uppercase block mb-1">
                01 — THE FOUNDER
              </span>
              <button
                onClick={() => handleNav('founder')}
                className="font-sans font-bold text-2xl md:text-3xl text-white hover:text-[#E5A93C] transition-colors block text-left cursor-pointer uppercase tracking-tight"
              >
                Coach Sachin Shrivastav
              </button>
              <div className="mt-1 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>International Shooter</span>
                <span>·</span>
                <span>National Coach</span>
                <span>·</span>
                <span>Academy Story</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#E5A93C] uppercase block mb-1">
                02 — THE ARSENAL
              </span>
              <button
                onClick={() => handleNav('guns-we-provide')}
                className="font-sans font-bold text-2xl md:text-3xl text-white hover:text-[#E5A93C] transition-colors block text-left cursor-pointer uppercase tracking-tight"
              >
                The Guns We Provide
              </button>
              <div className="mt-1 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>Walther</span>
                <span>·</span>
                <span>Feinwerkbau</span>
                <span>·</span>
                <span>Steyr & Pardini</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#E5A93C] uppercase block mb-1">
                02 — THE SPORT
              </span>
              <button
                onClick={() => handleNav('disciplines')}
                className="font-sans font-bold text-2xl md:text-3xl text-white hover:text-[#E5A93C] transition-colors block text-left cursor-pointer uppercase tracking-tight"
              >
                Olympic Disciplines
              </button>
              <div className="mt-1 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>10M Air Pistol</span>
                <span>·</span>
                <span>25M Rapid Fire</span>
                <span>·</span>
                <span>50M 3-Positions</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#E5A93C] uppercase block mb-1">
                03 — THE ATHLETES
              </span>
              <button
                onClick={() => handleNav('proud-moments')}
                className="font-sans font-bold text-2xl md:text-3xl text-white hover:text-[#E5A93C] transition-colors block text-left cursor-pointer uppercase tracking-tight"
              >
                Proud Moments & Medals
              </button>
              <div className="mt-1 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>State & National Podiums</span>
                <span>·</span>
                <span>World Championship Selections</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#E5A93C] uppercase block mb-1">
                04 — TESTIMONIALS
              </span>
              <button
                onClick={() => handleNav('reviews')}
                className="font-sans font-bold text-2xl md:text-3xl text-white hover:text-[#E5A93C] transition-colors block text-left cursor-pointer uppercase tracking-tight"
              >
                Real Stories
              </button>
              <div className="mt-1 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>Olympic & National Champion Reviews</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C6C6BC]/50 uppercase block mb-1">
                05 — RANGE & HERITAGE
              </span>
              <button
                onClick={() => handleNav('shooting-grounds')}
                className="font-serif text-2xl md:text-3xl text-white hover:text-[#C6C6BC] transition-colors block text-left cursor-pointer"
              >
                Shooting Grounds & Gunrooms
              </button>
              <div className="mt-1 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>Northwood Grounds</span>
                <span>·</span>
                <span>London Gunroom</span>
                <span>·</span>
                <span>Dallas Flagship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Drawer Actions */}
        <div className="pt-8 border-t border-[#C6C6BC]/15 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="flex-1 py-3 bg-[#16362D] text-[#C6C6BC] hover:bg-[#C6C6BC] hover:text-[#102620] transition-colors text-[10px] tracking-widest uppercase font-sans text-center rounded-full border border-[#C6C6BC]/30 cursor-pointer"
            >
              BESPOKE GUN INQUIRY
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenNewsletter();
              }}
              className="flex-1 py-3 bg-transparent text-[#C6C6BC] hover:bg-[#16362D] hover:text-white transition-colors text-[10px] tracking-widest uppercase font-sans text-center rounded-full border border-[#C6C6BC]/30 cursor-pointer"
            >
              NEWSLETTER JOIN
            </button>
          </div>

          <div className="text-[10px] text-[#C6C6BC]/50 tracking-wider text-center">
            Fine British Gunmakers Since 1835 · London SW1
          </div>
        </div>
      </div>

      {/* Backdrop click to close */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};
