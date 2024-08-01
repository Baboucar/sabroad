<template>
  <div>
    <Nav />
    <section class="head">
      <h1>Browse the subject areas below to view related courses and choose the one that suits you best.</h1>

    </section>
    <section>
      <div class="business-management">
        <div class="header">
          <img src="/images/management.png" alt="Business & Management" class="header-image">

        </div>

        <div class="grid-container">
          <div v-for="item in subjects" :key="item" :to="{ name: 'CourseDetail', params: { name: item } }"
            class="grid-item">
            {{ item }}
          </div>
        </div>

      </div>

      <div class="business-management">
        <div class="header">
          <img src="/images/cs.png" alt="Computer Science" class="header-image">

        </div>

        <div class="grid-container">
          <div v-for="item in fieldsOfStudy" :key="item" :to="{ name: 'CourseDetail', params: { name: item } }"
            class="grid-item">
            {{ item }}
          </div>
        </div>

      </div>

      <div class="business-management">
        <div class="header">
          <img src="/images/en.jpg" alt="Engineering" class="header-image">

        </div>

        <div class="grid-container">
          <div v-for="item in engineeringPrograms" :key="item" :to="{ name: 'CourseDetail', params: { name: item } }"
            class="grid-item">
            {{ item }}
          </div>
        </div>

      </div>
      <div class="business-management">
        <div class="header">
          <img src="/images/m.jpg" alt="Medicine" class="header-image">

        </div>

        <div class="grid-container">
          <div v-for="item in medicine" :key="item" :to="{ name: 'CourseDetail', params: { name: item } }"
            class="grid-item">
            {{ item }}
          </div>
        </div>

      </div>

      <div class="business-management">
        <div class="header">
          <img src="/images/travel.jpg" alt="Medicine" class="header-image">

        </div>

        <div class="grid-container">
          <div v-for="item in  travel" :key="item" :to="{ name: 'CourseDetail', params: { name: item } }"
            class="grid-item">
            {{ item }}
          </div>
        </div>


      </div>
     <div>
      <h1 class="contact">If you cannot find the course you are looking for please <router-link to="/contact" class="link" >Contact us  </router-link>  and we will be glad to assist you</h1>
     </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Nav from './Nav.vue';
import Footer from './Footer.vue';
export default {
  components: {
    Nav,
    Footer
  },
  data() {
    return {
      subjects: [
        'Accounting', 'Business Administration', 'Entrepreneurship', 'Finance',
        'Marketing', 'E-Commerce', 'Islamic Banking & Finance', 'Education',
        'Human Resource Management', 'Sales Management', 'Management', 'Sports Management',
        'International Business', 'Tourism Management', 'International Relations', 'Taxation'
      ],
      fieldsOfStudy: [
        "Software Engineering",
        "Computer Science",
        "Artificial Intelligence",
        "Security Management",
        "Computer Forensics",
        "Information Science",
        "Networking Systems",
        "Computer System Security",
        "Computer Animation",
        "Interactive Multimedia Design",
        "Computer Engineering Technology",
        "Internet of Things"
      ],
      engineeringPrograms: [
        "Electrical Engineering",
        "Mechanical Engineering",
        "Chemical Engineering",
        "Quality Engineering and Management",
        "Civil Engineering",
        "Petroleum Engineering",
        "Automotive Engineering Technology",
        "Engineering Technology (Manufacturing)",
        "Engineering Technology (Aerospace)",
        "Aircraft Engineering Technology",
        "Marine Engineering Technology",
        "Engineering in Structural Integrity"
      ],

      medicine: [
        "Pharmacy",
        "Pharmaceutical Technology",
        "Nursing Science",
        "Public Health",
        "Psychology",
        "Dentistry",
        "Physiotherapy",
        "Pharmacology",
        "Physiology",
        "Midwifery",
        "Medicine",
        "Health & Safety"
      ],
      travel: [
        "Hospitality",
        "Catering",
        "Travel and Tourism",
        "Hotel Management",
        "Food & Drink Production",
        "Leisure Management"
      ]



    }
  }
}
</script>

<style lang="scss" scoped>
.head {
  background: #F6F8FF;
  text-align: center;
  font-size: .8rem;
  padding: 1rem;
  margin-top: 5rem;

}

.business-management {
  padding: 20px;
}
.contact{
  display: block;
  
  text-align: center;
  width: 95%;
  margin: 0 auto;
}

.link{
  text-decoration: none;
  color:  #007BFF;
}
.header {
  position: relative;
  text-align: center;
  color: white;
}

.header-image {
  width: 100%;
  height: auto;
  opacity: 0.8;
}

.title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2.5em;
}

.description,
.footer {
  text-align: center;
  margin: 20px 0;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.grid-item {
  display: block;
  padding: 15px;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s;
}

.grid-item:hover {
  background-color: #e0e0e0;
}

@media(min-width: 64rem) {
  .head {
    padding: 5rem;
  }
}
</style>