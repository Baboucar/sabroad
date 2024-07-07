<template>
    <Nav/>
    <div class="about-page">
      <div class="header">
        <h1>About</h1>
      </div>
      
      <div class="company-info">
        <h2>The Axis Group</h2>
        <p>
          I'm a paragraph. Click here to add your own text and edit me. It's easy.
          Just click “Edit Text” or double click me to add your own content and
          make changes to the font. Feel free to drag and drop me anywhere you
          like on your page. 
        </p>
        <p>
          This is a great space to write long text about your company and your
          services. You can use this space to go into a little more detail about
          your company. Talk about your team and what services you provide. 
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

  }
  
  .team-section {
    text-align: center;
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
  
  .member-info p {
    margin: 5px 0;
  }

  @media(min-width: 64rem){
    .about-page,.company-info{
        width: 80%;
        margin: 0 auto;
    }
   
  }
  
  @media (max-width: 768px) {
    .team-container {
      flex-direction: column;
    }
  }
  </style>
  