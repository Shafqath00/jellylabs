import React, { useState, useEffect } from 'react';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';
import icon4 from '../assets/4.png';
import logo from '../assets/jelly.png';

export default function JellyLabs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-6');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.dataset.counter);
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / 1200, 1);
            el.textContent = '£' + Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll('[data-counter]').forEach((el) => counterObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* 1. UPDATED GOOGLE FONTS URL HERE */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Merriweather:ital,wght@0,700;0,900;1,700;1,900&display=swap');
      `}</style>

      {/* 2. UPDATED BODY FONT TO 'Inter' */}
      <div className="font-['Inter',sans-serif] bg-[#FDFAF5] text-[#2D2820] overflow-x-hidden leading-[1.55]">

        {/* HEADER */}
        <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
          <nav
            className={`pointer-events-auto w-[calc(100%-24px)] max-w-[1140px] mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] gap-4 px-4 py-2.5 rounded-2xl border transition-all duration-300 ${isScrolled
              ? 'bg-[#FFFEF9]/95 shadow-[0_4px_24px_rgba(26,23,18,0.08)] border-[#E8E1D6]/50 backdrop-blur-xl'
              : 'bg-[#FDFAF5]/85 border-[#E8E1D6] backdrop-blur-md'
              }`}
          >
            {/* LOGO AREA */}
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <img src={logo} alt="JellyLabs Logo" className="w-10 h-10 md:w-12 md:h-12" />
            </a>

            {/* DESKTOP LINKS (Hidden on Mobile) */}
            <div className="hidden md:flex items-center gap-1">
              <a href="#suite" className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">Suite</a>
              {/* <a href="/explainer" className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">Explainer</a> */}
              <a href="#pricing" className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">Pricing</a>
              <a href="#company" className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">About</a>
            </div>

            {/* DESKTOP CTA (Hidden on Mobile) */}
            <div className="hidden md:block justify-self-end">
              <a href="#suite" className="inline-flex items-center whitespace-nowrap bg-[#1A1712] text-[#FFFEF9] border-none font-semibold text-[0.9rem] tracking-[0.01em] px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 no-underline hover:bg-[#4338CA] hover:-translate-y-[1px]">
                Get Started
              </a>
            </div>

            {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop) */}
            <button
              className="md:hidden flex items-center justify-center p-2 text-[#1A1712] rounded-lg hover:bg-[#F3EFE7] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                // Close (X) Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu (Hamburger) Icon
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* MOBILE DROPDOWN MENU */}
          {isMobileMenuOpen && (
            <div className="pointer-events-auto md:hidden absolute top-[calc(100%+8px)] left-4 right-4 bg-[#FFFEF9] border border-[#E8E1D6] shadow-[0_4px_24px_rgba(26,23,18,0.08)] rounded-2xl p-4 flex flex-col gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <a href="#suite" onClick={() => setIsMobileMenuOpen(false)} className="text-[#6B6457] font-medium text-[1rem] px-4 py-3 rounded-lg hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">Suite</a>
              {/* <a href="/explainer" onClick={() => setIsMobileMenuOpen(false)} className="text-[#6B6457] font-medium text-[1rem] px-4 py-3 rounded-lg hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">Explainer Video</a> */}
              <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-[#6B6457] font-medium text-[1rem] px-4 py-3 rounded-lg hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">Pricing</a>
              <a href="#company" onClick={() => setIsMobileMenuOpen(false)} className="text-[#6B6457] font-medium text-[1rem] px-4 py-3 rounded-lg hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">About</a>

              <div className="h-px bg-[#E8E1D6] my-2 w-full" /> {/* Divider */}

              <a href="#suite" onClick={() => setIsMobileMenuOpen(false)} className="text-center bg-[#1A1712] text-[#FFFEF9] font-semibold text-[1rem] px-5 py-3 rounded-xl hover:bg-[#4338CA] transition-colors">
                Get Started
              </a>
            </div>
          )}
        </header>

        <main>
          {/* HERO */}
          <section className="bg-[#FDFAF5] min-h-screen flex items-center pt-[140px] pb-[80px] relative overflow-hidden">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] gap-12 items-center">

                <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out grid gap-6 max-w-[700px]">

                  {/* UPDATED HEADING FONT TO 'Merriweather' */}
                  <h1 className="font-['Merriweather',Georgia,serif] text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.02] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                    The creator economy,{' '}
                    <em className="text-[#4338CA] not-italic italic">finally one platform.</em>
                  </h1>

                  <p className="text-[1.1rem] leading-[1.7] text-[#6B6457] max-w-[620px] font-normal">
                    JellyLabs builds the integrated tools creators and brands have been waiting for — one ecosystem, three products, zero fragmentation.
                  </p>

                  <div className="flex flex-wrap gap-3 items-center mt-1">
                    <a href="#suite" className="inline-flex items-center whitespace-nowrap bg-[#1A1712] text-[#FFFEF9] border-none font-semibold text-[0.95rem] tracking-[0.01em] px-6 py-[13px] rounded-xl cursor-pointer transition-all duration-200 no-underline hover:bg-[#4338CA] hover:-translate-y-[1px]">
                      Explore the Suite →
                    </a>
                    {/* <a href="/explainer" className="inline-flex items-center bg-[#FFFEF9] text-[#2D2820] border-[1.5px] border-[#D4CABC] font-semibold text-[0.95rem] px-6 py-[13px] rounded-xl cursor-pointer transition-all duration-200 no-underline hover:bg-[#F3EFE7] hover:border-[#A8A29E] hover:-translate-y-[1px] gap-2">
                      <svg className="w-4 h-4 text-[#4338CA] fill-current" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      Watch Explainer
                    </a> */}
                  </div>

                  <div className="flex gap-8 mt-2 pt-5 border-t border-[#E8E1D6]">
                    {[['20+', 'Beta users'], ['200+', 'Businesses'], ['3', 'Products']].map(([n, l]) => (
                      <div key={l}>
                        {/* UPDATED HEADING FONT TO 'Merriweather' */}
                        <div className="font-['Merriweather',Georgia,serif] font-black text-[1.6rem] text-[#1A1712] leading-none">{n}</div>
                        <div className="text-[0.78rem] text-[#6B6457] mt-1 font-medium">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Cards */}
                <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out delay-150 relative min-h-[320px] sm:min-h-[460px]">

                  {/* JellyLinks */}
                  <article className="absolute w-[min(320px,82vw)] top-0 right-10 rotate-[-4deg] px-6 py-[22px] bg-[#FFFEF9] border border-[#E8E1D6] rounded-[18px] shadow-[0_8px_40px_rgba(26,23,18,0.07),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 ease-out cursor-default hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_20px_60px_rgba(26,23,18,0.11)] hover:z-10">
                    <div className="h-[3px] rounded-full mb-[18px] bg-[#4338CA]" />
                    <div className="flex justify-between items-center mb-4">
                      {/* UPDATED HEADING FONT TO 'Merriweather' */}
                      <strong className="font-['Merriweather',Georgia,serif] text-[#1A1712] text-base">JellyLinks</strong>
                      <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">Live</span>
                    </div>
                    <div className="grid gap-2">
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[75%]" />
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[60%]" />
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[80%]" />
                    </div>
                    <div className="flex justify-between mt-4 text-[0.8rem] font-semibold text-[#6B6457]">
                      <span>DM to checkout</span><span className="text-[#4338CA]">Verified ✓</span>
                    </div>
                  </article>

                  {/* JellyShop */}
                  <article className="absolute w-[min(320px,82vw)] top-[150px] right-0 rotate-[4deg] px-6 py-[22px] bg-[#FFFEF9] border border-[#E8E1D6] rounded-[18px] shadow-[0_8px_40px_rgba(26,23,18,0.07),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 ease-out cursor-default hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_20px_60px_rgba(26,23,18,0.11)] hover:z-10">
                    <div className="h-[3px] rounded-full mb-[18px] bg-[#059669]" />
                    <div className="flex justify-between items-center mb-4">
                      {/* UPDATED HEADING FONT TO 'Merriweather' */}
                      <strong className="font-['Merriweather',Georgia,serif] text-[#1A1712] text-base">JellyShop</strong>
                      <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-[#F3EFE7] text-[#6B6457] border border-[#E8E1D6]">Phase 2</span>
                    </div>
                    <div className="grid gap-2">
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[85%]" />
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[55%]" />
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[70%]" />
                    </div>
                    <div className="flex justify-between mt-4 text-[0.8rem] font-semibold text-[#6B6457]">
                      <span>25 products</span><span className="text-[#059669]">Stripe</span>
                    </div>
                  </article>

                  {/* JellySites */}
                  <article className="absolute w-[min(320px,82vw)] top-[300px] right-[60px] rotate-[-2deg] px-6 py-[22px] bg-[#FFFEF9] border border-[#E8E1D6] rounded-[18px] shadow-[0_8px_40px_rgba(26,23,18,0.07),inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-300 ease-out cursor-default hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[0_20px_60px_rgba(26,23,18,0.11)] hover:z-10">
                    <div className="h-[3px] rounded-full mb-[18px] bg-[#0284C7]" />
                    <div className="flex justify-between items-center mb-4">
                      {/* UPDATED HEADING FONT TO 'Merriweather' */}
                      <strong className="font-['Merriweather',Georgia,serif] text-[#1A1712] text-base">JellySites</strong>
                      <span className="text-[0.65rem] font-bold tracking-[0.1em] uppercase px-2.5 py-1 rounded-full bg-[#F3EFE7] text-[#6B6457] border border-[#E8E1D6]">Phase 3</span>
                    </div>
                    <div className="grid gap-2">
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[80%]" />
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[65%]" />
                      <div className="h-2 rounded-full bg-[#F3EFE7] mb-2 w-[75%]" />
                    </div>
                    <div className="flex justify-between mt-4 text-[0.8rem] font-semibold text-[#6B6457]">
                      <span>Pages</span><span className="text-[#0284C7]">Lead CRM</span>
                    </div>
                  </article>

                </div>
              </div>
            </div>
          </section>

          {/* PROBLEM SECTION */}
          <section className="bg-[#FAF8F4] py-[80px] pb-[96px]" id="story">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-center max-w-[680px] mx-auto mb-[52px] grid gap-4 justify-items-center">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">The problem</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  Creators are paying for <em className="text-[#4338CA] italic">chaos.</em>
                </h2>
                <p className="text-[1.05rem] leading-[1.72] text-[#6B6457]">
                  Today's creators stitch together five to seven disconnected tools: bio-link, automation, e-commerce, bookings, forms, CRM, invoicing. Each has a separate login. A separate bill. None of them talk.
                </p>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out bg-[#FFFEF9] border border-[#E8E1D6] rounded-[22px] p-[36px_36px_32px] shadow-[0_4px_20px_rgba(26,23,18,0.04)]">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-3.5">
                  {[
                    ['Bio-Link Tool', '£8/mo'],
                    ['Automation App', '£13/mo'],
                    ['E-commerce', '10% fee'],
                    ['Bookings', '£10/mo'],
                    ['Form Builder', '£25/mo'],
                    ['CRM / Email', '£12/mo'],
                    ['Invoicing', 'Add-ons'],
                  ].map(([name, price]) => (
                    <div key={name} className="bg-[#FFFEF9] border border-[#E8E1D6] rounded-xl px-4 py-[18px] flex flex-col justify-between min-h-[100px] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(26,23,18,0.07)] hover:border-[#D4CABC] hover:-translate-y-0.5">
                      <span className="font-semibold text-[0.88rem] text-[#1A1712]">{name}</span>
                      <span className="inline-block w-fit text-[0.7rem] font-bold text-[#B91C1C] bg-[#FEF2F2] border border-[#FECACA] px-2.5 py-1 rounded-lg mt-2.5">{price}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#1A1712] rounded-2xl px-9 py-7 flex items-center justify-center gap-7 flex-wrap text-center mt-5">
                  <div>
                    {/* UPDATED HEADING FONT TO 'Merriweather' */}
                    <div className="font-['Merriweather',Georgia,serif] text-5xl font-black text-white tracking-[-0.03em] leading-none" data-counter="127">£68+</div>
                    <div className="text-white/40 text-[0.78rem] font-semibold mt-1 uppercase tracking-[0.08em]">per month</div>
                  </div>
                  <div className="w-[1px] h-10 bg-white/10" />
                  <div className="text-white/65 text-base">
                    <strong className="text-white">7</strong> separate logins. <span className="text-[#818CF8] font-bold">Zero</span> integration.
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PORTAL SECTION */}
          <section className="bg-[#FDFAF5] py-[80px] pb-[96px]">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-center max-w-[680px] mx-auto mb-[52px] grid gap-4 justify-items-center">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">Inside JellyLinks</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  The Collaboration Portal.
                </h2>
                <p className="text-[1.05rem] leading-[1.72] text-[#6B6457]">
                  The first platform where creators and brands meet: verified, structured, and entirely within one ecosystem.
                </p>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out max-w-[900px] mx-auto delay-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#FFFEF9] border border-[#E8E1D6] rounded-[22px] px-10 py-9 shadow-[0_4px_20px_rgba(26,23,18,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,23,18,0.08)]">
                    {/* UPDATED HEADING FONT TO 'Merriweather' */}
                    <h3 className="font-['Merriweather',Georgia,serif] text-[1.5rem] font-bold text-[#1A1712] mb-6">For Creators</h3>
                    <ul className="list-none grid gap-4">
                      {['Verified, paid enquiries only', 'Auto-managed retainers', 'Full deal history', 'No agencies'].map(item => (
                        <li key={item} className="flex gap-3 items-start text-[#6B6457] font-medium text-[0.95rem]">
                          <span className="w-[22px] h-[22px] rounded-full inline-flex items-center justify-center shrink-0 mt-0.5 bg-[#EEF2FF] border border-[#C7D2FE] text-[#4338CA]">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 16.6 4.9 12.3l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4z" /></svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#FFFEF9] border border-[#E8E1D6] rounded-[22px] px-10 py-9 shadow-[0_4px_20px_rgba(26,23,18,0.04)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(26,23,18,0.08)]">
                    {/* UPDATED HEADING FONT TO 'Merriweather' */}
                    <h3 className="font-['Merriweather',Georgia,serif] text-[1.5rem] font-bold text-[#1A1712] mb-6">For Brands</h3>
                    <ul className="list-none grid gap-4">
                      {['Verified Meta-source Instagram analytics', 'Structured proposal flow', 'Subscription deal management', '10k–100k creator segment access'].map(item => (
                        <li key={item} className="flex gap-3 items-start text-[#6B6457] font-medium text-[0.95rem]">
                          <span className="w-[22px] h-[22px] rounded-full inline-flex items-center justify-center shrink-0 mt-0.5 bg-[#F0F9FF] border border-[#BAE6FD] text-[#0284C7]">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 16.6 4.9 12.3l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4z" /></svg>
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center mt-5">
                  <div className="inline-flex items-center gap-4 bg-[#1A1712] rounded-2xl px-7 py-3.5 mt-6">
                    <span className="text-[#818CF8] font-bold text-[1.1rem] tracking-[-0.01em]">5% / 3%</span>
                    <span className="w-[1px] h-7 bg-white/10" />
                    <span className="text-white/60 text-[0.85rem] font-medium">Commission rate</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* PRODUCTS SUITE */}
          <section className="bg-[#FAF8F4] py-[80px] pb-[96px]" id="suite">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out max-w-[680px] mb-12 grid gap-3.5">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">The solution</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  Meet the Jelly Creator Suite.
                </h2>
                <p className="text-[1.05rem] leading-[1.72] text-[#6B6457]">
                  Three focused products. One shared platform layer. Built for creators who want to run a business without stitching one together.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { cls: 'hover:border-[#4338CA]', num: '01', name: 'JellyLinks', desc: 'The all-in-one creator-business operating system.', badge: 'bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]', badgeText: 'Phase 1 · Beta testing', arrowHover: 'group-hover:text-[#4338CA]', lineBg: 'bg-[#4338CA]', delay: 'delay-0', link: 'https://jellylinks.com', icon: icon2 },
                  { cls: 'hover:border-[#059669]', num: '02', name: 'JellyShop', desc: 'Lightweight, creator-first e-commerce.', badge: 'bg-[#F3EFE7] text-[#6B6457] border-[#E8E1D6]', badgeText: 'Phase 2 · Coming soon', arrowHover: 'group-hover:text-[#059669]', lineBg: 'bg-[#059669]', delay: 'delay-[100ms]', link: '#', icon: icon3 },
                  { cls: 'hover:border-[#0284C7]', num: '03', name: 'JellySites', desc: 'Landing pages with built-in lead CRM.', badge: 'bg-[#F3EFE7] text-[#6B6457] border-[#E8E1D6]', badgeText: 'Phase 3 · Coming soon', arrowHover: 'group-hover:text-[#0284C7]', lineBg: 'bg-[#0284C7]', delay: 'delay-[200ms]', link: '#', icon: icon4 },
                ].map(({ cls, num, name, desc, badge, badgeText, arrowHover, lineBg, delay, link, icon }) => (
                  <a key={name} href={link} className={`reveal opacity-0 translate-y-6 transition-all duration-700 ease-out ${delay} bg-[#FFFEF9] border border-[#E8E1D6] rounded-2xl px-8 py-9 min-h-[340px] flex flex-col relative overflow-hidden group hover:shadow-[0_20px_60px_rgba(26,23,18,0.09)] hover:-translate-y-1 no-underline ${cls}`}>
                    <div className={`absolute top-0 left-0 right-0 h-[3px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${lineBg}`} />
                    {/* <span className="font-['Merriweather',serif] text-6xl leading-none font-black opacity-[0.06] text-[#1A1712] absolute top-5 right-6">{num}</span> */}
                    <div className="flex-1">
                      {/* Product icon */}
                      <div className="mb-5 w-20 h-20  flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <img src={icon} alt={name + ' icon'} className="w-20 h-20 object-contain" />
                      </div>
                      <h3 className="font-['Merriweather',serif] text-[1.6rem] font-bold text-[#e8440a] mb-2.5">{name}</h3>
                      <p className="text-[#6B6457] text-base leading-[1.65]">{desc}</p>
                    </div>

                    <div className="flex items-center justify-between mt-6 pt-5 border-t border-[#F3EFE7]">
                      <span className={`inline-flex items-center gap-1.5 text-[0.68rem] font-bold tracking-[0.08em] uppercase px-3 py-1.5 rounded-full border ${badge}`}>{badgeText}</span>
                      <span className={`text-[0.88rem] font-bold text-[#6B6457] transition-all duration-200 inline-flex items-center gap-1 ${arrowHover} group-hover:translate-x-[3px]`}>Explore →</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* PILLARS */}
          <section className="bg-[#FFFEF9] py-[80px] pb-[96px]">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out max-w-[680px] mb-11 grid gap-3.5">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">Why JellyLabs</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  Built different. Built deliberately.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { accent: 'bg-[#4338CA]', title: 'One ecosystem.', body: 'Three products. Zero context switching.', delay: 'delay-0' },
                  { accent: 'bg-[#059669]', title: 'Creator-first.', body: 'Built for the 10k–100k follower segment that enterprise platforms ignore.', delay: 'delay-[100ms]' },
                  { accent: 'bg-[#0284C7]', title: 'Verified, not estimated.', body: 'Real Meta-source data. Real identity checks. Real attribution from social to revenue.', delay: 'delay-[200ms]' },
                ].map(({ accent, title, body, delay }) => (
                  <article key={title} className={`reveal opacity-0 translate-y-6 transition-all duration-700 ease-out ${delay} bg-[#FDFAF5] border border-[#E8E1D6] rounded-[18px] px-7 py-8 relative overflow-hidden`}>
                    <div className={`absolute top-0 left-0 w-1 h-full rounded-l-[18px] ${accent}`} />
                    {/* UPDATED HEADING FONT TO 'Merriweather' */}
                    <h3 className="font-['Merriweather',Georgia,serif] text-[1.45rem] text-[#1A1712] mb-2.5 pl-4">{title}</h3>
                    <p className="text-[#6B6457] text-[0.95rem] leading-[1.65] pl-4">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* SPLIT COPY */}
          <section className="bg-[#FAF8F4] py-[80px] pb-[96px]">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out grid gap-3.5">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">Built for both sides</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance] italic">
                  The first platform built for both sides of the creator economy.
                </h2>
              </div>
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out grid gap-5 pt-0 md:pt-12 delay-100">
                <p className="text-[1.05rem] leading-[1.72] text-[#6B6457]">
                  Creators get the full operating system: JellyLinks for workflows, JellyShop for selling, and JellySites for pages and lead capture.
                </p>
                <p className="text-[1.05rem] leading-[1.72] text-[#6B6457]">
                  Brands get verified access to those creators through the Portal. Discovery, verification, deal-making, payment, content distribution, and audience activation happen inside one platform.
                </p>
              </div>
            </div>
          </section>

          {/* COMPANY */}
          <section className="bg-[#FFFEF9] py-[80px] pb-[96px]" id="company">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out max-w-[680px] mb-11 grid gap-3.5">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">The company</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  JellyLabs.
                </h2>
                <p className="text-[1.05rem] leading-[1.72] text-[#6B6457] max-w-[600px]">
                  Founded in 2025 and incorporated in Sheffield, JellyLabs is product-led from day one. The goal is simple: help make the UK a serious home for creator-economy infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  ['5', 'years building products', 'delay-0'],
                  ['200+', 'businesses supported', 'delay-[60ms]'],
                  ['20+', 'active beta users', 'delay-[120ms]'],
                  ['1', 'Creator Ambassador signed', 'delay-[180ms]'],
                ].map(([num, label, delay]) => (
                  <div key={label} className={`reveal opacity-0 translate-y-6 transition-all duration-700 ease-out ${delay} bg-[#FDFAF5] border border-[#E8E1D6] rounded-2xl px-6 py-7`}>
                    {/* UPDATED HEADING FONT TO 'Merriweather' */}
                    <div className="font-['Merriweather',Georgia,serif] text-[2.4rem] font-black text-[#1A1712] leading-none mb-2 tracking-[-0.02em]">{num}</div>
                    <div className="text-[#6B6457] text-[0.85rem] font-medium">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#1A1712] relative overflow-hidden py-[80px]">
            <div className="absolute -top-[60px] -right-[60px] w-[320px] h-[320px] rounded-full bg-[rgba(99,102,241,0.08)]" />
            <div className="absolute -bottom-[80px] -left-[40px] w-[280px] h-[280px] rounded-full bg-[rgba(253,250,245,0.04)]" />

            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto relative z-10 flex flex-col gap-8 items-center text-center">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col gap-5 items-center max-w-[700px]">
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] font-black text-white leading-[1.06] italic [text-wrap:balance]">
                  Ready to see what creators have been waiting for?
                </h2>
                <p className="text-white/50 text-base max-w-[480px]">
                  One ecosystem. Three products. Built for the creators enterprise platforms ignore.
                </p>
              </div>
              <div className="flex flex-wrap gap-3.5 justify-center">
                <a href="#" className="bg-[#4338CA] text-white font-['Inter',sans-serif] font-semibold text-[0.95rem] px-6 py-3 rounded-xl border-none cursor-pointer transition-all duration-200 no-underline inline-flex items-center hover:bg-[#4F46E5] hover:-translate-y-[1px]">
                  Explore JellyLinks →
                </a>
                <a href="mailto:hello@jellylabs.co.uk" className="bg-transparent text-white/75 font-['Inter',sans-serif] font-semibold text-[0.95rem] px-6 py-3 rounded-xl border border-white/20 cursor-pointer transition-all duration-200 no-underline inline-flex items-center hover:bg-white/10 hover:text-white hover:-translate-y-[1px]">
                  Talk to the founder
                </a>
              </div>
            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1A1712] border-t border-white/5 pt-14 pb-7">
          <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <img src={logo} alt="JellyLabs Logo" className="w-12 h-12 " />
                  {/* UPDATED HEADING FONT TO 'Merriweather' */}
                  <span className="font-['Merriweather',Georgia,serif] font-bold text-[1.1rem] text-white">JellyLabs</span>
                </div>
                <p className="text-white/45 text-[0.88rem] leading-[1.65] max-w-[300px] mb-4.5">
                  Integrated creator economy infrastructure, built from Sheffield for creators and brands.
                </p>
                <div className="flex gap-2 mt-4">
                  {[['Ig', 'Instagram'], ['In', 'LinkedIn'], ['X', 'X']].map(([s, l]) => (
                    <a key={l} href="#" aria-label={l} className="w-[34px] h-[34px] border border-white/15 rounded-md grid place-items-center text-white/45 text-[0.75rem] font-bold no-underline transition-all duration-200 hover:text-white hover:border-white/35 hover:bg-white/5">
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4.5">Suite</h3>
                <div className="grid gap-3">
                  {['JellyLinks', 'JellyShop', 'JellySites'].map(l => (
                    <a key={l} href="#" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">{l}</a>
                  ))}
                </div>
              </div>

              <div>
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4.5">Company</h3>
                <div className="grid gap-3">
                  <a href="#company" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">About</a>
                  <a href="mailto:hello@jellylabs.co.uk" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">Contact</a>
                  <a href="#" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">Privacy</a>
                </div>
              </div>

              <div>
                {/* UPDATED HEADING FONT TO 'Merriweather' */}
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4.5">Address</h3>
                <p className="text-white/45 text-[0.92rem] leading-[1.65]">
                  3rd Floor, 86-90 Paul Street,<br />
                  London, England,<br />
                  United Kingdom, EC2A 4NE
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-5 flex justify-between flex-wrap gap-3">
              <span className="text-white/30 text-[0.82rem]">© 2026 JellyLabs. All rights reserved.</span>
              <span className="text-white/30 text-[0.82rem]">JellyLabs Ltd</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}