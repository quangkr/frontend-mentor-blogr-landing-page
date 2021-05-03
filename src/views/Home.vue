<template>
  <div :style="styleVars" class="home-page">
    <NavContainer />
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
    <section class="section-features section-features-reverse">
      <h2 class="section-title">Designed for the future</h2>
      <div class="section-feature-content">
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
    <section class="section-features section-features-dark">
      <div class="section-feature-content">
        <div class="bg-container">
          <img
            class="bg-pattern"
            :src="SvgPatternCircleDark"
            alt="A pattern with three circles hidden in the background"
          />
        </div>
        <div class="illustrations">
          <img
            class="illustration-img"
            :src="SvgIllustrationPhone"
            alt="An illustraion depicts two phones"
          />
        </div>
        <div class="text-container">
          <h2 class="section-subtitle">State of the Art Infrastructure</h2>
          <p class="copy-text">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
    <section class="section-features">
      <div class="section-feature-content">
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
    <Footer />
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
  text-align: center;
}

.section-feature-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.section-features-dark {
  position: relative;
  margin-top: 12rem;
  padding-bottom: var(--border-radius-large);
  padding-top: 0;

  .section-subtitle,
  .copy-text {
    color: var(--color-white-1);
    z-index: 10;
  }

  .section-subtitle {
    font-size: 2.5rem;
  }

  .illustrations {
    margin-top: -50%;
  }

  .bg-container {
    position: absolute;
    background-color: var(--color-secondary-1);
    border-bottom-left-radius: var(--border-radius-large);
    border-top-right-radius: var(--border-radius-large);
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .bg-pattern {
      position: absolute;
      top: 0;
      left: 50%;
      width: 160%;
      transform: translate(-50%, -40%);
      z-index: 1;
    }
  }
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
  text-align: inherit;
}

.section-subtitle {
  font-size: 2rem;
  color: var(--color-secondary-1);
  margin: 4rem 2rem 2rem 2rem;
  text-align: inherit;
}

.copy-text {
  font-size: 1.2rem;
  color: var(--color-cool-gray-1);
  margin: 1rem 1rem;
  text-align: inherit;
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
    z-index: 50;
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

  .section-features-dark {
    margin-top: 16rem;

    .illustrations {
      margin-top: -45%;
    }
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

  .section-features-dark {
    .illustrations {
      margin-top: -35%;
    }

    .bg-container {
      .bg-pattern {
        width: 120%;
      }
    }
  }
}

@media only screen and (min-width: $lg) {
  .section-features {
    text-align: left;
  }

  .section-feature-content {
    flex-direction: row;
    justify-content: space-between;
    max-width: $xl;
    --gap: 2rem;
    margin: 0 calc(-1 * var(--gap));
    width: calc(100% + var(--gap));

    & > * {
      margin: 0 var(--gap);
    }

    .text-container {
      flex: 1 1 0;
      align-items: flex-start;
    }

    .illustrations {
      flex: 1 1 0;
    }
  }

  .section-title {
    font-size: 1.8rem;
  }

  .section-subtitle {
    margin: 4rem 0 2rem 0;
    font-size: 1.6rem;
  }

  .copy-text {
    margin: 1rem 0;
    font-size: 0.9rem;
    line-height: 1.8;
  }

  .section-features-reverse {
    .illustrations {
      order: 0;
    }
  }

  .section-features-dark {
    margin: 8rem 0;
    padding: 4rem 0;

    .section-subtitle {
      font-size: 1.8rem;
    }

    .illustrations {
      margin-top: 0;

      .illustration-img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .bg-container {
      .bg-pattern {
        top: 0;
        left: 0;
        transform: translate(-25%, -40%);
        width: 70%;
      }
    }
  }
}
</style>

<script>
import Button from "@/components/Button.vue";
import Footer from "@/components/Footer.vue";
import NavContainer from "@/components/NavContainer.vue";

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
    Footer,
    NavContainer,
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
