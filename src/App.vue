<script setup>
import { RouterView } from 'vue-router'
import PageLoader from './components/PageLoader.vue'
import { onMounted } from 'vue'

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sr--visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12 }
  )

  function observe() {
    document.querySelectorAll('.sr').forEach((el) => {
      if (!el.classList.contains('sr--visible')) {
        observer.observe(el)
      }
    })
  }

  // Initial pass
  observe()

  // Re-observe after route changes (new DOM nodes)
  const mutationObserver = new MutationObserver(() => observe())
  mutationObserver.observe(document.body, { childList: true, subtree: true })
}

onMounted(() => {
  initScrollReveal()
})
</script>

<template>
  <PageLoader />
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Shantell+Sans:ital,wght@0,300..800;1,300..800&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

/* ── Global Scroll Reveal ── */
.sr {
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}

.sr--delay-1 { transition-delay: 0.1s; }
.sr--delay-2 { transition-delay: 0.2s; }
.sr--delay-3 { transition-delay: 0.3s; }
.sr--delay-4 { transition-delay: 0.4s; }
.sr--delay-5 { transition-delay: 0.5s; }

.sr--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Slide from left variant */
.sr--left {
  transform: translateX(-32px);
}
.sr--left.sr--visible {
  transform: translateX(0);
}

/* Slide from right variant */
.sr--right {
  transform: translateX(32px);
}
.sr--right.sr--visible {
  transform: translateX(0);
}

/* Scale up variant */
.sr--scale {
  transform: scale(0.92);
}
.sr--scale.sr--visible {
  transform: scale(1);
}
</style>
