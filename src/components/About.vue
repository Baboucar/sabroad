<template>
  <Nav/>

  <!-- HERO BANNER -->
  <section class="about-hero">
    <div class="about-hero__inner">
      <p class="section__eyebrow sr">WHO WE ARE</p>
      <h1 class="about-hero__title sr sr--delay-1">About <em class="about-hero__italic">Beyond Dimension</em></h1>
      <p class="about-hero__sub sr sr--delay-2">Transforming lives through world-class international education experiences.</p>
    </div>
  </section>

  <!-- MISSION SECTION -->
  <section class="mission">
    <div class="mission__inner">
      <div class="mission__text sr sr--left">
        <p class="section__eyebrow">OUR MISSION</p>
        <h2 class="mission__title">Education Beyond the Classroom</h2>
        <p class="mission__body">
          At Beyond Dimension Study Abroad, we believe that education goes beyond the four walls of a classroom. We have helped countless individuals explore new destinations, experience diverse cultures, and discover more about the world and themselves. Our mission is to open doors to global education, providing opportunities that transform lives and broaden horizons.
          Join us and embark on a journey that will shape your future and expand your worldview. Discover more about the world and yourself with Beyond Dimension Study Abroad.
        </p>
        <p class="mission__body">
          We collaborate with the world's leading colleges and universities to create programs that enhance and enrich classroom lessons. By integrating academic rigor with real-world experiences, our programs offer students a unique blend of learning and adventure. From bustling cities to serene landscapes, our culturally immersive, international educational experiences bring learning to life in ways that textbooks never can.
          Through our tailored study abroad programs, students gain profound insights and lasting memories from their time abroad. They engage with new perspectives, develop critical thinking skills, and build a global network that will benefit them throughout their lives. At Beyond Dimension Study Abroad, we are committed to making international education accessible and impactful, ensuring that every student returns home not just with knowledge, but with a richer understanding of the world and their place in it.
        </p>
      </div>
      <div class="mission__stats sr sr--right">
        <div class="mission__stat-card mission__stat-card--blue">
          <span class="mission__stat-num">500+</span>
          <span class="mission__stat-label">Successful Enrolments</span>
        </div>
        <div class="mission__stat-card">
          <span class="mission__stat-num">20+</span>
          <span class="mission__stat-label">Partner Universities</span>
        </div>
        <div class="mission__stat-card">
          <span class="mission__stat-num">90%</span>
          <span class="mission__stat-label">Visa Success Rate</span>
        </div>
        <div class="mission__stat-card">
          <span class="mission__stat-num">10+</span>
          <span class="mission__stat-label">Years of Experience</span>
        </div>
      </div>
    </div>
  </section>

  <!-- TEAM SECTION -->
  <section class="team">
    <div class="team__inner">
      <p class="section__eyebrow sr">THE PEOPLE BEHIND IT</p>
      <h2 class="team__title sr sr--delay-1">Our Team</h2>
      <div class="team__grid">
        <div class="team__card sr" v-for="member in teamMembers" :key="member.name">
          <div class="team__img-wrap">
            <img :src="member.image" :alt="member.name" class="team__photo" loading="lazy"/>
          </div>
          <div class="team__info">
            <h3 class="team__name">{{ member.name }}</h3>
            <p class="team__title-label">{{ member.title }}</p>
            <div class="team__socials">
              <a v-for="icon in member.socials" :key="icon.name" :href="icon.url" target="_blank">
                <img :src="icon.image" :alt="icon.name"/>
              </a>
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
      <router-link to="/contact" class="cta-btn-outline">Schedule Free Call</router-link>
      <router-link to="/programs" class="cta-btn-primary">View Admission Guide</router-link>
    </div>
  </section>

  <Whatsapp phoneNumber="+60172117150" />
  <Footer/>
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
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: 'Alya Khatou',
          title: 'CEO',
          email: 'info@mysite.com',
          phone: '123-456-7890',
          image: '/cc.jpg'
        },
        {
          id: 2,
          name: 'Cheikh Brahim',
          title: 'Deputy CEO',
          email: 'info@mysite.com',
          phone: '123-456-7890',
          image: '/images/ceo.jpeg'
        },
        {
          id: 3,
          name: 'Baboucarr Drammeh',
          title: 'Developer',
          email: 'info@mysite.com',
          phone: '123-456-7890',
          image: 'testimonial-avatar-3.jpg'
        },
        {
          id: 4,
          name: 'Memoudy beyatt',
          title: 'Marketing and media',
          email: 'info@mysite.com',
          phone: '123-456-7890',
          image: '/market.jpeg'
        },
        {
          id: 5,
          name: 'Ahmed Ahmedou',
          title: 'Visa application and admission',
          email: 'info@mysite.com',
          phone: '123-456-7890',
          image: '/visa.jpg'
        },
      ]
    };
  }
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
.about-hero {
  position: relative;
  background-image: url('/about-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 1.5rem 6rem;
  text-align: center;
}

.about-hero::before {
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

.about-hero__inner {
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0 auto;
}

.about-hero__inner--base {
  max-width: 720px;
  margin: 0 auto;
}

.about-hero__title {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  font-weight: 800;
  color: #ffffff;
  line-height: 1.15;
  margin: 0.5rem 0 1rem;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
}

.about-hero__italic {
  font-style: italic;
  color: #93c5fd;
}

.about-hero__sub {
  font-size: 1.05rem;
  color: rgba(255,255,255,0.78);
  line-height: 1.7;
  max-width: 540px;
  margin: 0 auto;
}

/* ── MISSION ── */
.mission {
  padding: 5rem 1.5rem;
  background: #fff;
}

.mission__inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 4rem;
  align-items: flex-start;
  flex-wrap: wrap;
}

.mission__text {
  flex: 1;
  min-width: 280px;
}

.mission__title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #111827;
  margin: 0.5rem 0 1.5rem;
  line-height: 1.2;
}

