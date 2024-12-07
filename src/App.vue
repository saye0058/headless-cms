<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/reviews" class="nav-link">Reviews</router-link>
    </nav>
    <router-view v-if="reviews.length > 0" :reviews="reviews" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "App",
  data() {
    return {
      reviews: []
    };
  },
  async created() {
    try {
      const response = await axios.get('https://dev-movie-reviews-cms.pantheonsite.io/wp-json/wp/v2/review');
      this.reviews = response.data;
      console.log('Reviews loaded:', this.reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }
};
</script>