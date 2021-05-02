<template>
  <button class="button" :class="{ outlined: outlined, inversed: inversed }">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.button {
  --btn-color-neutral: var(--color-white-1);
  --btn-color-accent: var(--color-primary-2);

  /* use huge border-radius for semi-circle shape */
  border-radius: 10000px;
  border-style: solid;
  border-width: 2px;
  padding: 0.8em 0.8em;
  min-width: 8em;

  font-family: var(--font-family-secondary);
  font-weight: 500;

  transition-property: background-color, transform, box-shadow;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;

  background-color: var(--btn-color-neutral);
  color: var(--btn-color-accent);
  border-color: var(--btn-color-neutral);
  box-shadow: 5px 5px 7px #0002;

  &:hover {
    background-color: var(--btn-color-accent);
    color: var(--btn-color-neutral);
    border-color: var(--btn-color-accent);
    box-shadow: 7px 7px 9px #0002;
    transform: translateY(-1px);
  }

  &:active {
    filter: brightness(90%);
    box-shadow: 3px 3px 5px #0003;
    transform: translateY(1px);
  }

  &.inversed {
    background-color: var(--btn-color-accent);
    color: var(--btn-color-neutral);
    border-color: var(--btn-color-accent);

    &:hover {
      background-color: var(--btn-color-neutral);
      color: var(--btn-color-accent);
      border-color: var(--btn-color-neutral);
    }
  }

  &.outlined {
    background-color: transparent;
    color: var(--btn-color-neutral);
    border-color: var(--btn-color-neutral);

    &:hover {
      background-color: var(--btn-color-neutral);
      color: var(--btn-color-accent);
    }
  }
}

@media only screen and (min-width: $sm) {
  .button {
    padding: 0.9em 0.9em;
    min-width: 9em;
  }
}
</style>

<script>
export default {
  name: "Button",
  props: {
    outlined: Boolean,
    inversed: Boolean,
  },
};
</script>
