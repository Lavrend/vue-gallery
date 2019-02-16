import config from '@/config';

const prefix = config.DEBUG ? `dev_${config.LS_KEY}` : config.LS_KEY;

export default {
  local: {},

  has(key) {
    const data = this.get(key);

    if (typeof data === 'object' && data instanceof Array) {
      return !!data && data.length;
    }

    return !!data;
  },

  get(key) {
    if (this.local[key] && this.local[key] !== null) {
      return this.local[key];
    }

    let data = '';

    try {
      const str = global.localStorage.getItem(`${prefix}_${key}`);

      if (str !== null && str !== '') {
        data = JSON.parse(str);
        this.local[key] = data;
      }
    } catch (e) {
      if (typeof console.warn === 'function') {
        console.warn('LocalStorage get', e);
      }
    }

    return data;
  },

  set(key, value = null) {
    if (typeof value === 'undefined' || value === null) {
      return this.remove(key);
    }

    this.local[key] = value;

    try {
      const data = JSON.stringify(value);
      global.localStorage.setItem(`${prefix}_${key}`, data);
    } catch (e) {
      if (typeof console.warn === 'function') {
        console.warn('LocalStorage set', e);
      }
    }

    return true;
  },

  remove(key) {
    delete this.local[key];

    try {
      global.localStorage.removeItem(`${prefix}_${key}`);
    } catch (e) {
      if (typeof console.warn === 'function') {
        console.warn('LocalStorage remove', e);
      }
    }
  },

  clear() {
    this.local = {};

    try {
      global.localStorage.clear();
    } catch (e) {
      if (typeof console.warn === 'function') {
        console.warn('LocalStorage clear', e);
      }
    }
  },
};
