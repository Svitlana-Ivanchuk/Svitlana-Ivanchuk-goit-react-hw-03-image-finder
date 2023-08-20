import axios from 'axios';

export class GalleryAPI {
  #API_KEY = '38162173-e7189c612242127d8d754fc70';
  #BASE_URL = `https://pixabay.com/api/`;
  page = 1;
  q = null;

  async fetchImages() {
    return await axios.get(`${this.#BASE_URL}`, {
      params: {
        q: { nextQuery },
        key: this.#API_KEY,
        page: {nextPage}
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
  }
}
