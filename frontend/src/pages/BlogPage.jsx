import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── Blog Data ───────────────────────────────────────────────────────────────
const featuredPost = {
  _id: 'blog-1',
  category: 'Style Guide',
  title: 'How to Choose the Perfect Lehenga for Your Body Type',
  excerpt:
    'From flared silhouettes to A-line cuts — we break down exactly which Lehenga style will make you feel like royalty, whatever your shape.',
  author: 'Rivaaz Editorial',
  date: 'June 12, 2025',
  readTime: '6 min read',
  image: 'https://houseofpanchhi.com/cdn/shop/articles/How_to_Choose_the_Perfect_Lehenga_Choli_for_a_Wedding_Function_720x.webp?v=1776935058',
};

const posts = [
  {
    _id: 'blog-2',
    category: 'Wedding',
    title: 'The Complete Guide to Dressing for a Destination Wedding',
    excerpt:
      'Silk or georgette? Lehenga or saree? We answer every question a guest or bride-to-be might have about destination wedding attire.',
    author: 'Rivaaz Editorial',
    date: 'May 28, 2025',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80&fit=crop',
  },
  {
    _id: 'blog-3',
    category: 'Fabric Care',
    title: '5 Rules for Storing Your Silk Sarees the Right Way',
    excerpt:
      'Your precious silks deserve proper care. Follow these five golden rules to keep the lustre alive for decades.',
    author: 'Rivaaz Editorial',
    date: 'May 14, 2025',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80&fit=crop',
  },
  {
    _id: 'blog-4',
    category: 'Trend Report',
    title: 'Pastel Lehengas: The Softest Trend Dominating 2025 Weddings',
    excerpt:
      'Dusty roses, sage greens, and icy lavenders are rewriting the rules of bridal colour. Here\'s how to wear them.',
    author: 'Rivaaz Editorial',
    date: 'April 30, 2025',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=800&q=80&fit=crop',
  },
  {
    _id: 'blog-5',
    category: 'Heritage',
    title: 'Banarasi Weaves: A 500-Year Story Woven in Silk and Gold',
    excerpt:
      'Journey into the ancient lanes of Varanasi and discover how master weavers keep a centuries-old tradition alive in every thread.',
    author: 'Rivaaz Editorial',
    date: 'April 10, 2025',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800&q=80&fit=crop',
  },
  {
    _id: 'blog-6',
    category: 'Style Guide',
    title: 'Kurti Styling 101: From Morning Meetings to Evening Outings',
    excerpt:
      'A well-chosen kurti is the most versatile garment in your wardrobe. Learn how to style it for every occasion without buying a new outfit.',
    author: 'Rivaaz Editorial',
    date: 'March 22, 2025',
    readTime: '5 min read',
    image: 'https://www.livabybirlacellulose.com/uploads/uploadimages/1ca1b963e37942b01a86ab840ba1ae13.jpg',
  },
];

const categories = ['All', 'Style Guide', 'Wedding', 'Fabric Care', 'Trend Report', 'Heritage'];

// ─── Category Pill ────────────────────────────────────────────────────────────
const CategoryPill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`px-5 py-2 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 border ${
      active
        ? 'bg-stone-900 text-white border-stone-900'
        : 'bg-transparent text-stone-600 border-stone-200 hover:border-stone-800 hover:text-stone-900'
    }`}
  >
    {label}
  </button>
);

// ─── Blog Card ────────────────────────────────────────────────────────────────
const BlogCard = ({ post }) => (
  <article className="group">
    <Link to={`/blog/${post._id}`}>
      <div className="overflow-hidden mb-5 relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-white/95 px-3 py-1">
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700">
            {post.category}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs text-stone-400 font-light">{post.date}</span>
        <span className="text-stone-200">·</span>
        <span className="text-xs text-stone-400 font-light">{post.readTime}</span>
      </div>
      <h3 className="font-marcellus text-xl text-stone-900 mb-3 leading-snug group-hover:text-amber-700 transition-colors duration-300">
        {post.title}
      </h3>
      <p className="text-sm text-stone-500 font-light leading-relaxed mb-4 line-clamp-2">
        {post.excerpt}
      </p>
      <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-stone-800 group-hover:text-amber-700 transition-colors border-b border-transparent group-hover:border-amber-700 pb-0.5">
        Read Article
        <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  </article>
);

