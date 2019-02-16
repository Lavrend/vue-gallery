<template lang="pug">
  header.header
    .header__wrapper
      Logo.header__logo

      nav.header__nav-menu
        router-link.header__menu-item(
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        )
          svgicon.header__menu-item-icon(:icon="item.icon" custom)
          span.header__menu-item-label
            | {{ $t(`UI.navMenu.${item.title}`) }}

      LangsBlock.header__langs-block
</template>

<script>
import config from '@/config';

import Logo from '@/components/Logo';
import LangsBlock from '@/components/Langs';

export default {
  name: 'header-component',

  components: {
    Logo,
    LangsBlock,
  },

  data() {
    return {
      menuItems: config.navMenu,
    };
  },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: $headerHeight;
  min-width: $screenMinWidth;
  text-align: left;
  box-shadow: $headerShadow;

  user-select: none;

  // Need for display the layer correct (above content layer and sidebar)
  z-index: $zIndex-200;

  &__wrapper {
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
    font-size: 20px;
    flex: 0;
  }

  &__nav-menu {
    height: 100%;
    margin-right: $indent-md;
    font-size: 20px;

    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
  }

  &__menu-item {
    height: 100%;
    margin: 0 $indent-md;
    padding: $indent-md 0;
    line-height: 1;
    color: $white;
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    opacity: 0.6;

    cursor: pointer;
    transition: opacity .5s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    @include item-rect-hover(false, $indent-sm, $indent-lg);
  }

  &__menu-item-icon {
    width: 1em;
    height: 1em;
    margin-right: $indent-md;
    color: $white;
    fill: $white;
  }

  &__menu-item.router-link-exact-active {
    opacity: 1;
  }

  &__langs-block {
    height: 100%;
    flex: 0;
  }
}
</style>
