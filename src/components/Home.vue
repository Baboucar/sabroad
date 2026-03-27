<template>
  <Nav />

  <!-- HERO -->
  <section class="hero">
    <div class="hero__bg">
      <div class="hero__overlay"></div>
    </div>
    <div class="hero__inner">
      <div class="hero__content">
        <p class="hero__eyebrow"><span class="hero__eyebrow-dot"></span>REDEFINING GLOBAL EDUCATION</p>
        <h1 class="hero__title">
          Your Future Starts<br>
          in <em class="hero__italic">Malaysia.</em>
        </h1>
        <p class="hero__desc">
          Experience world-class education in the heart of Southeast Asia. Beyond Dimension guides you every step — from application to arrival.
        </p>
        <div class="hero__btns">
          <router-link to="/apply" class="btn-primary">Start Your Application →</router-link>
          <router-link to="/programs" class="btn-ghost">Browse Programs</router-link>
        </div>
      </div>
      <div class="hero__stats-row">
        <div class="hero__stat-card">
          <span class="hero__stat-num">500+</span>
          <span class="hero__stat-label">Successful Enrolments</span>
        </div>
        <div class="hero__stat-card">
          <span class="hero__stat-num">20+</span>
          <span class="hero__stat-label">Partner Universities</span>
        </div>
        <div class="hero__stat-card">
          <span class="hero__stat-num">90%</span>
          <span class="hero__stat-label">Visa Approval Rate</span>
        </div>
        <div class="hero__stat-card">
          <span class="hero__stat-num">10+</span>
          <span class="hero__stat-label">Countries Served</span>
        </div>
      </div>
    </div>
  </section>

  <!-- WHY SECTION -->
  <section class="why">
    <p class="section__eyebrow sr">WHY BEYOND DIMENSION</p>
    <h2 class="section__title sr sr--delay-1">Elevating Your Journey</h2>
    <div class="why__grid">
      <div class="why__card why__card--blue sr sr--delay-1">
        <div class="why__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
        <h3>Direct University Partnerships</h3>
        <p>We work directly with Malaysia's leading institutions to ensure your application gets the priority it deserves. No middlemen, just direct horizons.</p>
      </div>
      <div class="why__card sr sr--delay-2">
        <div class="why__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3>Visa Mastery</h3>
        <p>Navigating TNGO and immigration with 90% success rate. We handle the paperwork, you pack your bags.</p>
      </div>
      <div class="why__card sr sr--delay-3">
        <div class="why__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <h3>Arrival Concierge</h3>
        <p>Airport pickups, accommodation booking, and local orientation. We don't just send you there, we welcome you home.</p>
      </div>
      <div class="why__card sr sr--delay-4">
        <div class="why__icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        <h3>Financial Guidance</h3>
        <p>Understanding tuition structures, living costs, and exclusive scholarship opportunities available only through Beyond Dimension.</p>
      </div>
    </div>
  </section>

  <!-- PROGRAMS / FACULTIES -->
  <section class="programs">
    <div class="programs__inner">
      <div class="programs__header sr">
        <div>
          <p class="section__eyebrow section__eyebrow--light">CURATED PROGRAMS</p>
          <h2 class="section__title section__title--white">Elite Faculties for the Next<br>Generation of Leaders</h2>
        </div>
        <router-link to="/programs" class="programs__explore">Explore All Faculties →</router-link>
      </div>
      <div class="programs__grid">
        <div class="programs__card sr sr--delay-1">
          <img src="/images/business.jpeg" alt="Business & Finance" loading="lazy" />
          <div class="programs__overlay">
            <div class="programs__tag">Business</div>
            <div class="programs__card-footer">
              <div>
                <h3>Business &amp; Finance</h3>
                <p>AACSB Accredited Institutions</p>
              </div>
              <div class="programs__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="programs__card sr sr--delay-2">
          <img src="/images/cs.png" alt="IT & Data Science" loading="lazy" />
          <div class="programs__overlay">
            <div class="programs__tag">Technology</div>
            <div class="programs__card-footer">
              <div>
                <h3>IT &amp; Data Science</h3>
                <p>Pioneering Digital Innovation</p>
              </div>
              <div class="programs__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="programs__card sr sr--delay-3">
          <img src="/images/management.png" alt="Engineering" loading="lazy" />
          <div class="programs__overlay">
            <div class="programs__tag">Engineering</div>
            <div class="programs__card-footer">
              <div>
                <h3>Engineering</h3>
                <p>Sustainable Global Solutions</p>
              </div>
              <div class="programs__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="programs__card sr sr--delay-4">
          <img src="/images/Study-Bachelors-degree-in-Malaysia.jpeg" alt="Medicine & Health" loading="lazy" />
          <div class="programs__overlay">
            <div class="programs__tag">Medicine</div>
            <div class="programs__card-footer">
              <div>
                <h3>Medicine &amp; Health</h3>
                <p>MQA Recognised Degrees</p>
              </div>
              <div class="programs__arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIALS -->
  <section class="testimonials sr">
    <div class="testimonials__left">
      <p class="section__eyebrow">STUDENT VOICES</p>
      <h2 class="testimonials__title">Real Journeys.<br>Real Success.</h2>
      <div class="testimonials__nav">
        <button @click="prevTestimonial" class="tnav-btn">‹</button>
        <button @click="nextTestimonial" class="tnav-btn">›</button>
      </div>
    </div>
    <div class="testimonials__right">
      <div class="testimonials__quote">
        <p class="testimonials__text">"{{ testimonials[activeTestimonial].text }}"</p>
        <div class="testimonials__author">
          <img :src="testimonials[activeTestimonial].image" :alt="testimonials[activeTestimonial].name" class="testimonials__avatar" />
          <div>
            <p class="testimonials__name">{{ testimonials[activeTestimonial].name }}</p>
            <p class="testimonials__role">{{ testimonials[activeTestimonial].title }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PARTNERS -->
  <section class="partners">
    <p class="section__eyebrow sr">OUR ELITE UNIVERSITY PARTNERS</p>
    <Vue3Marquee>
      <img class="partners__img" v-for="img in imgArray" :key="img" :src="img" />
    </Vue3Marquee>
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
  <Faq />
  <Footer />
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Vue3Marquee } from 'vue3-marquee'
import Nav from './Nav.vue'
import Footer from './Footer.vue'
import Whatsapp from './Whatsapp.vue'
import Faq from './Faq.vue'

