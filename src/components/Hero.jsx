import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Code2, Layers } from 'lucide-react';
import { ease } from '../utils/animations';

function CounterNumber({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.round(target * progress * (2 - progress));
      setCount(current);
      if (frame === totalFrames) { setCount(target); clearInterval(timer); }
    }, frameRate);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const visualY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  const featureCards = [
    {
      icon: <Code2 size={20} strokeWidth={2} />,
      title: 'Custom Software',
      sub: 'End-to-end development',
      color: '#eef2ff',
      iconColor: '#4f46e5',
    },
    {
      icon: <Layers size={20} strokeWidth={2} />,
      title: 'Brand & Web Design',
      sub: 'High-converting UX',
      color: '#fdf2f8',
      iconColor: '#db2777',
    },
  ];

  return (
    <section className="metto-hero" id="home" ref={sectionRef}>
      <div className="container">
        <div className="metto-hero-grid">

          {/* ── LEFT COLUMN ── */}
          <div className="metto-hero-left">

            {/* Mixed-weight Headline — Metto style */}
            <motion.h1
              className="metto-headline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.2 }}
            >
              {/* Line 1 */}
              <span className="metto-headline-line">
                <motion.span
                  className="mh-bold"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.25 }}
                >
                  We
                </motion.span>
                {' '}
                <motion.span
                  className="mh-light"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.33 }}
                >
                  architect
                </motion.span>
              </span>

              {/* Line 2 */}
              <span className="metto-headline-line">
                <motion.span
                  className="mh-light"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.41 }}
                >
                  high-impact
                </motion.span>
              </span>

              {/* Line 3 */}
              <span className="metto-headline-line">
                <motion.span
                  className="mh-bold"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.49 }}
                >
                  digital
                </motion.span>
                {' '}
                <motion.span
                  className="mh-light"
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease, delay: 0.57 }}
                >
                  experiences
                </motion.span>
              </span>
            </motion.h1>

            {/* Sub-description */}
            <motion.p
              className="metto-desc"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease, delay: 0.68 }}
            >
              We build custom software, high-performance web platforms, and refined brand identities with guaranteed on-time delivery and lifetime support.
            </motion.p>

            {/* CTA Button — dark pill */}
            <motion.div
              className="metto-cta-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.78 }}
            >
              <motion.a
                href="#contact"
                className="metto-btn-primary"
                id="hero-free-consultation"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
              >
                <span>Free Consultation</span>
                <span className="metto-btn-arrow">
                  <ArrowRight size={15} strokeWidth={2.5} />
                </span>
              </motion.a>

              <motion.a
                href="#services"
                className="metto-btn-ghost"
                id="hero-view-services"
                whileHover={{ x: 4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                View Services <ArrowUpRight size={14} strokeWidth={2} />
              </motion.a>
            </motion.div>

            {/* Feature Mini Cards */}
            <motion.div
              className="metto-feature-cards"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.92 }}
            >
              {featureCards.map((card, i) => (
                <motion.div
                  key={i}
                  className="metto-feat-card"
                  whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(15,23,42,0.09)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <span
                    className="metto-feat-icon"
                    style={{ background: card.color, color: card.iconColor }}
                  >
                    {card.icon}
                  </span>
                  <div className="metto-feat-text">
                    <strong>{card.title}</strong>
                    <span>{card.sub}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile-only inline stats (floating chips hidden on mobile) */}
            <motion.div
              className="metto-mobile-stats"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease, delay: 1.0 }}
            >
              {[
                { value: '10+', label: 'Projects' },
                { value: '99%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
              ].map((s, i) => (
                <div key={i} className="metto-mobile-stat">
                  <span className="mms-val">{s.value}</span>
                  <span className="mms-lbl">{s.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN — Visual ── */}
          <motion.div
            className="metto-hero-right"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease, delay: 0.3 }}
            style={{ y: visualY }}
          >
            {/* Floating stats overlay */}
            <div className="metto-stat-chips">
              {[
                { value: '10+', label: 'Projects' },
                { value: '99%', label: 'Satisfaction' },
                { value: '24/7', label: 'Support' },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  className="metto-stat-chip"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
                  whileHover={{ scale: 1.06 }}
                >
                  <span className="msc-val">{s.value}</span>
                  <span className="msc-lbl">{s.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Visual image */}
            <div className="metto-visual-wrap">
              <img
                src="/hero-visual.png"
                alt="Digital architecture visual"
                className="metto-visual-img"
                draggable="false"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
