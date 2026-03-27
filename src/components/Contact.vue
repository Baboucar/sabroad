<template>
  <Nav />

  <!-- HERO BANNER -->
  <section class="contact-hero">
    <div class="contact-hero__inner">
      <p class="section__eyebrow sr">GET IN TOUCH</p>
      <h1 class="contact-hero__title sr sr--delay-1">Let's Start Your <em class="contact-hero__italic">Journey</em></h1>
      <p class="contact-hero__sub sr sr--delay-2">Have questions? We're here to help. Reach out and our team will respond within 24 hours.</p>
    </div>
  </section>

  <!-- CONTACT SECTION -->
  <section class="contact-section">
    <div class="contact-section__inner">

      <!-- LEFT: Info Panel -->
      <div class="contact-info sr sr--left">
        <p class="section__eyebrow">CONTACT DETAILS</p>
        <h2 class="contact-info__title">We Want to Hear From You.</h2>
        <p class="contact-info__desc">Thank you for visiting our contact page. If you have any questions, comments, or concerns, please don't hesitate to reach out. We're here to help and will do our best to respond as soon as possible.</p>

        <div class="contact-info__details">
          <div class="contact-info__item">
            <div class="contact-info__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p class="contact-info__item-label">Address</p>
              <p class="contact-info__item-value">300w Tevragh Zeina, Nouakchott, Mauritania</p>
            </div>
          </div>
          <div class="contact-info__item">
            <div class="contact-info__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p class="contact-info__item-label">Phone</p>
              <p class="contact-info__item-value">+60 11-5864 5052</p>
            </div>
          </div>
          <div class="contact-info__item">
            <div class="contact-info__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div>
              <p class="contact-info__item-label">Email</p>
              <p class="contact-info__item-value">contact@beyonddimension.net</p>
            </div>
          </div>
        </div>

        <div class="contact-info__badges">
          <div class="contact-info__badge">
            <span class="contact-info__badge-num">24h</span>
            <span class="contact-info__badge-label">Response Time</span>
          </div>
          <div class="contact-info__badge contact-info__badge--blue">
            <span class="contact-info__badge-num">Free</span>
            <span class="contact-info__badge-label">Consultation</span>
          </div>
          <div class="contact-info__badge">
            <span class="contact-info__badge-num">90%</span>
            <span class="contact-info__badge-label">Visa Success</span>
          </div>
        </div>
      </div>

      <!-- RIGHT: Form Card -->
      <div class="contact-form-card sr sr--right">
        <h2 class="contact-form-card__title">Send Us a Message</h2>
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="contact-form__row">
            <div class="contact-form__group">
              <label class="contact-form__label" for="name">Full Name</label>
              <input class="contact-form__input" type="text" id="name" v-model="form.name" placeholder="Your full name" required />
            </div>
            <div class="contact-form__group">
              <label class="contact-form__label" for="phone">Phone Number</label>
              <input class="contact-form__input" type="text" id="phone" v-model="form.phone" placeholder="+1 234 567 890" required />
            </div>
          </div>

          <div class="contact-form__group">
            <label class="contact-form__label" for="email">Email Address</label>
            <input class="contact-form__input" type="email" id="email" v-model="form.email" placeholder="you@example.com" required />
          </div>

          <div class="contact-form__group">
            <label class="contact-form__label" for="qualification">Current Qualification</label>
            <select class="contact-form__input contact-form__select" id="qualification" v-model="form.qualification" required>
              <option value="">Select your qualification</option>
              <option value="highschool">High School</option>
              <option value="bachelor">Bachelor's Degree</option>
              <option value="master">Master's Degree</option>
              <option value="phd">PhD</option>
            </select>
          </div>

          <div class="contact-form__group">
            <label class="contact-form__label" for="interest">Program of Interest</label>
            <input class="contact-form__input" type="text" id="interest" v-model="form.interest" placeholder="e.g. Business, Engineering, Medicine" required />
          </div>

          <div class="contact-form__group">
            <label class="contact-form__label" for="message">Message</label>
            <textarea class="contact-form__input contact-form__textarea" id="message" v-model="form.message" placeholder="Tell us how we can help you..."></textarea>
          </div>

          <button type="submit" class="contact-form__submit" :disabled="submitting">{{ submitting ? 'Sending…' : 'Send Message →' }}</button>
        </form>
      </div>

    </div>
  </section>

  <!-- MAP SECTION -->
  <section class="contact-map">
    <div class="contact-map__inner">
      <div class="contact-map__header">
        <p class="section__eyebrow">OUR LOCATION</p>
        <h2 class="contact-map__title">Find Us Here</h2>
        <p class="contact-map__sub">We're based in Nouakchott, Mauritania — with a presence in Kuala Lumpur, Malaysia.</p>
      </div>
      <div class="contact-map__grid">
        <div class="contact-map__card">
          <div class="contact-map__visual">
            <div class="contact-map__lines">
              <div class="contact-map__line"></div>
              <div class="contact-map__line"></div>
              <div class="contact-map__line"></div>
              <div class="contact-map__line contact-map__line--v"></div>
              <div class="contact-map__line contact-map__line--v"></div>
            </div>
            <div class="contact-map__pin">
              <div class="contact-map__pulse"></div>
              <div class="contact-map__pulse contact-map__pulse--2"></div>
              <div class="contact-map__dot">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
            </div>
          </div>
          <div class="contact-map__info">
            <div class="contact-map__info-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p class="contact-map__info-label">Headquarters</p>
              <p class="contact-map__info-value">300w Tevragh Zeina, Nouakchott, Mauritania</p>
            </div>
          </div>
        </div>
        <div class="contact-map__card">
          <div class="contact-map__visual contact-map__visual--dark">
            <div class="contact-map__lines">
              <div class="contact-map__line"></div>
              <div class="contact-map__line"></div>
              <div class="contact-map__line"></div>
              <div class="contact-map__line contact-map__line--v"></div>
              <div class="contact-map__line contact-map__line--v"></div>
            </div>
            <div class="contact-map__pin">
              <div class="contact-map__pulse contact-map__pulse--white"></div>
              <div class="contact-map__pulse contact-map__pulse--white contact-map__pulse--2"></div>
              <div class="contact-map__dot contact-map__dot--white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
            </div>
          </div>
          <div class="contact-map__info">
            <div class="contact-map__info-icon contact-map__info-icon--blue">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p class="contact-map__info-label">Malaysia Office</p>
              <p class="contact-map__info-value">Kuala Lumpur, Malaysia</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-banner sr sr--scale">
    <h2 class="cta-banner__title">Your Academic Horizon Awaits.</h2>
    <p class="cta-banner__desc">Book a free consultation today and let us map out your pathway to success in Malaysia.</p>
    <div class="cta-banner__btns">
      <router-link to="/apply" class="cta-btn-primary">Start Your Application</router-link>
      <router-link to="/programs" class="cta-btn-outline">View Admission Guide</router-link>
    </div>
  </section>

  <Whatsapp phoneNumber="+60172117150" />
  <Footer />
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
import Whatsapp from './Whatsapp.vue';