export default defineComponent({
  name: 'Home',
  components: { Nav, Footer, Whatsapp, Vue3Marquee, Faq },

  setup() {
    const imgArray = [
      'images/apu.jpeg',
      'images/maha.png',
      'images/city.png',
      'images/kl.png',
      'images/cyber.png',
      'images/zak.png',
      'images/geo.png',
      'images/segi.png',
      'images/mo.png',
      'images/taylor.png',
      'images/south.png',
      'images/putra.png',
    ]

    const testimonials = [
      {
        text: "Beyond Dimension made my dream of studying in Kuala Lumpur a reality. From the moment I contacted them to my first day at APU, their support was personal and flawless. I'm now pursuing my IT degree with complete peace of mind.",
        name: "Ahmed Khalid",
        title: "BSc Computer Science, APU Malaysia",
        image: "/images/ceo.jpeg",
      },
      {
        text: "Studying in Malaysia was a life-changing experience! The cultural diversity and academic excellence exceeded my expectations.",
        name: "Ramatoulaye",
        title: "Marketing Major",
        image: "/images/ceo.jpeg",
      },
      {
        text: "The support from the team was incredible. I felt guided every step of the way, making my transition smooth and enjoyable.",
        name: "Amadou Gaye",
        title: "Engineering Student",
        image: "/images/ceo.jpeg",
      },
    ]

    const activeTestimonial = ref(0)

    function prevTestimonial() {
      activeTestimonial.value = (activeTestimonial.value - 1 + testimonials.length) % testimonials.length
    }
    function nextTestimonial() {
      activeTestimonial.value = (activeTestimonial.value + 1) % testimonials.length
    }

    return { imgArray, testimonials, activeTestimonial, prevTestimonial, nextTestimonial }
  },
})
</script>

