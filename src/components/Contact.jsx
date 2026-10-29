import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Clock, MessageCircle, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { ease, fadeLeft, fadeRight, staggerContainer, staggerChild, viewport } from '../utils/animations';

const SERVICE_LABELS = {
  web: 'Web Engineering & Architecture',
  mobile: 'Mobile App Development',
  branding: 'Brand Identity System',
  marketing: 'Digital Marketing & SEO',
  cloud: 'Cloud & Infrastructure',
  ecommerce: 'E-Commerce Development',
};

const WHATSAPP_PHONE = '918148753891';

export default function Contact({ selectedService }) {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', service: '', message: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  useEffect(() => {
    if (selectedService) setFormData((prev) => ({ ...prev, service: selectedService }));
  }, [selectedService]);

  const validate = (data = formData) => {
    const newErrors = {};

    if (!data.fullName || !data.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (data.fullName.trim().length < 2) {
      newErrors.fullName = 'Full Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!data.email || !data.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!emailRegex.test(data.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (data.phone && data.phone.trim()) {
      const digitsOnly = data.phone.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!data.message || !data.message.trim()) {
      newErrors.message = 'Project Details are required';
    } else if (data.message.trim().length < 10) {
      newErrors.message = 'Please provide at least 10 characters describing your project';
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldValidation = validate({ ...formData, [name]: value });
    if (fieldValidation[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldValidation[name] }));
    }
  };

  const formatWhatsAppMessage = (data) => {
    const selectedDomain = SERVICE_LABELS[data.service] || data.service || 'General Inquiry';
    const phoneFormatted = data.phone?.trim() || 'Not provided';

    return `*NEW INQUIRY FORM*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*Full Name:* ${data.fullName.trim()}
*Email Address:* ${data.email.trim()}
*Phone Number:* ${phoneFormatted}
*Primary Requirement:* ${selectedDomain}

*Project Details:*
${data.message.trim()}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
_Sent via Rajlux Digital Solutions Website_`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstField = Object.keys(validationErrors)[0];
      const el = document.getElementById(firstField);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setLoading(true);

    const messageText = formatWhatsAppMessage(formData);
    const targetUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(messageText)}`;
    setWhatsappUrl(targetUrl);

    // Open WhatsApp in a new tab
    try {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    } catch (err) {
      console.error('Failed to open WhatsApp window:', err);
    }

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', service: '', message: '' });
    }, 600);
  };

  const channels = [
    { icon: Mail, label: 'Email', value: 'rajlux7733@gmail.com', href: 'mailto:rajlux7733@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 63695 89185', href: 'tel:+916369589185' },
    { icon: Clock, label: 'Hours', value: 'Mon – Sat: 9:00 AM – 7:00 PM IST', href: null },
  ];

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        <div className="consultation-layout">

          {/* Left Column */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.span
              className="section-eyebrow"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              // 06 — Contact
            </motion.span>
            <motion.h2
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              Get in Touch
            </motion.h2>
            <motion.p
              className="about-subnarrative"
              style={{ marginTop: '1rem', marginBottom: '2rem' }}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.18, ease }}
            >
              Have a project in mind or need strategic advice? Fill out the brief form and we'll reply within 1 business hour.
            </motion.p>

            <motion.div
              className="contact-channels"
              variants={staggerContainer(0.1, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {channels.map((ch, i) => {
                const Icon = ch.icon;
                return (
                  <motion.div
                    key={i}
                    className="contact-channel-card"
                    variants={staggerChild}
                    whileHover={{ y: -4, borderColor: 'var(--border-hover)', boxShadow: '0 8px 24px rgba(15,23,42,0.06)' }}
                  >
                    <motion.div
                      className="contact-icon-bubble"
                      whileHover={{ scale: 1.15, rotate: -8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                    >
                      <Icon size={20} />
                    </motion.div>
                    <div>
                      <span className="channel-label">{ch.label}</span>
                      {ch.href ? (
                        <a href={ch.href} className="channel-val">{ch.value}</a>
                      ) : (
                        <span className="channel-val" style={{ fontSize: '0.8125rem' }}>{ch.value}</span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.a
              href="https://wa.me/918148753891"
              target="_blank"
              rel="noopener noreferrer"
              className="wa-connect-btn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, delay: 0.4, ease }}
              whileHover={{ scale: 1.06, y: -3, boxShadow: '0 10px 30px rgba(37,211,102,0.3)' }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
              >
                <MessageCircle size={18} />
              </motion.span>
              <span>Fast Chat on WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Right Column — Form */}
          <motion.div
            className="inquiry-form-card"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h3
              className="form-title"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease }}
            >
              Send a Message
            </motion.h3>

            <form onSubmit={handleSubmit} noValidate>
              <motion.div
                variants={staggerContainer(0.08, 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <motion.div className="form-row-2col" variants={staggerChild}>
                  <div className="form-field-group">
                    <label htmlFor="fullName">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input-control ${errors.fullName ? 'is-invalid' : ''}`}
                      placeholder="Your Name"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      required
                    />
                    {errors.fullName && (
                      <span id="fullName-error" className="form-error-msg" role="alert">
                        <AlertCircle size={13} />
                        <span>{errors.fullName}</span>
                      </span>
                    )}
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="email">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input-control ${errors.email ? 'is-invalid' : ''}`}
                      placeholder="name@company.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      required
                    />
                    {errors.email && (
                      <span id="email-error" className="form-error-msg" role="alert">
                        <AlertCircle size={13} />
                        <span>{errors.email}</span>
                      </span>
                    )}
                  </div>
                </motion.div>

                <motion.div className="form-row-2col" variants={staggerChild}>
                  <div className="form-field-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`form-input-control ${errors.phone ? 'is-invalid' : ''}`}
                      placeholder="+91 81487 53891"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="form-error-msg" role="alert">
                        <AlertCircle size={13} />
                        <span>{errors.phone}</span>
                      </span>
                    )}
                  </div>
                  <div className="form-field-group">
                    <label htmlFor="service">Primary Requirement</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-input-control"
                    >
                      <option value="">Select Domain</option>
                      <option value="web">Web Engineering &amp; Architecture</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="branding">Brand Identity System</option>
                      <option value="marketing">Digital Marketing &amp; SEO</option>
                      <option value="cloud">Cloud &amp; Infrastructure</option>
                      <option value="ecommerce">E-Commerce Development</option>
                    </select>
                  </div>
                </motion.div>

                <motion.div className="form-field-group full" variants={staggerChild}>
                  <label htmlFor="message">
                    Project Details <span className="req-star">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input-control ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Tell us about your project, timeline, and goals..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    required
                  ></textarea>
                  {errors.message && (
                    <span id="message-error" className="form-error-msg" role="alert">
                      <AlertCircle size={13} />
                      <span>{errors.message}</span>
                    </span>
                  )}
                </motion.div>

                <motion.div variants={staggerChild}>
                  <motion.button
                    type="submit"
                    className="btn-form-submit"
                    disabled={loading}
                    whileHover={{ scale: 1.03, y: -2, boxShadow: '0 8px 24px rgba(15,23,42,0.14)' }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {loading ? (
                      <>
                        <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}>
                          <Loader2 size={16} />
                        </motion.span>
                        <span>Opening WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                        >
                          <ArrowRight size={16} strokeWidth={2.5} />
                        </motion.span>
                      </>
                    )}
                  </motion.button>
                </motion.div>
              </motion.div>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    className="form-feedback-card active"
                    role="alert"
                    initial={{ opacity: 0, y: 16, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.45, ease }}
                  >
                    <div className="feedback-header">
                      <motion.span
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                      >
                        <CheckCircle2 size={22} color="#10b981" />
                      </motion.span>
                      <div>
                        <strong className="feedback-title">Form Submitted &amp; Redirected to WhatsApp!</strong>
                        <p className="feedback-desc">
                          Your message details have been formatted and sent to WhatsApp (+91 81487 53891). We will respond promptly.
                        </p>
                      </div>
                    </div>
                    {whatsappUrl && (
                      <motion.a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="wa-direct-link"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <MessageCircle size={15} />
                        <span>Click here if WhatsApp didn't open automatically</span>
                      </motion.a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
