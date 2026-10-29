import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';
import { ease, staggerContainer, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

export default function CtaBanner() {
  return (
    <section className="cta-banner-section" aria-label="Project Consultation Banner">
      <div className="container">
        <motion.div
          className="cta-banner-box"
          initial={{ opacity: 0, scale: 0.96, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease }}
          whileHover={{ y: -3, borderColor: 'var(--border-hover)', boxShadow: '0 24px 60px rgba(15,23,42,0.08)' }}
        >
          <div className="cta-grid-layout">
            
            {/* Left Column: Copy & Actions */}
            <motion.div
              className="cta-left-col"
              variants={staggerContainer(0.1, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.span
                className="cta-eyebrow"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
              >
                // Start a Project
              </motion.span>

              <WordReveal
                as="h2"
                className="cta-heading"
                text="Ready to build something great?"
              />

              <motion.p
                className="cta-desc"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
              >
                Let's discuss your project and build a fast, modern digital solution for your business.
              </motion.p>

              <motion.div
                className="cta-buttons-wrap"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
              >
                <motion.a
                  href="#contact"
                  className="btn-primary-hero"
                  whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 25px rgba(15,23,42,0.18)' }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span>Start Your Project</span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <ArrowRight size={15} strokeWidth={2.5} />
                  </motion.span>
                </motion.a>

                <motion.a
                  href="tel:+916369589185"
                  className="btn-secondary-hero"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <Phone size={15} />
                  <span>Call: +91 63695 89185</span>
                </motion.a>
              </motion.div>

              {/* Trust Micro-perks */}
              <motion.div
                className="cta-perks-list"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { delay: 0.3, duration: 0.5 } },
                }}
              >
                <span className="cta-perk-item">
                  <CheckCircle2 size={13} className="cta-perk-icon" />
                  <span>1-Hour Response</span>
                </span>
                <span className="cta-perk-item">
                  <CheckCircle2 size={13} className="cta-perk-icon" />
                  <span>Direct Tech Lead Access</span>
                </span>
                <span className="cta-perk-item">
                  <CheckCircle2 size={13} className="cta-perk-icon" />
                  <span>Guaranteed Delivery</span>
                </span>
              </motion.div>
            </motion.div>

            {/* Right Column: Developer Illustration & Ambient Card */}
            <motion.div
              className="cta-right-col"
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <div className="cta-visual-wrapper">
                <div className="cta-visual-ambient" />
                
                <img
                  src="/cta-developer.png"
                  alt="Senior Software Developer building modern digital platforms at Rajlux"
                  className="cta-developer-img"
                  loading="lazy"
                />

                {/* Floating Real-Time Engineering Badge */}
                <motion.div
                  className="cta-floating-badge"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ delay: 0.45, duration: 0.6 }}
                >
                  <div className="cta-badge-dot" />
                  <div className="cta-badge-content">
                    <span className="cta-badge-title">Engineering In Session</span>
                    <span className="cta-badge-sub">Clean Code & Fast UX</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
