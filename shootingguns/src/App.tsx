import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HallmarksSection } from './components/HallmarksSection';
import { ShootingGroundsSection } from './components/ShootingGroundsSection';
import { ClothingSection } from './components/ClothingSection';
import { ProductShowcase } from './components/ProductShowcase';
import { LocationsSection } from './components/LocationsSection';
import { NewsSection } from './components/NewsSection';
import { EventsSection } from './components/EventsSection';
import { Footer } from './components/Footer';
import { MenuDrawer } from './components/MenuDrawer';
import { CartDrawer } from './components/CartDrawer';
import { SearchModal } from './components/SearchModal';
import { NewsletterModal } from './components/NewsletterModal';
import {
  ProductDetailModal,
  EventBookingModal,
  ConsultationModal,
  ShippingNoticeModal,
  ArticleDetailModal,
} from './components/Modals';
import { Product, CartItem, NewsItem, EventItem, GunroomLocation, Currency } from './types';
import { PRODUCTS } from './data/mockData';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('GBP');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      product: PRODUCTS[1], // Featherweight Shooting Vest SAND
      size: 'L',
      quantity: 1,
    },
  ]);

  // Modal and Drawer States
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsItem | null>(null);
  const [consultationLocation, setConsultationLocation] = useState<GunroomLocation | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [shippingNoticeType, setShippingNoticeType] = useState<'christmas' | 'eori' | null>(null);

  // Cart Operations
  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, size, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, size: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId && item.size === size) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string, size: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.product.id === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#102620] text-[#C6C6BC] font-sans antialiased selection:bg-[#C6C6BC] selection:text-[#102620]">
      {/* Primary Fixed Navigation Header */}
      <Header
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => {
          setConsultationLocation(null);
          setIsConsultationOpen(true);
        }}
        onOpenShippingNotice={(type) => setShippingNoticeType(type)}
        cartCount={totalCartCount}
        currency={currency}
        onCurrencyChange={(c) => setCurrency(c)}
      />

      {/* Main Page Landmark */}
      <main role="main">
        {/* Hero Section */}
        <Hero onDiscoverClick={() => handleScrollToSection('hallmarks')} />

        {/* Hallmarks & Heirlooms Section */}
        <HallmarksSection
          onBespokeInquiry={() => {
            setConsultationLocation(null);
            setIsConsultationOpen(true);
          }}
        />

        {/* Shooting Grounds Section */}
        <ShootingGroundsSection
          onBookGrounds={() => handleScrollToSection('events')}
        />

        {/* Clothing & Accessories Section */}
        <ClothingSection
          onScrollToProducts={() => handleScrollToSection('products')}
        />

        {/* Featherweight Collection Showcase */}
        <ProductShowcase
          currency={currency}
          onAddToCart={handleAddToCart}
          onSelectProduct={(p) => setSelectedProduct(p)}
        />

        {/* Locations Section (London, Shooting Grounds, Dallas) */}
        <LocationsSection
          onBookAppointment={(loc) => {
            setConsultationLocation(loc);
            setIsConsultationOpen(true);
          }}
        />

        {/* Latest News & Press Releases Section */}
        <NewsSection onReadArticle={(article) => setSelectedArticle(article)} />

        {/* Upcoming Fixtures & Shoots */}
        <EventsSection
          currency={currency}
          onBookEvent={(evt) => setSelectedEvent(evt)}
        />
      </main>

      {/* Footer Landmark */}
      <Footer
        currency={currency}
        onCurrencyChange={(c) => setCurrency(c)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
      />

      {/* Drawers & Modals */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenNewsletter={() => setIsNewsletterOpen(true)}
        onOpenConsultation={() => {
          setConsultationLocation(null);
          setIsConsultationOpen(true);
        }}
        onScrollToSection={handleScrollToSection}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        currency={currency}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        onShopMore={() => handleScrollToSection('products')}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onSelectLocation={(loc) => {
          setConsultationLocation(loc);
          setIsConsultationOpen(true);
        }}
        onSelectEvent={(evt) => setSelectedEvent(evt)}
        onSelectNews={(news) => setSelectedArticle(news)}
      />

      <NewsletterModal
        isOpen={isNewsletterOpen}
        onClose={() => setIsNewsletterOpen(false)}
      />

      <ProductDetailModal
        product={selectedProduct}
        currency={currency}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <EventBookingModal
        event={selectedEvent}
        currency={currency}
        onClose={() => setSelectedEvent(null)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        location={consultationLocation}
        onClose={() => setIsConsultationOpen(false)}
      />

      <ShippingNoticeModal
        type={shippingNoticeType}
        onClose={() => setShippingNoticeType(null)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
