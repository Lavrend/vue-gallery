/**
 * Actions for the App module
 */

import types from './types';

export default {
  setPageReady({ commit }, ready) {
    commit(types.SET_APP_READY, ready);
  },

  setSidebarActive({ commit }, { active }) {
    commit(types.SET_SIDEBAR_ACTIVE, active);
  },

  sidebarToggle({ state, dispatch }) {
    const active = !state.isSidebarActive;

    dispatch('setSidebarActive', {
      active,
    });
  },
};
