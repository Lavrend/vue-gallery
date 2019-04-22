<template lang="pug">
  transition-group.gallery-list(
    name="transition-scale"
    tag="div"
  )
    GalleryItem.gallery-list__item(
      v-for="item in items"
      :key="item._id"
      :id="item._id"
      :title="item.title"
      :description="item.description"
      :image="item.imageSrc"
    )
</template>

<script>
import { mapState } from 'vuex';
import GalleryItem from '@/components/Gallery/GalleryItem';

export default {
  name: 'gallery-list',

  components: {
    GalleryItem,
  },

  computed: {
    ...mapState('gallery', [
      'items',
    ]),
  },
};
</script>

<style lang="scss">
.gallery-list {
  max-width: $screenMaxWidth;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: $indent-md;

  user-select: none;

  &__item {
    height: 50vh;
  }

  @media screen and (min-width: 1024px){
    &__item:nth-child(7n), &__item:nth-child(7n+4) {
      grid-column: span 2;
    }
  }

  // Tablet (viewport width <= 1024px)
  @media screen and (min-width: 480px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);

    &__item:nth-child(3n) {
      grid-column: span 2;
    }
  }

  @media screen and (min-width: 480px) and (max-width: 680px) {
    &__item {
      height: 40vh;
    }
  }

  // Mobile (viewport width < 480px)
  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);

    &__item {
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
