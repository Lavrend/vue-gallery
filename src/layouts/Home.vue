<template lang="pug">
  .layout-home
    main.layout-home__content
      transition(name="transition-zoom" mode="out-in")
        slot
</template>

<script>
export default {
  name: 'layout-home',
};
</script>

<style lang="scss">
.layout-home {
  position: relative;
  width: 100%;
  height: 100%;
  background: $dark-light;
  background: $gbg-black-reverse;

  display: flex;
  flex-flow: column nowrap;

  &__content {
    width: 100%;
    height: 100%;
    min-width: $screenMinWidth;
    color: $white;

    overflow-y: auto;
  }
}
</style>
