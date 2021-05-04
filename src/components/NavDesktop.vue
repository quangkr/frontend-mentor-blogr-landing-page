<template>
  <nav class="nav">
    <div class="nav-content-container">
      <div class="nav-item-container nav-logo">
        <img class="logo" :src="SvgLogo" alt="Company logo" />
      </div>
      <div class="nav-item-container nav-links">
        <template v-for="(item, idx) in navData" :key="idx">
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
        </template>
      </div>
      <div class="nav-item-container nav-login">
        <NavItem to="/#login" color="white">login</NavItem>
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
  font-size: 0.85rem;
  font-weight: 500;

  .nav-content-container {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    width: 100%;
    max-width: $xl;
    height: var(--nav-header-height);

    .nav-item-container {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      &.nav-logo {
        flex: 1 0 0;
      }

      &.nav-links {
        flex: 3 0 0;

        & > * {
          margin-right: var(--nav-item-gap);
        }
      }

      &.nav-login {
        flex: 2 0 0;
        justify-content: flex-end;

        & > * {
          margin-left: var(--nav-item-gap);
        }
      }
    }
  }
}
</style>

<script>
import SvgLogo from "@/assets/logo.svg";

import NavItem from "./NavItemDesktop.vue";
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
