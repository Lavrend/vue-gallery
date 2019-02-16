<template lang="pug">
  .langs-block
    button.langs-block__btn(
      v-for="lang in langs"
      :class="getLangsClasses(lang)"
      @click="changeLang(lang)"
    )
      | {{ lang | uppercase }}
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'langs-block-component',

  computed: {
    ...mapState('i18n', [
      'appLang',
      'langs',
    ]),
  },

  filters: {
    uppercase(value) {
      if (!value) {
        return '';
      }

      return value.toString().toUpperCase();
    },
  },

  methods: {
    getLangsClasses(lang) {
      return {
        'langs-block__btn--active': this.appLang === lang,
      };
    },

    changeLang(lang) {
      this.$store.dispatch('i18n/changeLang', lang);
    },
  },
};
</script>

<style lang="scss">
.langs-block {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  &__btn {
    padding: $indent-sm;
    font-size: 18px;
    line-height: 1;
    background: none;
    border: none;
    color: $white;
    opacity: 0.4;

    cursor: pointer;
    transition: opacity .5s ease;

    &:focus {
      outline: none;
    }

    &:hover {
      opacity: 1;
    }
  }

  &__btn--active {
    opacity: 1;
  }
}
</style>
