import React, { useState } from 'react';
import { PRODUCTS, GUNROOM_LOCATIONS, EVENTS, NEWS_ARTICLES } from '../data/mockData';
import { Product, GunroomLocation, EventItem, NewsItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (p: Product) => void;
  onSelectLocation: (l: GunroomLocation) => void;
  onSelectEvent: (e: EventItem) => void;
  onSelectNews: (n: NewsItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectLocation,
  onSelectEvent,
  onSelectNews,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingProducts = PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(q) || p.color.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)
  );

  const matchingLocations = GUNROOM_LOCATIONS.filter(
    (l) => l.name.toLowerCase().includes(q) || l.city.toLowerCase().includes(q) || l.address.toLowerCase().includes(q)
  );

  const matchingEvents = EVENTS.filter(
    (e) => e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q)
  );

  const matchingNews = NEWS_ARTICLES.filter(
    (n) => n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q) || n.category.toLowerCase().includes(q)
  );

  const hasResults =
    matchingProducts.length > 0 ||
    matchingLocations.length > 0 ||
    matchingEvents.length > 0 ||
    matchingNews.length > 0;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col p-6 md:p-12 text-[#C6C6BC]"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col h-full">
        {/* Search Input Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-[#C6C6BC]/30">
          <div className="flex items-center gap-4 grow">
            <span className="text-xl opacity-60">🔍</span>
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products, gunrooms, sporting shoots, or news..."
              className="w-full bg-transparent text-xl md:text-2xl font-serif text-white placeholder-[#C6C6BC]/40 outline-none"
            />
          </div>
          <button
            onClick={onClose}
            aria-label="Close search"
            className="text-2xl hover:text-white p-2 cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="flex flex-wrap gap-2 py-4 text-xs text-[#C6C6BC]/70">
          <span>Popular:</span>
          {['Shooting Vest', 'Featherweight Shirt', 'London Gunroom', 'Christmas Shoot', 'Royal Sidelock'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-0.5 border border-[#C6C6BC]/20 hover:border-[#C6C6BC] hover:text-white transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results Container */}
        <div className="grow overflow-y-auto mt-4 space-y-8 pr-2">
          {query && !hasResults && (
            <div className="py-20 text-center">
              <p className="font-serif text-2xl text-white">No results found for "{query}"</p>
              <p className="text-xs text-[#C6C6BC]/60 mt-2">
                Try searching for 'shirt', 'vest', 'London', 'Dallas', or 'event'.
              </p>
            </div>
          )}

          {/* Products */}
          {matchingProducts.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#C6C6BC]/60 mb-3 border-b border-[#C6C6BC]/10 pb-1">
                Products ({matchingProducts.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {matchingProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onSelectProduct(p);
                      onClose();
                    }}
                    className="p-3 bg-[#16362D]/60 border border-[#C6C6BC]/15 hover:border-[#C6C6BC]/40 cursor-pointer flex gap-3 items-center"
                  >
                    <img src={p.image} alt={p.name} className="w-12 h-14 object-cover" />
                    <div>
                      <div className="text-sm font-serif text-white truncate">{p.name}</div>
                      <div className="text-[10px] text-[#C6C6BC]/70">{p.color} · £{p.priceGBP}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Locations */}
          {matchingLocations.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#C6C6BC]/60 mb-3 border-b border-[#C6C6BC]/10 pb-1">
                Gunroom Locations ({matchingLocations.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchingLocations.map((loc) => (
                  <div
                    key={loc.id}
                    onClick={() => {
                      onSelectLocation(loc);
                      onClose();
                    }}
                    className="p-4 bg-[#16362D]/60 border border-[#C6C6BC]/15 hover:border-[#C6C6BC]/40 cursor-pointer"
                  >
                    <div className="text-base font-serif text-white">{loc.name}</div>
                    <div className="text-xs text-[#C6C6BC]/70 mt-1">{loc.address}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events */}
          {matchingEvents.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#C6C6BC]/60 mb-3 border-b border-[#C6C6BC]/10 pb-1">
                Shoots & Events ({matchingEvents.length})
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {matchingEvents.map((evt) => (
                  <div
                    key={evt.id}
                    onClick={() => {
                      onSelectEvent(evt);
                      onClose();
                    }}
                    className="p-4 bg-[#16362D]/60 border border-[#C6C6BC]/15 hover:border-[#C6C6BC]/40 cursor-pointer"
                  >
                    <div className="text-base font-serif text-white">{evt.title}</div>
                    <div className="text-xs text-[#C6C6BC]/70 mt-1">{evt.date} · £{evt.priceGBP}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News */}
          {matchingNews.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#C6C6BC]/60 mb-3 border-b border-[#C6C6BC]/10 pb-1">
                News & Journal ({matchingNews.length})
              </h3>
              <div className="space-y-3">
                {matchingNews.map((news) => (
                  <div
                    key={news.id}
                    onClick={() => {
                      onSelectNews(news);
                      onClose();
                    }}
                    className="p-3 bg-[#16362D]/40 border border-[#C6C6BC]/15 hover:border-[#C6C6BC]/40 cursor-pointer flex justify-between items-center"
                  >
                    <div>
                      <div className="text-sm font-serif text-white">{news.title}</div>
                      <div className="text-[10px] text-[#C6C6BC]/60">{news.category} · {news.date}</div>
                    </div>
                    <span className="text-xs">→</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
