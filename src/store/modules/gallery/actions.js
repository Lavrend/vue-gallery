/**
 * Actions for the Gallery module
 */

import config from '@/config';
import types from './types';
import ServerCore from '@/server';

// Utils
import _uniqBy from 'lodash/uniqBy';
import sortBy from '@/utils/sortBy';

export default {
  async getItems({ dispatch, commit, state }, payload = {}) {
    if (state.timer) {
      return;
    }

    let currentItems = state.items;

    const page = payload.page || state.page + 1;
    const pageSize = payload.pageSize || config.GALLERY_PAGE_SIZE;

    const result = await ServerCore.gallery.find({
      page,
      pageSize,
    });

    const total = result.data ? result.data.total : 0;
    const items = result.data ? result.data.items : [];

    if (items.length) {
      const itemsWithImage = await ServerCore.gallery.getImages(items);

      currentItems = _uniqBy(itemsWithImage.concat(currentItems).sort(sortBy('createdAt')), '_id');

      commit(types.SET_ITEMS, {
        items: currentItems,
      });

      commit(types.SET_PAGE, {
        page,
      });
    }

    if (currentItems.length >= total) {
      dispatch('setTimer');
    }
  },

  setTimer({ commit }) {
    const delay = 120000; // 2s

    commit(types.SET_TIMER, {
      timer: setTimeout(() => {
        commit(types.CLEAR_TIMER);
      }, delay),
    });
  },
};
