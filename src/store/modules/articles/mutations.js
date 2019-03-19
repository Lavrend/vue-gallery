/**
 * Mutations for the Articles module
 */

import types from './types';

export default {
  [types.SET_ITEMS](state, { items }) {
    state.items = items;
  },

  [types.SET_TOTAL](state, { total }) {
    state.totalCount = total;
  },
};
