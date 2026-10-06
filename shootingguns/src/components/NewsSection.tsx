import React, { useState } from 'react';
import { NEWS_ARTICLES } from '../data/mockData';
import { NewsItem } from '../types';

interface NewsSectionProps {
  onReadArticle: (article: NewsItem) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="news" className="bg-[#102620] py-24 md:py-32 border-b border-[#C6C6BC]/10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-[#C6C6BC]/15 gap-4">
          <div>
            <span className="text-[#C6C6BC]/80 text-[11px] font-sans tracking-[0.3em] uppercase block mb-2">
              JOURNAL & PRESS RELEASES
            </span>
            <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-wide">
              Latest News
            </h2>
          </div>
          <span className="text-[#C6C6BC]/70 text-xs font-light">
            Insights from the London Atelier, Shooting Grounds & Sporting Partnerships
          </span>
        </div>

        {/* 6 News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-[#16362D]/50 border border-[#C6C6BC]/15 flex flex-col justify-between group hover:border-[#C6C6BC]/40 transition-all duration-300"
            >
              <div>
                {/* Image */}
                <div
                  className="aspect-[16/10] overflow-hidden bg-black cursor-pointer relative"
                  onClick={() => onReadArticle(article)}
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = article.fallbackImage;
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-[#102620]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] tracking-widest uppercase text-[#C6C6BC] border border-[#C6C6BC]/20">
                    {article.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-[10px] tracking-widest text-[#C6C6BC]/60 uppercase mb-2">
                    {article.date} · {article.subtitle}
                  </div>
                  <h3
                    onClick={() => onReadArticle(article)}
                    className="text-white font-serif text-xl sm:text-2xl font-light tracking-wide hover:text-[#C6C6BC] transition-colors cursor-pointer mb-3 leading-snug line-clamp-2"
                  >
                    {article.title}
                  </h3>
                  <p className="text-[#C6C6BC]/75 text-xs font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Bar */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-[#C6C6BC]/10">
                <button
                  onClick={() => onReadArticle(article)}
                  className="text-[10px] tracking-widest uppercase text-[#C6C6BC] hover:text-white transition-colors cursor-pointer"
                >
                  READ STORY →
                </button>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-widest uppercase text-[#C6C6BC]/60 hover:text-[#C6C6BC] transition-colors"
                  title="Official Article"
                >
                  Official Press ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
