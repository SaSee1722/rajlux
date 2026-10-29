import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ease, fadeUp, staggerContainer, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

const portfolioItems = [
  { id: 1, category: 'web', categoryLabel: 'Web Development', badge: 'E-Commerce Platform', title: 'Luxury Fashion Store', desc: 'Modern headless e-commerce store with 3D product view and fast checkout.', meta: 'Performance 99/100', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5hdugat2HuMLNKycxKjUiUEDqnwwasMfQ4969Qbe4nmjyIytRO5x7qNsrNy2krqp3gwvdgxAA5ZY-0ACU4gtTO7t8J2HBkiT46KUGgjLsXzSz61B-OIzC-jzlbMWF7mKD_kqVAwTjo6rCQzCE7Z6jOdhNEkbw8SY0OiMUf9kCc0CybTF859dZLp2S_IIZhoS81V06CWzZQT7bjGVHNQ0C4Ak8BSrLa4AUWzHqLG-uzhW9iPRWmceeCg' },
  { id: 2, category: 'mobile', categoryLabel: 'Mobile App', badge: 'FinTech Native App', title: 'Digital Banking Solution', desc: 'Secure mobile banking app with biometric authentication and real-time ledger.', meta: 'iOS & Android', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1KVb7V9q8pMr3tqgfbsakYYLLElpDsp8UC-knOxUZLxMxQIdfi-assMTz9sPk5OMSqiJSI2_HcNP713e5b2R49HrToaaPUQVstPhuSmKi5OfVF_OQYgA86BP9MxaJ1jE9EWGtD1ACkor9RQNZuhq4tP-UuxMrN-54zUCGBIRuyDPrrnmHwMFoQ6pw3X-Z0SzR09sXl_Wbu49W6jYeSj2sOvuNt7welOotayY8jwJsz-DhpOUk4pnXKg' },
  { id: 3, category: 'branding', categoryLabel: 'Branding', badge: 'Brand Architecture', title: 'Corporate Identity System', desc: 'Complete brand identity, design system tokens, and typography guidelines.', meta: 'Tokenized UI Kit', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ627rx3XvGkE9_cU-6BIAyDV3nSfmEIS-qPD5exEr3-ifKKKYzE6urnDdF4KoRIbapPmx5aqJhE9wnMZ91mW3f4wXUTIsA_ARuCuimJP5Z5yVzYmoSWXB13zQltTG_aLNBdMXpZfmZ6S6g_WdiUSvuxdfraRl_2d-OhMRBUFRsBUvfyKT6eIjTZsd_3ajQAkM7wVzji7fRD6vCGRg_RuFhpOC-KzWULdTa8naHz1gfYTSPzmKcWeDhg' },
  { id: 4, category: 'web', categoryLabel: 'Web App', badge: 'SaaS Platform', title: 'Enterprise Analytics Suite', desc: 'Real-time analytics dashboard with live telemetry and custom visualization.', meta: 'Real-Time WebSockets', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
  { id: 5, category: 'mobile', categoryLabel: 'Mobile App', badge: 'Omnichannel App', title: 'NextGen Retail Experience', desc: 'Omnichannel shopping app with 1-tap checkout and personalized feed.', meta: '4.9★ App Store', image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80' },
  { id: 6, category: 'branding', categoryLabel: 'Branding', badge: 'Luxury Identity', title: 'Artisan Visual Identity', desc: 'Refined visual identity, typography system, and cross-channel asset library.', meta: '360° Brand Book', image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80' },
];

const filterTabs = [
  { label: 'All Projects', value: 'all' },
  { label: 'Web', value: 'web' },
  { label: 'Mobile Apps', value: 'mobile' },
  { label: 'Branding', value: 'branding' },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredItems = portfolioItems.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section className="section-wrapper" id="portfolio">
      <div className="container">

        {/* Section Header with Tabs */}
        <motion.div
          className="section-header-row"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div>
            <span className="section-eyebrow">// 05 — Portfolio</span>
            <WordReveal
              as="h2"
              className="section-heading"
              text="Selected Work"
            />
          </div>

          {/* Filter Tabs */}
          <motion.div
            className="portfolio-filter-bar"
            variants={staggerContainer(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {filterTabs.map((tab) => (
              <motion.button
                key={tab.value}
                className={`filter-tab-pill ${activeFilter === tab.value ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab.value)}
                variants={{
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
                }}
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Portfolio Cards Grid */}
        <motion.div layout className="portfolio-items-grid" id="portfolio-grid">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.93 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.25 } }}
                transition={{ duration: 0.5, ease, delay: i * 0.05 }}
                className="portfolio-card"
                whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(15,23,42,0.10)' }}
              >
                <div className="portfolio-thumb-wrap">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="portfolio-thumb-img"
                    loading="lazy"
                    whileHover={{ scale: 1.07 }}
                    transition={{ duration: 0.5, ease }}
                  />
                  <motion.div
                    className="portfolio-badge-float"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
                  >
                    {item.badge}
                  </motion.div>
                </div>

                <div className="portfolio-card-info">
                  <div>
                    <span className="portfolio-card-category">{item.categoryLabel}</span>
                    <h3 className="portfolio-card-title">{item.title}</h3>
                    <p className="portfolio-card-desc">{item.desc}</p>
                  </div>
                  <div className="portfolio-card-meta">
                    <span>{item.meta}</span>
                    <motion.span
                      className="portfolio-card-arrow"
                      whileHover={{ x: 4 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
