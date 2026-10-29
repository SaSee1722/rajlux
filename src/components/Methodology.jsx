import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Zap, Clock } from 'lucide-react';
import { ease, viewport } from '../utils/animations';
import { WordReveal } from './ScrollReveal';

const steps = [
  {
    num: '01',
    tag: 'Phase 01',
    title: 'Discovery & Architecture',
    desc: 'We define requirements, technical architecture, and milestones to ensure complete clarity before writing code.',
    time: 'Week 01',
    metric: 'Scope Clarity',
    icon: Sparkles,
    badgeColor: 'rgba(2, 132, 199, 0.08)',
    accentColor: '#0284c7',
    deliverables: ['Architecture Specs', 'Technical Scope', 'Sprint Roadmap'],
  },
  {
    num: '02',
    tag: 'Phase 02',
    title: 'UI/UX & Design Systems',
    desc: 'Interactive Figma prototypes, design tokens, and validated user flows before development begins.',
    time: 'Weeks 02 – 03',
    metric: 'Clickable Prototypes',
    icon: Zap,
    badgeColor: 'rgba(79, 70, 229, 0.08)',
    accentColor: '#4f46e5',
    deliverables: ['Interactive Prototype', 'Design System', 'User Flow Review'],
  },
  {
    num: '03',
    tag: 'Phase 03',
    title: 'Development & Testing',
    desc: 'Modular code execution, automated testing pipelines, and cross-device QA for maximum speed and stability.',
    time: 'Weeks 04 – 06',
    metric: '95+ Speed Score',
    icon: Clock,
    badgeColor: 'rgba(5, 150, 105, 0.08)',
    accentColor: '#059669',
    deliverables: ['Clean Production Code', 'Automated QA Tests', 'Device Verification'],
  },
  {
    num: '04',
    tag: 'Phase 04',
    title: 'Launch & Ongoing Support',
    desc: 'Zero-downtime deployment followed by perpetual maintenance, security updates, and direct support.',
    time: 'Ongoing Care',
    metric: 'Lifetime Support',
    icon: ShieldCheck,
    badgeColor: 'rgba(15, 23, 42, 0.08)',
    accentColor: '#0f172a',
    deliverables: ['Zero-Downtime Launch', 'Security Updates', 'Direct Lead Access'],
  },
];

export default function Methodology() {
  return (
    <section className="section-wrapper bg-alt" id="process">
      <div className="container">

        {/* Phenomenon Studio Editorial Section Header */}
        <div className="section-header-row" style={{ alignItems: 'flex-start' }}>
          <div>
            <motion.span
              className="section-eyebrow"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              // 04 — Process
            </motion.span>
            <WordReveal
              as="h2"
              className="section-heading"
              text="How We Work"
            />
          </div>
          <p className="section-subtext">
            A clear 4-step framework to take your project from concept to launch.
          </p>
        </div>

        {/* Phenomenon Studio Signature Sticky Stacking Cards */}
        <div className="phnmn-stack-container">
          {steps.map((step, i) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={i}
                className="phnmn-sticky-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
              >
                <div className="phnmn-card-inner">
                  {/* Card Left: Large Numeral + Tag */}
                  <div className="phnmn-card-left">
                    <div className="phnmn-card-num-wrap">
                      <span className="phnmn-card-num">{step.num}</span>
                      <span className="phnmn-card-tag">{step.tag}</span>
                    </div>
                    <div className="phnmn-card-time-badge">
                      <span className="phnmn-card-dot" style={{ backgroundColor: step.accentColor }} />
                      <span>{step.time}</span>
                    </div>
                  </div>

                  {/* Card Center: Title, Description, Deliverables */}
                  <div className="phnmn-card-center">
                    <h3 className="phnmn-card-title">{step.title}</h3>
                    <p className="phnmn-card-desc">{step.desc}</p>
                    
                    <div className="phnmn-deliverables-list">
                      {step.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="phnmn-deliv-item">
                          <CheckCircle2 size={16} color={step.accentColor} className="phnmn-deliv-icon" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Right: Metric Highlight Badge */}
                  <div className="phnmn-card-right">
                    <div
                      className="phnmn-metric-badge"
                      style={{ background: step.badgeColor, borderColor: `${step.accentColor}25` }}
                    >
                      <IconComponent size={22} color={step.accentColor} />
                      <div className="phnmn-metric-val">{step.metric}</div>
                      <div className="phnmn-metric-label">Commitment</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
