<template>
    <div class="desktop">
      <header class="header">
        <span>Logo</span>
        <span class="harmburger__icon" @click="toggleNav">&#9776;</span>
      </header>
      <nav :class="{ open: isNavOpen }">
        <router-link to="">Home</router-link>
        <router-link to="">All Programs</router-link>
        <router-link to="">About Us</router-link>
        <router-link to="">Apply</router-link>
        <router-link to="">Contact Us</router-link>
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
  }
  .header {
    display: flex;
    width: 90%;
    margin: 0 auto;
  }
  .harmburger__icon {
    margin-left: auto;
    cursor: pointer;
  }
  nav {
    margin-top: 2.5rem;
    display: none;
  }
  
  nav.open {
    display: block;
  }
  
  @media (min-width: 64rem) {
    .harmburger__icon {
      display: none;
    }
    nav {
      display: inline-block;
      margin-top: 0;
      width: 100%;
     
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
  }
  </style>