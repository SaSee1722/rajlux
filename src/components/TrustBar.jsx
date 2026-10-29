import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Gem, Clock, Lock, TrendingUp } from 'lucide-react';
import { staggerContainer, viewport } from '../utils/animations';

const trustItems = [
  { icon: ShieldCheck, label: 'Lifetime Support' },
  { icon: Gem, label: 'Premium Quality' },
  { icon: Clock, label: 'On-Time Delivery' },
  { icon: Lock, label: 'Enterprise Security' },
  { icon: TrendingUp, label: 'Proven ROI' },
];

export default function TrustBar() {
  return (
    <section className="trust-strip" aria-label="Agency Guarantees">
      <div className="container">
        <motion.div
          className="trust-flex"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="trust-item"
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.9 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.span
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon size={18} strokeWidth={2} />
                </motion.span>
                <span>{item.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
