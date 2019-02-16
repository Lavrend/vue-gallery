<template lang="pug">
  section.page-home
    .page-home__content
      h1.page-about__title
        | Home page

      .page-home__btn.page-home__btn--about(@click="$router.push({ name: 'about' })")
        | About
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

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
}
</style>
