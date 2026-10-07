import React, { useState } from 'react';
import { BrandLogoSVG } from './Icons';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewsletterModal: React.FC<NewsletterModalProps> = ({ isOpen, onClose }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [interests, setInterests] = useState<{ [key: string]: boolean }>({
    'Bespoke Shotguns': true,
    'Double Rifles': false,
    'Shooting Grounds & Tuition': true,
    'Clothing & Accessories': false,
    'Private Dining & Events': false,
  });
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleInterestToggle = (key: string) => {
    setInterests((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) {
      setError('Please provide your name and email address.');
      return;
    }
    if (!consent) {
      setError('Please confirm consent to receive our communications.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-title"
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
    >
      <div className="bg-[#FFFFFF] text-[#16362D] w-full max-w-[650px] p-8 md:p-12 relative flex flex-col items-center text-center shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#16362D]/60 hover:text-[#16362D] p-2 text-xl font-light cursor-pointer"
        >
          ✕
        </button>

        {/* Brand Crest */}
        <div className="mb-4">
          <BrandLogoSVG className="h-[28px] w-[110px]" color="#16362D" />
        </div>

        <h2 id="newsletter-title" className="font-serif text-2xl md:text-3xl font-normal text-[#16362D] mb-3 leading-snug">
          Join our mailing list for exclusive news and invites.
        </h2>

        <p className="text-[#16362D]/75 text-xs font-sans font-light max-w-md mb-8">
          Be the first to receive invitations to private shoots, previews of new sporting collections,
          and announcements from our London and Dallas gunrooms.
        </p>

        {submitted ? (
          <div className="py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#16362D] text-white flex items-center justify-center mx-auto text-xl">
              ✓
            </div>
            <h3 className="font-serif text-2xl text-[#16362D]">Thank you for subscribing.</h3>
            <p className="text-xs text-[#16362D]/70 max-w-sm">
              A confirmation email has been dispatched to <strong>{email}</strong>. Welcome to Holland & Holland.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-8 py-2.5 bg-[#16362D] text-white font-sans text-[10px] tracking-widest uppercase rounded-full hover:bg-[#102620] transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="w-full space-y-6 text-left">
            {error && (
              <div className="text-red-700 bg-red-50 p-2.5 text-xs text-center border border-red-200">
                {error}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#16362D]/70 mb-1">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="e.g. Alistair"
                  className="w-full py-2.5 bg-transparent border-b border-[#16362D]/30 focus:border-[#16362D] outline-none text-sm font-sans transition-colors placeholder-[#16362D]/40 text-[#16362D]"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-widest uppercase text-[#16362D]/70 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="e.g. Campbell"
                  className="w-full py-2.5 bg-transparent border-b border-[#16362D]/30 focus:border-[#16362D] outline-none text-sm font-sans transition-colors placeholder-[#16362D]/40 text-[#16362D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] tracking-widest uppercase text-[#16362D]/70 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@domain.com"
                className="w-full py-2.5 bg-transparent border-b border-[#16362D]/30 focus:border-[#16362D] outline-none text-sm font-sans transition-colors placeholder-[#16362D]/40 text-[#16362D]"
              />
            </div>

            {/* Interest Checkboxes */}
            <div className="pt-2">
              <span className="block text-[10px] tracking-widest uppercase text-[#16362D]/80 mb-2">
                Areas of Interest
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#16362D]/90">
                {Object.keys(interests).map((item) => (
                  <label key={item} className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={interests[item]}
                      onChange={() => handleInterestToggle(item)}
                      className="w-4 h-4 border border-[#16362D] rounded-none checked:bg-[#16362D] focus:ring-0 cursor-pointer accent-[#16362D]"
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-2.5 cursor-pointer text-xs text-[#16362D]/80 leading-relaxed select-none">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="w-4 h-4 mt-0.5 border border-[#16362D] rounded-none checked:bg-[#16362D] focus:ring-0 cursor-pointer accent-[#16362D]"
                />
                <span>
                  I agree to receive marketing communications and bespoke invitations from Holland & Holland.
                  You may unsubscribe at any time via the link in our communications.
                </span>
              </label>
            </div>

            {/* CTA */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="px-12 py-3.5 bg-[#16362D] text-[#C6C6BC] font-sans text-[11px] tracking-widest uppercase rounded-full hover:bg-[#102620] hover:text-white transition-all duration-300 shadow-md cursor-pointer"
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