export default {
  components: {
    Nav,
    Footer,
    Whatsapp
  },
  name: 'ContactPage',
  data() {
    return {
      submitting: false,
      form: {
        name: '',
        phone: '',
        email: '',
        qualification: '',
        interest: '',
        message: '',
      },
    };
  },
  methods: {
    async submitForm() {
      this.submitting = true;
      try {
        const response = await fetch('https://formsubmit.co/ajax/beyonddimensions2022@gmail.com', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            _subject: 'New Contact Message - Beyond Dimension',
            name: this.form.name,
            phone: this.form.phone,
            email: this.form.email,
            qualification: this.form.qualification,
            interest: this.form.interest,
            message: this.form.message,
          }),
        });
        if (response.ok) {
          alert('Message sent successfully! We will contact you within 24 hours.');
          this.form = { name: '', phone: '', email: '', qualification: '', interest: '', message: '' };
        } else {
          const data = await response.json();
          alert('Submission failed: ' + (data.error || 'Please try again.'));
        }
      } catch (err) {
        alert('Network error. Please check your connection and try again.');
      } finally {
        this.submitting = false;
      }
    },
  },
};
</script>

<style scoped>
* { box-sizing: border-box; }
img { max-width: 100%; height: auto; display: block; }

/* ── Shared helpers ── */
.section__eyebrow {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #6b7280;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

/* ── HERO ── */
.contact-hero {
  position: relative;
  background-image: url('/contact-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 1.5rem 6rem;
  text-align: center;
}

.contact-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(5, 10, 30, 0.60) 0%,
    rgba(5, 10, 30, 0.72) 60%,
    rgba(5, 10, 30, 0.88) 100%
  );
  z-index: 0;
}

