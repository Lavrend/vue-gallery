<template lang="pug">
  section.page-gallery-details
    .page-gallery-details__wrapper(v-show="isReady")
      .page-gallery-details__header
        div(@click="goBack")
          | {{ backBtnLabel }}
        div {{ itemId }}
        div Edit

      .page-gallery-details__content
        img.page-gallery-details__image(
          :src="currentItem.imageSrc"
          @load="imageOnload")

    .page-gallery-details__loading(v-if="!isReady")
      uiSpinner.page-gallery-details__spinner
</template>

<script>
import { mapState } from 'vuex';

import uiSpinner from '@/ui/spinner';

export default {
  name: 'page-gallery-item',

  components: {
    uiSpinner,
  },

  created() {
    this.$store.dispatch('gallery/getItems')
      .then(() => {
        this.isReady = true;
      });
  },

  data() {
    return {
      isReady: false,
      hasFromGalleryRoute: false,
    };
  },

  computed: {
    ...mapState('gallery', [
      'items',
    ]),

    itemId() {
      return String(this.$route.params.itemId) || 0;
    },

    currentItem() {
      // TODO
      return this.items.find(item => item._id === this.itemId) || {};
    },

    backBtnLabel() {
      return this.hasFromGalleryRoute ? 'Back' : 'Gallery';
    },
  },

  methods: {
    // TODO
    imageOnload() {
      this.isReady = true;
    },

    goBack() {
      if (this.hasFromGalleryRoute) {
        this.$router.back();
      } else {
        this.$router.push({
          name: 'gallery',
        });
      }
    },
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.hasFromGalleryRoute = from.name === 'gallery';
    });
  },
};
</script>

<style lang="scss">
.page-gallery-details {
  height: 100%;

  overflow-y: auto;

  &__wrapper {
    max-width: $screenMaxWidth;
    margin: 0 auto;
    padding: $indent-md;
  }

  &__header {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid $grey-8;
    border-radius: 10px;

    overflow: hidden;
  }

  &__image {
    max-width: 100%;
    height: auto;
    object-fit: cover;
    object-position: center;
  }


  &__loading {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__spinner {
    width: 70px;
    height: 10%;
  }
}
</style>