// ─── BlogPage ─────────────────────────────────────────────────────────────────
const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#FDFBF7] text-stone-800 font-montserrat overflow-x-hidden min-h-screen">

      {/* ── Page Header ── */}
      <div className="relative pt-28 pb-16 px-4 text-center border-b border-stone-100">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/50 to-transparent pointer-events-none" />
        <div className="relative max-w-2xl mx-auto">
          <h4 className="text-amber-700 font-bold tracking-[0.3em] text-xs uppercase mb-4">
            Stories &amp; Inspiration
          </h4>
          <h1 className="font-marcellus text-5xl sm:text-6xl text-stone-900 mb-6 tracking-tight">
            The Rivaaz Journal
          </h1>
          <div className="h-[1px] w-16 bg-stone-300 mx-auto mb-6" />
          <p className="text-stone-500 text-base font-light leading-relaxed">
            Style guides, heritage stories, fabric care tips, and trend reports — everything
            you need to wear your culture with confidence.
          </p>
        </div>
      </div>

      {/* ── Featured Post ── */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <Link to={`/blog/${featuredPost._id}`} className="group block">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden shadow-sm border border-stone-100">
            {/* Image */}
            <div className="overflow-hidden relative h-72 md:h-auto">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
            {/* Content */}
            <div className="bg-white p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-amber-700 border border-amber-200 px-3 py-1">
                  {featuredPost.category}
                </span>
                <span className="text-xs text-stone-400 font-light">Featured</span>
              </div>
              <h2 className="font-marcellus text-3xl md:text-4xl text-stone-900 mb-5 leading-tight group-hover:text-amber-700 transition-colors duration-300">
                {featuredPost.title}
              </h2>
              <p className="text-stone-500 font-light leading-relaxed mb-8 text-sm md:text-base">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                    {featuredPost.author}
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">
                    {featuredPost.date} · {featuredPost.readTime}
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase text-stone-800 group-hover:text-amber-700 transition-colors border-b border-transparent group-hover:border-amber-700 pb-0.5">
                  Read More
                  <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* ── Category Filter ── */}
      <div className="border-t border-b border-stone-100 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-start">
            <span className="text-xs font-bold tracking-widest uppercase text-stone-400 mr-2 hidden md:inline">
              Filter:
            </span>
            {categories.map((cat) => (
              <CategoryPill
                key={cat}
                label={cat}
                active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Post Grid ── */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {filtered.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-center text-stone-400 py-20 font-light text-sm">
            No articles in this category yet. Check back soon.
          </p>
        )}
      </div>

      {/* ── Newsletter Strip ── */}
      <div className="bg-[#1c1c1c] text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="relative max-w-xl mx-auto">
          <h4 className="text-amber-200 font-bold tracking-[0.3em] text-xs uppercase mb-4">
            Never Miss a Story
          </h4>
          <h2 className="font-marcellus text-4xl text-white mb-3">
            Subscribe to the Journal
          </h2>
          <p className="text-stone-400 font-light text-sm mb-10">
            Trend reports, styling tips, and exclusive offers delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="flex-1 max-w-sm p-3 bg-white/10 border border-white/20 focus:outline-none focus:border-amber-300 placeholder-stone-500 text-white text-sm"
            />
            <button
              type="submit"
              className="bg-white text-stone-900 font-bold p-3 px-8 uppercase tracking-widest text-xs hover:bg-amber-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

    </div>
  );
};

export default BlogPage;
