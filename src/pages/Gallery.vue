<template lang="pug">
  section.page-gallery(
    v-infinite-scroll="getScrollParams"
    :class="getPageClass"
    @loadMore="loadMore"
    @scroll="onScroll"
  )
    GalleryList.page-gallery__list
    .page-gallery__empty-list(v-if="timer && !itemsLength")
      | {{ $t('GALLERY.emptyList') }}

    transition(name="transition-fade")
      .page-gallery__loading(v-show="!timer")
        uiSpinner.page-gallery__spinner

    transition(name="transition-scale")
      .page-gallery__btn-top(v-show="isBtnTopShow" @click="onAnimateTop")
        svgicon.page-gallery__btn-top-icon(
          :class="getScrollClass"
          icon="angle-down"
          custom)
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import _debounce from 'lodash/debounce';
import animate from '@/utils/animate';

import GalleryList from '@/components/Gallery/GalleryList';
import uiSpinner from '@/ui/spinner';

export default {
  name: 'page-gallery',

  components: {
    GalleryList,
    uiSpinner,
  },

  data() {
    return {
      isReady: false,
      isLoading: false,
      isBtnTopShow: false,

      isTopPosition: false,
      currentScrollPosition: 500,
      scrollAnimDuration: 500,
    };
  },

  computed: {
    ...mapState('gallery', [
      'page',
      'timer',
    ]),

    ...mapGetters('gallery', [
      'itemsLength',
    ]),

    getPageClass() {
      return {
        'page-gallery--loading': !this.isReady,
      };
    },

    getScrollClass() {
      return {
        'page-gallery__btn-top-icon--down': this.isTopPosition,
      };
    },

    getScrollParams() {
      return {
        loading: this.isLoading,
        offset: 50,
      };
    },
  },

  created() {
    if (this.page === 0) {
      this.$store.dispatch('gallery/getItems').then(() => {
        this.isReady = true;
      });
    }
  },

  methods: {
    loadMore() {
      this.isLoading = true;

      this.$store.dispatch('gallery/getItems').then(() => {
        this.isLoading = false;
      });
    },

    onAnimateTop() {
      if (this.isTopPosition) {
        this.setScrollPosition(this.currentScrollPosition, this.scrollAnimDuration);

        return;
      }

      this.currentScrollPosition = this.$el.scrollTop;
      this.setScrollPosition(0, this.scrollAnimDuration);
    },

    setScrollPosition(to = 0, duration = 1000) {
      const draw = (time) => {
        const newPos = (to - this.$el.scrollTop) * time;

        this.$el.scrollTop += newPos;
      };

      animate(draw, 'easeInQuad', duration);
    },

    onScroll: _debounce(function debounceScroll() {
      this.isTopPosition = this.$el.scrollTop <= 10;

      if (this.isBtnTopShow) {
        return;
      }

      if (this.$el.scrollTop >= 200) {
        this.isBtnTopShow = true;
      }
    }, 100),
  },
};
</script>

<style lang="scss">
$spinnerWidth: 70px;
$spinnerHeight: 50px;

.page-gallery {
  height: 100%;
  text-align: center;

  overflow-y: auto;

  &--loading {
    display: flex;
    flex-direction: column;
  }

  &--loading &__loading {
    display: flex;
    align-items: center;
    flex: 1;
  }

  &__list {
    padding: $indent-md;
  }

  &__empty-list {
    padding: $indent-md;
    font-size: 1.2em;
  }

  &__loading {
    width: 100%;
    padding: $indent-md;
    margin-bottom: $indent-md;
  }

  &__spinner {
    width: $spinnerWidth;
    height: $spinnerHeight;
    margin: 0 auto;
  }

  &__btn-top {
    position: fixed;
    left: $indent-lg;
    bottom: $indent-md;
    padding: 0 $indent-md;
    background: rgba($black, 0.7);
    border: 1px solid $grey-8;
    border-radius: $indent-md;
    opacity: 0.7;
    cursor: pointer;

    transition: opacity .3s ease;
    display: flex;

    &:hover {
      opacity: 1;
    }
  }

  &__btn-top-icon {
    height: 2em;
    color: $white;
    fill: $white;
    transform: scale(1, -1);

    transition: transform .3s ease;
  }

  &__btn-top-icon--down {
    transform: scale(1, 1);
  }
}
</style>
