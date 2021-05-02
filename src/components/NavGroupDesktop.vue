<template>
  <div class="nav-group-container">
    <div class="nav-group-label">
      <span>
        <slot name="label"></slot>
      </span>
      <img :src="SvgArrowLight" alt="Arrow icon" class="icon-arrow" />
    </div>
    <div class="nav-group-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.nav-group-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.nav-group-label {
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;

  font-family: var(--font-family-primary);
  font-weight: 600;
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

.nav-group-content {
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  border-radius: var(--border-radius);
  margin-top: var(--nav-item-gap);
  padding: calc(var(--nav-item-gap) * 2) var(--nav-item-gap);
  background-color: var(--color-white-1);

  & > :not(:first-child) {
    margin-top: var(--nav-item-gap);
  }
}

.nav-group-container:hover {
  .icon-arrow {
    transform: rotate(180deg);
  }

  .nav-group-content {
    display: flex;
  }
}
</style>

<script>
import SvgArrowLight from "@/assets/icon-arrow-light.svg";

export default {
  name: "NavGroupDesktop",

  data() {
    return {
      SvgArrowLight,
    };
  },
};
</script>
