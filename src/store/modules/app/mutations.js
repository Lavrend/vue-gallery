/**
 * Mutations for the App module
 */

import types from './types';

export default {
  [types.SET_APP_READY](state, ready) {
    state.isAppReady = ready;
  },

  [types.SET_SIDEBAR_ACTIVE](state, active) {
    state.isSidebarActive = active;
  },
};
