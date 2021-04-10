<template>
  <div :style="styleVars" class="home-page">
    <section class="section-hero">
      <h1 class="hero-title">A modern publishing platform</h1>
      <p class="hero-description">
        Grow your audience and build your online brand
      </p>
      <div class="buttons-group">
        <Button>Start for Free</Button>
        <Button outlined>Learn more</Button>
      </div>
    </section>
    <section class="section-features">
      <h2 class="section-title">Designed for the future</h2>
      <h3 class="section-subtitle">Introducing an extensible editor</h3>
      <p class="copy-text">
        Blogr fetures an exceedingly intuitive interface which let you focus on
        one thing: creating content. The editor supports management of multiple
        blogs and allows easy manipulation of embeds such as images, videos and
        Markdown. Extensibility with plugins and themes provide easy way to add
        functionality or change the looks of a blog.
      </p>
      <h3 class="section-subtitle">Robust content management</h3>
      <p class="copy-text">
        Flexible content management enables users to easily move through posts.
        Increase the usability of your blog by adding customized categories,
        sections, format or flow. With this functionality, you&apos;re in full
        control.
      </p>
      <img :src="SvgPatternCircleLight" alt="Circle pattern" />
      <img :src="SvgIllustrationEditorDesktop" alt="Editor illustration" />
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

import SvgHeroBackground from "@/assets/bg-pattern-intro.svg";
import SvgPatternCircleLight from "@/assets/bg-pattern-circles-light.svg";
import SvgIllustrationEditorDesktop from "@/assets/illustration-editor-desktop.svg";

export default {
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      SvgPatternCircleLight,
      SvgIllustrationEditorDesktop,
    };
  },
  computed: {
    styleVars() {
      return {
        "--hero-background-url": `url(${SvgHeroBackground})`,
      };
    },
  },
};
</script>
