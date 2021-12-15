<template>
  <div class="nav-group-container">
    <div class="nav-group-label">
      <span>
        <slot name="label"></slot>
      </span>
      <img :src="SvgArrowLight" alt="Arrow icon" class="icon-arrow" />
    </div>
    <div class="nav-group-items-container">
      <div class="nav-group-items" :style="style">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-group-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:hover {
    .icon-arrow {
      transform: rotate(180deg);
    }

    .nav-group-items-container {
      visibility: visible;
      opacity: 1;
    }
  }
}

.nav-group-label {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;

  color: var(--color-white-1);
  text-transform: capitalize;
  cursor: pointer;

  .icon-arrow {
    width: 0.6em;
    height: auto;
    margin-left: 0.4em;
    transition: transform 0.2s ease-out;
  }
}

.nav-group-items-container {
  position: absolute;
  top: 0;
  left: 0;
  transition-property: opacity, visibility;
  transition-duration: 0.1s;
  transition-timing-function: ease-in;
  visibility: hidden;
  opacity: 0;
}

.nav-group-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--border-radius);
  background-color: var(--color-white-1);
  width: calc(var(--items-width) + (var(--nav-item-gap) * 3));
  margin-top: calc(var(--nav-item-gap) + 1em);
  margin-left: calc(var(--nav-item-gap) * -1);
  padding: var(--nav-item-gap);

  & > :not(:first-child) {
    margin-top: var(--nav-item-gap);
  }
}
</style>

<script>
import SvgArrowLight from "@/assets/icon-arrow-light.svg";

export default {
  name: "NavGroupDesktop",

  props: {
    itemsWidth: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      SvgArrowLight,
    };
  },

  computed: {
    style() {
      return `--items-width: ${this.itemsWidth}ch`;
    },
  },
};
</script>
