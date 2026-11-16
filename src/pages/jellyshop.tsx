import React, { useState, useEffect } from 'react';
import icon2 from '../assets/2.png';
import icon3 from '../assets/3.png';
import icon4 from '../assets/4.png';
import logo from '../assets/jelly.png';

export default function JellyShop() {
  const [isScrolled, setIsScrolled] = useState(false);

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

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,700;0,900;1,700;1,900&display=swap');
      `}</style>

      <div className="font-['Inter',sans-serif] bg-[#FDFAF5] text-[#2D2820] overflow-x-hidden leading-[1.55]">

        {/* HEADER */}
        <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
          <nav
            className={`pointer-events-auto w-[calc(100%-24px)] max-w-[1140px] mx-auto grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-4 px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
              isScrolled
                ? 'bg-[#FFFEF9]/95 shadow-[0_4px_24px_rgba(26,23,18,0.08)] border-[#E8E1D6]/50 backdrop-blur-xl'
                : 'bg-[#FDFAF5]/85 border-[#E8E1D6] backdrop-blur-md'
            }`}
          >
            <a href="/" className="flex items-center gap-2.5 no-underline">
              <img src={logo} alt="JellyLabs Logo" className="w-9 h-9 object-contain" />
              <span className="font-['Merriweather',Georgia,serif] font-bold text-[1.05rem] text-[#1A1712] tracking-[-0.01em] hidden sm:block">
                JellyLabs
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              <a href="index.html#suite" className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline">
                &larr; All Products
              </a>
              <span className="text-[#1A1712] font-bold text-[0.9rem] px-3.5 py-2 rounded-lg">
                JellyShop
              </span>
            </div>

            <div className="justify-self-end">
              <a href="#pricing" className="inline-flex items-center whitespace-nowrap bg-[#1A1712] text-[#FFFEF9] border-none font-semibold text-[0.9rem] tracking-[0.01em] px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 no-underline hover:bg-[#4338CA] hover:-translate-y-[1px]">
                Waitlist
              </a>
            </div>
          </nav>
        </header>

        <main>
          {/* HERO */}
          <section className="bg-[#FDFAF5] min-h-screen flex items-center pt-[140px] pb-[80px] relative overflow-hidden">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1.1fr)_minmax(280px,0.9fr)] gap-12 items-center">

                <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out grid gap-6 max-w-[700px]">
                  <div className="inline-flex items-center gap-2 text-[0.75rem] font-bold tracking-[0.12em] uppercase text-[#6B6457] bg-[#F3EFE7] border border-[#E8E1D6] px-3.5 py-1.5 rounded-full w-fit">
                    Phase 2 · Coming Soon
                  </div>

                  <h1 className="font-['Merriweather',Georgia,serif] text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.02] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                    E-commerce, <em className="text-[#4338CA] not-italic italic">lightened.</em>
                  </h1>

                  <p className="text-[1.1rem] leading-[1.7] text-[#6B6457] max-w-[620px] font-normal">
                    JellyShop is the creator-first alternative to Shopify. Ready in minutes, not days. Built for solopreneurs, makers, and digital creators.
                  </p>

                  <div className="flex flex-wrap gap-3 items-center mt-1">
                    <a href="mailto:hello@jellylabs.co.uk?subject=JellyShop%20waitlist" className="inline-flex items-center whitespace-nowrap bg-[#1A1712] text-[#FFFEF9] border-none font-semibold text-[0.95rem] tracking-[0.01em] px-6 py-[13px] rounded-xl cursor-pointer transition-all duration-200 no-underline hover:bg-[#4338CA] hover:-translate-y-[1px]">
                      Join the waitlist →
                    </a>
                    <a href="#features" className="inline-flex items-center bg-transparent text-[#2D2820] border-[1.5px] border-[#D4CABC] font-semibold text-[0.95rem] px-6 py-[13px] rounded-xl cursor-pointer transition-all duration-200 no-underline hover:bg-[#F3EFE7] hover:border-[#A8A29E] hover:-translate-y-[1px]">
                      See features
                    </a>
                  </div>
                </div>

                {/* Floating Shop Preview Cards */}
                <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out delay-150 grid gap-4 max-w-[420px] ml-auto relative mt-10 md:mt-0">
                  <div className="inline-flex items-center gap-2 text-[0.7rem] font-bold tracking-[0.1em] uppercase text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] px-3 py-1.5 rounded-full w-fit mb-2">
                    Mobile-first storefront
                  </div>

                  {[
                    { title: 'Creator preset pack', desc: 'Digital download', price: '£19', color: 'bg-[#4338CA]' },
                    { title: 'Workshop seat', desc: 'Limited quantity', price: '£45', color: 'bg-[#059669]' },
                    { title: 'Template bundle', desc: 'Coupon linked', price: '£29', color: 'bg-[#0284C7]' },
                  ].map((item, idx) => (
                    <article key={idx} className="flex items-center gap-4 p-3 bg-[#FFFEF9] border border-[#E8E1D6] rounded-[16px] shadow-[0_8px_30px_rgba(26,23,18,0.05)] transition-transform hover:-translate-y-1">
                      <div className={`w-[72px] h-[72px] rounded-xl ${item.color}`} />
                      <div className="flex-1">
                        <strong className="font-['Merriweather',Georgia,serif] text-[#1A1712] block text-[0.95rem] mb-0.5">{item.title}</strong>
                        <p className="text-[#6B6457] text-[0.8rem] font-medium">{item.desc}</p>
                      </div>
                      <strong className="font-['Merriweather',serif] text-[#1A1712] text-lg pr-2">{item.price}</strong>
                    </article>
                  ))}
                </div>

              </div>
            </div>
          </section>

          {/* POSITIONING */}
          <section className="bg-[#FAF8F4] py-[80px] pb-[96px]">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out text-center max-w-[680px] mx-auto mb-[52px] grid gap-4 justify-items-center">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">Positioning</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  Built for creators who need selling, not software sprawl.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100">
                {/* Bad Example */}
                <article className="bg-[#FFFEF9] border border-[#E8E1D6] rounded-[22px] p-8 shadow-[0_4px_20px_rgba(26,23,18,0.04)]">
                  <h3 className="font-['Merriweather',serif] font-bold text-[1.4rem] text-[#1A1712] mb-6">Shopify and incumbents</h3>
                  <ul className="grid gap-4 list-none p-0 m-0">
                    {['Complex setup before a creator can sell', '£25+/mo before apps and extras', 'Heavyweight features most creators do not need', 'Storefront first, audience workflow second'].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-[#6B6457] font-medium text-[0.95rem]">
                        <span className="w-5 h-5 rounded-full bg-[#FEF2F2] border border-[#FECACA] text-[#B91C1C] flex items-center justify-center shrink-0 mt-0.5">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Good Example */}
                <article className="bg-[#FFFEF9] border-2 border-[#C7D2FE] rounded-[22px] p-8 shadow-[0_8px_30px_rgba(67,56,202,0.06)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-[#4338CA]" />
                  <h3 className="font-['Merriweather',serif] font-bold text-[1.4rem] text-[#1A1712] mb-6">JellyShop</h3>
                  <ul className="grid gap-4 list-none p-0 m-0">
                    {['Launch in minutes with focused setup', '£9.99/mo entry pricing', 'Made for solopreneurs and digital creators', 'Native connection to JellyLinks and the wider suite'].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-[#6B6457] font-medium text-[0.95rem]">
                        <span className="w-5 h-5 rounded-full bg-[#EEF2FF] border border-[#C7D2FE] text-[#4338CA] flex items-center justify-center shrink-0 mt-0.5">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9.2 16.6 4.9 12.3l1.4-1.4 2.9 2.9 8.5-8.5 1.4 1.4z"/></svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing" className="bg-[#FFFEF9] py-[80px] pb-[96px]">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out max-w-[680px] mb-12 grid gap-3.5">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">Two Tiers</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  Start lean. Upgrade when the shop becomes a channel.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal opacity-0 translate-y-6 transition-all duration-700 ease-out delay-100">
                {/* Lite */}
                <article className="bg-[#FDFAF5] border border-[#E8E1D6] rounded-[22px] p-8 transition-transform hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 mb-4 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#6B6457] bg-[#F3EFE7] border border-[#E8E1D6] rounded-full">
                    Lite
                  </span>
                  <h3 className="font-['Merriweather',serif] font-bold text-[1.5rem] text-[#1A1712] mb-2">JellyShop Lite</h3>
                  <p className="font-['Merriweather',serif] text-[2.8rem] text-[#1A1712] font-black leading-none mb-6">
                    £9.99<span className="font-['Inter',sans-serif] text-base text-[#6B6457] font-medium">/mo</span>
                  </p>
                  <ul className="grid gap-4 list-none p-0 m-0 border-t border-[#E8E1D6] pt-6">
                    {['Up to 25 products', 'Stripe-powered checkout', 'Mobile-first themes', '5% commission'].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-[#6B6457] font-medium text-[0.95rem]">
                        <span className="w-2 h-2 rounded-full bg-[#4338CA] opacity-50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>

                {/* Pro */}
                <article className="bg-[#FDFAF5] border border-[#E8E1D6] rounded-[22px] p-8 transition-transform hover:-translate-y-1">
                  <span className="inline-block px-3 py-1 mb-4 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-[#059669] bg-[#ECFDF5] border border-[#A7F3D0] rounded-full">
                    Pro
                  </span>
                  <h3 className="font-['Merriweather',serif] font-bold text-[1.5rem] text-[#1A1712] mb-2">JellyShop Pro</h3>
                  <p className="font-['Merriweather',serif] text-[2.8rem] text-[#1A1712] font-black leading-none mb-6">
                    £20<span className="font-['Inter',sans-serif] text-base text-[#6B6457] font-medium">/mo</span>
                  </p>
                  <ul className="grid gap-4 list-none p-0 m-0 border-t border-[#E8E1D6] pt-6">
                    {['Unlimited products', '2.5% commission', 'Multi-currency support', 'Abandoned cart recovery', 'Customer segmentation and pre-orders'].map((item, i) => (
                      <li key={i} className="flex gap-3 items-center text-[#6B6457] font-medium text-[0.95rem]">
                        <span className="w-2 h-2 rounded-full bg-[#059669] opacity-50 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </section>

          {/* FEATURES GRID */}
          <section id="features" className="bg-[#FAF8F4] py-[80px] pb-[96px]">
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out max-w-[680px] mb-12 grid gap-3.5">
                <p className="text-[0.72rem] font-bold tracking-[0.14em] uppercase text-[#4338CA]">Feature highlights</p>
                <div className="w-12 h-[3px] bg-[#4338CA] rounded-full" />
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] leading-[1.08] text-[#1A1712] tracking-[-0.02em] [text-wrap:balance]">
                  Everything a creator shop needs first.
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: 'Stripe checkout', desc: 'Reliable payments without a bloated commerce stack.', icon: <><path d="M3 10h18"/><rect x="3" y="5" width="18" height="14" rx="2"/></> },
                  { title: 'Mobile-first themes', desc: 'Designed for traffic that starts on social.', icon: <><path d="M10 18h4"/><rect x="7" y="2" width="10" height="20" rx="2"/></> },
                  { title: 'Multi-currency', desc: 'Pro shops can sell across borders with a cleaner buyer experience.', icon: <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6"/></> },
                  { title: 'Cart recovery', desc: 'Recover interest without duct-taping another app onto your shop.', icon: <><path d="M6 6h15l-2 8H8L6 6Z"/><path d="M6 6 5 3H2"/><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></> },
                  { title: 'Discount codes', desc: 'Connects directly with the JellyLinks coupon engine.', icon: <><path d="M4 7h16v10H4z"/><path d="m8 12 2 2 6-6"/></> },
                  { title: 'Suite integration', desc: 'Shop data works natively with the wider Jelly Creator Suite.', icon: <><path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/></> },
                ].map((item, i) => (
                  <article key={i} className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out bg-[#FFFEF9] border border-[#E8E1D6] rounded-[18px] p-7 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(26,23,18,0.06)] hover:-translate-y-1" style={{ transitionDelay: `${i * 50}ms` }}>
                    <div className="w-[48px] h-[48px] grid place-items-center rounded-xl bg-[#EEF2FF] text-[#4338CA] mb-5">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-current fill-none stroke-[2] stroke-linecap-round stroke-linejoin-round">
                        {item.icon}
                      </svg>
                    </div>
                    <h3 className="font-['Merriweather',serif] font-bold text-[1.2rem] text-[#1A1712] mb-2">{item.title}</h3>
                    <p className="text-[#6B6457] text-[0.95rem] leading-[1.6]">{item.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* CTA SECTIONS */}
          <section className="bg-[#1A1712] relative overflow-hidden py-[80px]">
            <div className="absolute -top-[60px] -right-[60px] w-[320px] h-[320px] rounded-full bg-[rgba(99,102,241,0.08)]" />
            <div className="absolute -bottom-[80px] -left-[40px] w-[280px] h-[280px] rounded-full bg-[rgba(253,250,245,0.04)]" />
            
            <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto relative z-10 flex flex-col gap-8 items-center text-center">
              
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out max-w-[800px] bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 mb-8 backdrop-blur-sm">
                <p className="font-bold tracking-[0.14em] uppercase text-[0.72rem] text-[#818CF8] mb-4">The Suite Advantage</p>
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(1.6rem,3vw,2.4rem)] font-black text-white leading-[1.2] italic [text-wrap:balance]">
                  JellyShop alone is a great e-commerce platform. Combined with JellyLinks, it's the only platform where Instagram engagement automatically connects to verified checkout.
                </h2>
              </div>

              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-col gap-5 items-center max-w-[700px] delay-100">
                <h2 className="font-['Merriweather',Georgia,serif] text-[clamp(2rem,4vw,3rem)] font-black text-white leading-[1.06] italic [text-wrap:balance]">
                  Reserve your shop early.
                </h2>
                <p className="text-white/50 text-base max-w-[480px]">
                  Join the waitlist to secure your spot for the Phase 2 rollout.
                </p>
              </div>
              
              <div className="reveal opacity-0 translate-y-6 transition-all duration-700 ease-out flex flex-wrap gap-3.5 justify-center delay-200">
                <a href="mailto:hello@jellylabs.co.uk?subject=JellyShop%20early%20reservation" className="bg-[#4338CA] text-white font-['Inter',sans-serif] font-semibold text-[0.95rem] px-6 py-3 rounded-xl border-none cursor-pointer transition-all duration-200 no-underline inline-flex items-center hover:bg-[#4F46E5] hover:-translate-y-[1px]">
                  Reserve your shop early →
                </a>
                <a href="index.html" className="bg-transparent text-white/75 font-['Inter',sans-serif] font-semibold text-[0.95rem] px-6 py-3 rounded-xl border border-white/20 cursor-pointer transition-all duration-200 no-underline inline-flex items-center hover:bg-white/10 hover:text-white hover:-translate-y-[1px]">
                  See JellyLinks
                </a>
              </div>

            </div>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1A1712] border-t border-white/5 pt-14 pb-7">
          <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_0.8fr_0.8fr] gap-10">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <img src={logo} alt="JellyLabs Logo" className="w-10 h-10 object-contain" />
                  <span className="font-['Merriweather',Georgia,serif] font-bold text-[1.1rem] text-white">JellyLabs</span>
                </div>
                <p className="text-white/45 text-[0.88rem] leading-[1.65] max-w-[300px] mb-4.5">
                  Integrated creator economy infrastructure, built from Sheffield for creators and brands.
                </p>
                <div className="flex gap-2 mt-4">
                  {[['Ig','Instagram'],['In','LinkedIn'],['X','X']].map(([s,l]) => (
                    <a key={l} href="#" aria-label={l} className="w-[34px] h-[34px] border border-white/15 rounded-md grid place-items-center text-white/45 text-[0.75rem] font-bold no-underline transition-all duration-200 hover:text-white hover:border-white/35 hover:bg-white/5">
                      {s}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4.5">Suite</h3>
                <div className="grid gap-3">
                  {['JellyLinks','JellyShop','JellySites'].map(l => (
                    <a key={l} href="#" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">{l}</a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4.5">Company</h3>
                <div className="grid gap-3">
                  <a href="#company" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">About</a>
                  <a href="mailto:hello@jellylabs.co.uk" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">Contact</a>
                  <a href="#" className="text-white/45 text-[0.92rem] no-underline transition-colors duration-200 hover:text-white">Privacy</a>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 mt-12 pt-5 flex justify-between flex-wrap gap-3">
              <span className="text-white/30 text-[0.82rem]">© 2026 JellyLabs. All rights reserved.</span>
              <span className="text-white/30 text-[0.82rem]">JellyLabs Ltd · Companies House 16523524 · Sheffield, United Kingdom</span>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}