.contact-hero__inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
}

.contact-hero__title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0.5rem 0 1rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.contact-hero__italic {
  font-style: italic;
  color: #93c5fd;
}

.contact-hero__sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.78);
  line-height: 1.7;
  max-width: 540px;
  margin: 0 auto;
}

/* ── MAP SECTION ── */
.contact-map {
  background: #f9fafb;
  padding: 5rem 1.5rem;
}

.contact-map__inner {
  max-width: 1100px;
  margin: 0 auto;
}

.contact-map__header {
  text-align: center;
  margin-bottom: 3rem;
}

.contact-map__title {
  font-size: clamp(1.8rem, 3.5vw, 2.5rem);
  font-weight: 800;
  color: #111827;
  margin: 0.4rem 0 0.75rem;
}

.contact-map__sub {
  font-size: 1rem;
  color: #6b7280;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

.contact-map__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-map__card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
  border: 1px solid #e5e7eb;
}

.contact-map__visual {
  position: relative;
  height: 220px;
  background: linear-gradient(135deg, #e0f2fe 0%, #dbeafe 50%, #ede9fe 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.contact-map__visual--dark {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 60%, #1d4ed8 100%);
}

.contact-map__lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.contact-map__line {
  position: absolute;
  background: rgba(99,102,241,0.12);
  height: 1px;
  width: 100%;
  left: 0;
}

.contact-map__line:nth-child(1) { top: 25%; }
.contact-map__line:nth-child(2) { top: 50%; }
.contact-map__line:nth-child(3) { top: 75%; }

.contact-map__line--v {
  width: 1px;
  height: 100%;
  top: 0;
}

.contact-map__line--v:nth-child(4) { left: 33%; }
.contact-map__line--v:nth-child(5) { left: 66%; }

.contact-map__visual--dark .contact-map__line {
  background: rgba(255,255,255,0.07);
}

.contact-map__pin {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.contact-map__pulse {
  position: absolute;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: rgba(29, 78, 216, 0.25);
  animation: mapPulse 2s ease-out infinite;
}

.contact-map__pulse--2 {
  animation-delay: 1s;
}

.contact-map__pulse--white {
  background: rgba(255, 255, 255, 0.2);
}

.contact-map__dot {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #1d4ed8;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(29,78,216,0.5);
  z-index: 3;
  position: relative;
}

.contact-map__dot svg {
  width: 26px;
  height: 26px;
  fill: #fff;
}

.contact-map__dot--white {
  background: #fff;
  box-shadow: 0 4px 20px rgba(255,255,255,0.3);
}

.contact-map__dot--white svg {
  fill: #1d4ed8;
}

@keyframes mapPulse {
  0%   { transform: scale(0.8); opacity: 0.9; }
  100% { transform: scale(2.4); opacity: 0; }
}

.contact-map__info {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
}

.contact-map__info-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-map__info-icon svg {
  width: 20px;
  height: 20px;
  stroke: #1d4ed8;
}

.contact-map__info-icon--blue {
  background: #1d4ed8;
}

.contact-map__info-icon--blue svg {
  stroke: #fff;
}

.contact-map__info-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.25rem;
}

.contact-map__info-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 640px) {
  .contact-map__grid {
    grid-template-columns: 1fr;
  }
}

