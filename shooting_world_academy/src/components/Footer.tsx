import React from 'react';
import { BrandLogoSVG } from './Icons';
import { Currency } from '../types';

interface FooterProps {
  currency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenNewsletter: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currency,
  onCurrencyChange,
  onOpenNewsletter,
}) => {
  return (
    <footer role="contentinfo" className="bg-[#102620] text-[#C6C6BC] pt-20 pb-12 border-t border-[#C6C6BC]/15">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Top Tier: Brand Statement & Newsletter CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#C6C6BC]/15">
          <div className="lg:col-span-5 flex flex-col items-start">
            <BrandLogoSVG className="h-[34px] w-[130px] mb-4" color="#C6C6BC" />
            <p className="text-xs font-light leading-relaxed text-[#C6C6BC]/75 max-w-sm mb-6">
              Quintessential British luxury gunmakers since 1835. Creators of the world’s finest bespoke
              game shotguns, dangerous game double rifles, world-class shooting grounds in Northwood, and
              enduring field apparel.
            </p>
            <div className="text-[11px] text-[#C6C6BC]/60 font-light space-y-1">
              <div>London Gunroom · St James's, London SW1</div>
              <div>Shooting Grounds · Northwood, Hertfordshire HA6</div>
              <div>Dallas Gunroom · Highland Park Village, TX 75205</div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-white font-medium mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-light text-[#C6C6BC]/80">
              <li>
                <a href="#founder" className="hover:text-white transition-colors">
                  Coach Sachin Shrivastav (Founder)
                </a>
              </li>
              <li>
                <a href="#guns-we-provide" className="hover:text-white transition-colors">
                  The Guns We Provide (Olympic Arsenal)
                </a>
              </li>
              <li>
                <a href="#disciplines" className="hover:text-white transition-colors">
                  Olympic Disciplines (10m, 25m, 50m)
                </a>
              </li>
              <li>
                <a href="#proud-moments" className="hover:text-white transition-colors">
                  Proud Moments & Medals
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Real Stories & Testimonials
                </a>
              </li>
              <li>
                <a href="#shooting-grounds" className="hover:text-white transition-colors">
                  Shooting Grounds & Facilities
                </a>
              </li>
              <li>
                <a href="#locations" className="hover:text-white transition-colors">
                  Gunrooms & Locations
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-[11px] uppercase tracking-[0.25em] text-white font-medium mb-3">
                Client Dispatch & Inquiries
              </h4>
              <p className="text-xs font-light text-[#C6C6BC]/70 leading-relaxed mb-4">
                Receive private bulletins on limited field apparel releases, new sporting gun releases, and exclusive invitations to shoot days.
              </p>
              <button
                onClick={onOpenNewsletter}
                className="w-full py-3 bg-[#16362D] text-[#C6C6BC] hover:bg-[#C6C6BC] hover:text-[#102620] border border-[#C6C6BC]/30 text-[10px] tracking-widest uppercase rounded-full transition-all cursor-pointer font-sans"
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </button>
            </div>

            {/* Currency Selector */}
            <div className="pt-6 mt-6 border-t border-[#C6C6BC]/10 flex items-center justify-between text-xs">
              <span className="text-[#C6C6BC]/60">Currency Selection:</span>
              <div className="flex gap-2">
                {(['GBP', 'USD', 'EUR'] as Currency[]).map((cur) => (
                  <button
                    key={cur}
                    onClick={() => onCurrencyChange(cur)}
                    className={`px-3 py-1 border text-[11px] transition-colors cursor-pointer ${
                      currency === cur
                        ? 'bg-[#C6C6BC] text-[#102620] border-[#C6C6BC] font-semibold'
                        : 'border-[#C6C6BC]/20 text-[#C6C6BC] hover:border-[#C6C6BC]'
                    }`}
                  >
                    {cur === 'GBP' ? '£ GBP' : cur === 'USD' ? '$ USD' : '€ EUR'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: Legal Links & Socials */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#C6C6BC]/15 text-xs text-[#C6C6BC]/70">
          <div className="flex flex-wrap items-center gap-6">
            <a
              href="https://www.hollandandholland.com/careers"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Careers
            </a>
            <a
              href="https://www.hollandandholland.com/legal/delivery-returns"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Delivery & Returns
            </a>
            <a
              href="https://www.hollandandholland.com/legal/terms-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Legal
            </a>
            <a
              href="https://www.hollandandholland.com/legal/sitemap"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Site Map
            </a>
            <a
              href="https://pages.hollandandholland.com/hubfs/Corporate/H&H%20Environment%202026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Environmental Statement
            </a>
          </div>

          {/* Social Links verbatim from facts */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.facebook.com/HollandandHolland.1835"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/hollandandholland1835/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href="https://uk.linkedin.com/company/holland-holland"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@hollandholland"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="YouTube"
            >
              YouTube
            </a>
            <a
              href="https://berettaholding.com/en/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors border-l border-[#C6C6BC]/20 pl-4"
              aria-label="Beretta Holding"
            >
              Beretta Holding
            </a>
          </div>
        </div>

        {/* Bottom Tier: Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#C6C6BC]/50 font-light gap-4">
          <div>
            © {new Date().getFullYear()} Holland & Holland Limited. Registered in England No. 129210. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.awcoagency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6C6BC] transition-colors"
            >
              Designed by AW&CO.
            </a>
            <span>·</span>
            <a
              href="https://hamblyfreeman.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C6C6BC] transition-colors"
            >
              Built by Hambly Freeman
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
