import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FounderSection } from './components/FounderSection';
import { GunsWeProvideSection } from './components/GunsWeProvideSection';
import { OlympicDisciplinesSection } from './components/OlympicDisciplinesSection';
import { ProudMomentsSection } from './components/ProudMomentsSection';
import { TestimonialsCarousel } from './components/TestimonialsCarousel';
import { ShootingGroundsSection } from './components/ShootingGroundsSection';
import { LocationsSection } from './components/LocationsSection';
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
      product: PRODUCTS[1],
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
    <div className="min-h-screen bg-[#102620] text-[#C6C6BC] font-sans antialiased selection:bg-[#E5A93C] selection:text-black">
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
        {/* 1. Hero Section with Looping Shooting Range Video */}
        <Hero onDiscoverClick={() => handleScrollToSection('founder')} />

        {/* 2. 01 — THE FOUNDER (Coach Sachin Shrivastav: From Borrowed Pistols to Building a Range) */}
        <FounderSection
          onBookSession={() => handleScrollToSection('guns-we-provide')}
          onExploreHistory={() => handleScrollToSection('proud-moments')}
        />

        {/* 3. The Guns We Provide (Positioned as 3rd section, right below Founder section) */}
        <GunsWeProvideSection
          onBespokeInquiry={() => {
            setConsultationLocation(null);
            setIsConsultationOpen(true);
          }}
          onExploreArsenal={() => handleScrollToSection('disciplines')}
        />

        {/* 4. 02 — THE SPORT (Olympic Disciplines with Variable Depth Range Simulator) */}
        <OlympicDisciplinesSection />

        {/* 5. Shooting Grounds & Range Facilities */}
        <ShootingGroundsSection
          onBookGrounds={() => handleScrollToSection('proud-moments')}
        />

        {/* 6. 03 — THE ATHLETES (Proud Moments & Medals Gallery) */}
        <ProudMomentsSection />

        {/* 7. Real Stories & Testimonials Carousel (Moving carousel of Indian champion shooters) */}
        <TestimonialsCarousel />

        {/* 8. Gunroom Locations & Centers (London, Northwood, Dallas) */}
        <LocationsSection
          onBookAppointment={(loc) => {
            setConsultationLocation(loc);
            setIsConsultationOpen(true);
          }}
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
        onShopMore={() => handleScrollToSection('disciplines')}
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
