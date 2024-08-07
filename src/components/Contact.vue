<template>
  <Nav />
  <div id="app">
    <header>
      <h1>Get in Touch</h1>
      
    </header>
    <div class="contact-container">
      <div class="contact-info">
        <h2>We Want to Hear From You.</h2>
        <p>Thank you for visiting our contact us page. If you have any questions, comments, or concerns, please don’t
          hesitate to reach out to us. We’re here to help and will do our best to respond to your inquiry as soon as
          possible.</p>
        <div class="contact-details">
          <div class="detail">
            <i class="fa fa-map-marker" aria-hidden="true"></i>
            <p>41 48 2 Jln Genting Kelang Batu 4 1/2, 53300, Kuala Lumpur, Malaysia.</p>
          </div>
          <div class="detail">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <p>+60 11-5864 5052</p>
          </div>
          <div class="detail">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            <p>contact@beyonddimension.net</p>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <h2>Send Us a Message</h2>
        <form @submit.prevent="submitForm">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="form.name" required>

          <label for="phone">Phone</label>
          <input type="text" id="phone" v-model="form.phone" required>

          <label for="email">Email Address</label>
          <input type="email" id="email" v-model="form.email" required>

          <label for="qualification">Current Qualification</label>
          <select id="qualification" v-model="form.qualification" required>
            <option value="">Select</option>
            <option value="highschool">High School</option>
            <option value="bachelor">Bachelor's Degree</option>
            <option value="master">Master's Degree</option>
            <option value="phd">PhD</option>
          </select>

          <label for="interest">Program of Interest</label>
          <input type="text" id="interest" v-model="form.interest" required>

          <label for="message">Message</label>
          <textarea id="message" v-model="form.message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
  <Whatsapp phoneNumber="+60172117150" />

  <Footer />
</template>

<script>
import emailjs from '@emailjs/browser';
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
    submitForm() {
      const templateParams = {
        name: this.form.name,
        phone: this.form.phone,
        email: this.form.email,
        qualification: this.form.qualification,
        interest: this.form.interest,
        message: this.form.message,
      };

      emailjs
        .send('service_hrb61or', 'template_j6qyy9g', templateParams, '2-QbgWjxziT8SkS5l')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Form submitted successfully!');
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Failed to submit the form. Please try again.');
          }
        );
    },
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f8f9fa;
  color: #333;
}

header {
  text-align: center;
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 5rem;
}

header h1 {
  margin: 0;
}

header nav {
  margin-top: 10px;
}

header nav a {
  color: #007bff;
  text-decoration: none;
  margin: 0 5px;
}

.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 20px;
}

.contact-info,
.contact-form {
  background-color: #ffffff;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1;
  min-width: 300px;
  max-width: 500px;
}

.contact-info h2,
.contact-form h2 {
  margin-top: 0;
}

.contact-details .detail {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

p {
  padding-left: 1rem;
}

.contact-details .detail img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
}

.contact-form label {
  margin: 10px 0 5px;
}

.contact-form input,
.contact-form select,
.contact-form textarea,
.contact-form button {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.contact-form button {
  background-color: #007bff;
  color: #ffffff;
  border: none;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>
