<template>
  <footer class="footer-container">
    <div class="footer">
      <img class="logo" :src="SvgLogo" alt="Blogr text based logo" />
      <div
        v-for="(group, grpIdx) in linksGroups"
        :key="grpIdx"
        class="links-group"
      >
        <h4 class="group-name">{{ group.name }}</h4>
        <a
          v-for="(link, lnkIdx) in group.links"
          :key="lnkIdx"
          :href="link.target"
          class="link"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top-right-radius: var(--border-radius-large);
  background-color: var(--color-black-1);
  font-family: var(--font-family-secondary);
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 6rem 0;
}

.logo {
  width: 8rem;
  height: auto;
  margin: 3rem 0;
}

.links-group {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.group-name {
  font-size: 1.4rem;
  margin: 3rem 0;
  text-transform: capitalize;
  color: var(--color-white-1);
}

.link {
  display: block;
  font-size: 1.2rem;
  margin: 0.3rem 0;
  text-transform: capitalize;
  color: var(--color-light-gray-1);
  border-bottom: solid 1px transparent;
  transition: transform 0.1s ease-out;

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    color: var(--color-white-1);
    border-bottom: solid 1px currentColor;
    cursor: pointer;
  }

  &:active {
    transform: scale(95%);
  }
}

@media only screen and (min-width: $lg) {
  .footer {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 6rem 12rem 6rem 6rem;
    max-width: $xl;
  }

  .logo {
    width: 6rem;
    margin: 0;
  }

  .links-group {
    align-items: flex-start;
  }

  .group-name {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 2rem;
  }

  .link {
    font-size: 0.8rem;
  }
}
</style>

<script>
import SvgLogo from "@/assets/logo.svg";

export default {
  name: "Footer",

  data() {
    return {
      SvgLogo,
      linksGroups: [
        {
          name: "product",
          links: [
            { name: "overview", target: "/#overview" },
            { name: "pricing", target: "/#pricing" },
            { name: "marketplace", target: "/#marketplace" },
            { name: "features", target: "/#features" },
            { name: "integrations", target: "/#integrations" },
          ],
        },
        {
          name: "company",
          links: [
            { name: "about", target: "/#about" },
            { name: "team", target: "/#team" },
            { name: "blog", target: "/#blog" },
            { name: "careers", target: "/#careers" },
          ],
        },
        {
          name: "connect",
          links: [
            { name: "contact", target: "/#contact" },
            { name: "newsletter", target: "/#newsletter" },
            { name: "linkedin", target: "/#linkedin" },
          ],
        },
      ],
    };
  },
};
</script>
