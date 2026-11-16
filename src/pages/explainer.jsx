import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/jelly.png';

export default function Explainer() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Merriweather:ital,wght@0,700;0,900;1,700;1,900&display=swap');
      `}</style>

      <div className="font-['Inter',sans-serif] bg-[#FDFAF5] text-[#2D2820] min-h-screen overflow-x-hidden leading-[1.55] flex flex-col justify-between">
        {/* HEADER */}
        <header className="fixed top-4 left-0 right-0 z-50 pointer-events-none">
          <nav
            className={`pointer-events-auto w-[calc(100%-24px)] max-w-[1140px] mx-auto flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] gap-4 px-4 py-2.5 rounded-2xl border transition-all duration-300 ${
              isScrolled
                ? 'bg-[#FFFEF9]/95 shadow-[0_4px_24px_rgba(26,23,18,0.08)] border-[#E8E1D6]/50 backdrop-blur-xl'
                : 'bg-[#FDFAF5]/85 border-[#E8E1D6] backdrop-blur-md'
            }`}
          >
            {/* LOGO AREA */}
            <Link to="/home" className="flex items-center gap-2.5 no-underline">
              <img src={logo} alt="JellyLabs Logo" className="w-10 h-10 md:w-12 md:h-12" />
              <span className="font-['Merriweather',Georgia,serif] font-bold text-[1.1rem] text-[#1A1712]">
                JellyLabs
              </span>
            </Link>

            {/* DESKTOP LINKS */}
            <div className="hidden md:flex items-center gap-1">
              <Link
                to="/home"
                className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline"
              >
                Home
              </Link>
              {/* <Link
                to="/jellyshop"
                className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline"
              >
                JellyShop
              </Link> */}
              <Link
                to="/explainer"
                className="text-[#4338CA] font-semibold text-[0.9rem] px-3.5 py-2 rounded-lg bg-[#4338CA]/10 no-underline"
              >
                Explainer
              </Link>
              <a
                href="/home#pricing"
                className="text-[#6B6457] font-medium text-[0.9rem] px-3.5 py-2 rounded-lg transition-colors duration-200 hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline"
              >
                Pricing
              </a>
            </div>

            {/* DESKTOP CTA */}
            <div className="hidden md:block justify-self-end">
              <Link
                to="/home"
                className="inline-flex items-center whitespace-nowrap bg-[#1A1712] text-[#FFFEF9] border-none font-semibold text-[0.9rem] tracking-[0.01em] px-5 py-2.5 rounded-xl cursor-pointer transition-all duration-200 no-underline hover:bg-[#4338CA] hover:-translate-y-[1px]"
              >
                Explore Suite
              </Link>
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              className="md:hidden flex items-center justify-center p-2 text-[#1A1712] rounded-lg hover:bg-[#F3EFE7] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </nav>

          {/* MOBILE DROPDOWN */}
          {isMobileMenuOpen && (
            <div className="md:hidden pointer-events-auto w-[calc(100%-24px)] max-w-[1140px] mx-auto mt-2 p-4 bg-[#FFFEF9] border border-[#E8E1D6] rounded-2xl shadow-xl flex flex-col gap-2">
              <Link
                to="/home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#6B6457] font-medium text-base px-3 py-2.5 rounded-lg hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline"
              >
                Home
              </Link>
              <Link
                to="/jellyshop"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#6B6457] font-medium text-base px-3 py-2.5 rounded-lg hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline"
              >
                JellyShop
              </Link>
              <Link
                to="/explainer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#4338CA] font-semibold text-base px-3 py-2.5 rounded-lg bg-[#4338CA]/10 no-underline"
              >
                Explainer Video
              </Link>
              <a
                href="/home#pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[#6B6457] font-medium text-base px-3 py-2.5 rounded-lg hover:bg-[#F3EFE7] hover:text-[#1A1712] no-underline"
              >
                Pricing
              </a>
              <Link
                to="/home"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-center bg-[#1A1712] text-[#FFFEF9] font-semibold text-base py-3 rounded-xl no-underline hover:bg-[#4338CA] mt-2"
              >
                Explore Suite
              </Link>
            </div>
          )}
        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 pt-32 md:pt-36 pb-20 px-4 md:px-8">
          <div className="max-w-[1100px] mx-auto">
            {/* HERO TEXT */}
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8E1D6]/50 border border-[#E8E1D6] text-[0.82rem] font-semibold tracking-wide uppercase text-[#4338CA] mb-5">
                <span className="w-2 h-2 rounded-full bg-[#4338CA] animate-pulse"></span>
                Product Walkthrough
              </div>
              <h1 className="font-['Merriweather',Georgia,serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#1A1712] tracking-tight leading-[1.2] mb-5">
                Jelly Creator Suite Explainer
              </h1>
              <p className="text-[#6B6457] text-base sm:text-lg md:text-xl leading-relaxed">
                Watch a full overview of the Jelly Creator Suite and discover how unified links, storefronts, and creator tools empower your brand.
              </p>
            </div>

            {/* VIDEO PLAYER CONTAINER */}
            <div className="relative rounded-2xl md:rounded-3xl p-2 md:p-3 bg-gradient-to-b from-[#E8E1D6]/70 to-[#E8E1D6]/30 border border-[#E8E1D6] shadow-[0_20px_60px_-15px_rgba(26,23,18,0.12)] max-w-5xl mx-auto">
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-black aspect-video shadow-inner flex items-center justify-center">
                <video
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                >
                  <source src="/JellyCreatorSuite_Explainer.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* HIGHLIGHTS SECTION */}
            {/* <div className="mt-16 md:mt-20 max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-['Merriweather',Georgia,serif] text-2xl md:text-3xl font-bold text-[#1A1712]">
                  What's inside the Creator Suite
                </h2>
                <p className="text-[#6B6457] text-sm md:text-base mt-2">
                  Key capabilities demonstrated in this walkthrough
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#FFFEF9] border border-[#E8E1D6] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#4338CA]/10 text-[#4338CA] font-bold text-lg flex items-center justify-center mb-4">
                    01
                  </div>
                  <h3 className="font-['Merriweather',Georgia,serif] font-bold text-lg text-[#1A1712] mb-2">
                    Unified Links & Hub
                  </h3>
                  <p className="text-[#6B6457] text-sm leading-relaxed">
                    Centrally organize all your products, links, and content under one sleek, customizable domain.
                  </p>
                </div>

                <div className="bg-[#FFFEF9] border border-[#E8E1D6] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#4338CA]/10 text-[#4338CA] font-bold text-lg flex items-center justify-center mb-4">
                    02
                  </div>
                  <h3 className="font-['Merriweather',Georgia,serif] font-bold text-lg text-[#1A1712] mb-2">
                    Frictionless Commerce
                  </h3>
                  <p className="text-[#6B6457] text-sm leading-relaxed">
                    Sell digital downloads, memberships, and physical merchandise with integrated one-tap checkout.
                  </p>
                </div>

                <div className="bg-[#FFFEF9] border border-[#E8E1D6] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-xl bg-[#4338CA]/10 text-[#4338CA] font-bold text-lg flex items-center justify-center mb-4">
                    03
                  </div>
                  <h3 className="font-['Merriweather',Georgia,serif] font-bold text-lg text-[#1A1712] mb-2">
                    Deep Creator Insights
                  </h3>
                  <p className="text-[#6B6457] text-sm leading-relaxed">
                    Real-time audience metrics, conversion performance, and customer retention analytics in one dashboard.
                  </p>
                </div>
              </div>

              
              <div className="mt-12 p-8 rounded-2xl bg-[#1A1712] text-[#FFFEF9] text-center flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-left sm:max-w-md">
                  <h3 className="font-['Merriweather',Georgia,serif] text-xl font-bold mb-1">
                    Ready to build your suite?
                  </h3>
                  <p className="text-white/60 text-sm">
                    Start setting up your JellyLabs storefront and links today.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0">
                  <Link
                    to="/home"
                    className="inline-flex items-center justify-center bg-white text-[#1A1712] font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-[#F3EFE7] transition-all no-underline"
                  >
                    Get Started
                  </Link>
                  <Link
                    to="/jellyshop"
                    className="inline-flex items-center justify-center bg-white/10 text-white font-medium text-sm px-5 py-2.5 rounded-xl hover:bg-white/20 transition-all no-underline"
                  >
                    Explore Shop
                  </Link>
                </div>
              </div>
            </div> */}
          </div>
        </main>

        {/* FOOTER */}
        <footer className="bg-[#1A1712] border-t border-white/5 pt-12 pb-7">
          <div className="w-[calc(100%-40px)] max-w-[1140px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] gap-10">
              <div>
                <div className="flex items-center gap-2.5 mb-3.5">
                  <img src={logo} alt="JellyLabs Logo" className="w-10 h-10" />
                  <span className="font-['Merriweather',Georgia,serif] font-bold text-[1.1rem] text-white">
                    JellyLabs
                  </span>
                </div>
                <p className="text-white/45 text-[0.88rem] leading-[1.65] max-w-[300px]">
                  Integrated creator economy infrastructure, built from Sheffield for creators and brands.
                </p>
              </div>

              <div>
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4">Suite</h3>
                <div className="grid gap-2.5">
                  <Link to="/home" className="text-white/45 text-[0.92rem] no-underline hover:text-white transition-colors">
                    JellyLinks
                  </Link>
                  <Link to="/jellyshop" className="text-white/45 text-[0.92rem] no-underline hover:text-white transition-colors">
                    JellyShop
                  </Link>
                  <Link to="/explainer" className="text-white text-[0.92rem] no-underline hover:text-white transition-colors">
                    Explainer Video
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4">Company</h3>
                <div className="grid gap-2.5">
                  <a href="/home#company" className="text-white/45 text-[0.92rem] no-underline hover:text-white transition-colors">
                    About
                  </a>
                  <a href="mailto:hello@jellylabs.co.uk" className="text-white/45 text-[0.92rem] no-underline hover:text-white transition-colors">
                    Contact
                  </a>
                  <a href="#" className="text-white/45 text-[0.92rem] no-underline hover:text-white transition-colors">
                    Privacy
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-['Merriweather',Georgia,serif] text-white text-base font-bold mb-4">Address</h3>
                <p className="text-white/45 text-[0.92rem] leading-[1.65]">
                  3rd Floor, 86-90 Paul Street,<br />
                  London, England,<br />
                  United Kingdom, EC2A 4NE
                </p>
              </div>
            </div>

            <div className="border-t border-white/10 mt-10 pt-5 flex justify-between flex-wrap gap-3">
              <span className="text-white/30 text-[0.82rem]">© 2026 JellyLabs. All rights reserved.</span>
              <span className="text-white/30 text-[0.82rem]">JellyLabs Ltd</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

