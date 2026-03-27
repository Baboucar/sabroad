<template>
  <header class="navbar">
    <div class="navbar__inner">
      <router-link to="/" class="navbar__logo">
        <img src="/images/logo.jpeg" alt="Beyond Dimension" />
      </router-link>

      <nav class="navbar__links" :class="{ open: isNavOpen }">
        <router-link to="/" exact-active-class="active-link">Home</router-link>
        <router-link to="/programs" exact-active-class="active-link">Programs</router-link>
        <router-link to="/about" exact-active-class="active-link">About</router-link>
        <router-link to="/apply" exact-active-class="active-link">Apply</router-link>
        <router-link to="/contact" exact-active-class="active-link">Contact</router-link>
      </nav>

      <div class="navbar__actions">
        <router-link to="/contact" class="btn-outline">Contact Us</router-link>
        <router-link to="/apply" class="btn-primary">Apply Now</router-link>
      </div>

      <button class="hamburger" @click="toggleNav" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>
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
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
  box-shadow: 0 1px 8px rgba(0,0,0,0.08);
}

.navbar__inner {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  gap: 2rem;
}

.navbar__logo img {
  height: 40px;
  width: auto;
  display: block;
}

.navbar__links {
  display: flex;
  gap: 0.25rem;
  flex: 1;
  justify-content: center;

  a {
    text-decoration: none;
    color: #374151;
    font-size: 0.95rem;
    font-weight: 500;
    padding: 0.4rem 0.75rem;
    border-radius: 6px;
    transition: color 0.2s;

    &:hover {
      color: #1d4ed8;
    }
  }

  .active-link {
    color: #1d4ed8;
    font-weight: 600;
  }
}

.navbar__actions {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.btn-outline {
  text-decoration: none;
  color: #1d4ed8;
  border: 1.5px solid #1d4ed8;
  padding: 0.45rem 1.1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.2s;

  &:hover {
    background: #1d4ed8;
    color: #fff;
  }
}

.btn-primary {
  text-decoration: none;
  background: #1d4ed8;
  color: #fff;
  padding: 0.45rem 1.1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background: #1e40af;
  }
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 4px;

  span {
    display: block;
    width: 24px;
    height: 2px;
    background: #374151;
    border-radius: 2px;
  }
}

@media (max-width: 900px) {
  .navbar__links {
    display: none;
    position: absolute;
    top: 64px;
    left: 0;
    right: 0;
    background: #fff;
    flex-direction: column;
    padding: 1rem 1.5rem 1.5rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    gap: 0.25rem;

    &.open {
      display: flex;
    }

    a {
      font-size: 1rem;
      padding: 0.6rem 0.5rem;
    }
  }

  .navbar__actions {
    display: none;
  }

  .hamburger {
    display: flex;
  }
}
</style>
