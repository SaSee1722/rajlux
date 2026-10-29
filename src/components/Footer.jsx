import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerChild, viewport } from '../utils/animations';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <motion.div
          className="footer-top-grid"
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >

          {/* Column 1: Studio Identity */}
          <motion.div variants={staggerChild}>
            <motion.div
              className="footer-brand-wrap"
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.img
                src="/logo-emblem.png"
                alt="Rajlux Digital Solutions"
                className="footer-brand-logo"
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              />
              <span className="footer-brand-title">Rajlux Digital Solutions Pvt. Ltd.</span>
            </motion.div>
            <p className="footer-brand-desc">
              Bespoke web applications, mobile platforms, and brand design with guaranteed delivery and ongoing support.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
              <span>India • Global Delivery</span>
              <a href="#certification" style={{ color: '#0284c7', textDecoration: 'none', fontWeight: 600 }}>
                MSME Registered: UDYAM-TN-03-0351163 ↗
              </a>
            </div>

            <motion.div
              className="footer-social-strip"
              variants={staggerContainer(0.07)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {[
                { href: 'https://www.facebook.com/profile.php?id=61582757680405', label: 'Facebook', text: 'f' },
                { href: 'https://www.instagram.com/rajlux_digital_solutions/', label: 'Instagram', text: 'IG' },
                { href: 'https://www.linkedin.com/in/palanisamy-r-a66baa357', label: 'LinkedIn', text: 'in' },
                { href: 'https://youtube.com/@java_palani', label: 'YouTube', text: 'YT' },
                { href: 'https://wa.me/918148753891', label: 'WhatsApp', text: 'WA' },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  className="social-circle-link"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={{
                    hidden: { opacity: 0, scale: 0.7 },
                    visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 18 } },
                  }}
                  whileHover={{ scale: 1.2, y: -4, borderColor: 'var(--border-hover)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.text}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Column 2: Services */}
          <motion.div variants={staggerChild}>
            <h4 className="footer-col-title">Services</h4>
            <motion.ul
              className="footer-links-list"
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {['Web Development', 'Mobile App Development', 'Digital Marketing', 'Branding & Identity', 'Cloud & IT Solutions', 'E-Commerce Solutions'].map((s, i) => (
                <motion.li
                  key={i}
                  variants={{ hidden: { opacity: 0, x: -12 }, visible: { opacity: 1, x: 0, transition: { duration: 0.35 } } }}
                >
                  <motion.a href="#services" whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                    {s}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Column 3: Contact */}
          <motion.div variants={staggerChild}>
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links-list">
              <li>Email: <a href="mailto:rajlux7733@gmail.com" style={{ fontWeight: 600 }}>rajlux7733@gmail.com</a></li>
              <li>Phone: <a href="tel:+916369589185" style={{ fontWeight: 600 }}>+91 63695 89185</a></li>
              <li>WhatsApp: <a href="https://wa.me/918148753891" target="_blank" rel="noopener noreferrer">+91 81487 53891</a></li>
              <li style={{ paddingTop: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                Response Time: Under 1 hour
              </li>
            </ul>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="footer-bottom-bar"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div>© 2026 Rajlux Digital Solutions Pvt. Ltd. All rights reserved.</div>
          <div className="footer-legal-links">
            {['Privacy Policy', 'Terms of Service', 'Security Architecture'].map((link, i) => (
              <motion.a key={i} href="#" whileHover={{ x: 3 }} transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
                {link}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
