<template>
  <div class="nav-container">
    <NavMobile class="nav-mobile" :nav-data="navData" />
    <NavDesktop class="nav-desktop" :nav-data="navData" />
  </div>
</template>

<style lang="scss" scoped>
.nav-mobile {
  display: flex;
}

.nav-desktop {
  display: none;
}

@media only screen and (min-width: $lg) {
  .nav-mobile {
    display: none;
  }

  .nav-desktop {
    display: flex;
  }
}
</style>

<script>
import NavMobile from "./NavMobile.vue";
import NavDesktop from "./NavDesktop.vue";

export default {
  name: "NavContainer",

  components: {
    NavMobile,
    NavDesktop,
  },

  data() {
    return {
      navData: [
        {
          name: "product",
          single: false,
          members: [
            { name: "overview", target: "/#overview" },
            { name: "pricing", target: "/#pricing" },
            { name: "marketplace", target: "/#marketplace" },
            { name: "features", target: "/#features" },
            { name: "integrations", target: "/#integrations" },
          ],
        },
        {
          name: "company",
          single: false,
          members: [
            { name: "about", target: "/#about" },
            { name: "team", target: "/#team" },
            { name: "blog", target: "/#blog" },
            { name: "careers", target: "/#careers" },
          ],
        },
        {
          name: "connect",
          single: false,
          members: [
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
