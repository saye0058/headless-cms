import axios from 'axios';

const API_URL = 'https://dev-movie-reviews-cms.pantheonsite.io/wp-json/wp/v2';

export const getReviews = async () => {
  try {
    console.log('Fetching reviews from API');
    const response = await axios.get(`${API_URL}/review`);
    console.log('Raw API response:', response.data);
    return response.data.map(review => ({
      id: review.id,
      title: review.title.rendered,
      content: review.content.rendered,
      date: new Date(review.date).toLocaleDateString()
    }));
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};

export const getReviewById = async (id) => {
  try {
    console.log(`Fetching review with ID: ${id} from API`);
    const response = await axios.get(`${API_URL}/review/${Number(id)}`);
    console.log('Raw API response for specific review:', response.data);
    const review = response.data;
    return {
      id: review.id,
      title: review.title.rendered,
      content: review.content.rendered,
      date: new Date(review.date).toLocaleDateString()
    };
  } catch (error) {
    console.error('API Error:', error);
    return null;
  }
};
