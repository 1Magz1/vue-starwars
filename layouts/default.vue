<template>
  <div>
    <Header />
    <nuxt />
  </div>
</template>
<script>
import Header from '~/components/Header';

export default {
  components: {
    Header,
  },
  mounted() {
    // fake loader
    this.SetLoader(true);
    setTimeout(() => {
      this.SetLoader(false);
    }, 2000);
  },
};
</script>
<style lang="scss" scoped>
.primary {
  height: 100vh;
  overflow-y: auto;
  &__template {
    height: 100%;
    display: grid;
    grid-template-rows: 100px 1fr auto;
  }
}

.template {
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
}
</style>
