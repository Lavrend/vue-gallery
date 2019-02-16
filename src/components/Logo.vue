<template lang="pug">
  .logo
    svgicon.logo__icon(icon="logo" custom)
    span.logo__brand
      | {{ $t('UI.appName') }}
</template>

<script>
export default {
  name: 'logo-component',
};
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  justify-content: center;

  &__icon {
    height: 2em;
    color: $white;
    fill: $white;
  }

  &__brand {
    color: $white;
    padding: 0 $indent-md;
    white-space: nowrap;

    text-transform: uppercase;
  }
}
</style>