<style lang="scss" scoped>
/* ── Global resets within component ── */
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

.section__title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  text-align: center;
  margin-bottom: 2.5rem;
}

.section__title--left {
  text-align: left;
}

/* ── HERO ── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(28px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes floatY {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-12px); }
}
@keyframes pulse-ring {
  0%   { transform: scale(0.9); opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0; }
}
@keyframes blob {
  0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
  50%       { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
}

.hero {
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(5, 10, 30, 0.62) 0%,
    rgba(5, 10, 30, 0.72) 60%,
    rgba(5, 10, 30, 0.88) 100%
  );
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1;
  max-width: 860px;
  margin: 0 auto;
  padding: 10rem 2rem 5rem;
  min-height: 100vh;
}

.hero__content {
  animation: fadeUp 0.9s ease both;
}

.hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  color: #93c5fd;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  background: rgba(147, 197, 253, 0.12);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(147, 197, 253, 0.3);
  animation: fadeUp 0.8s ease 0.1s both;
}

.hero__eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #93c5fd;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 1.5px solid #93c5fd;
    animation: pulse-ring 1.5s ease-out infinite;
  }
}

.hero__title {
  font-size: clamp(2.8rem, 6vw, 5rem);
  font-weight: 800;
  line-height: 1.1;
  color: #ffffff;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
  animation: fadeUp 0.8s ease 0.2s both;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.hero__italic {
  font-style: italic;
  font-weight: 800;
  color: #ffffff;
}

.hero__desc {
  font-size: 1.1rem;
  color: rgba(255,255,255,0.78);
  line-height: 1.8;
  max-width: 580px;
  margin: 0 auto 2.5rem;
  animation: fadeUp 0.8s ease 0.3s both;
}

.hero__btns {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0;
  animation: fadeUp 0.8s ease 0.4s both;
}

.btn-primary {
  text-decoration: none;
  background: linear-gradient(135deg, #1d4ed8, #4f46e5);
  color: #fff;
  padding: 0.9rem 2rem;
  border-radius: 10px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.25s;
  box-shadow: 0 4px 24px rgba(29, 78, 216, 0.5);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(29, 78, 216, 0.6);
  }
}

.btn-ghost {
  text-decoration: none;
  color: rgba(255,255,255,0.9);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  border: 1.5px solid rgba(255,255,255,0.35);
  transition: all 0.2s;
  backdrop-filter: blur(4px);

  &:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.6);
  }
}

.hero__stats-row {
  display: flex;
  gap: 1px;
  margin-top: 4rem;
  width: 100%;
  background: rgba(255,255,255,0.1);
  border-radius: 16px;
  overflow: hidden;
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255,255,255,0.15);
  animation: fadeUp 0.8s ease 0.6s both;
}

.hero__stat-card {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  background: rgba(255,255,255,0.06);
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.12); }

  & + & {
    border-left: 1px solid rgba(255,255,255,0.1);
  }
}

.hero__stat-num {
  font-size: 1.75rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 0.3rem;
}

.hero__stat-label {
  font-size: 0.75rem;
  color: rgba(255,255,255,0.6);
  font-weight: 500;
  text-align: center;
}

/* ── WHY ── */
.why {
  background: #f9fafb;
  padding: 5rem 1.5rem;
  text-align: center;
}

.why__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  max-width: 1100px;
  margin: 0 auto;
}

.why__card {
  background: #fff;
  border-radius: 16px;
  padding: 2rem 1.5rem;
  text-align: left;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #111827;
    margin: 0.75rem 0 0.5rem;
  }

  p {
    font-size: 0.9rem;
    color: #6b7280;
    line-height: 1.6;
    margin: 0;
  }
}

