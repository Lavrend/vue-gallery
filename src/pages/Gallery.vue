<template lang="pug">
  section.page-gallery
    GalleryList.page-gallery__list
</template>

<script>
import GalleryList from '@/components/Gallery/GalleryList';

export default {
  name: 'page-gallery',

  components: {
    GalleryList,
  },

  created() {
    this.$store.dispatch('gallery/setGalleryTiles');
  },
};
</script>

<style lang="scss">
.page-gallery {
  height: 100%;
  text-align: center;

  &__list {
    padding: $indent-md;
  }
}
</style>
