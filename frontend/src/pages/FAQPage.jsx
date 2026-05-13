import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// ─── FAQ Data (SEO-optimised questions) ──────────────────────────────────────
const faqData = [
  {
    category: 'Orders & Shipping',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
      </svg>
    ),
    items: [
      {
        q: 'How long does delivery take for sarees and lehengas?',
        a: 'Standard delivery takes 5–7 business days across India. Express delivery (2–3 days) is available at checkout for most pin codes. For stitched garments, please allow an additional 3–5 days for tailoring before dispatch.',
      },
      {
        q: 'Do you offer free shipping?',
        a: 'Yes! We offer free standard shipping on all orders above ₹1,499. Orders below this amount carry a flat ₹99 shipping fee anywhere in India.',
      },
      {
        q: 'Can I track my order?',
        a: 'Absolutely. Once your order is dispatched, you will receive a tracking link via SMS and email. You can also track your order anytime from the "My Orders" section in your account.',
      },
      {
        q: 'Do you ship internationally?',
        a: 'Currently we ship within India only. We are working on international shipping and expect to launch it by late 2025. Sign up for our newsletter to be notified when it goes live.',
      },
    ],
  },
  {
    category: 'Products & Sizing',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
      </svg>
    ),
    items: [
      {
        q: 'How do I find the right size for a lehenga or suit?',
        a: 'Each product page includes a detailed size chart with bust, waist, and hip measurements in centimetres. We recommend measuring yourself with a soft tape and comparing against the chart. For further guidance, our team is available on WhatsApp at +91-XXXXX-XXXXX.',
      },
      {
        q: 'Are the colours of products accurate to what I see on screen?',
        a: 'We make every effort to photograph our garments in natural light for accurate colour representation. However, slight variations can occur due to different screen calibrations. If you need a colour swatch before purchasing, contact us and we will do our best to help.',
      },
      {
        q: 'What fabrics do you use for your sarees and lehengas?',
        a: 'Our collection features a curated range of premium fabrics including pure silk, Banarasi silk, georgette, chanderi, raw silk, velvet, and net. The exact fabric for each product is mentioned in its description. We never use synthetic blends unless explicitly stated.',
      },
      {
        q: 'Do you offer custom stitching for lehengas and suits?',
        a: 'Yes! Custom stitching is available on select products. Simply add the item to your cart and choose "Custom Stitching" — you will be prompted to enter your measurements. Stitching takes 3–5 additional business days.',
      },
    ],
  },
  {
    category: 'Returns & Exchanges',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    items: [
      {
        q: 'What is your return policy?',
        a: 'We accept returns within 7 days of delivery for unused, unwashed items with all original tags intact. Custom stitched garments and items marked "Final Sale" are not eligible for returns. To initiate a return, email us at returns@rrivaaz.com with your order number.',
      },
      {
        q: 'How long does it take to receive my refund?',
        a: 'Once we receive and inspect your returned item (2–3 days), your refund will be processed within 5–7 business days to your original payment method. For store credit, the turnaround is faster — usually within 24 hours of inspection.',
      },
      {
        q: 'Can I exchange a saree for a different colour or size?',
        a: 'Yes, exchanges are welcome within 7 days of delivery subject to stock availability. If the desired item is unavailable, we will issue a full store credit valid for 12 months.',
      },
    ],
  },
  {
    category: 'Bridal & Special Orders',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    items: [
      {
        q: 'Do you take bridal outfit orders?',
        a: 'Yes, we specialise in bridal lehengas, sarees, and complete trousseau sets. For bridal orders we recommend booking at least 6–8 weeks in advance to allow time for customisation, stitching, and delivery. WhatsApp us to schedule a consultation.',
      },
      {
        q: 'Can I customise embroidery or colour for a bridal lehenga?',
        a: 'We offer customisation on select bridal styles including colour alterations and blouse modifications. Full embroidery customisation is available on a case-by-case basis with a minimum lead time of 8 weeks. Reach out to us with your vision and we will advise on feasibility.',
      },
      {
        q: 'Do you offer group discounts for wedding parties?',
        a: 'Yes! For orders of 5 or more matching outfits (e.g., bridesmaid sets), we offer a 10% group discount. Contact us directly via WhatsApp or email for group pricing and coordination.',
      },
    ],
  },
  {
    category: 'Payments & Security',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    items: [
      {
        q: 'What payment methods do you accept?',
        a: 'We accept UPI (GPay, PhonePe, Paytm), all major credit and debit cards, net banking, and Cash on Delivery (COD) for orders up to ₹5,000. EMI options are available for orders above ₹3,000 via select bank cards.',
      },
      {
        q: 'Is it safe to pay online on R Rivaaz?',
        a: 'Completely safe. Our checkout is secured with 256-bit SSL encryption. We use Razorpay, a PCI-DSS compliant payment gateway, meaning your card details are never stored on our servers.',
      },
      {
        q: 'Can I place a Cash on Delivery (COD) order?',
        a: 'Yes, COD is available for orders up to ₹5,000 across most pin codes in India. A small COD handling fee of ₹49 applies. You can check COD availability for your area during checkout.',
      },
    ],
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────
const AccordionItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={`border-b border-stone-100 transition-colors duration-200 ${open ? 'bg-amber-50/30' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-6 py-5 px-0 group"
        aria-expanded={open}
      >
        <span className={`font-marcellus text-base md:text-lg leading-snug transition-colors duration-200 ${open ? 'text-amber-700' : 'text-stone-800 group-hover:text-amber-700'}`}>
          {question}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center border rounded-full transition-all duration-300 mt-0.5 ${open ? 'border-amber-600 bg-amber-600 text-white rotate-45' : 'border-stone-300 text-stone-500 group-hover:border-amber-600 group-hover:text-amber-600'}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-stone-500 font-light text-sm leading-relaxed pr-10">{answer}</p>
      </div>
    </div>
  );
};

// ─── Category Section ─────────────────────────────────────────────────────────
const FaqSection = ({ section }) => (
  <div className="mb-14">
    <div className="flex items-center gap-3 mb-6">
      <div className="text-amber-700">{section.icon}</div>
      <h2 className="font-marcellus text-2xl text-stone-900">{section.category}</h2>
    </div>
    <div className="border-t border-stone-100">
      {section.items.map((item, i) => (
        <AccordionItem key={i} question={item.q} answer={item.a} />
      ))}
    </div>
  </div>
);

// ─── FAQPage ──────────────────────────────────────────────────────────────────
const FAQPage = () => {
  const [search, setSearch] = useState('');

  const filtered = search.trim()
    ? faqData
        .map((section) => ({
          ...section,
          items: section.items.filter(
            (item) =>
              item.q.toLowerCase().includes(search.toLowerCase()) ||
              item.a.toLowerCase().includes(search.toLowerCase())
          ),
        }))
        .filter((section) => section.items.length > 0)
    : faqData;

  return (
    <div className="bg-[#FDFBF7] text-stone-800 font-montserrat overflow-x-hidden min-h-screen">

      {/* ── Page Header ── */}
      <div className="relative pt-28 pb-16 px-4 text-center border-b border-stone-100 overflow-hidden">
        {/* BG watermark */}
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[10rem] md:text-[16rem] font-marcellus text-stone-100 opacity-100">FAQ</span>
        </span>
        <div className="relative max-w-2xl mx-auto">
          <h4 className="text-amber-700 font-bold tracking-[0.3em] text-xs uppercase mb-4">
            Help Centre
          </h4>
          <h1 className="font-marcellus text-5xl sm:text-6xl text-stone-900 mb-6 tracking-tight">
            Frequently Asked Questions
          </h1>
          <div className="h-[1px] w-16 bg-stone-300 mx-auto mb-6" />
          <p className="text-stone-500 text-base font-light leading-relaxed mb-10">
            Everything you need to know about our sarees, lehengas, shipping, returns,
            and custom stitching — answered.
          </p>
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search a question…"
              className="w-full p-4 pl-12 bg-white border border-stone-200 focus:outline-none focus:border-amber-500 text-sm placeholder-stone-400 shadow-sm"
            />
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ── Quick Category Nav ── */}
      <div className="border-b border-stone-100 bg-white sticky top-0 z-30 hidden md:block shadow-sm">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex gap-8 overflow-x-auto">
            {faqData.map((section) => (
              <a
                key={section.category}
                href={`#${section.category.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-2 py-4 text-[11px] font-bold tracking-[0.15em] uppercase text-stone-500 hover:text-amber-700 transition-colors whitespace-nowrap border-b-2 border-transparent hover:border-amber-700"
              >
                <span className="text-current">{section.icon}</span>
                {section.category}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQ Accordion ── */}
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {filtered.length > 0 ? (
          filtered.map((section) => (
            <div id={section.category.toLowerCase().replace(/\s+/g, '-')} key={section.category}>
              <FaqSection section={section} />
            </div>
          ))
        ) : (
          <div className="text-center py-24">
            <p className="font-marcellus text-2xl text-stone-400 mb-3">No results found</p>
            <p className="text-sm text-stone-400 font-light">
              Try a different keyword, or{' '}
              <button onClick={() => setSearch('')} className="underline hover:text-amber-700">
                clear the search
              </button>
              .
            </p>
          </div>
        )}
      </div>

      {/* ── Still Need Help CTA ── */}
      <div className="bg-white border-t border-stone-100 py-20 px-4 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="font-marcellus text-3xl text-stone-900 mb-3">
            Still have a question?
          </h2>
          <p className="text-stone-500 font-light text-sm mb-8 leading-relaxed">
            Our team is available Monday – Saturday, 10 am to 7 pm IST.
            We typically respond within a few hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/91XXXXXXXXXX"
              className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-amber-700 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.089.534 4.05 1.477 5.76L0 24l6.39-1.453A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.003-1.368l-.36-.214-3.732.849.868-3.63-.235-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Chat on WhatsApp
            </a>
            <a
              href="mailto:support@rrivaaz.com"
              className="inline-flex items-center justify-center gap-2 border border-stone-300 text-stone-700 px-8 py-4 text-xs font-bold tracking-widest uppercase hover:border-amber-700 hover:text-amber-700 transition-colors duration-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Support
            </a>
          </div>
        </div>
      </div>

      {/* ── Quick Links Footer Strip ── */}
      <div className="bg-[#1c1c1c] py-8 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="font-marcellus text-white text-lg">R Rivaaz</p>
          <div className="flex flex-wrap gap-6 justify-center">
            {['Shop Sarees', 'Bridal Collection', 'New Arrivals', 'Blog'].map((label) => (
              <Link
                key={label}
                to="/products"
                className="text-stone-400 text-xs font-bold tracking-widest uppercase hover:text-amber-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default FAQPage;
