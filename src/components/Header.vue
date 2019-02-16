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
          span.header__menu-item-label
            | {{ $t(`UI.navMenu.${item.title}`) }}

      LangsBlock.header__langs-block

      transition(name="transition-rotate" mode="out-in")
        .header__toggle(v-if="isSidebarActive" key="toggle-active" @click="sidebarToggle")
          svgicon.header__toggle-icon(icon="arrow-left" custom)

        .header__toggle(v-else key="toggle-off" @click="sidebarToggle")
          svgicon.header__toggle-icon(icon="menu" custom)
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
      isSidebarActive: false,
    };
  },

  methods: {
    sidebarToggle() {
      this.isSidebarActive = !this.isSidebarActive;
    },
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

  &__toggle {
    height: 100%;
    margin-right: -$indent-md;
    padding: $indent-md;
    opacity: 0.6;
    cursor: pointer;

    transition: opacity .5s ease;

    // For Desktops
    display: none;
    align-items: center;
    justify-content: center;
    flex: 0;

    &:hover {
      opacity: 1;
    }
  }

  &__toggle-icon {
    width: 1.8em;
    height: 1.8em;
    color: $white;
    fill: $white;
  }

  @media screen and (max-width: 980px) {
    &__menu-item {
      margin: 0 $indent-sm;
    }
  }

  @media screen and (min-width: 861px) and (max-width: 980px) {
    &__logo, &__nav-menu {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 781px) and (max-width: 860px) {
    &__logo, &__nav-menu {
      font-size: 16px;
    }

    &__lang {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 780px) {
    &__nav-menu {
      display: none;
    }

    &__langs-block {
      margin-right: $indent-md;
      flex: 1;
    }

    &__toggle {
      display: flex;
    }
  }

  @media screen and (max-width: 380px) {
    &__logo {
      margin-left: -$indent-sm;
      font-size: 18px;
    }

    &__langs-block {
      margin-right: $indent-sm;
    }

    &__lang {
      font-size: 16px;
    }

    &__toggle {
      font-size: 13px;
      margin-right: -$indent-sm;
      padding: $indent-sm;
    }
  }
}
</style>