.why__card--blue {
  background: #1d4ed8;

  h3, p { color: #fff; }
}

.why__icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;

  svg {
    width: 24px;
    height: 24px;
    stroke: #1d4ed8;
  }
}

.why__card--blue .why__icon {
  background: rgba(255,255,255,0.2);

  svg { stroke: #fff; }
}

/* ── PROGRAMS ── */
.programs {
  background: #0f172a;
  padding: 5rem 0;
}

.programs__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section__eyebrow--light {
  color: #93c5fd;
}

.section__title--white {
  color: #fff;
}

.programs__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.programs__explore {
  text-decoration: none;
  color: #93c5fd;
  font-weight: 600;
  font-size: 0.9rem;
  white-space: nowrap;
  border: 1.5px solid #93c5fd;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
  transition: all 0.2s;

  &:hover {
    background: #93c5fd;
    color: #0f172a;
  }
}

.programs__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.25rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.programs__card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 380px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.06);
  }

  &:hover .programs__arrow {
    background: #1d4ed8;
    border-color: #1d4ed8;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
    display: block;
  }
}

.programs__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.82) 40%, rgba(0,0,0,0.1) 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.25rem;
}

.programs__tag {
  align-self: flex-start;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(6px);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.25);
}

.programs__card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 0.75rem;

  h3 {
    font-size: 1.05rem;
    font-weight: 700;
    color: #fff;
    margin: 0 0 0.2rem;
    line-height: 1.3;
  }

  p {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.65);
    margin: 0;
  }
}

.programs__arrow {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid rgba(255,255,255,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  svg {
    width: 16px;
    height: 16px;
    stroke: #fff;
  }
}

/* ── TESTIMONIALS ── */
.testimonials {
  background: #f9fafb;
  padding: 5rem 1.5rem;
  display: flex;
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
  align-items: center;
  flex-wrap: wrap;
}

.testimonials__left {
  flex: 0 0 260px;
}

.testimonials__title {
  font-size: 2rem;
  font-weight: 800;
  color: #111827;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.testimonials__nav {
  display: flex;
  gap: 0.5rem;
}

.tnav-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1.5px solid #d1d5db;
  background: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #1d4ed8;
    color: #fff;
    border-color: #1d4ed8;
  }
}

.testimonials__right {
  flex: 1;
  min-width: 280px;
}

.testimonials__quote {
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.07);
}

.testimonials__text {
  font-size: 1rem;
  color: #374151;
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 1.5rem;
}

.testimonials__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.testimonials__avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonials__name {
  font-weight: 700;
  color: #111827;
  font-size: 0.95rem;
  margin: 0;
}

.testimonials__role {
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0;
}

/* ── PARTNERS ── */
.partners {
  padding: 4rem 1.5rem;
  text-align: center;
  background: #fff;
}

.partners__img {
  height: 48px;
  width: auto;
  object-fit: contain;
  margin: 0 2rem;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover { opacity: 1; }
}

/* ── CTA BANNER ── */
.cta-banner {
  background: #1d4ed8;
  border-radius: 20px;
  margin: 2rem 1.5rem 4rem;
  padding: 4rem 2rem;
  text-align: center;
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
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

  &:hover { background: #fff; color: #1d4ed8; }
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

  &:hover { background: #e0e7ff; }
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .hero__inner {
    padding: 8rem 1.25rem 3rem;
    min-height: 100vh;
  }

  .hero__stats-row {
    flex-wrap: wrap;
    margin-top: 2.5rem;
  }

  .hero__stat-card {
    flex: 1 1 calc(50% - 1px);
    min-width: 120px;
  }

  .testimonials {
    flex-direction: column;
    gap: 2rem;
  }

  .testimonials__left {
    flex: none;
    width: 100%;
  }

  .programs__header {
    flex-direction: column;
    align-items: flex-start;
  }

  .cta-banner {
    margin: 1rem;
    padding: 3rem 1.25rem;
  }
}
</style>
