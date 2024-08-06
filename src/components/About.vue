<template>
    <Nav/>
    <div class="about-page">
      <div class="header">
        <h1  >About</h1>
      </div>
      
      <div class="company-info">
      
        <p>

          At Beyond Dimension Study Abroad, we believe that education goes beyond the four walls of a classroom. We have helped countless individuals explore new destinations, experience diverse cultures, and discover more about the world and themselves. Our mission is to open doors to global education, providing opportunities that transform lives and broaden horizons
          Join us and embark on a journey that will shape your future and expand your worldview. Discover more about the world and yourself with Beyond Dimension Study Abroad.
        </p>
        <p>
          We collaborate with the world’s leading colleges and universities to create programs that enhance and enrich classroom lessons. By integrating academic rigor with real-world experiences, our programs offer students a unique blend of learning and adventure. From bustling cities to serene landscapes, our culturally immersive, international educational experiences bring learning to life in ways that textbooks never can.
          Through our tailored study abroad programs, students gain profound insights and lasting memories from their time abroad. They engage with new perspectives, develop critical thinking skills, and build a global network that will benefit them throughout their lives. At Beyond Dimension Study Abroad, we are committed to making international education accessible and impactful, ensuring that every student returns home not just with knowledge, but with a richer understanding of the world and their place in it.

        </p>
      </div>
      <div class="team-section">
        <h2>Our Team</h2>
        <div class="team-container">
          <div class="team-member" v-for="member in teamMembers" :key="member.id">
            <img :src="member.image" :alt="member.name" class="member-image" />
            <div class="member-info">
              <h3>{{ member.name }}</h3>
              <p>{{ member.title }}</p>
              <p>{{ member.email }} | Phone: {{ member.phone }}</p>
              <p>
                This is a great space to write long text about your company and
                your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what services
                you provide. 
              </p>
            </div>
          </div>
        </div>
      </div>
    
    </div>
    <Footer/>
   

  </template>
  
  <script>
  import Nav from './Nav.vue';
  import Footer from './Footer.vue';
  export default {
    components:{
    Nav,
    Footer

    },
    data() {
      return {
        teamMembers: [
          {
            id: 1,
            name: 'Jeff Florick',
            title: 'CEO',
            email: 'info@mysite.com',
            phone: '123-456-7890',
            image: '/images/about.png'
          },
          {
            id: 2,
            name: 'Jenny Van Bingen',
            title: 'CFO',
            email: 'info@mysite.com',
            phone: '123-456-7890',
            image: '/images/about.png'
          },
          {
            id: 3,
            name: 'Nora Lee Smith',
            title: 'HR',
            email: 'info@mysite.com',
            phone: '123-456-7890',
            image: '/images/about.png'
          },
          
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .about-page {
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .company-info {
    text-align: center;
    margin-bottom: 40px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, .1), 0 8px 10px -6px rgba(0, 0, 0, .1);
    padding: 1rem;
    line-height: 1.5;

  }
  
  .team-section {
    text-align: center;
    padding: 1rem;
  }
  
  .team-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .team-member {
    background-color: #fffefe;
    border: 1px solid #f5f4f4;
    padding: 20px;
    max-width: 300px;
    text-align: center;
  }
  
  .member-image {
    width: 100%;
    height: auto;
    margin-bottom: 15px;
  }
  
  .member-info h3 {
    margin-bottom: 5px;
  }
  
  p{
    line-height: 1.5;
  }
  .member-info p {
    margin: 5px 0;
  }

  @media(min-width: 64rem){
    .about-page,.company-info{
        width: 80%;
        margin: 0 auto;
    }

    .header{
      margin-top: 5rem;
    }
   
  }
  
  @media (max-width: 768px) {
    .team-container {
      flex-direction: column;
    }

    
  }
  </style>
  