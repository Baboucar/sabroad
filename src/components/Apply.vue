<template>
    <Nav/>
    <div class="application-form-page">
      <div class="header">
        <h1>Application Form</h1>
        <nav>
          <router-link to="/">Home</router-link> / <span>Apply Now</span>
        </nav>
      </div>
      <div class="form-container">
        <h2>Register for Interest</h2>
        <p>Start Your Education Journey</p>
        <form @submit.prevent="submitForm">
          <div class="form-row">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" v-model="form.name" required>
            </div>
            <div class="form-group">
              <label for="phone">Phone</label>
              <input type="text" id="phone" v-model="form.phone" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="email">Email Address</label>
              <input type="email" id="email" v-model="form.email" required>
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
            <input type="text" id="interest" v-model="form.interest" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" v-model="form.message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
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
        form: {
          name: '',
          phone: '',
          email: '',
          qualification: '',
          interest: '',
          message: ''
        }
      };
    },
    methods: {
      submitForm() {
        // handle form submission
        alert('Form submitted!');
      }
    }
  };
  </script>
  
  <style scoped>
  *{
    box-sizing: border-box;
  }
  .application-form-page {
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .header h1 {
    margin: 0;
  }
  
  .header nav {
    margin-top: 10px;
  }
  
  .header nav a {
    color: #000;
    text-decoration: none;
  }
  
  .header nav span {
    color: #555;
  }
  
  .form-container {
    max-width: 600px;
    margin: 0 auto;
    background: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }
  
  .form-container h2 {
    margin-top: 0;
    color: #fcb900;
  }
  
  .form-row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
  }
  
  .form-group {
    flex: 1;
    min-width: 200px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
   input, textarea, select{
     height: 45px;
   }
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
   
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background: #fcb900;
    border: none;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  button:hover {
    background: #f8a800;
  }
  
  @media (max-width: 768px) {
    .form-row {
      flex-direction: column;
    }
  }
  </style>
  