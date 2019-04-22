/**
 * Mutations for the Gallery module
 */

import types from './types';

export default {
  [types.SET_ITEMS](state, { items }) {
    state.items = items;
  },

  [types.SET_PAGE](state, { page }) {
    state.page = page;
  },

  [types.SET_TIMER](state, { timer }) {
    clearTimeout(state.timer);
    state.timer = timer;
  },

  [types.CLEAR_TIMER](state) {
    state.timer = null;
  },
};
