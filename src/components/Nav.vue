<template>
  <div class="desktop">
    <header class="header">
      <router-link to="/"> <img class="logo" src="/public/images/logo.jpeg" alt="logo" ></router-link>
      <span class="harmburger__icon" @click="toggleNav">&#9776;</span>
    </header>
    <nav :class="{ open: isNavOpen }">
      <router-link to="/" exact>Home</router-link>
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
  transition: color 0.3s ease;
  font-weight: bold;
}
a:hover {
  color: rgba(0, 0, 0, 0.8);
}
.header {
  display: flex;
  width: 90%;
  margin: 0 auto;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  transition: background-color 0.3s ease;
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

.logo{
  width: 100px;
}

@media (min-width: 64rem) {
  .harmburger__icon {
    display: none;
  }
  nav {
    display: block;
    margin-top: 0;
    width: 100%;
    position: fixed;
    text-align: right;
    transition: top 0.3s ease;
    background: #FFFFFF;
    height: 60px;
    margin-left: -24rem;
  }
  a {
    display: inline-block;
    font-size: 1rem;
  }
  .desktop {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .logo {
    position: fixed;
  }
}

/* Add styles for active link */
.router-link-active {
  color: #015cb5;
}
</style>
