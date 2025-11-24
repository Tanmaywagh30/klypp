'use client'

import { useState } from 'react'
import './page.css'

export default function Home() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [whatsappOptIn, setWhatsappOptIn] = useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setEmailError('Please enter your email')
      return
    }
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address')
      return
    }
    setEmailError('')
    setSubmitted(true)
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email, 'WhatsApp opt-in:', whatsappOptIn)
  }

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">klypp</div>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#coming-soon">Coming Soon</a>
          </nav>
          <div className="header-actions">
            <div className="icon-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.5 5H17.5L16.25 16.25H3.75L2.5 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.5 8.75V5C7.5 3.62 8.62 2.5 10 2.5C11.38 2.5 12.5 3.62 12.5 5V8.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="badge">0</span>
            </div>
            <div className="icon-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="7.5" r="3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3.75 17.5C3.75 14.5 6.5 12.5 10 12.5C13.5 12.5 16.25 14.5 16.25 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <button className="btn-primary">Join Waitlist</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-logo">klypp</div>
            <h1 className="hero-headline">
              Fashion from mall brands, delivered in 60 minutes.
            </h1>
            <p className="hero-subheadline">
              Klypp connects you to real-time inventory from premium mall stores — coming soon.
            </p>
            <form className="hero-form" onSubmit={handleEmailSubmit}>
              <div className="hero-form-separator"></div>
              <h3 className="hero-form-title">Get Early Access</h3>
              <label htmlFor="hero-email">Enter your email</label>
              <div className="email-input-wrapper">
                <input
                  id="hero-email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setEmailError('')
                  }}
                  className={`email-input ${emailError ? 'error' : ''}`}
                />
                <button type="submit" className="btn-notify">
                  Join waitlist
                </button>
              </div>
              {emailError && <p className="error-message">{emailError}</p>}
              {submitted && !emailError && (
                <p className="success-message">Thanks! We&apos;ll notify you soon.</p>
              )}
            </form>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image">
              <div className="image-placeholder">
                <img 
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1200&fit=crop&crop=faces&auto=format&q=80" 
                  alt="Fashion model"
                  className="hero-model-image"
                />
                <div className="badge-60min">60 min</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - The Klypp Promise */}
      <section id="about" className="about-promise">
        <div className="about-promise-container">
          <div className="about-promise-content">
            <div className="promise-label">THE KLYPP PROMISE</div>
            <h2 className="promise-headline">
              Klypp brings mall fashion to your door in 60 minutes.
            </h2>
            <ul className="promise-features">
              <li>
                <svg className="checkmark-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Real-time inventory from trusted mall brands</span>
              </li>
              <li>
                <svg className="checkmark-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Curated collections, editorial polish</span>
              </li>
              <li>
                <svg className="checkmark-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span>Delivered in 60 minutes or less</span>
              </li>
            </ul>
            <p className="promise-description">
              Shop curated collections from trusted mall brands — real inventory, real-time. Fast delivery, editorial polish, zero compromise.
            </p>
          </div>
          <div className="about-promise-image">
            <img 
              src="/images/823bf0d6-2c7e-4a2d-9e54-e3acfa9a1e4c.png" 
              alt="Classy Indian fashion brand"
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="how-cards">
            <div className="how-card">
              <div className="card-step">
                <div className="step-number">01</div>
              </div>
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">Live Mall Inventory</h3>
                <p className="card-description">
                  Tap brands you trust. Klypp connects to real-time stock across premium mall stores so what you see is what&apos;s available — no guesswork, no sold-out surprises.
                </p>
              </div>
              <div className="card-image">
                <img 
                  src="/images/dubai_mall_shopping.jpg" 
                  alt="Dubai mall shopping interior"
                />
              </div>
            </div>
            <div className="how-card how-card-featured">
              <div className="card-step">
                <div className="step-number">02</div>
              </div>
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">Instant Order, Curated Checkout</h3>
                <p className="card-description">
                  Choose sizes, styling notes, and add recommended complements. Our curated checkout groups items by store for fast processing and crystal-clear updates.
                </p>
              </div>
              <div className="card-image">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop&auto=format&q=80" alt="Shopping mall interior" />
              </div>
            </div>
            <div className="how-card">
              <div className="card-step">
                <div className="step-number">03</div>
              </div>
              <div className="card-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="card-content">
                <h3 className="card-title">Delivered in 60 Minutes</h3>
                <p className="card-description">
                  A dedicated runner picks up from the store and delivers in under an hour — track every step with live ETAs and photo confirmation for a luxe, seamless finish.
                </p>
              </div>
              <div className="card-image">
                <img src="/images/gemini_delivery.png" alt="Delivery person carrying parcel" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section id="coming-soon" className="coming-soon">
        <div className="container">
          <h2 className="section-title">Coming Soon</h2>
          <p className="coming-soon-text">
            Launching first at Phoenix Marketcity Pune
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-logo">klypp</div>
              <div className="footer-logo-underline"></div>
              <div className="footer-social">
                <a href="#" aria-label="Instagram" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a href="#" aria-label="Facebook" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Twitter" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="social-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="footer-column footer-contact">
              <h3 className="footer-column-title">Contact</h3>
              <div className="footer-column-underline"></div>
              <ul className="footer-contact-list">
                <li>
                  <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <span>+91 9923085873</span>
                </li>
                <li>
                  <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <span>inquire@klypp.in</span>
                </li>
                <li>
                  <svg className="contact-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>Pune, India</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-separator"></div>
          <div className="footer-bottom">
            <p className="footer-copyright">&copy; 2025 Klypp. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
