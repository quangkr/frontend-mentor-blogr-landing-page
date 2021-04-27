<template>
  <router-link class="nav-item" :to="to">
    <slot></slot>
  </router-link>
</template>

<style lang="scss" scoped>
.nav-item {
  font-family: var(--font-family-primary);
  font-size: 1rem;
  font-weight: 600;
  color: hsla(var(--color-hsl-secondary-1), 0.7);
  text-transform: capitalize;

  border-bottom: solid 2px transparent;

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    border-bottom: solid 2px currentColor;
    cursor: pointer;
  }

  &:active {
    transform: scale(95%);
  }

  &.router-link-exact-active {
    color: hsla(var(--color-hsl-secondary-1), 1);
  }
}
</style>

<script>
export default {
  name: "NavItem",

  props: {
    to: {
      type: String,
      required: true,
    },
  },
};
</script>
