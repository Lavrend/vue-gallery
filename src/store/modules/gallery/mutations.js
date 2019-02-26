/**
 * Mutations for the Gallery module
 */

import types from './types';

export default {
  [types.SET_GALLERY_TILES](state, { tiles }) {
    state.galleryTiles = tiles;
  },
};
