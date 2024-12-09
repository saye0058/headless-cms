<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link" active-class="active-link">Home</router-link>
      <router-link to="/reviews" class="nav-link" active-class="active-link">Reviews</router-link>
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
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 18px;
  margin: 0 15px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.nav-link:hover {
  background-color: #555;
}

.active-link {
  background-color: #007bff;
  color: white;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .nav-link {
    margin: 10px 0;
    font-size: 16px;
  }
}
</style>
