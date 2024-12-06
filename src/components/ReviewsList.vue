<template>
  <div class="reviews-container">
    <h1>Customer Reviews</h1>
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Search reviews..." 
      @input="filterReviews" 
      class="search-bar"
    />
    <ul class="review-list">
      <li v-for="review in filteredReviews" :key="review.id" class="review-item">
        <router-link :to="'/review/' + review.id" class="review-title">
          {{ review.title }}
        </router-link>
        <p class="review-meta">
          <span><strong>By:</strong> {{ review.author }}</span>
          <span><strong>Rating:</strong> {{ review.rating }}⭐</span>
          <span><strong>Date:</strong> {{ review.date }}</span>
        </p>
      </li>
    </ul>
    <p v-if="filteredReviews.length === 0" class="no-results">No reviews found.</p>
  </div>
</template>

<script>
export default {
  name: "ReviewsList",
  inject: ["reviews"],
  data() {
    return {
      searchQuery: "",
      filteredReviews: this.reviews,
    };
  },
  methods: {
    filterReviews() {
      const query = this.searchQuery.toLowerCase();
      this.filteredReviews = this.reviews.filter(
        (review) =>
          review.title.toLowerCase().includes(query) ||
          review.author.toLowerCase().includes(query)
      );
    },
  },
};
</script>

<style>
.reviews-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
}

.review-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.review-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  transition: box-shadow 0.2s ease-in-out;
  background-color: #fff;
}

.review-item:hover {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.review-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #007BFF;
  text-decoration: none;
}

.review-title:hover {
  text-decoration: underline;
}

.review-meta {
  font-size: 0.9rem;
  color: #555;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

.no-results {
  text-align: center;
  color: #999;
  margin-top: 20px;
}
</style>
