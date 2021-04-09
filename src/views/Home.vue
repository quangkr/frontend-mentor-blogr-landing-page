<template>
  <div class="home-page">
    <section class="section-hero">
      <h1 class="hero-title">A modern publishing platform</h1>
      <h2 class="hero-description">
        Grow your audience and build your online brand
      </h2>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  font-family: var(--font-family-primary);
  font-weight: 300;
}

.section-hero {
  background-image: linear-gradient(to right, var(--gradient-red-1));

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
  color: var(--color-white-1);
  margin: 1rem 0;
}

.hero-description {
  font-size: 1.3rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
  color: var(--color-white-1);
  margin: 0;
}
</style>
