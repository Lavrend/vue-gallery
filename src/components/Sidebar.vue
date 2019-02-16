<template lang="pug">
  aside.sidebar(:class="sidebarClasses")
    .sidebar__wrapper
      nav.sidebar__nav-menu
        router-link.sidebar__menu-item(
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
          @click.native="sidebarClose"
        )
          svgicon.sidebar__menu-item-icon(:icon="item.icon" custom)
          span.sidebar__menu-item-label
            | {{ $t(`UI.navMenu.${item.title}`) }}
</template>

<script>
import { mapState } from 'vuex';
import config from '@/config';

export default {
  name: 'sidebar-component',

  data() {
    return {
      menuItems: config.navMenu,
    };
  },

  computed: {
    ...mapState('app', [
      'isSidebarActive',
    ]),

    sidebarClasses() {
      return {
        'sidebar--active': this.isSidebarActive,
      };
    },
  },

  methods: {
    sidebarClose() {
      this.$store.dispatch('app/setSidebarActive', { active: false });
    },
  },
};
</script>

<style lang="scss">
.sidebar {
  position: absolute;
  width: 30%;
  height: calc(100vh - #{$headerHeight});
  min-width: $sidebarMinWidth;
  left: 0;
  top: $headerHeight;
  text-align: left;
  opacity: 0;

  user-select: none;

  transition: transform .3s ease, opacity .2s ease .1s;
  transform: translateX(-100%);
  overflow-y: auto;

  &--active {
    opacity: 1;
    transform: translateX(0);
  }

  &__wrapper {
    width: 100%;
  }

  &__nav-menu {
    width: 100%;
    font-size: 20px;
  }

  &__menu-item {
    width: 100%;
    margin: $indent-md 0;
    padding: $indent-md;
    line-height: 1;
    color: $white;
    text-decoration: none;
    white-space: nowrap;
    outline: none;
    opacity: 0.6;

    cursor: pointer;
    transition: opacity .5s ease;

    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;

    @include item-rect-hover(true, $indent-md, $indent-lg);

    &:before, &:after {
      font-size: 110%;
    }
  }

  &__menu-item-icon {
    width: 1em;
    height: 1em;
    margin-left: $indent-md;
    color: $white;
    fill: $white;
  }

  &__menu-item-label {
    flex: 1;
  }

  &__menu-item.router-link-exact-active {
    opacity: 1;
  }

  @media screen and (min-width: 781px) {
    display: none;
  }
}
</style>
