<template lang="pug">
  section.page-gallery(
    v-infinite-scroll="getScrollParams"
    :class="getPageClasses"
    @infinite-scroll="loadMore"
  )
    GalleryList.page-gallery__list

    transition(name="transition-fade")
      .page-gallery__loading(v-show="isLoading")
        .page-gallery__loading-label
          | Loading...
</template>

<script>
import GalleryList from '@/components/Gallery/GalleryList';

export default {
  name: 'page-gallery',

  components: {
    GalleryList,
  },

  data() {
    return {
      isLoading: false,
    };
  },

  computed: {
    getPageClasses() {
      return {
        'page-gallery--locked': this.isLoading,
      };
    },

    getScrollParams() {
      return {
        loading: this.isLoading,
        delay: 500,
      };
    },
  },

  created() {
    this.$store.dispatch('articles/init');
  },

  methods: {
    loadMore() {
      this.isLoading = true;

      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss">
.page-gallery {
  height: 100%;
  text-align: center;

  overflow-y: auto;

  &--locked {
    overflow: hidden;
  }

  &__list {
    padding: $indent-md;
  }

  &__loading {
    @include absolute-full;
    background: rgba($white, 0.3);
  }

  &__loading-label {
    position: absolute;
    left: calc(50% - 45px);
    top: calc(50% - 18px);
    padding: $indent-md $indent-xl;
    border-radius: 15px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;
  }

}
</style>
