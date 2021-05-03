<template>
  <nav class="nav">
    <img class="logo" :src="SvgLogo" alt="Company logo" />
    <transition name="fade">
      <img
        @click="setNavCollapsed(false)"
        class="icon-hamburger"
        :src="SvgHamburger"
        alt="Open menu button"
        v-if="isNavCollapsed"
      />
    </transition>
    <transition name="fade">
      <div class="nav-content-container" v-if="!isNavCollapsed">
        <div @click="setNavCollapsed(true)" class="nav-backdrop"></div>
        <img
          @click="setNavCollapsed(true)"
          class="icon-close"
          :src="SvgClose"
          alt="Close menu button"
        />
        <div class="nav-content">
          <div
            class="nav-item-container"
            v-for="(item, idx) in navData"
            :key="idx"
          >
            <NavItem v-if="item.single" :to="item.target">
              {{ item.name }}
            </NavItem>
            <NavGroup v-else>
              <template v-slot:label>{{ item.name }}</template>
              <template v-slot:content>
                <NavItem
                  v-for="(link, linkIdx) in item.members"
                  :key="linkIdx"
                  :to="link.target"
                >
                  {{ link.name }}
                </NavItem>
              </template>
            </NavGroup>
          </div>
          <span class="separator"></span>
          <div class="nav-item-container">
            <NavItem to="/#login">login</NavItem>
          </div>
          <div class="nav-item-container">
            <Button inversed>Sign up</Button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  --nav-height: 6rem;
  --nav-header-height: 4rem;
  --nav-content-margin: 2rem;
  --nav-content-padding: 2rem;
  --nav-item-gap: 1rem;

  position: absolute;
  left: 0;
  top: calc(var(--nav-height) - var(--nav-header-height));

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem var(--nav-content-margin);
  height: var(--nav-header-height);

  font-family: var(--font-family-primary);
  font-size: 1rem;
  font-weight: 600;

  .logo {
    height: 100%;
    width: auto;
  }

  .icon-hamburger {
    height: 60%;
    width: auto;
    cursor: pointer;
  }
}

.nav-content-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9000;

  .icon-close {
    position: fixed;
    top: calc(var(--nav-height) - var(--nav-header-height));
    right: var(--nav-content-margin);
    height: calc(var(-nav-header-height));
    width: auto;
    cursor: pointer;
    z-index: 9002;
  }

  .nav-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.2);
    z-index: 9001;
  }

  .nav-content {
    position: fixed;
    top: var(--nav-height);
    left: 0;
    width: calc(100% - 2 * var(--nav-content-margin));
    height: calc(100vh - 2 * var(--nav-height));
    margin: 0 var(--nav-content-margin);
    background-color: var(--color-white-1);
    border-radius: var(--border-radius);
    box-shadow: 0px 8px 20px 5px #0004;
    padding: var(--nav-content-padding);
    z-index: 9002;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    overflow-y: scroll;
  }

  .nav-item-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: var(--nav-item-gap) 0;

    &:last-child::after {
      content: "";
      height: calc(var(--nav-item-gap) + var(--nav-content-padding));
    }
  }

  .separator {
    display: block;
    width: 100%;
    height: 0px;
    margin: 1rem 0;
    border: solid 1px hsla(var(--color-hsl-light-gray-1), 0.3);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<script>
import { ref } from "vue";

import SvgLogo from "@/assets/logo.svg";
import SvgHamburger from "@/assets/icon-hamburger.svg";
import SvgClose from "@/assets/icon-close.svg";

import NavItem from "./NavItemMobile.vue";
import NavGroup from "./NavGroupMobile.vue";
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

  setup() {
    const isNavCollapsed = ref(true);
    const setNavCollapsed = (value) => (isNavCollapsed.value = value);

    return {
      isNavCollapsed,
      setNavCollapsed,

      SvgLogo,
      SvgHamburger,
      SvgClose,
    };
  },
};
</script>
