<template>
  <transition name="loader-fade">
    <div v-if="visible" class="page-loader">
      <div class="page-loader__inner">
        <div class="page-loader__logo">
          <span class="page-loader__logo-text">Beyond</span>
          <em class="page-loader__logo-em">Dimension</em>
        </div>
        <div class="page-loader__bar-wrap">
          <div class="page-loader__bar"></div>
        </div>
        <p class="page-loader__tagline">Opening doors to global education…</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PageLoader',
  data() {
    return { visible: true };
  },
  mounted() {
    setTimeout(() => { this.visible = false; }, 1800);
  }
};
</script>

<style scoped>
.page-loader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.page-loader__inner {
  text-align: center;
  animation: loaderIn 0.5s ease both;
}

@keyframes loaderIn {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.page-loader__logo {
  display: flex;
  align-items: baseline;
  gap: 0.4rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.page-loader__logo-text {
  font-size: 2rem;
  font-weight: 800;
  color: #fff;
  letter-spacing: -0.02em;
}

.page-loader__logo-em {
  font-size: 2rem;
  font-weight: 800;
  font-style: italic;
  background: linear-gradient(135deg, #1d4ed8, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-loader__bar-wrap {
  width: 200px;
  height: 3px;
  background: rgba(255,255,255,0.1);
  border-radius: 999px;
  overflow: hidden;
  margin: 0 auto 1.25rem;
}

.page-loader__bar {
  height: 100%;
  background: linear-gradient(90deg, #1d4ed8, #6366f1);
  border-radius: 999px;
  animation: loadBar 1.6s ease forwards;
}

@keyframes loadBar {
  from { width: 0%; }
  to   { width: 100%; }
}

.page-loader__tagline {
  font-size: 0.82rem;
  color: rgba(255,255,255,0.45);
  letter-spacing: 0.05em;
}

/* Exit transition */
.loader-fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.loader-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>
