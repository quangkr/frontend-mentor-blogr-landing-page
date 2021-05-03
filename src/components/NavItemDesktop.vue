<template>
  <router-link class="nav-item" :class="computedClassName" :to="to">
    <slot></slot>
  </router-link>
</template>

<style lang="scss" scoped>
.nav-item {
  text-transform: capitalize;
  border-bottom: solid 2px transparent;
  font-weight: 400;

  &:link,
  &:visited {
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    font-weight: 500;
  }

  &:active {
    transform: scale(95%);
  }

  &.text-primary {
    color: hsla(var(--color-hsl-primary-1), 0.7);

    &.router-link-exact-active {
      color: hsla(var(--color-hsl-primary-1), 1);
    }
  }

  &.text-secondary {
    color: hsla(var(--color-hsl-secondary-1), 0.7);

    &.router-link-exact-active {
      color: hsla(var(--color-hsl-secondary-1), 1);
    }
  }

  &.text-white {
    color: hsla(var(--color-hsl-white-1), 0.7);

    &.router-link-exact-active {
      color: hsla(var(--color-hsl-white-1), 1);
    }
  }

  &.text-black {
    color: hsla(var(--color-hsl-black-1), 0.7);

    &.router-link-exact-active {
      color: hsla(var(--color-hsl-black-1), 1);
    }
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
    color: {
      type: String,
      required: false,
      default: "secondary",
      validator: (value) =>
        ["primary", "secondary", "white", "black"].includes(value),
    },
  },

  computed: {
    computedClassName() {
      return `text-${this.$props.color}`;
    },
  },
};
</script>
