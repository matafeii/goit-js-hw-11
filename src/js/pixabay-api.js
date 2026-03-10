import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '18705792-aeb149c2876d2324648601ab5';

export async function getImagesByQuery(query, page = 1, perPage = 40) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: page,
    per_page: perPage,
  };

  const response = await axios.get(BASE_URL, { params });
  return response.data;
}

