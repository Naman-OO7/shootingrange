import React, { useState } from 'react';
import { PRODUCTS, CURRENCY_RATES, CURRENCY_SYMBOLS } from '../data/mockData';
import { Product, Currency } from '../types';

interface ProductShowcaseProps {
  currency: Currency;
  onAddToCart: (product: Product, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  currency,
  onAddToCart,
  onSelectProduct,
}) => {
  const [filter, setFilter] = useState<'all' | 'vests' | 'shirts'>('all');
  const [selectedSizes, setSelectedSizes] = useState<{ [productId: string]: string }>({
    'prod-1': 'UK 10',
    'prod-2': 'L',
    'prod-3': 'L',
    'prod-4': 'L',
    'prod-5': 'L',
    'prod-6': 'UK 10',
  });
  const [addedAnimation, setAddedAnimation] = useState<string | null>(null);

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === 'vests') return p.name.includes('Vest');
    if (filter === 'shirts') return p.name.includes('Shirt');
    return true;
  });

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAdd = (product: Product) => {
    const size = selectedSizes[product.id] || product.sizes[0];
    onAddToCart(product, size);
    setAddedAnimation(product.id);
    setTimeout(() => setAddedAnimation(null), 1200);
  };

  const formatPrice = (priceGBP: number) => {
    const rate = CURRENCY_RATES[currency];
    const symbol = CURRENCY_SYMBOLS[currency];
    return `${symbol}${(priceGBP * rate).toFixed(2)}`;
  };

  return (
    <section id="products" className="bg-[#102620] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#C6C6BC]/15 gap-6">
          <div>
            <span className="text-[#C6C6BC]/80 text-[11px] font-sans tracking-[0.3em] uppercase block mb-2">
              AUTUMN / WINTER APPAREL
            </span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
              The Featherweight Collection
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                filter === 'all'
                  ? 'bg-[#C6C6BC] text-[#102620] font-medium'
                  : 'bg-[#16362D] text-[#C6C6BC] hover:bg-[#16362D]/80'
              }`}
            >
              All Items ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setFilter('vests')}
              className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                filter === 'vests'
                  ? 'bg-[#C6C6BC] text-[#102620] font-medium'
                  : 'bg-[#16362D] text-[#C6C6BC] hover:bg-[#16362D]/80'
              }`}
            >
              Shooting Vests
            </button>
            <button
              onClick={() => setFilter('shirts')}
              className={`px-4 py-1.5 text-xs tracking-wider uppercase transition-all rounded-full cursor-pointer ${
                filter === 'shirts'
                  ? 'bg-[#C6C6BC] text-[#102620] font-medium'
                  : 'bg-[#16362D] text-[#C6C6BC] hover:bg-[#16362D]/80'
              }`}
            >
              Field Shirts
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#16362D]/60 border border-[#C6C6BC]/15 flex flex-col justify-between hover:border-[#C6C6BC]/40 transition-all duration-300"
            >
              {/* Product Card Image Container */}
              <div
                className="relative aspect-[4/5] overflow-hidden bg-[#102620] cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.image}
                  alt={`${product.name} in ${product.color}`}
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = product.fallbackImage;
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Color Tag & Quick view badge */}
                <div className="absolute top-3 left-3 bg-[#102620]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] tracking-widest uppercase text-[#C6C6BC] border border-[#C6C6BC]/20">
                  {product.color}
                </div>

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-5 py-2 bg-[#102620]/90 text-[#C6C6BC] text-[10px] tracking-widest uppercase border border-[#C6C6BC]/40">
                    View Details
                  </span>
                </div>
              </div>

              {/* Product Meta */}
              <div className="p-6 flex flex-col grow justify-between bg-[#16362D]/40">
                <div>
                  <div className="text-[10px] tracking-widest text-[#C6C6BC]/70 uppercase mb-1">
                    {product.category} · {product.color}
                  </div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="text-white font-serif text-xl sm:text-2xl font-light tracking-wide cursor-pointer hover:text-[#C6C6BC] transition-colors line-clamp-1"
                  >
                    {product.name}
                  </h3>
                  <div className="mt-2 text-[#C6C6BC] font-sans text-sm font-medium tracking-wider">
                    {formatPrice(product.priceGBP)}
                  </div>
                  <p className="mt-2 text-[#C6C6BC]/70 text-xs line-clamp-2 font-light">
                    {product.description}
                  </p>
                </div>

                {/* Size Selector and Add to Cart */}
                <div className="mt-6 pt-4 border-t border-[#C6C6BC]/10 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#C6C6BC]/80">
                    <span>Select Size:</span>
                    <div className="flex gap-1.5 overflow-x-auto scrollbar-none py-1">
                      {product.sizes.map((s) => (
                        <button
                          key={s}
                          onClick={() => handleSizeChange(product.id, s)}
                          className={`px-2 py-0.5 text-[10px] border transition-colors cursor-pointer ${
                            selectedSizes[product.id] === s
                              ? 'bg-[#C6C6BC] text-[#102620] border-[#C6C6BC] font-semibold'
                              : 'border-[#C6C6BC]/30 text-[#C6C6BC] hover:border-[#C6C6BC]'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => handleAdd(product)}
                    className={`w-full py-2.5 text-[10px] tracking-widest uppercase font-sans rounded-full transition-all duration-300 border cursor-pointer ${
                      addedAnimation === product.id
                        ? 'bg-emerald-800 text-white border-emerald-600'
                        : 'bg-[#102620] text-[#C6C6BC] border-[#C6C6BC]/30 hover:bg-[#C6C6BC] hover:text-[#102620]'
                    }`}
                  >
                    {addedAnimation === product.id ? 'ADDED TO BAG ✓' : 'SHOP NOW'}
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
