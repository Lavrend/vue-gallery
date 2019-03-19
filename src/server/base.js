// ============
// Base class for ServerCore
// ============

import Vue from 'vue';

class BaseServer {

  constructor(endpoint, options = {}) {
    this.endpoint = endpoint;
    this.options = options;
  }

  setOptions(options) {
    Object.keys(options).forEach((key) => {
      this.options[key] = options[key];
    });

    return this;
  }

  removeOptions(options) {
    options.forEach((param) => {
      delete this.options[param];
    });

    return this;
  }

  getParamsString(params) {
    const paramsObj = Object.assign({}, this.options, params);
    const keys = Object.keys(params);

    const stringParams = keys
      .map(key => `${key}=${paramsObj[key]}`);

    if(stringParams.length > 0) {
      return `?${stringParams.join('&')}`;
    }

    return '';
  }

  submit(requestType, url, data = null) {
    return Vue.http[requestType](url, data);
  }

  find() {
    return this.submit('get', `/${this.endpoint}`);
  }

  findById(id) {
    return this.submit('get', `/${this.endpoint}/${id}`);
  }

  create(item) {
    return this.submit('post', `/${this.endpoint}`, item);
  }

  update(id, item) {
    return this.submit('put', `/${this.endpoint}/${id}`, item);
  }

  destroy(id) {
    return this.submit('delete', `/${this.endpoint}/${id}`);
  }
}

export default BaseServer;