.mission__body {
  font-size: 0.97rem;
  color: #374151;
  line-height: 1.85;
  font-weight: 400;
  margin-bottom: 1.25rem;
  text-align: justify;
}

.mission__stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  flex: 0 0 320px;
}

.mission__stat-card {
  background: #f9fafb;
  border-radius: 16px;
  padding: 1.75rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
}

.mission__stat-card--blue {
  background: #1d4ed8;
}

.mission__stat-card--blue .mission__stat-num,
.mission__stat-card--blue .mission__stat-label {
  color: #fff;
}

.mission__stat-num {
  font-size: 2rem;
  font-weight: 800;
  color: #1d4ed8;
  line-height: 1;
  margin-bottom: 0.4rem;
}

.mission__stat-label {
  font-size: 0.8rem;
  color: #6b7280;
  font-weight: 500;
}

/* ── TEAM ── */
.team {
  background: #f9fafb;
  padding: 5rem 1.5rem;
}

.team__inner {
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
}

.team__title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  color: #111827;
  margin: 0.5rem 0 2.5rem;
}

.team__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.team__card {
  background: #fff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  transition: transform 0.2s, box-shadow 0.2s;
}

.team__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 28px rgba(0,0,0,0.12);
}

.team__img-wrap {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: #e5e7eb;
}

.team__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.team__card:hover .team__photo {
  transform: scale(1.05);
}

.team__info {
  padding: 1.25rem 1rem;
}

.team__name {
  font-size: 1rem;
  font-weight: 700;
  color: #111827;
  margin: 0 0 0.25rem;
}

.team__title-label {
  font-size: 0.82rem;
  color: #6b7280;
  margin: 0 0 0.75rem;
}

.team__socials {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.team__socials img {
  width: 22px;
  height: 22px;
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
  .mission__inner {
    flex-direction: column;
    gap: 2.5rem;
  }

  .mission__stats {
    flex: none;
    width: 100%;
  }

  .team__grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-banner {
    margin: 1rem;
    padding: 3rem 1.25rem;
  }
}

@media (max-width: 480px) {
  .team__grid {
    grid-template-columns: 1fr;
  }
}
</style>
