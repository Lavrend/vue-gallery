<template lang="pug">
  transition-group.gallery-list(name="transition-scale" tag="div")
    GalleryItem.gallery-list__item(
      v-for="item in galleryTiles"
      :class="getClasses(item.type)"
      :key="item.id"
      :item="item"
    )
</template>

<script>
import { mapState } from 'vuex';
import GalleryItem from './GalleryItem';

export default {
  name: 'gallery-list',

  components: {
    GalleryItem,
  },

  computed: {
    ...mapState('gallery', [
      'galleryTiles',
    ]),
  },

  methods: {
    getClasses(type) {
      return {
        [`gallery-list__item--${type}`]: type !== 'normal',
      };
    },
  },
};
</script>

<style lang="scss">
.gallery-list {
  max-width: $screenMaxWidth;
  margin: 0 auto;

  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $indent-md;

  &__item {
    height: 50vh;
  }

  &__item--double {
    grid-column: span 2;
  }

  // Tablet (viewport width <= 1024px)
  @media screen and (min-width: 480px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 480px) and (max-width: 680px) {
    &__item {
      height: 40vh;
    }
  }

  // Mobile (viewport width < 480px)
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    &__item--double {
      grid-column: span 1;
    }
  }

  @media screen and (max-width: 380px) {
    &__item {
      height: 40vh;
    }
  }
}
</style>
