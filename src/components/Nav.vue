<template>
    <div class="desktop">
      <header class="header">
      <router-link to="/">   <img class="logo" src="/public/images/logo.jpeg" alt="logo" ></router-link>
        <span class="harmburger__icon" @click="toggleNav">&#9776;</span>
      </header>
      <nav :class="{ open: isNavOpen }">
        <router-link to="/">Home</router-link>
        <router-link to="/programs">All Programs</router-link>
        <router-link to="/about">About Us</router-link>
        <router-link to="/apply">Apply</router-link>
        <router-link to="/contact">Contact Us</router-link>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavOpen: false,
      };
    },
    methods: {
      toggleNav() {
        this.isNavOpen = !this.isNavOpen;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  a {
    list-style-type: none;
    text-decoration: none;
    display: block;
    padding-top: 1rem;
    margin-left: 1rem;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.5rem;
    
      margin-top: -15px;
  
  }
  .header {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .harmburger__icon {
    margin-left: auto;
    cursor: pointer;
    font-size: 3rem;
  }
  nav {
    margin-top: 2.5rem;
    display: none;
  }
  
  nav.open {
    display: block;
  }
  
  .logo{
    width: 100px;
    margin-top: 0;
  }

  
  @media (min-width: 64rem) {
    .harmburger__icon {
      display: none;
    }
    nav {
      display: inline-block;
      margin-top: 0;
      width: 100%;
      position: fixed;
      text-align: right;
      margin-left: -18rem;
      background: #FFFFFF;
      height: 50px;
      top: 0;
     

    }
    a{
        display: inline-block;
        font-size: 1rem;
    }
    .desktop {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .logo{
      
      position: fixed;
      z-index: 1;
    }

    nav{
      padding-top: 1rem;
    }
    
  }
  </style>