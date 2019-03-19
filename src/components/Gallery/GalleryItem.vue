<template lang="pug">
  article.gallery-item
    transition(name="transition-scale" mode="out-in")
      .gallery-item__content(v-show="isReady" @click="onClick")
        img.gallery-item__image(
          :src="image"
          :alt="`Image for article: ${title}`"
          @load="imageOnload")

        footer.gallery-item__summary
          h2.gallery-item__titile
            | {{ title }}
          p.gallery-item__description
            | {{ description }}

        span.gallery-item__read-more
          | {{ $t('GALLERY.readMore') }}

    .gallery-item__loading(v-if="!isReady")
      uiSpinner.gallery-item__spinner
</template>

<script>
import uiSpinner from '@/ui/spinner';

export default {
  name: 'gallery-item',

  components: {
    uiSpinner,
  },

  props: {
    id: String,
    type: String,
    title: String,
    description: String,
    text: String,
    image: String,
  },

  data() {
    return {
      isReady: false,
    };
  },

  methods: {
    imageOnload() {
      this.isReady = true;
    },

    onClick() {
      this.$router.push({
        name: 'gallery-details',
        params: {
          itemId: this.id,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.gallery-item {
  width: 100%;
  height: 100%;

  &__content {
    position: relative;
    width: 100%;
    height: 100%;
    border: 2px solid $grey-8;
    border-radius: 10px;

    cursor: pointer;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;

    transition: transform 1s ease;
  }

  &__summary {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: $indent-sm $indent-md;
    background: $dark;
    background: rgba($black, 0.7);
    line-height: 1.4;
    color: $white;
    text-align: left;
    white-space: nowrap;
  }

  &__titile {
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__description {
    width: 100%;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__read-more {
    display: block;
    position: absolute;
    right: 0;
    top: $indent-md;
    padding: $indent-sm $indent-md;
    background: rgba($red-5, 0.7);
    font-size: 18px;
    color: $white;

    user-select: none;
    visibility: hidden;

    transition: all .2s ease;
    transform: translateX(100%);

    @media screen and (max-width: 780px) {
      display: none;
    }
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

  &:hover &__image {
    transform: scale(1.2);
  }

  &:hover &__read-more {
    visibility: visible;
    transform: translateX(0);
  }
}
</style>
