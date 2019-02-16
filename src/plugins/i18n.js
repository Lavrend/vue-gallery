import Vue from 'vue';
import i18n from 'i18next';

import config from '@/config';
import Store from '@/store';
import LocalStorage from '@/utils/localStorage';

const translates = config.langs;

Vue.use({
  install(_instance, { store }) {
    const currentLang = LocalStorage.get('lang') || config.DEFAULT_LANG;

    // Load translates
    i18n.init({
      lng: currentLang,
      fallbackLng: Object.keys(translates),
      resources: translates,
    });

    const translate = (key, params = {}, format = {}, lg = null) => {
      let lang = lg;

      if (typeof lang === 'undefined' || lang === null) {
        lang = store.state.i18n.appLang || config.DEFAULT_LANG;
      }

      const result = i18n.t(key, Object.assign({}, params, { lng: lang }));

      if (format.uppercase) {
        return result.toUpperCase();
      }

      if (format.lowercase) {
        return result.toLowerCase();
      }

      return result;
    };

    // Object for Store Injection
    const i18nStore = {
      namespaced: true,
      state: {
        appLang: currentLang,
        langs: ['ru', 'en'],
      },

      getters: {
        appLang(state) {
          return state.appLang;
        },
      },

      actions: {
        changeLang({ state, commit }, lang) {
          if (state.langs.includes(lang)) {
            commit('CHANGE_LANG', { lang });
            i18n.changeLanguage(lang);
            LocalStorage.set('lang', lang);
          } else if (typeof console.warn === 'function') {
            console.warn('Unknown lang: ', lang);
          }
        },
      },

      mutations: {
        CHANGE_LANG(state, payload) {
          state.appLang = payload.lang;
        },
      },
    };

    // i18nStore Injection
    if (store) {
      store.registerModule('i18n', i18nStore);
    }

    // Vue prototype helper
    Vue.t = translate;
    Vue.prototype.$t = translate;
  },
}, { store: Store });
