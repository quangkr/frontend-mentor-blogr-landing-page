<template>
  <button class="button" :class="{ outlined: outlined }">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  border-radius: var(--border-radius);
  padding: 1rem 0.8rem;
  min-width: 8rem;

  font-family: var(--font-family-secondary);
  font-weight: 500;
  font-size: 1rem;

  border-style: solid;
  border-width: 2px;

  transition-property: background-color transform, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;

  --btn-bg: var(--color-white-1);
  --btn-fg: var(--color-primary-2);

  background-color: var(--btn-bg);
  color: var(--btn-fg);
  border-color: var(--btn-bg);
  box-shadow: 5px 5px 7px #0002;

  &:hover {
    background-color: var(--btn-fg);
    color: var(--btn-bg);
    border-color: var(--btn-fg);
    box-shadow: 7px 7px 9px #0002;
    transform: translateY(-1px);
  }

  &:active {
    filter: brightness(90%);
    box-shadow: 3px 3px 5px #0003;
    transform: translateY(1px);
  }

  &.outlined {
    background-color: transparent;
    color: var(--btn-bg);
    border-color: var(--btn-bg);

    &:hover {
      background-color: var(--btn-bg);
      color: var(--btn-fg);
    }
  }

  &.transparent {
    background-color: transparent;
    color: var(--btn-bg);
    border-color: transparent;
    box-shadow: none;

    &:hover {
      background-color: var(--btn-bg);
      color: var(--btn-fg);
      border-color: var(--btn-bg);
      box-shadow: none;
    }

    &:active {
      box-shadow: none;
    }
  }
}

@media only screen and (min-width: $sm) {
  .button {
    padding: 1rem 1rem;
    min-width: 9rem;
  }
}
</style>

<script>
export default {
  name: "Button",
  props: {
    outlined: {
      required: false,
      type: Boolean,
      default: false,
    },
  },
};
</script>
