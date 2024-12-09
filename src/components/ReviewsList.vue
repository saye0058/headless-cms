<template>
  <div class="reviews-container">
    <h1>Movie Reviews</h1>
    <input type="text" v-model="searchQuery" placeholder="Search reviews..." class="search-bar" />
    <div>
    </div>

    <div class="reviews-grid">
      <div v-for="review in filteredReviews" :key="review.id" class="review-card d-flex flex-column justify-evenly">
        <h2 v-html="cleanTitle(review.title.rendered)"></h2>
        <div class="review-content" v-html="review.content.rendered"></div>
        <div>
          <a :href="`/review/${review.id}`">
            <button class="btn btn-primary mb-3">Click here for more</button>
          </a>
        </div>
        <div class="review-meta">
          Published: {{ formatDate(review.date) }}
        </div>
      </div>
    </div>
  </div>

  <template>
    <div class="reviews-container">
      <div class="reviews-grid">
        <div v-for="review in filteredReviews" :key="review.id" class="review-card" @click="goToReview(review.id)">
          <h2 v-html="cleanTitle(review.title.rendered)"></h2>
        </div>
      </div>
    </div>
  </template>

</template>

<script>
export default {
  name: 'ReviewsList',
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    filteredReviews() {
      if (!this.searchQuery) return this.reviews;
      const query = this.searchQuery.toLowerCase();
      return this.reviews.filter(review =>
        review.title.rendered.toLowerCase().includes(query) ||
        review.content.rendered.toLowerCase().includes(query)
      );
    }
  },
  methods: {
    cleanTitle(title) {
      return title
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/["']/g, '');
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    }
  }
};
</script>
<style scoped>
.reviews-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.reviews-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.review-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.review-card h2 {
  margin: 0 0 15px 0;
  font-size: 1.3rem;
  color: #333;
}

.review-content {
  color: #666;
  margin-bottom: 15px;
  line-height: 1.6;
}

.review-meta {
  font-size: 0.9rem;
  color: #888;
}

.cta-button {
  display: inline-block;
  padding: 12px 20px;
  font-size: 1.1rem;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  margin-top: 10px;
}

.cta-button:hover {
  background-color: #0056b3;
}

.cta-button:focus {
  outline: none;
}
</style>

