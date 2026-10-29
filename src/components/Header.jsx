import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Phone, Mail, Globe, Smartphone, Cloud, ShoppingBag, Palette, BarChart3 } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'solutions' | 'company' | null
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const solutionsItems = [
    { title: 'Web Development', desc: 'Platforms & web apps', href: '#services', icon: Globe },
    { title: 'Mobile Applications', desc: 'iOS & Android apps', href: '#services', icon: Smartphone },
    { title: 'Cloud & Infrastructure', desc: 'Cloud setup & CI/CD', href: '#services', icon: Cloud },
    { title: 'E-Commerce Solutions', desc: 'Fast online storefronts', href: '#services', icon: ShoppingBag },
    { title: 'Brand Identity', desc: 'Logos & design systems', href: '#services', icon: Palette },
    { title: 'Digital Growth & SEO', desc: 'SEO & performance ads', href: '#services', icon: BarChart3 },
  ];

  const companyItems = [
    { title: 'About Rajlux', desc: 'Our standards & ethos', href: '#about' },
    { title: 'Why Choose Us', desc: 'Guarantees & support', href: '#why-us' },
    { title: 'Our Methodology', desc: '4-step delivery process', href: '#process' },
    { title: 'Selected Works', desc: 'Case studies & client work', href: '#portfolio' },
    { title: 'Government Certification', desc: 'MSME verified entity', href: '#certification' },
  ];

  const handleNavClick = (href) => {
    setActiveDropdown(null);
    setDrawerOpen(false);
    const target = document.querySelector(href);
    if (target) {
      if (window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -70, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* EatRoutes-Style Minimalist Technical Navbar */}
      <header className={`eatroutes-header ${scrolled ? 'scrolled' : ''}`} ref={headerRef}>
        <div className="eatroutes-header-inner">

          {/* Left: Emblem Logo + Wordmark + Subtitle */}
          <a
            href="#home"
            className="eatroutes-logo-wrap"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            aria-label="Rajlux Home"
          >
            <img src="/logo-emblem.png" alt="Rajlux Emblem" className="eatroutes-emblem" />
            <div className="eatroutes-brand-text">
              <span className="eatroutes-brand-name">RAJLUX</span>
              <span className="eatroutes-brand-sub">TRANSPARENCY, SPEED & EXCELLENCE</span>
            </div>
          </a>

          {/* Center: Main Navigation to cover spaces across desktop screens */}
          <nav className="eatroutes-nav-center" aria-label="Main Navigation">
            
            {/* Solutions Dropdown */}
            <div
              className="eatroutes-nav-item"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`eatroutes-nav-btn ${activeDropdown === 'solutions' ? 'active' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solutions</span>
                <ChevronDown
                  size={14}
                  className={`eatroutes-chevron ${activeDropdown === 'solutions' ? 'open' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    className="eatroutes-dropdown-panel solutions-panel"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="eatroutes-dropdown-grid">
                      {solutionsItems.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={idx}
                            href={item.href}
                            className="eatroutes-dropdown-link"
                            onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                          >
                            <span className="eatroutes-link-icon">
                              <Icon size={16} />
                            </span>
                            <div className="eatroutes-link-info">
                              <span className="eatroutes-link-title">{item.title}</span>
                              <span className="eatroutes-link-desc">{item.desc}</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Section Links */}
            <a
              href="#about"
              className="eatroutes-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}
            >
              About
            </a>

            <a
              href="#services"
              className="eatroutes-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}
            >
              Services
            </a>

            <a
              href="#process"
              className="eatroutes-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('#process'); }}
            >
              Process
            </a>

            <a
              href="#portfolio"
              className="eatroutes-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}
            >
              Portfolio
            </a>

            <a
              href="#certification"
              className="eatroutes-nav-link eatroutes-cert-nav-link"
              onClick={(e) => { e.preventDefault(); handleNavClick('#certification'); }}
            >
              <span className="eatroutes-cert-badge">MSME</span>
              <span>Certification</span>
            </a>

            {/* Company Dropdown */}
            <div
              className="eatroutes-nav-item"
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className={`eatroutes-nav-btn ${activeDropdown === 'company' ? 'active' : ''}`}
                onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                aria-expanded={activeDropdown === 'company'}
              >
                <span>Company</span>
                <ChevronDown
                  size={14}
                  className={`eatroutes-chevron ${activeDropdown === 'company' ? 'open' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    className="eatroutes-dropdown-panel company-panel"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="eatroutes-dropdown-list">
                      {companyItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="eatroutes-dropdown-link"
                          onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                        >
                          <div className="eatroutes-link-info">
                            <span className="eatroutes-link-title">{item.title}</span>
                            <span className="eatroutes-link-desc">{item.desc}</span>
                          </div>
                          <ArrowRight size={13} className="eatroutes-arrow" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </nav>

          {/* Right Action Cluster */}
          <div className="eatroutes-nav-right">
            
            <a
              href="#contact"
              className="eatroutes-cta-btn"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
            >
              <span>Get in Touch</span>
              <ArrowRight size={13} />
            </a>

            {/* EatRoutes Minimalist 3-Line Hamburger Menu Toggle */}
            <button
              type="button"
              className={`eatroutes-burger ${drawerOpen ? 'open' : ''}`}
              onClick={() => {
                setActiveDropdown(null);
                setDrawerOpen(!drawerOpen);
              }}
              aria-label="Toggle Navigation Menu"
              aria-expanded={drawerOpen}
            >
              <span className="eatroutes-burger-line line-1" />
              <span className="eatroutes-burger-line line-2" />
              <span className="eatroutes-burger-line line-3" />
            </button>

          </div>
        </div>
      </header>

      {/* EatRoutes Slide-Out Full Navigation Drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="eatroutes-drawer-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="eatroutes-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="eatroutes-drawer-top">
                <div className="eatroutes-drawer-brand">
                  <img src="/logo-emblem.png" alt="Rajlux" className="eatroutes-emblem-small" />
                  <span>RAJLUX DIGITAL</span>
                </div>
                <button
                  type="button"
                  className="eatroutes-drawer-close"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  ✕
                </button>
              </div>

              <div className="eatroutes-drawer-body">
                <div className="eatroutes-drawer-group">
                  <span className="eatroutes-drawer-label">// Navigation</span>
                  <ul className="eatroutes-drawer-links">
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>Home</a></li>
                    <li><a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }}>About</a></li>
                    <li><a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('#services'); }}>Services</a></li>
                    <li><a href="#why-us" onClick={(e) => { e.preventDefault(); handleNavClick('#why-us'); }}>Why Us</a></li>
                    <li><a href="#process" onClick={(e) => { e.preventDefault(); handleNavClick('#process'); }}>Process</a></li>
                    <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); handleNavClick('#portfolio'); }}>Portfolio</a></li>
                    <li><a href="#certification" onClick={(e) => { e.preventDefault(); handleNavClick('#certification'); }}>MSME Certification</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}>Contact</a></li>
                  </ul>
                </div>

                <div className="eatroutes-drawer-footer">
                  <a
                    href="#contact"
                    className="eatroutes-drawer-cta"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                  >
                    <span>Start Your Project</span>
                    <ArrowRight size={15} />
                  </a>

                  <div className="eatroutes-drawer-contacts">
                    <a href="tel:+916369589185" className="eatroutes-contact-item">
                      <Phone size={14} />
                      <span>+91 63695 89185</span>
                    </a>
                    <a href="mailto:rajlux7733@gmail.com" className="eatroutes-contact-item">
                      <Mail size={14} />
                      <span>rajlux7733@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
