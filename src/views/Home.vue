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
      <div class="feature-block">
        <div class="text-container">
          <h3 class="section-subtitle">Introducing an extensible editor</h3>
          <p class="copy-text">
            Blogr fetures an exceedingly intuitive interface which let you focus
            on one thing: creating content. The editor supports management of
            multiple blogs and allows easy manipulation of embeds such as
            images, videos and Markdown. Extensibility with plugins and themes
            provide easy way to add functionality or change the looks of a blog.
          </p>
          <h3 class="section-subtitle">Robust content management</h3>
          <p class="copy-text">
            Flexible content management enables users to easily move through
            posts. Increase the usability of your blog by adding customized
            categories, sections, format or flow. With this functionality,
            you&apos;re in full control.
          </p>
        </div>
        <div class="illustrations">
          <img
            class="bg-pattern"
            :src="SvgPatternCircleLight"
            alt="A pattern with three circles hidden in the background"
          />
          <img
            class="illustration-img"
            :src="SvgIllustrationEditor"
            alt="An illustration depicts a text editor"
          />
        </div>
      </div>
    </section>
    <section class="section-features section-features-alt">
      <img
        class="illustration-img"
        :src="SvgIllustrationPhone"
        alt="An illustraion depicts two phones"
      />
      <div class="section-content">
        <h2 class="section-title">State of the Art Infrastructure</h2>
        <p class="copy-text">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
        <div class="bg-pattern-container">
          <img
            class="bg-pattern"
            :src="SvgPatternCircleDark"
            alt="A pattern with three circles hidden in the background"
          />
        </div>
      </div>
    </section>
    <section class="section-features">
      <div class="feature-block">
        <div class="text-container">
          <h3 class="section-subtitle">Free, open, simple</h3>
          <p class="copy-text">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3 class="section-subtitle">Powerful tooling</h3>
          <p class="copy-text">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
        <div class="illustrations">
          <img
            class="bg-pattern"
            :src="SvgPatternCircleLight"
            alt="A pattern with three circles hidden in the background"
          />
          <img
            class="illustration-img"
            :src="SvgIllustrationLaptop"
            alt="An illustration depicts a laptop"
          />
        </div>
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
  min-height: 700px;
  height: 100vh;
  padding: var(--border-radius-large) 0;
  border-bottom-left-radius: var(--border-radius-large);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 600;
  letter-spacing: -0.05rem;
  color: var(--color-white-1);
  margin: 1rem 2rem;
}

.hero-description {
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.05rem;
  color: var(--color-white-1);
  margin: 0 2rem;
}

.buttons-group {
  display: flex;
  flex-direction: column;
  margin: 3rem 2rem 0 2rem;

  & > *:not(:last-child) {
    margin-bottom: 1.2rem;
  }
}

.section-features {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem 0;
}

.section-features-alt {
  .section-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--color-secondary-1);
    border-bottom-left-radius: var(--border-radius-large);
    border-top-right-radius: var(--border-radius-large);
    padding: var(--border-radius-large) 0;
    margin-top: -50%;
    min-height: 150vw;

    .section-title,
    .copy-text {
      position: relative;
      z-index: 100;
      color: var(--color-white-1);
    }

    .bg-pattern-container {
      position: absolute;
      top: 0;
      left: 0;
      border-top-right-radius: var(--border-radius-large);
      width: 100%;
      padding-bottom: 120%;
      overflow: hidden;

      .bg-pattern {
        position: absolute;
        top: 0;
        left: 50%;
        width: 140%;
        transform: translate(-50%, -30%);
        z-index: 10;
      }
    }
  }

  .illustration-img {
    position: relative;
    width: 105%;
    z-index: 99;
    order: -1;
  }
}

.feature-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: $xl;
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  color: var(--color-secondary-1);
  line-height: 1.5;
  margin: 2rem 2rem 4rem 2rem;
  text-align: center;
}

.section-subtitle {
  font-size: 2rem;
  color: var(--color-secondary-1);
  margin: 4rem 2rem 2rem 2rem;
  text-align: center;
}

.copy-text {
  font-size: 1.2rem;
  color: var(--color-cool-gray-1);
  margin: 1rem 1rem;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.02rem;
}

.illustrations {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;

  order: -1;

  .bg-pattern {
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -53%);
  }

  .illustration-img {
    width: 100%;
    z-index: 10;
  }
}

@media only screen and (min-width: $sm) {
  .buttons-group {
    flex-direction: row;

    & > *:not(:last-child) {
      margin: 0;
      margin-right: 1.2rem;
    }
  }

  .copy-text {
    margin: 1rem 3rem;
  }
}

@media only screen and (min-width: $md) {
  .illustrations {
    width: 75%;
  }

  .section-title {
    margin: 2rem 4rem 4rem 4rem;
  }

  .section-subtitle {
    margin: 4rem 4rem 2rem 4rem;
  }

  .copy-text {
    margin: 1rem 5rem;
  }
}

@media only screen and (min-width: $lg) {
  .feature-block {
    flex-direction: row;
  }

  .illustrations {
    order: 0;
  }
}
</style>

<script>
import Button from "@/components/Button.vue";

import SvgHeroBackground from "@/assets/bg-pattern-intro.svg";
import SvgPatternCircleLight from "@/assets/bg-pattern-circles-light.svg";
import SvgPatternCircleDark from "@/assets/bg-pattern-circles-dark.svg";
import SvgIllustrationEditor from "@/assets/illustration-editor.svg";
import SvgIllustrationLaptop from "@/assets/illustration-laptop.svg";
import SvgIllustrationPhone from "@/assets/illustration-phones.svg";

export default {
  name: "Home",
  components: {
    Button,
  },
  data() {
    return {
      SvgPatternCircleLight,
      SvgPatternCircleDark,
      SvgIllustrationEditor,
      SvgIllustrationLaptop,
      SvgIllustrationPhone,
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
