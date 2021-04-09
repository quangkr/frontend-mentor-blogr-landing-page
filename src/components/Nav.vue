<template>
  <nav id="nav">
    <div class="nav-content">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
#nav {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
}

.nav-content {
  padding: 30px;
  font-family: var(--font-family-secondary);

  a {
    font-weight: 600;
    color: var(--color-white-1);
    opacity: 0.8;

    &.router-link-exact-active {
      opacity: 1;
    }
  }
}
</style>

<script>
export default {
  name: "Nav",
};
</script>
