<template>
  <Nav />

  <!-- HERO BANNER -->
  <section class="apply-hero">
    <div class="apply-hero__inner">
      <p class="section__eyebrow sr">JOIN US</p>
      <h1 class="apply-hero__title sr sr--delay-1">Start Your <em class="apply-hero__italic">Application</em></h1>
      <p class="apply-hero__sub sr sr--delay-2">Take the first step toward your international education journey. Fill in the form below and our team will reach out within 24 hours.</p>
    </div>
  </section>

  <!-- FORM SECTION -->
  <section class="apply-section">
    <div class="apply-section__inner">

      <!-- LEFT: Info panel -->
      <div class="apply-info sr sr--left">
        <h2 class="apply-info__title">Register for Interest</h2>
        <p class="apply-info__sub">Start Your Education Journey</p>
        <ul class="apply-info__list">
          <li>
            <div class="apply-info__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <p class="apply-info__item-title">Response within 24h</p>
              <p class="apply-info__item-desc">Our advisors will contact you promptly after submission.</p>
            </div>
          </li>
          <li>
            <div class="apply-info__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <p class="apply-info__item-title">90% Visa Success Rate</p>
              <p class="apply-info__item-desc">We handle all immigration paperwork with expert precision.</p>
            </div>
          </li>
          <li>
            <div class="apply-info__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p class="apply-info__item-title">Free Consultation</p>
              <p class="apply-info__item-desc">No fees, no obligations — just expert guidance for your future.</p>
            </div>
          </li>
        </ul>
      </div>

      <!-- RIGHT: Form card -->
      <div class="apply-form-card sr sr--right">
        <form @submit.prevent="submitForm" ref="form">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Your full name" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="text" id="phone" v-model="form.phone" placeholder="+1 234 567 890" required />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" placeholder="you@example.com" required />
            </div>
            <div class="form-group">
              <label for="qualification">Current Qualification</label>
              <select id="qualification" v-model="form.qualification" required>
                <option value="" disabled>Select your qualification</option>
                <option value="High School">High School</option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="interest">Program of Interest</label>
            <input type="text" id="interest" v-model="form.interest" placeholder="e.g. Business, Engineering, Medicine…" required />
          </div>
          <div class="form-group">
            <label for="message">Message <span class="form-optional">(optional)</span></label>
            <textarea id="message" v-model="form.message" rows="4" placeholder="Tell us a bit about your goals…"></textarea>
          </div>
          <button type="submit" class="apply-submit" :disabled="submitting">{{ submitting ? 'Sending…' : 'Submit Application →' }}</button>
        </form>
      </div>

    </div>
  </section>

  <!-- CTA BANNER -->
  <section class="cta-banner sr sr--scale">
    <h2 class="cta-banner__title">Your Academic Horizon Awaits.</h2>
    <p class="cta-banner__desc">Book a free consultation today and let us map out your pathway to success in Malaysia.</p>
    <div class="cta-banner__btns">
      <router-link to="/contact" class="cta-btn-outline">Schedule Free Call</router-link>
      <router-link to="/programs" class="cta-btn-primary">View Admission Guide</router-link>
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
  components: { Nav, Footer, Whatsapp },

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
            _subject: 'New Application - Beyond Dimension',
            name: this.form.name,
            phone: this.form.phone,
            email: this.form.email,
            qualification: this.form.qualification,
            interest: this.form.interest,
            message: this.form.message,
          }),
        });
        if (response.ok) {
          alert('Application submitted successfully! We will contact you within 24 hours.');
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
.apply-hero {
  position: relative;
  background-image: url('/apply-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 1.5rem 6rem;
  text-align: center;
}

.apply-hero::before {
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

.apply-hero__inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
}

.apply-hero__title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0.5rem 0 1rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.apply-hero__italic {
  font-style: italic;
  color: #93c5fd;
}

.apply-hero__sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.78);
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto;
}

/* ── APPLY SECTION ── */
.apply-section {
  padding: 5rem 1.5rem;
  background: #fff;
}

.apply-section__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

/* ── INFO PANEL ── */
.apply-info {
  flex: 0 0 300px;
  min-width: 260px;
}

.apply-info__title {
  font-size: clamp(1.4rem, 2.5vw, 1.9rem);
  font-weight: 800;
  color: #111827;
  margin: 0 0 0.4rem;
  line-height: 1.2;
}

.apply-info__sub {
  font-size: 0.95rem;
  color: #6b7280;
  margin: 0 0 2rem;
}

.apply-info__list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.apply-info__list li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.apply-info__icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.apply-info__icon svg {
  width: 22px;
  height: 22px;
  stroke: #1d4ed8;
}

.apply-info__item-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.2rem;
}

.apply-info__item-desc {
  font-size: 0.85rem;
  color: #6b7280;
  margin: 0;
  line-height: 1.5;
}

/* ── FORM CARD ── */
.apply-form-card {
  flex: 1;
  min-width: 280px;
  background: #f9fafb;
  border-radius: 20px;
  padding: 2.5rem 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.07);
}

.form-row {
  display: flex;
  gap: 1.25rem;
  flex-wrap: wrap;
  margin-bottom: 1.25rem;
}

.form-group {
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.25rem;
}

.form-row .form-group {
  margin-bottom: 0;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.4rem;
}

.form-optional {
  font-weight: 400;
  color: #9ca3af;
  font-size: 0.8rem;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 0.7rem 1rem;
  border: 1.5px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.95rem;
  color: #111827;
  background: #fff;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: #1d4ed8;
  box-shadow: 0 0 0 3px rgba(29,78,216,0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 110px;
}

.apply-submit {
  width: 100%;
  padding: 0.85rem 1.5rem;
  background: #1d4ed8;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 0.5rem;
}

.apply-submit:hover {
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
  .apply-section__inner {
    flex-direction: column;
    gap: 2.5rem;
  }

  .apply-info {
    flex: none;
    width: 100%;
  }

  .cta-banner {
    margin: 1rem;
    padding: 3rem 1.25rem;
  }
}

@media (max-width: 480px) {
  .form-row {
    flex-direction: column;
  }
}
</style>
