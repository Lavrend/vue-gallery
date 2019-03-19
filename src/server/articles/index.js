// ============
// Gallery class for ServerCore
// ============

import Base from '@/server/base';

class ArticlesServer extends Base {

  constructor(options = {}) {
    super('articles', options);
  }

  find({ page, pageSize }) {
    const params = this.getParamsString({
      page,
      pageSize,
    });

    return this.submit('get', `/${this.endpoint}${params}`);
  }
};

export default ArticlesServer;
