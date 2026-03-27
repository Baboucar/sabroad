<template>
  <div>
    <Nav />

    <!-- PAGE HERO -->
    <section class="prog-hero">
      <div class="prog-hero__inner">
        <p class="eyebrow">OUR PROGRAMS</p>
        <h1 class="prog-hero__title">Elite Faculties for the<br><em>Next Generation</em> of Leaders</h1>
        <p class="prog-hero__desc">Browse the subject areas below to find the program that best fits your ambitions. World-class education, curated for you.</p>
      </div>
    </section>

    <!-- FACULTY SECTIONS -->
    <section class="faculty" v-for="faculty in faculties" :key="faculty.id">
      <div class="faculty__inner">
        <div class="faculty__header">
          <div class="faculty__header-text">
            <span class="faculty__tag">{{ faculty.tag }}</span>
            <h2 class="faculty__title">{{ faculty.title }}</h2>
            <p class="faculty__desc">{{ faculty.desc }}</p>
          </div>
          <div class="faculty__image-wrap">
            <img :src="faculty.image" :alt="faculty.title" class="faculty__image" />
          </div>
        </div>

        <div class="courses__grid">
          <div
            v-for="item in faculty.courses"
            :key="item"
            class="course__card"
            @click="$router.push('/apply')"
          >
            <div class="course__icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
            </div>
            <span>{{ item }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CONTACT CTA -->
    <section class="cta-banner">
      <h2 class="cta-banner__title">Can't find your course?</h2>
      <p class="cta-banner__desc">We offer many more programs not listed here. Contact us and we'll be glad to assist you find the perfect fit.</p>
      <div class="cta-banner__btns">
        <router-link to="/contact" class="cta-btn-primary">Contact Us →</router-link>
        <router-link to="/apply" class="cta-btn-outline">Start Application</router-link>
      </div>
    </section>

    <Whatsapp phoneNumber="+60172117150" />
    <Footer />
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
import Whatsapp from './Whatsapp.vue';

export default {
  components: { Nav, Footer, Whatsapp },
  data() {
    return {
      faculties: [
        {
          id: 'business',
          tag: 'Business',
          title: 'Business & Management',
          desc: 'Build the skills to lead organisations in a rapidly changing global economy. AACSB accredited institutions.',
          image: '/images/management.png',
          courses: [
            'Accounting', 'Business Administration', 'Entrepreneurship', 'Finance',
            'Marketing', 'E-Commerce', 'Islamic Banking & Finance', 'Education',
            'Human Resource Management', 'Sales Management', 'Management', 'Sports Management',
            'International Business', 'Tourism Management', 'International Relations', 'Taxation'
          ]
        },
        {
          id: 'technology',
          tag: 'Technology',
          title: 'IT & Data Science',
          desc: 'Pioneer digital innovation with cutting-edge programs in software, AI, cybersecurity and more.',
          image: '/images/cs.png',
          courses: [
            'Software Engineering', 'Computer Science', 'Artificial Intelligence',
            'Security Management', 'Computer Forensics', 'Information Science',
            'Networking Systems', 'Computer System Security', 'Computer Animation',
            'Interactive Multimedia Design', 'Computer Engineering Technology', 'Internet of Things'
          ]
        },
        {
          id: 'engineering',
          tag: 'Engineering',
          title: 'Engineering',
          desc: 'Develop sustainable global solutions through world-class engineering programs.',
          image: '/images/en.jpg',
          courses: [
            'Electrical Engineering', 'Mechanical Engineering', 'Chemical Engineering',
            'Quality Engineering and Management', 'Civil Engineering', 'Petroleum Engineering',
            'Automotive Engineering Technology', 'Engineering Technology (Manufacturing)',
            'Engineering Technology (Aerospace)', 'Aircraft Engineering Technology',
            'Marine Engineering Technology', 'Engineering in Structural Integrity'
          ]
        },
        {
          id: 'medicine',
          tag: 'Medicine',
          title: 'Medicine & Health Sciences',
          desc: 'MQA recognised degrees preparing the next generation of healthcare professionals.',
          image: '/images/m.jpg',
          courses: [
            'Pharmacy', 'Pharmaceutical Technology', 'Nursing Science', 'Public Health',
            'Psychology', 'Dentistry', 'Physiotherapy', 'Pharmacology',
            'Physiology', 'Midwifery', 'Medicine', 'Health & Safety'
          ]
        },
        {
          id: 'hospitality',
          tag: 'Hospitality',
          title: 'Hospitality & Tourism',
          desc: 'Explore the world of travel, tourism and hospitality management in one of Asia\'s most vibrant destinations.',
          image: '/images/travel.jpg',
          courses: [
            'Hospitality', 'Catering', 'Travel and Tourism',
            'Hotel Management', 'Food & Drink Production', 'Leisure Management'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
* { box-sizing: border-box; }
img { max-width: 100%; display: block; }

/* ── HERO ── */
.prog-hero {
  background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
  padding: 9rem 1.5rem 5rem;
  text-align: center;
}

.prog-hero__inner {
  max-width: 760px;
  margin: 0 auto;
}

.eyebrow {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  color: #93c5fd;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.prog-hero__title {
  font-size: clamp(2rem, 5vw, 3.25rem);
  font-weight: 800;
  color: #fff;
  line-height: 1.15;
  margin-bottom: 1.25rem;

  em {
    font-style: italic;
    color: #93c5fd;
  }
}

.prog-hero__desc {
  font-size: 1.05rem;
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 580px;
  margin: 0 auto;
}

/* ── FACULTY SECTION ── */
.faculty {
  padding: 5rem 1.5rem;
  border-bottom: 1px solid #f1f5f9;

  &:nth-child(even) {
    background: #f9fafb;

    .faculty__header {
      flex-direction: row-reverse;
    }
  }
}

.faculty__inner {
  max-width: 1200px;
  margin: 0 auto;
}

.faculty__header {
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.faculty__header-text {
  flex: 1;
  min-width: 260px;
}

.faculty__tag {
  display: inline-block;
  background: #eff6ff;
  color: #1d4ed8;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 0.3rem 0.85rem;
  border-radius: 999px;
  margin-bottom: 0.75rem;
}

.faculty__title {
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 800;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.2;
}

.faculty__desc {
  font-size: 0.95rem;
  color: #6b7280;
  line-height: 1.7;
  max-width: 480px;
}

.faculty__image-wrap {
  flex: 1;
  min-width: 260px;
  max-width: 520px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,0.12);
}

.faculty__image {
  width: 100%;
  height: 280px;
  object-fit: cover;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.04);
  }
}

/* ── COURSES GRID ── */
.courses__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 0.85rem;
}

.course__card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: #fff;
  border: 1.5px solid #e5e7eb;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    border-color: #1d4ed8;
    color: #1d4ed8;
    background: #eff6ff;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(29,78,216,0.1);
  }
}

.faculty:nth-child(even) .course__card {
  background: #fff;
}

.course__icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #eff6ff;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 16px;
    height: 16px;
    stroke: #1d4ed8;
  }
}

