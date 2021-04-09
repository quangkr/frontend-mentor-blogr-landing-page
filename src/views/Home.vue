<template>
  <div :style="styleVars" class="home-page">
    <section class="section-hero">
      <h1 class="hero-title">A modern publishing platform</h1>
      <h2 class="hero-description">
        Grow your audience and build your online brand
      </h2>
      <div class="buttons-group">
        <Button>Start for Free</Button>
        <Button outlined>Learn more</Button>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.home-page {
  font-family: var(--font-family-primary);
  font-weight: 300;
}

.section-hero {
  background-image: var(--hero-background-url),
    linear-gradient(to right, var(--gradient-red-1));
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 2200px 2200px, cover;
  height: 600px;
  border-bottom-left-radius: var(--border-radius-large);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

.buttons-group {
  margin-top: 3rem;

  & > *:not(:last-child) {
    margin-right: 1.2rem;
  }
}
</style>

<script>
import Button from "@/components/Button.vue";
import HeroSvgBackground from "@/assets/bg-pattern-intro.svg";
export default {
  name: "Home",
  components: {
    Button,
  },
  computed: {
    styleVars() {
      return {
        "--hero-background-url": `url(${HeroSvgBackground})`,
      };
    },
  },
};
</script>
