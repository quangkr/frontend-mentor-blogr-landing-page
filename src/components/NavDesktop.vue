<template>
  <nav class="nav">
    <div class="nav-content-container">
      <div class="nav-item-container">
        <img class="logo" :src="SvgLogo" alt="Company logo" />
      </div>
      <span class="separator-2"></span>
      <template v-for="(item, idx) in navData" :key="idx">
        <div class="nav-item-container">
          <NavItem v-if="item.single" :to="item.target" color="white">
            {{ item.name }}
          </NavItem>
          <NavGroup v-else>
            <template v-slot:label>{{ item.name }}</template>
            <template v-slot:content>
              <NavItem
                v-for="(link, linkIdx) in item.members"
                :key="linkIdx"
                :to="link.target"
                color="black"
              >
                {{ link.name }}
              </NavItem>
            </template>
          </NavGroup>
        </div>
        <span class="separator-1"></span>
      </template>
      <span class="separator-4"></span>
      <div class="nav-item-container login">
        <NavItem to="/#login" color="white">login</NavItem>
      </div>
      <span class="separator-1"></span>
      <div class="nav-item-container sign-up">
        <Button inversed>Sign up</Button>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  --nav-height: 6rem;
  --nav-header-height: 3rem;
  --nav-item-gap: 1.2rem;

  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: var(--nav-height);
  font-family: var(--font-family-secondary);
  font-size: 0.9rem;

  .nav-content-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    width: 100%;
    max-width: $xl;
    height: var(--nav-header-height);

    .separator {
      &-1 {
        flex: 1 0 0;
      }

      &-2 {
        flex: 2 0 0;
      }

      &-3 {
        flex: 3 0 0;
      }

      &-4 {
        flex: 4 0 0;
      }
    }

    .nav-item-container {
      display: flex;
      justify-content: center;
      align-items: center;

      .logo {
        height: 80%;
        width: auto;
      }
    }
  }
}
</style>

<script>
import SvgLogo from "@/assets/logo.svg";

import NavItem from "./NavItem.vue";
import NavGroup from "./NavGroupDesktop.vue";
import Button from "@/components/Button.vue";

export default {
  name: "NavMobile",

  components: {
    NavItem,
    NavGroup,
    Button,
  },

  props: {
    navData: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      SvgLogo,
    };
  },
};
</script>
