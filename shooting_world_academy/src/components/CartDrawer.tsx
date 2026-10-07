import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/mockData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearCart: () => void;
  onShopMore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onShopMore,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  if (!isOpen) return null;

  const rate = CURRENCY_RATES[currency];
  const symbol = CURRENCY_SYMBOLS[currency];

  const subtotalGBP = items.reduce((sum, item) => sum + item.product.priceGBP * item.quantity, 0);
  const subtotalFormatted = `${symbol}${(subtotalGBP * rate).toFixed(2)}`;

  const freeShippingThresholdGBP = 500;
  const freeShippingProgress = Math.min(100, (subtotalGBP / freeShippingThresholdGBP) * 100);
  const amountToFreeShipping = Math.max(0, freeShippingThresholdGBP - subtotalGBP);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderComplete(true);
  };

  const handleResetAndClose = () => {
    onClearCart();
    setIsCheckingOut(false);
    setOrderComplete(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-drawer-title"
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex justify-end"
    >
      <div className="w-full max-w-md bg-[#102620] h-full flex flex-col justify-between border-l border-[#C6C6BC]/20 text-[#C6C6BC] p-6 md:p-8 overflow-y-auto">
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-[#C6C6BC]/15">
            <h2 id="cart-drawer-title" className="font-serif text-2xl text-white font-light tracking-wide">
              Shopping Bag ({items.reduce((s, i) => s + i.quantity, 0)})
            </h2>
            <button
              onClick={onClose}
              aria-label="Close bag"
              className="text-[#C6C6BC] hover:text-white p-2 text-xl cursor-pointer"
            >
              ✕
            </button>
          </div>

          {/* Complimentary Shipping Banner */}
          <div className="my-4 p-3 bg-[#16362D] border border-[#C6C6BC]/15 text-xs font-light">
            {amountToFreeShipping > 0 ? (
              <div>
                <span>Add </span>
                <strong className="text-white">
                  {symbol}{(amountToFreeShipping * rate).toFixed(2)}
                </strong>
                <span> more for complimentary courier dispatch.</span>
                <div className="w-full h-1.5 bg-[#102620] mt-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#C6C6BC] transition-all duration-300"
                    style={{ width: `${freeShippingProgress}%` }}
                  />
                </div>
              </div>
            ) : (
              <span className="text-emerald-300 flex items-center gap-1.5 font-medium">
                <span>✓</span> Complimentary insured courier dispatch unlocked
              </span>
            )}
          </div>
        </div>

        {/* Content Area */}
        <div className="grow overflow-y-auto my-4 space-y-4">
          {items.length === 0 ? (
            <div className="py-16 text-center space-y-4">
              <div className="text-4xl text-[#C6C6BC]/40">🛍</div>
              <p className="font-serif text-xl text-white">Your shopping bag is empty.</p>
              <p className="text-xs text-[#C6C6BC]/70 max-w-xs mx-auto">
                Explore our fine British shooting shirts, technical waistcoats, and leather cartridge bags.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onShopMore();
                }}
                className="px-6 py-2.5 bg-[#16362D] text-[#C6C6BC] text-[10px] tracking-widest uppercase rounded-full hover:bg-[#C6C6BC] hover:text-[#102620] transition-colors border border-[#C6C6BC]/30 cursor-pointer"
              >
                DISCOVER COLLECTION
              </button>
            </div>
          ) : orderComplete ? (
            <div className="py-12 text-center space-y-4 bg-[#16362D]/60 p-6 border border-[#C6C6BC]/20">
              <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center mx-auto text-xl">
                ✓
              </div>
              <h3 className="font-serif text-2xl text-white">Order Confirmed</h3>
              <p className="text-xs text-[#C6C6BC]/80 leading-relaxed">
                Thank you, <strong>{customerName || 'Valued Client'}</strong>. Your order has been registered with Holland & Holland Client Services.
                A formal invoice and tracking details will be sent to <strong>{customerEmail || 'your email'}</strong>.
              </p>
              <div className="text-xs text-[#C6C6BC]/60 border-t border-[#C6C6BC]/15 pt-3">
                Order Ref: HH-{Math.floor(100000 + Math.random() * 900000)}
              </div>
              <button
                onClick={handleResetAndClose}
                className="mt-4 px-8 py-2.5 bg-[#C6C6BC] text-[#102620] text-[10px] tracking-widest uppercase font-semibold rounded-full hover:bg-white transition-colors cursor-pointer"
              >
                DONE
              </button>
            </div>
          ) : isCheckingOut ? (
            <form onSubmit={handleCheckoutSubmit} className="space-y-4 bg-[#16362D]/50 p-5 border border-[#C6C6BC]/20">
              <h3 className="font-serif text-xl text-white mb-2">Delivery & Client Details</h3>
              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#C6C6BC]/70 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Lord / Lady / Sir / Name"
                  className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 focus:border-[#C6C6BC] outline-none text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#C6C6BC]/70 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder="client@estatemail.co.uk"
                  className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 focus:border-[#C6C6BC] outline-none text-xs text-white"
                />
              </div>

              <div>
                <label className="block text-[9px] uppercase tracking-widest text-[#C6C6BC]/70 mb-1">
                  Delivery Address & Postcode *
                </label>
                <textarea
                  required
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="Estate / Street Address, City, Postcode"
                  className="w-full py-2 bg-transparent border-b border-[#C6C6BC]/30 focus:border-[#C6C6BC] outline-none text-xs text-white resize-none"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setIsCheckingOut(false)}
                  className="flex-1 py-2 text-[10px] uppercase tracking-wider text-[#C6C6BC] border border-[#C6C6BC]/30 rounded-full hover:bg-black/30"
                >
                  BACK
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 text-[10px] uppercase tracking-wider bg-[#C6C6BC] text-[#102620] font-semibold rounded-full hover:bg-white cursor-pointer"
                >
                  PLACE ORDER
                </button>
              </div>
            </form>
          ) : (
            items.map((item) => (
              <div
                key={`${item.product.id}-${item.size}`}
                className="flex gap-4 p-3 bg-[#16362D]/60 border border-[#C6C6BC]/15 items-center justify-between"
              >
                <div className="w-16 h-20 bg-black shrink-0 overflow-hidden">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = item.product.fallbackImage;
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grow min-w-0 pr-2">
                  <h4 className="text-sm font-serif text-white truncate">{item.product.name}</h4>
                  <div className="text-[10px] text-[#C6C6BC]/70 uppercase tracking-wider">
                    {item.product.color} · Size: {item.size}
                  </div>
                  <div className="text-xs text-[#C6C6BC] font-medium mt-1">
                    {symbol}{(item.product.priceGBP * rate).toFixed(2)}
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2 shrink-0">
                  <div className="flex items-center border border-[#C6C6BC]/30">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                      className="px-2 py-0.5 text-xs text-[#C6C6BC] hover:bg-[#102620] cursor-pointer"
                    >
                      -
                    </button>
                    <span className="px-2 text-xs font-mono">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                      className="px-2 py-0.5 text-xs text-[#C6C6BC] hover:bg-[#102620] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.product.id, item.size)}
                    className="text-[10px] text-red-400/80 hover:text-red-300 tracking-wider uppercase cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer in Drawer */}
        {items.length > 0 && !isCheckingOut && !orderComplete && (
          <div className="pt-4 border-t border-[#C6C6BC]/15 space-y-3">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#C6C6BC]/70">Subtotal:</span>
              <span className="text-xl font-serif text-white">{subtotalFormatted}</span>
            </div>
            <p className="text-[10px] text-[#C6C6BC]/60 font-light">
              Taxes calculated at dispatch. All orders shipped in bespoke Holland & Holland gift boxing.
            </p>
            <button
              onClick={() => setIsCheckingOut(true)}
              className="w-full py-3.5 bg-[#C6C6BC] text-[#102620] text-[11px] tracking-widest uppercase font-semibold rounded-full hover:bg-white transition-colors cursor-pointer"
            >
              PROCEED TO SECURE CHECKOUT
            </button>
          </div>
        )}
      </div>

      {/* Backdrop */}
      <div className="flex-1" onClick={onClose} />
    </div>
  );
};
