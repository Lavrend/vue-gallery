/**
 * Actions for the Gallery module
 */

import types from './types';
// TODO remove this temp file
import tiles from '@/config/temp_tiles';

export default {
  async setGalleryTiles({ commit }) {
    // TODO add real http-request
    commit(types.SET_GALLERY_TILES, {
      tiles,
    });
  },
};
