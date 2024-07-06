<template>
    <div>
 <Nav/>
 <section class="head">
    <h1>Browse the subject areas below to view related courses and choose the one that suits you best.</h1>

 </section>
 <section>
    <div class="business-management">
        <div class="header">
          <img src="/public/images/management.png" alt="Business & Management" class="header-image">
          <h1 class="title">Business & Management</h1>
        </div>
        <p class="description">
          You will acquire skills in finance, accounting, marketing, HR management, and administrative studies that can pave the way for your own endeavors and projects with global companies.
        </p>
        <div class="grid-container">
          <router-link v-for="item in subjects" :key="item" :to="{ name: 'CourseDetail', params: { name: item }}" class="grid-item">
            {{ item }}
          </router-link>
        </div>
        <p class="footer">
          Hey there! If you can’t find what you’re looking for or are undecisive, just give us a shout and we’ll be happy to help.
        </p>
      </div>
    
 </section>
 <Footer/>
    </div>
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
      subjects: [
        'Accounting', 'Business Administration', 'Entrepreneurship', 'Finance',
        'Marketing', 'E-Commerce', 'Islamic Banking & Finance', 'Education',
        'Human Resource Management', 'Sales Management', 'Management', 'Sports Management',
        'International Business', 'Tourism Management', 'International Relations', 'Taxation'
      ]
    }
  }
    }
</script>

<style lang="scss" scoped>
.head{
    background: #F6F8FF;
    text-align: center;
    font-size: .8rem;
    padding: 1rem;
   
}

.business-management {
    padding: 20px;
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
  
  .description, .footer {
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

  @media(min-width: 64rem){
    .head{
        padding: 5rem;
    }
  }
</style>