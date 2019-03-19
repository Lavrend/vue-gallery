<template lang="pug">
  .layout-home
    header.layout-home__header
      .layout-home__header-wrapper
        Logo.layout-home__logo
        LangsBlock.layout-home__langs

    main.layout-home__content
      transition(name="transition-zoom" mode="out-in")
        slot
</template>

<script>
import Logo from '@/components/Logo';
import LangsBlock from '@/components/Langs';

export default {
  name: 'layout-home',

  components: {
    Logo,
    LangsBlock,
  },
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

  &__header {
    position: absolute;
    width: 100%;
    height: $headerHeight;
    min-width: $screenMinWidth;
    top: 0;
    left: 0;

    user-select: none;

    // Need for display the layer correct (above content layer)
    z-index: $zIndex-200;
  }

  &__header-wrapper {
    width: 100%;
    height: 100%;
    max-width: $screenMaxWidth;
    margin: 0 auto;
    padding: 0 $indent-lg;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    height: 100%;
    font-size: 18px;
    flex: 0;
  }

  &__langs {
    height: 100%;
    flex: 0;
  }

  &__content {
    width: 100%;
    height: 100%;
    min-width: $screenMinWidth;
    color: $white;

    // overflow-y: auto;
    overflow: hidden;
  }
}
</style>
