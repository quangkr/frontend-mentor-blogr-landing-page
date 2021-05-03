<template>
  <router-link class="nav-item" :to="to">
    <slot></slot>
  </router-link>
</template>

<style lang="scss" scoped>
.nav-item {
  text-transform: capitalize;
  border-bottom: solid 2px transparent;

  color: hsla(var(--color-hsl-secondary-1), 0.7);

  &.router-link-exact-active {
    color: hsla(var(--color-hsl-secondary-1), 1);
  }

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    border-bottom: solid 2px currentColor;
  }

  &:active {
    transform: scale(95%);
  }
}
</style>

<script>
export default {
  name: "NavItemMobile",

  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
