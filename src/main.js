import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = searchForm.elements['search-text'];

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;
let isLoading = false;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  currentQuery = query;
  currentPage = 1;
  clearGallery();
  showLoader();
  isLoading = true;

  try {
    const data = await getImagesByQuery(currentQuery, currentPage);

    hideLoader();
    isLoading = false;
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.info({
        title: 'No Results',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    hideLoader();
    isLoading = false;
    console.error('Error fetching images:', error);

    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
    });
  }
});

// Infinite scroll
window.addEventListener('scroll', async () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 200) {
    if (isLoading || !currentQuery || currentPage * 40 >= totalHits) {
      return;
    }

    isLoading = true;
    currentPage++;

    try {
      const data = await getImagesByQuery(currentQuery, currentPage);
      createGallery(data.hits);
    } catch (error) {
      console.error('Error fetching more images:', error);
    } finally {
      isLoading = false;
    }
  }
});

