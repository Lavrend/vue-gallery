/**
 * Actions for the Articles module
 */

import config from '@/config';
import types from './types';
import ServerCore from '@/server';

export default {
  async init({ commit }) {
    const result = await ServerCore.articles.find({
      page: 1,
      pageSize: config.ARTICLES_PAGE_SIZE,
    });

    const total = result.data.total;
    const items = result.data.items;

    commit(types.SET_TOTAL, {
      total,
    });

    commit(types.SET_ITEMS, {
      items,
    });
  },

  async setGalleryItems({ state, commit }) {
    const result = await ServerCore.articles.find({
      page: state.page,
      pageSize: state.pageSize,
    });

    const total = result.data.total;
    const items = result.data.items;

    commit(types.SET_GALLERY_TOTAL, {
      total,
    });

    commit(types.SET_GALLERY_ITEMS, {
      items,
    });
  },
};
