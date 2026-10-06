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
              <span className="text-[10px] tracking-[0.25em] text-[#C6C6BC]/50 uppercase block mb-2">
                01. CRAFTSMANSHIP
              </span>
              <button
                onClick={() => handleNav('hallmarks')}
                className="font-serif text-2xl md:text-3xl text-white hover:text-[#C6C6BC] transition-colors block text-left cursor-pointer"
              >
                Heritage & Gunmaking
              </button>
              <div className="mt-2 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>The 'Royal' Sidelock</span>
                <span>·</span>
                <span>Double Rifles</span>
                <span>·</span>
                <span>Bespoke Engraving</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C6C6BC]/50 uppercase block mb-2">
                02. SPORTING GROUNDS
              </span>
              <button
                onClick={() => handleNav('shooting-grounds')}
                className="font-serif text-2xl md:text-3xl text-white hover:text-[#C6C6BC] transition-colors block text-left cursor-pointer"
              >
                Shooting Grounds & Tuition
              </button>
              <div className="mt-2 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>100+ Clay Stands</span>
                <span>·</span>
                <span>Cinema Range</span>
                <span>·</span>
                <span>The Lodge Restaurant</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C6C6BC]/50 uppercase block mb-2">
                03. LUXURY APPAREL
              </span>
              <button
                onClick={() => handleNav('clothing')}
                className="font-serif text-2xl md:text-3xl text-white hover:text-[#C6C6BC] transition-colors block text-left cursor-pointer"
              >
                Clothing & Accessories
              </button>
              <div className="mt-2 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>The Featherweight Collection</span>
                <span>·</span>
                <span>Field Vests</span>
                <span>·</span>
                <span>Leather Cartridge Bags</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C6C6BC]/50 uppercase block mb-2">
                04. FLAGSHIP GUNROOMS
              </span>
              <button
                onClick={() => handleNav('locations')}
                className="font-serif text-2xl md:text-3xl text-white hover:text-[#C6C6BC] transition-colors block text-left cursor-pointer"
              >
                Locations & Gunrooms
              </button>
              <div className="mt-2 text-xs font-light text-[#C6C6BC]/70 space-x-3">
                <span>London St James's</span>
                <span>·</span>
                <span>Northwood Estate</span>
                <span>·</span>
                <span>Dallas Flagship</span>
              </div>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C6C6BC]/50 uppercase block mb-2">
                05. FIXTURES & DIARY
              </span>
              <button
                onClick={() => handleNav('events')}
                className="font-serif text-2xl md:text-3xl text-white hover:text-[#C6C6BC] transition-colors block text-left cursor-pointer"
              >
                Upcoming Shoots & Fixtures
              </button>
            </div>

            <div>
              <span className="text-[10px] tracking-[0.25em] text-[#C6C6BC]/50 uppercase block mb-2">
                06. EDITORIAL
              </span>
              <button
                onClick={() => handleNav('news')}
                className="font-serif text-2xl md:text-3xl text-white hover:text-[#C6C6BC] transition-colors block text-left cursor-pointer"
              >
                Latest News & Press
              </button>
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
