<template>
  <footer class="footer">
    <div class="footer__inner">
      <div class="footer__brand">
        <router-link to="/">
          <img src="/images/logo.jpeg" alt="Beyond Dimension" class="footer__logo" />
        </router-link>
        <p class="footer__tagline">Connecting ambitious minds to global opportunities through curated education pathways.</p>
        <div class="footer__socials">
          <a href="https://www.facebook.com/people/Beyond-Dimensions/61563697877245/" target="_blank" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/beyond_dimension_20?igsh=ZTVnOWE1dHcwemlp" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="https://www.tiktok.com/@beyond.dimensions22" target="_blank" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </div>

      <div class="footer__col">
        <h4 class="footer__heading">Quick Links</h4>
        <ul>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/programs">Programs</router-link></li>
          <li><router-link to="/apply">Apply</router-link></li>
          <li><router-link to="/contact">Support</router-link></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4 class="footer__heading">Policy</h4>
        <ul>
          <li><router-link to="/privacy-policy">Privacy Policy</router-link></li>
          <li><router-link to="/terms-of-service">Terms of Service</router-link></li>
        </ul>
      </div>

      <div class="footer__col">
        <h4 class="footer__heading">Contact</h4>
        <ul>
          <li><a href="mailto:contact@beyonddimension.net">contact@beyonddimension.net</a></li>
          <li><a href="tel:+22242030329">+222 42 03 03 29</a></li>
          <li><a href="tel:+2205417372">+220 541 7372</a></li>
          <li><a href="tel:+60115864505">+60 11-5864 5052</a></li>
        </ul>
        <p class="footer__address">300w Tevragh Zeina,<br>Nouakchott, Mauritania</p>
      </div>
    </div>

    <div class="footer__bottom">
      <p>© {{ currentYear }} Beyond Dimensions. The Curated Horizon for International Education.</p>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background: #111827;
  color: #d1d5db;
  padding: 4rem 1.5rem 0;
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 3rem;
  border-bottom: 1px solid #1f2937;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
}

.footer__logo {
  height: 40px;
  width: auto;
  margin-bottom: 1rem;
  border-radius: 6px;
}

.footer__tagline {
  font-size: 0.875rem;
  line-height: 1.6;
  color: #9ca3af;
  margin-bottom: 1.25rem;
  max-width: 260px;
}

.footer__socials {
  display: flex;
  gap: 0.75rem;

  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #1f2937;
    color: #d1d5db;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.85rem;
    transition: background 0.2s, color 0.2s;

    &:hover {
      background: #1d4ed8;
      color: #fff;
    }
  }
}

.footer__heading {
  font-size: 0.85rem;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1rem;
}

.footer__col ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.6rem;
  }

  a {
    text-decoration: none;
    color: #9ca3af;
    font-size: 0.875rem;
    transition: color 0.2s;

    &:hover {
      color: #fff;
    }
  }
}

.footer__address {
  font-size: 0.82rem;
  color: #6b7280;
  line-height: 1.6;
  margin-top: 1rem;
}

.footer__bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem 0;
  text-align: center;

  p {
    font-size: 0.8rem;
    color: #6b7280;
    margin: 0;
  }
}
</style>
