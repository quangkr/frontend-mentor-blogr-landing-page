<template>
  <div class="nav-container">
    <NavMobile class="nav-mobile" :nav-data="navData" />
  </div>
</template>

<script>
import NavMobile from "./NavMobile.vue";

export default {
  name: "NavContainer",

  components: {
    NavMobile,
  },

  data() {
    return {
      navData: [
        {
          name: "home",
          single: true,
          target: "/",
        },
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