/* ── CONTACT SECTION ── */
.contact-section {
  padding: 5rem 1.5rem;
  background: #fff;
}

.contact-section__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

/* ── INFO PANEL ── */
.contact-info {
  flex: 1;
  min-width: 280px;
}

.contact-info__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: #111827;
  margin: 0.5rem 0 1rem;
  line-height: 1.2;
}

.contact-info__desc {
  font-size: 0.97rem;
  color: #374151;
  line-height: 1.85;
  margin-bottom: 2rem;
}

.contact-info__details {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}

.contact-info__item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-info__icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-info__icon svg {
  width: 20px;
  height: 20px;
  stroke: #1d4ed8;
}

.contact-info__item-label {
  font-size: 0.75rem;
  font-weight: 700;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0 0 0.2rem;
}

.contact-info__item-value {
  font-size: 0.95rem;
  color: #111827;
  font-weight: 500;
  margin: 0;
}

.contact-info__badges {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-info__badge {
  background: #f9fafb;
  border-radius: 14px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 80px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
}

.contact-info__badge--blue {
  background: #1d4ed8;
}

.contact-info__badge--blue .contact-info__badge-num,
.contact-info__badge--blue .contact-info__badge-label {
  color: #fff;
}

.contact-info__badge-num {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1d4ed8;
  line-height: 1;
  margin-bottom: 0.3rem;
}

.contact-info__badge-label {
  font-size: 0.72rem;
  color: #6b7280;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

/* ── FORM CARD ── */
.contact-form-card {
  flex: 1;
  min-width: 300px;
  background: #f9fafb;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}

.contact-form-card__title {
  font-size: 1.4rem;
  font-weight: 800;
  color: #111827;
  margin: 0 0 1.75rem;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.contact-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.contact-form__group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.contact-form__label {
  font-size: 0.82rem;
  font-weight: 600;
  color: #374151;
}

.contact-form__input {
  padding: 0.7rem 1rem;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #111827;
  background: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  width: 100%;
}

.contact-form__input:focus {
  border-color: #1d4ed8;
  box-shadow: 0 0 0 3px rgba(29,78,216,0.1);
}

.contact-form__select {
  appearance: none;
  cursor: pointer;
}

.contact-form__textarea {
  resize: vertical;
  min-height: 120px;
}

.contact-form__submit {
  background: #1d4ed8;
  color: #fff;
  border: none;
  padding: 0.85rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 0.5rem;
}

.contact-form__submit:hover {
  background: #1e40af;
}

/* ── CTA BANNER ── */
.cta-banner {
  background: #1d4ed8;
  border-radius: 20px;
  margin: 2rem auto 4rem;
  padding: 4rem 2rem;
  text-align: center;
  max-width: 1100px;
}

.cta-banner__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 0.75rem;
}

.cta-banner__desc {
  color: rgba(255,255,255,0.85);
  font-size: 1rem;
  margin-bottom: 2rem;
}

.cta-banner__btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn-outline {
  text-decoration: none;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.cta-btn-outline:hover {
  background: #fff;
  color: #1d4ed8;
}

.cta-btn-primary {
  text-decoration: none;
  background: #fff;
  color: #1d4ed8;
  padding: 0.75rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;
}

.cta-btn-primary:hover {
  background: #e0e7ff;
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .contact-section__inner {
    flex-direction: column;
    gap: 2.5rem;
  }

  .contact-form__row {
    grid-template-columns: 1fr;
  }

  .cta-banner {
    margin: 1rem;
    padding: 3rem 1.25rem;
  }
}
</style>
