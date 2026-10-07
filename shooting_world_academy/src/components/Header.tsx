import React, { useState, useEffect } from 'react';
import { BrandLogoSVG, SearchIconSVG, AccountIconSVG, CartIconSVG } from './Icons';
import { Currency } from '../types';

interface HeaderProps {
  onOpenMenu: () => void;
  onOpenSearch: () => void;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  onOpenShippingNotice: (type: 'christmas' | 'eori') => void;
  cartCount: number;
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMenu,
  onOpenSearch,
  onOpenCart,
  onOpenAccount,
  onOpenShippingNotice,
  cartCount,
  currency,
  onCurrencyChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#102620]/95 backdrop-blur-md shadow-lg border-b border-[#C6C6BC]/15 py-3'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5'
      }`}
    >
      {/* Top Notice Bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#C6C6BC]/90 pb-2 border-b border-[#C6C6BC]/10">
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-none py-1">
          <button
            onClick={() => onOpenShippingNotice('christmas')}
            className="hover:text-white transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer text-left"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Christmas Delivery Deadlines</span>
          </button>
          <span className="text-[#C6C6BC]/30 hidden sm:inline">|</span>
          <button
            onClick={() => onOpenShippingNotice('eori')}
            className="hover:text-white transition-colors hidden sm:flex items-center gap-1.5 shrink-0 cursor-pointer text-left"
          >
            <span>Business Shipping Requirements (VAT & EORI)</span>
          </button>
        </div>

        <div className="relative shrink-0 flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
              className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-medium tracking-wider"
              aria-expanded={currencyDropdownOpen}
              aria-label="Select currency"
            >
              <span>{currency === 'GBP' ? '£ GBP' : currency === 'USD' ? '$ USD' : '€ EUR'}</span>
              <svg className="w-2.5 h-2.5 opacity-70" viewBox="0 0 10 6" fill="currentColor">
                <path d="M0 0l5 5 5-5z" />
              </svg>
            </button>

            {currencyDropdownOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-[#102620] border border-[#C6C6BC]/30 shadow-2xl py-1 z-50">
                {(['GBP', 'USD', 'EUR'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => {
                      onCurrencyChange(cur);
                      setCurrencyDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-[11px] tracking-widest transition-colors ${
                      currency === cur
                        ? 'bg-[#16362D] text-white font-semibold'
                        : 'text-[#C6C6BC] hover:bg-[#16362D]/60 hover:text-white'
                    }`}
                  >
                    {cur === 'GBP' ? '£ GBP' : cur === 'USD' ? '$ USD' : '€ EUR'}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Bar: 143px standard total height context */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-[80px]">
        {/* Left: MENU Button */}
        <div className="flex items-center">
          <button
            onClick={onOpenMenu}
            aria-label="Toggle menu"
            className="flex items-center gap-3 text-[#C6C6BC] hover:text-white transition-colors tracking-widest text-[11px] font-sans uppercase group cursor-pointer"
          >
            <div className="w-5 h-3.5 flex flex-col justify-between">
              <span className="w-5 h-[1px] bg-current transition-transform group-hover:translate-x-0.5"></span>
              <span className="w-3.5 h-[1px] bg-current transition-all group-hover:w-5"></span>
              <span className="w-5 h-[1px] bg-current transition-transform group-hover:translate-x-0.5"></span>
            </div>
            <span className="hidden sm:inline">MENU</span>
          </button>
        </div>

        {/* Center: Brand Crest Logo */}
        <div className="flex flex-col items-center justify-center">
          <a
            href="/"
            className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
            aria-label="Holland & Holland Homepage"
          >
            <BrandLogoSVG
              className="h-[32px] w-[124px] text-[#C6C6BC] group-hover:text-white transition-colors"
              color="currentColor"
            />
            <span className="text-[9px] tracking-[0.28em] text-[#C6C6BC]/80 uppercase mt-1">
              EST. 1835 · LONDON
            </span>
          </a>
        </div>

        {/* Right: Utility Icons */}
        <div className="flex items-center gap-5 md:gap-7 text-[#C6C6BC]">
          <button
            onClick={onOpenSearch}
            aria-label="Search"
            className="hover:text-white transition-transform hover:scale-110 p-1 cursor-pointer"
            title="Search"
          >
            <SearchIconSVG className="h-[15px] w-[15px]" />
          </button>

          <button
            onClick={onOpenAccount}
            aria-label="Account"
            className="hover:text-white transition-transform hover:scale-110 p-1 cursor-pointer"
            title="VIP Gunroom Account"
          >
            <AccountIconSVG className="h-[15px] w-[15px]" />
          </button>

          <button
            onClick={onOpenCart}
            aria-label="Cart"
            className="relative hover:text-white transition-transform hover:scale-110 p-1 cursor-pointer flex items-center"
            title="Shopping Bag"
          >
            <CartIconSVG className="h-[15px] w-[14px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#C6C6BC] text-[#102620] text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
