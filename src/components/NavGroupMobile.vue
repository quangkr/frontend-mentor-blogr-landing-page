<template>
  <div class="nav-group-container" :class="{ collapsed: isCollapsed }">
    <span @click="toggleCollapsed" class="nav-group-label">
      <slot name="label"></slot>
      <img :src="SvgArrowDark" alt="Arrow icon" class="icon-arrow" />
    </span>
    <transition name="slide">
      <div class="nav-group-content" v-if="!isCollapsed">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.nav-group-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
}

.nav-group-label {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;

  font-family: var(--font-family-primary);
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-secondary-1);
  text-transform: capitalize;
  cursor: pointer;

  .icon-arrow {
    width: 0.6em;
    height: auto;
    margin-left: 0.4em;
    transition: transform 0.2s ease-out;
    transform: rotate(180deg);
  }
}

.nav-group-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: var(--border-radius);
  background-color: hsla(var(--color-hsl-light-gray-1), 0.3);
  margin-top: var(--nav-item-gap);
  padding: var(--nav-item-gap) 0;

  & > :not(:first-child) {
    margin-top: var(--nav-item-gap);
  }
}

.collapsed {
  .icon-arrow {
    transform: rotate(0);
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease-in-out;
  transform-origin: 50% 0;
}

.slide-enter-from,
.slide-leave-to {
  transform: scaleY(0%);
}
</style>

<script>
import { ref } from "vue";
import SvgArrowDark from "@/assets/icon-arrow-dark.svg";

export default {
  name: "NavGroupMobile",

  setup() {
    const isCollapsed = ref(true);

    const toggleCollapsed = () => (isCollapsed.value = !isCollapsed.value);

    return {
      isCollapsed,
      toggleCollapsed,

      SvgArrowDark,
    };
  },
};
</script>
