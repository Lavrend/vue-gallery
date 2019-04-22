// Infinite scroll directive
import Vue from 'vue';

let loading = false;
let offset = 0;

const event = new Event('loadMore');

function scrollHandler() {
  if (loading) {
    return;
  }

  if (this.scrollTop + this.clientHeight >= this.scrollHeight - offset) {
    this.dispatchEvent(event);
  }
}

Vue.directive('infinite-scroll', {
  inserted(el, binding) {
    loading = binding.value.loading || loading;
    offset = binding.value.offset || offset;

    el.addEventListener('scroll', scrollHandler.bind(el));
  },

  update(el, binding) {
    loading = binding.value.loading;
  },

  unbind(el) {
    loading = false;
    el.removeEventListener('scroll', scrollHandler.bind(el));
  },
});
