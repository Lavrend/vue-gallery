// ============
// Gallery class for ServerCore
// ============
import Vue from 'vue';
import Base from '@/server/base';

import config from '@/config';

class GalleryServer extends Base {

  constructor(options = {}) {
    super('gallery', options);
  }

  find({ page, pageSize }) {
    const params = this.getParamsString({
      page,
      pageSize,
    });

    return this.submit('get', `/${this.endpoint}${params}`);
  }

  async getImages(items) {
    const promises = [];
    const currentItems = items;

    const imagePreload = async (item) => {
      const url = item.image === 0
        ? `${config.IMAGE_URL}&random=${item._id}`
        : `${config.IMAGE_URL}&image=${item.image}`;

      const res = await Vue.http.get(url, {
        responseType: 'arraybuffer',
        cors: true,
      });

      const image = btoa(
        new Uint8Array(res.data)
          .reduce((data, byte) => data + String.fromCharCode(byte), ''),
      );

      return `data:${res.headers['content-type'].toLowerCase()};base64,${image}`;
    };

    currentItems.forEach((item, index) => {
      promises.push(
        imagePreload(item)
          .then((res) => {
            currentItems[index].imageSrc = res;
          }),
      );
    });

    await Promise.all(promises);

    return currentItems;
  }
}

export default GalleryServer;
