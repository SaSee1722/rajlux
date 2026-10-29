import React from 'react';
import { motion } from 'framer-motion';
import { Headphones, RefreshCw, Award, Clock, Shield, TrendingUp } from 'lucide-react';
import { ease, fadeUp, staggerContainer, staggerChild, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

const differentiators = [
  { icon: Headphones, pill: 'Support', title: 'Lifetime Support', desc: 'Direct access to our engineering team whenever you need help—no expiry dates.' },
  { icon: RefreshCw, pill: 'Updates', title: 'Lifetime Updates', desc: 'We keep your software updated with modern browser, framework, and security patches.' },
  { icon: Award, pill: 'Craft', title: 'Polished Quality', desc: 'Clean UI, modular architecture, and accessibility standards in every build.' },
  { icon: Clock, pill: 'Speed', title: 'On-Time Delivery', desc: 'Structured two-week sprints with clear reviews. Deadlines are guaranteed.' },
  { icon: Shield, pill: 'Security', title: 'Enterprise Security', desc: 'End-to-end data encryption, OWASP security compliance, and secure authentication.' },
  { icon: TrendingUp, pill: 'Impact', title: 'Measurable ROI', desc: 'Focused on real metrics: faster load times, higher conversions, and retention.' },
];

export default function WhyUs() {
  return (
    <section className="section-wrapper" id="why-us">
      <div className="container">

        <div
          className="section-header-row"
          style={{ textAlign: 'center', maxWidth: '720px', marginLeft: 'auto', marginRight: 'auto', flexDirection: 'column', alignItems: 'center' }}
        >
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, ease }}
          >
            // 03 — Why Us
          </motion.span>
          <WordReveal
            as="h2"
            className="section-heading"
            text="Built on Quality & Trust"
          />
          <p className="section-subtext" style={{ maxWidth: '580px' }}>
            Long-term partnerships backed by real guarantees, clean code, and ongoing support.
          </p>
        </div>

        {/* 6 Feature Cards */}
        <motion.div
          className="diff-card-grid"
          variants={staggerContainer(0.09, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                className="diff-card"
                variants={staggerChild}
                whileHover={{
                  y: -8,
                  borderColor: 'var(--border-hover)',
                  boxShadow: '0 16px 40px rgba(15,23,42,0.08)',
                  transition: { duration: 0.2 },
                }}
              >
                <div className="diff-card-header">
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: -8 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    style={{ display: 'inline-block', cursor: 'default' }}
                  >
                    <Icon size={22} strokeWidth={2} />
                  </motion.span>
                  <motion.span
                    className="diff-card-pill"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={viewport}
                    transition={{ duration: 0.35, delay: 0.1 + index * 0.06, ease }}
                  >
                    {diff.pill}
                  </motion.span>
                </div>
                <h3 className="diff-card-title">{diff.title}</h3>
                <p className="diff-card-desc">{diff.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
