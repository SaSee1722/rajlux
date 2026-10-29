import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { ease, fadeLeft, fadeRight, staggerContainer, staggerChild, viewport, viewportEager } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

// Icon pops in after the card fades up
const checkIcon = {
  hidden: { opacity: 0, scale: 0, rotate: -45 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 220, damping: 14, delay: 0.15 },
  },
};

const checkpoints = [
  { title: 'Reliable Code', desc: 'Clean architecture, speed optimization, and cross-browser testing.' },
  { title: 'Dedicated Lead', desc: 'A direct point of contact with weekly sprint updates.' },
  { title: 'Fixed Pricing', desc: 'Transparent milestones with zero hidden fees or surprises.' },
  { title: 'Guaranteed Delivery', desc: 'Milestones delivered on schedule, backed by agile sprints.' },
];

export default function About() {
  return (
    <section className="section-wrapper" id="about">
      <div className="container">
        <div className="about-grid-layout">

          {/* Left Column */}
          <motion.div
            className="about-left-col"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div>
              <motion.span
                className="section-eyebrow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, ease }}
              >
                // 01 — About
              </motion.span>
              <WordReveal
                as="h2"
                className="section-heading"
                text="Engineering with Precision."
                delay={0.08}
              />
            </div>

            <motion.div
              className="studio-id-card"
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              whileHover={{ y: -6, borderColor: 'var(--border-hover)', boxShadow: '0 16px 40px rgba(15,23,42,0.08)' }}
            >
              <div className="studio-id-top">
                <span className="studio-id-label">Studio Profile</span>
                <motion.span
                  className="pulse-dot"
                  title="Active Agency Status"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
              <div className="studio-id-body">
                <div className="studio-id-inc">Incorporated</div>
                <div className="studio-id-title">Rajlux Digital Solutions Pvt. Ltd.</div>
                <p className="studio-id-desc">
                  Custom software, web platforms, and brand systems engineered to scale.
                </p>
              </div>
              <div className="studio-id-footer">
                <div><strong>Status</strong> Verified Active</div>
                <div><strong>Base</strong> India • Global</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="about-right-col"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              className="about-narrative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease }}
            >
              At <strong>Rajlux Digital Solutions</strong>, we build fast, resilient digital products with clean code and modern aesthetics. From startups to growing enterprises, we prioritize transparency, speed, and real business results.
            </motion.p>
            <motion.p
              className="about-subnarrative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Every build follows strict quality standards—ensuring your software is secure, responsive, and easy to maintain.
            </motion.p>

            <motion.div
              className="check-cards-grid"
              variants={staggerContainer(0.12, 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportEager}
            >
              {checkpoints.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="check-card"
                  variants={staggerChild}
                  whileHover={{
                    y: -5,
                    borderColor: 'var(--border-hover)',
                    boxShadow: '0 8px 24px rgba(15,23,42,0.07)',
                    transition: { duration: 0.2 },
                  }}
                >
                  {/* Icon inherits from stagger parent — never gets stuck */}
                  <motion.span
                    className="check-icon-wrap"
                    variants={checkIcon}
                  >
                    <Check size={18} strokeWidth={2.5} />
                  </motion.span>
                  <div>
                    <h3 className="check-card-title">{item.title}</h3>
                    <p className="check-card-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#portfolio"
              className="arrow-link"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.3, ease }}
              whileHover={{ x: 8 }}
            >
              <span>View Projects</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight size={16} strokeWidth={2.5} />
              </motion.span>
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
