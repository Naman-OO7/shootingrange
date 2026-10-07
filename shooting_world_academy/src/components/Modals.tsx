import React, { useState } from 'react';
import { Product, EventItem, NewsItem, GunroomLocation, Currency } from '../types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/mockData';
import { BrandLogoSVG } from './Icons';

// --- PRODUCT DETAIL MODAL ---
export const ProductDetailModal: React.FC<{
  product: Product | null;
  currency: Currency;
  onClose: () => void;
  onAddToCart: (p: Product, size: string) => void;
}> = ({ product, currency, onClose, onAddToCart }) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [added, setAdded] = useState(false);

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  const priceFormatted = `${symbol}${(product.priceGBP * rate).toFixed(2)}`;

  const handleAdd = () => {
    onAddToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 800);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#102620] border border-[#C6C6BC]/30 text-[#C6C6BC] w-full max-w-3xl relative flex flex-col md:flex-row overflow-hidden shadow-2xl my-8">
        <button
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 text-xl hover:bg-black cursor-pointer"
        >
          ✕
        </button>

        {/* Image */}
        <div className="md:w-1/2 aspect-square md:aspect-auto bg-black overflow-hidden relative">
          <img
            src={product.image}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = product.fallbackImage;
            }}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-black/80 px-2.5 py-1 text-[10px] tracking-widest uppercase">
            {product.color}
          </div>
        </div>

        {/* Details */}
        <div className="p-8 md:w-1/2 flex flex-col justify-between">
          <div>
            <div className="text-[10px] tracking-widest text-[#C6C6BC]/70 uppercase mb-2">
              {product.category} · Holland & Holland London
            </div>
            <h2 className="text-white font-serif text-2xl md:text-3xl font-light mb-3">
              {product.name}
            </h2>
            <div className="text-xl font-medium text-white mb-4">{priceFormatted}</div>
            <p className="text-xs text-[#C6C6BC]/80 leading-relaxed font-light mb-6">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <span className="block text-[11px] uppercase tracking-wider text-[#C6C6BC]/70 mb-2">
                Select Sizing:
              </span>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 text-xs border transition-colors cursor-pointer ${
                      selectedSize === size
                        ? 'bg-[#C6C6BC] text-[#102620] border-[#C6C6BC] font-semibold'
                        : 'border-[#C6C6BC]/30 text-[#C6C6BC] hover:border-[#C6C6BC]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#C6C6BC]/15">
            <button
              onClick={handleAdd}
              className={`w-full py-3 text-[11px] tracking-widest uppercase font-semibold rounded-full transition-all cursor-pointer ${
                added
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#C6C6BC] text-[#102620] hover:bg-white'
              }`}
            >
              {added ? 'ADDED TO BAG ✓' : `ADD TO BAG (${priceFormatted})`}
            </button>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center text-[10px] tracking-widest uppercase text-[#C6C6BC]/70 hover:text-white"
            >
              View on Official Store ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- EVENT BOOKING MODAL ---
export const EventBookingModal: React.FC<{
  event: EventItem | null;
  currency: Currency;
  onClose: () => void;
}> = ({ event, currency, onClose }) => {
  if (!event) return null;

  const [gunsCount, setGunsCount] = useState(1);
  const [leadName, setLeadName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];
  const total = (event.priceGBP * gunsCount * rate).toFixed(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#102620] border border-[#C6C6BC]/30 text-[#C6C6BC] w-full max-w-lg p-8 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-white hover:text-[#C6C6BC] text-xl cursor-pointer"
        >
          ✕
        </button>

        <div className="text-[10px] tracking-widest uppercase text-[#C6C6BC]/60 mb-1">
          {event.date} · {event.location}
        </div>
        <h2 className="text-white font-serif text-2xl font-light mb-2">{event.title}</h2>
        <p className="text-xs text-[#C6C6BC]/75 mb-6">{event.description}</p>

        {submitted ? (
          <div className="py-6 text-center space-y-3 bg-[#16362D] p-6 border border-[#C6C6BC]/20">
            <div className="w-10 h-10 rounded-full bg-emerald-800 text-white flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="font-serif text-xl text-white">Peg Reserved</h3>
            <p className="text-xs text-[#C6C6BC]/80">
              Confirmation dispatched to <strong>{email}</strong>. Our shoot host will contact you regarding cartridge selection and gun hire.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-6 py-2 bg-[#C6C6BC] text-[#102620] text-xs font-semibold rounded-full uppercase tracking-wider cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-[#16362D] border border-[#C6C6BC]/15">
              <span className="text-xs">Number of Guns / Pegs:</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGunsCount(Math.max(1, gunsCount - 1))}
                  className="px-2.5 py-1 bg-[#102620] border border-[#C6C6BC]/30 text-xs"
                >
                  -
                </button>
                <span className="font-mono text-sm">{gunsCount}</span>
                <button
                  type="button"
                  onClick={() => setGunsCount(Math.min(event.spotsLeft, gunsCount + 1))}
                  className="px-2.5 py-1 bg-[#102620] border border-[#C6C6BC]/30 text-xs"
                >
                  +
                </button>
              </div>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider mb-1">Lead Gun Name *</label>
              <input
                type="text"
                required
                value={leadName}
                onChange={(e) => setLeadName(e.target.value)}
                placeholder="Full Name"
                className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 text-sm text-white outline-none focus:border-[#C6C6BC]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] uppercase tracking-wider mb-1">Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 text-sm text-white outline-none focus:border-[#C6C6BC]"
                />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-wider mb-1">Telephone *</label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+44 ..."
                  className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 text-sm text-white outline-none focus:border-[#C6C6BC]"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#C6C6BC]/15">
              <div>
                <div className="text-[10px] uppercase tracking-wider text-[#C6C6BC]/60">Total Amount:</div>
                <div className="text-xl font-serif text-white">{symbol}{total}</div>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-[#C6C6BC] text-[#102620] text-[10px] font-semibold tracking-widest uppercase rounded-full hover:bg-white transition-colors cursor-pointer"
              >
                CONFIRM RESERVATION
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// --- BESPOKE CONSULTATION / APPOINTMENT MODAL ---
export const ConsultationModal: React.FC<{
  isOpen: boolean;
  location?: GunroomLocation | null;
  onClose: () => void;
}> = ({ isOpen, location, onClose }) => {
  if (!isOpen) return null;

  const [gunType, setGunType] = useState('Royal Sidelock Shotgun');
  const [selectedLoc, setSelectedLoc] = useState(location?.city || 'London');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#102620] border border-[#C6C6BC]/30 text-[#C6C6BC] w-full max-w-lg p-8 md:p-10 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-white hover:text-[#C6C6BC] text-xl cursor-pointer"
        >
          ✕
        </button>

        <div className="mb-3">
          <BrandLogoSVG className="h-[24px] w-[95px]" color="#C6C6BC" />
        </div>

        <h2 className="text-white font-serif text-2xl md:text-3xl font-light mb-2">
          Private Gunroom Appointment
        </h2>
        <p className="text-xs text-[#C6C6BC]/70 mb-6">
          Meet with our gun fitting specialists, discuss bespoke commission specifications,
          or request a valuation from our London archives.
        </p>

        {submitted ? (
          <div className="py-8 text-center space-y-3 bg-[#16362D] p-6 border border-[#C6C6BC]/20">
            <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center mx-auto text-xl">
              ✓
            </div>
            <h3 className="font-serif text-2xl text-white">Appointment Requested</h3>
            <p className="text-xs text-[#C6C6BC]/80 leading-relaxed">
              Thank you, <strong>{name}</strong>. Our Head of Gunroom Operations in <strong>{selectedLoc}</strong> will contact you within 24 hours to schedule your private consultation.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-2.5 bg-[#C6C6BC] text-[#102620] text-xs font-semibold rounded-full uppercase tracking-wider cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#C6C6BC]/70 mb-1">
                Preferred Gunroom *
              </label>
              <select
                value={selectedLoc}
                onChange={(e) => setSelectedLoc(e.target.value)}
                className="w-full py-2 bg-[#16362D] border border-[#C6C6BC]/30 text-white text-xs px-2 outline-none"
              >
                <option value="London">London Gunroom (St James's)</option>
                <option value="Northwood">Shooting Ground Gunroom (Northwood Estate)</option>
                <option value="Dallas">Dallas Gunroom (Highland Park)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#C6C6BC]/70 mb-1">
                Interest / Commission Type
              </label>
              <select
                value={gunType}
                onChange={(e) => setGunType(e.target.value)}
                className="w-full py-2 bg-[#16362D] border border-[#C6C6BC]/30 text-white text-xs px-2 outline-none"
              >
                <option value="Royal Sidelock Shotgun">Royal Sidelock Shotgun (12 / 20 / 28 Bore / .410)</option>
                <option value="Over-and-Under Game Gun">Over-and-Under Game Gun</option>
                <option value="Double Rifle">Double Rifle (.375 / .470 / .500 Nitro Express)</option>
                <option value="Gun Fitting & Try-Gun">Gun Fitting & Try-Gun Measurement</option>
                <option value="Heritage Valuation & Archive Check">Heritage Valuation & Archive Check</option>
                <option value="Shooting Grounds Tuition">Private Tuition at Northwood Grounds</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#C6C6BC]/70 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name and Title"
                className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 text-sm text-white outline-none focus:border-[#C6C6BC]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#C6C6BC]/70 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@domain.com"
                className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 text-sm text-white outline-none focus:border-[#C6C6BC]"
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[#C6C6BC]/70 mb-1">
                Specific Inquiries or Dates
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Preferred dates, bespoke barrel lengths, custom engraving motifs..."
                className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 text-xs text-white outline-none focus:border-[#C6C6BC] resize-none"
              />
            </div>

            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full py-3.5 bg-[#C6C6BC] text-[#102620] text-[11px] font-semibold tracking-widest uppercase rounded-full hover:bg-white transition-colors cursor-pointer"
              >
                REQUEST PRIVATE APPOINTMENT
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// --- SHIPPING NOTICE MODAL ---
export const ShippingNoticeModal: React.FC<{
  type: 'christmas' | 'eori' | null;
  onClose: () => void;
}> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#102620] border border-[#C6C6BC]/30 text-[#C6C6BC] w-full max-w-lg p-8 md:p-10 relative shadow-2xl my-8">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-white hover:text-[#C6C6BC] text-xl cursor-pointer"
        >
          ✕
        </button>

        {type === 'christmas' ? (
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C6C6BC]/60 block mb-2">
              DISPATCH SCHEDULES
            </span>
            <h2 className="text-white font-serif text-2xl md:text-3xl font-light mb-4">
              Christmas Delivery Deadlines
            </h2>
            <div className="space-y-4 text-xs font-light leading-relaxed text-[#C6C6BC]/90">
              <p>
                To ensure your Holland & Holland clothing, leather goods, and shooting accessories arrive in time for Christmas, please observe the following final order dates:
              </p>
              <ul className="space-y-2 border-y border-[#C6C6BC]/15 py-3">
                <li className="flex justify-between">
                  <span>United Kingdom (Express Courier):</span>
                  <strong className="text-white">Wednesday 20 December, 14:00 GMT</strong>
                </li>
                <li className="flex justify-between">
                  <span>Europe & Scandinavian Hubs:</span>
                  <strong className="text-white">Monday 18 December, 12:00 GMT</strong>
                </li>
                <li className="flex justify-between">
                  <span>USA & Canada (FedEx Priority):</span>
                  <strong className="text-white">Tuesday 19 December, 12:00 GMT</strong>
                </li>
                <li className="flex justify-between">
                  <span>Rest of World:</span>
                  <strong className="text-white">Friday 15 December, 12:00 GMT</strong>
                </li>
              </ul>
              <p className="text-[11px] text-[#C6C6BC]/70">
                All purchases are dispatched in signature Holland & Holland green gift boxes with silk ribbon.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <span className="text-[10px] uppercase tracking-widest text-[#C6C6BC]/60 block mb-2">
              REGULATORY NOTICE
            </span>
            <h2 className="text-white font-serif text-2xl md:text-3xl font-light mb-4">
              Business Shipping Requirements
            </h2>
            <div className="space-y-4 text-xs font-light leading-relaxed text-[#C6C6BC]/90">
              <p>
                <strong>Notice for EU & International Commercial Clients:</strong>
              </p>
              <p>
                Valid VAT and Economic Operators Registration and Identification (EORI) numbers must be provided prior to export dispatch for all corporate or trade orders destined for the European Union.
              </p>
              <p>
                For sporting arms, parts, or regulated ammunition export permits, our dedicated logistics compliance desk in London coordinates all Form 6, BIS, and CIP proof documentation directly with your licensed customs broker.
              </p>
              <div className="p-3 bg-[#16362D] border border-[#C6C6BC]/15 text-[11px]">
                Direct Compliance Inquiry: <span className="text-white">exports@hollandandholland.com</span>
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="px-8 py-2.5 bg-[#C6C6BC] text-[#102620] text-xs font-semibold tracking-wider uppercase rounded-full hover:bg-white transition-colors cursor-pointer"
          >
            UNDERSTOOD
          </button>
        </div>
      </div>
    </div>
  );
};

// --- ARTICLE DETAIL MODAL ---
export const ArticleDetailModal: React.FC<{
  article: NewsItem | null;
  onClose: () => void;
}> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#102620] border border-[#C6C6BC]/30 text-[#C6C6BC] w-full max-w-2xl relative shadow-2xl my-8 overflow-hidden">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 text-white bg-black/50 p-2 text-xl hover:bg-black cursor-pointer"
        >
          ✕
        </button>

        <div className="aspect-[16/9] w-full bg-black overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = article.fallbackImage;
            }}
          />
        </div>

        <div className="p-8">
          <div className="text-[10px] tracking-widest text-[#C6C6BC]/60 uppercase mb-2">
            {article.category} · {article.date}
          </div>
          <h2 className="text-white font-serif text-2xl md:text-3xl font-light mb-3">
            {article.title}
          </h2>
          <h3 className="text-xs uppercase tracking-wider text-[#C6C6BC]/80 mb-4">
            {article.subtitle}
          </h3>
          <p className="text-xs md:text-sm text-[#C6C6BC]/90 leading-relaxed font-light mb-6">
            {article.excerpt}
          </p>
          <div className="pt-4 border-t border-[#C6C6BC]/15 flex items-center justify-between">
            <span className="text-[10px] text-[#C6C6BC]/60">Holland & Holland Press Office</span>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-[#16362D] text-[#C6C6BC] hover:text-white text-[10px] tracking-widest uppercase rounded-full border border-[#C6C6BC]/30"
            >
              Read Full Press Wire ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
