<template lang="pug">
  section.page-home
    .page-home__background
      .page-home__bg-picture
      .page-home__bg-overlay

    .page-home__content
      .page-home__flex
        .page-home__flex-title(v-html="$t('HOMEPAGE.title')")
        .page-home__flex-description(v-html="$t('HOMEPAGE.description')")

        .page-home__flex-buttons
          .page-home__btn.page-home__btn--gallery(
            v-html="$t('HOMEPAGE.btn_gallery')"
            @click="$router.push({ name: 'gallery' })"
          )

          .page-home__btn.page-home__btn--about(
            v-html="$t('HOMEPAGE.btn_about')"
            @click="$router.push({ name: 'about' })"
          )
</template>

<script>
export default {
  name: 'page-home',
};
</script>

<style lang="scss">
.page-home {
  position: relative;
  height: 100%;
  min-height: $screenMinWidth;
  text-align: center;

  &__background {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  &__bg-picture {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    background: url('~@/assets/images/bg_homepage.jpeg'), url($bgHomepageBase64);
    background-size: cover;
    background-position: center;
  }

  &__bg-overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba($black, 0.7);
  }

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__flex {
    margin-top: $indent-lg;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    user-select: none;
  }

  &__flex-title {
    font-size: 60px;
  }

  &__flex-description {
    margin-top: $indent-md;
    font-size: 26px;
    font-style: italic;
  }

  &__flex-buttons {
    margin-top: $indent-lg;
    font-size: 18px;
  }

  &__btn {
    display: inline-block;
    width: 180px;
    padding: $indent-md;
    margin: 0 $indent-md;
    border: 2px solid $white;

    transition: background .5s ease;
    cursor: pointer;

    &:hover {
      background: rgba($green-2, 0.7);
    }
  }

  @media screen and (max-width: 800px) {
    &__flex-buttons {
      font-size: 16px;
    }

    &__btn {
      width: 160px;
    }
  }

  @media screen and (min-width: 681px) and (max-width: 800px) {
    &__flex-title {
      font-size: 50px;
    }

    &__flex-description {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 541px) and (max-width: 680px) {
    &__flex-title {
      font-size: 40px;
    }

    &__flex-description {
      font-size: 18px;
    }
  }

  @media screen and (min-width: 401px) and (max-width: 540px) {
    &__flex-title {
      font-size: 30px;
    }

    &__flex-description {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    &__flex-title {
      font-size: 25px;
    }

    &__flex-description {
      font-size: 16px;
    }

    &__btn {
      width: 120px;
    }
  }
}
</style>
