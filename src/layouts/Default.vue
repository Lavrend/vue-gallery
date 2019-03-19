<template lang="pug">
  .layout-default
    LayoutHeader.layout-default__header

    main.layout-default__content
      transition(name="transition-zoom" mode="out-in")
        slot

    LayoutSidebar.layout-default__sidebar
</template>

<script>
import LayoutHeader from '@/components/Header';
import LayoutSidebar from '@/components/Sidebar';

export default {
  name: 'layout-default',

  components: {
    LayoutHeader,
    LayoutSidebar,
  },
};
</script>

<style lang="scss">
.layout-default {
  position: relative;
  width: 100%;
  height: 100%;
  background: $dark-light;
  background: $gbg-black-reverse;

  display: flex;
  flex-flow: column nowrap;

  overflow: hidden;

  &__header {
    background: $gbg-dark;
  }

  &__content {
    width: 100%;
    height: calc(100vh - #{$headerHeight});
    min-width: $screenMinWidth;
    color: $white;

    // overflow-y: auto;
    overflow: hidden;
  }

  &__sidebar {
    background: $dark-light;
    box-shadow: $sidebarShadow;

    // Need for display the layer correct (above content layer)
    z-index: $zIndexContent;
  }
}
</style>