.course__card:hover .course__icon {
  background: #dbeafe;
}

/* ── CTA BANNER ── */
.cta-banner {
  background: #1d4ed8;
  padding: 5rem 1.5rem;
  text-align: center;
}

.cta-banner__title {
  font-size: clamp(1.75rem, 4vw, 2.5rem);
  font-weight: 800;
  color: #fff;
  margin-bottom: 1rem;
}

.cta-banner__desc {
  font-size: 1rem;
  color: #bfdbfe;
  line-height: 1.7;
  max-width: 520px;
  margin: 0 auto 2rem;
}

.cta-banner__btns {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn-primary {
  text-decoration: none;
  background: #fff;
  color: #1d4ed8;
  padding: 0.8rem 1.75rem;
  border-radius: 8px;
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:hover {
    background: #eff6ff;
  }
}

.cta-btn-outline {
  text-decoration: none;
  color: #fff;
  border: 2px solid rgba(255,255,255,0.5);
  padding: 0.8rem 1.75rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: all 0.2s;

  &:hover {
    border-color: #fff;
    background: rgba(255,255,255,0.1);
  }
}

/* ── RESPONSIVE ── */
@media (max-width: 768px) {
  .faculty__header {
    flex-direction: column !important;
    gap: 1.5rem;
  }

  .faculty__image-wrap {
    width: 100%;
    max-width: 100%;
  }

  .faculty__image {
    height: 220px;
  }

  .courses__grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
}

@media (max-width: 480px) {
  .courses__grid {
    grid-template-columns: 1fr 1fr;
  }

  .course__card {
    font-size: 0.8rem;
    padding: 0.7rem 0.75rem;
  }
}
</style>
