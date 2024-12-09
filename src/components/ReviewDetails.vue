<template>
  <div class="review-details mt-4" v-if="review">
    <h1>{{ cleanTitle(review.title) }}</h1>
    <div v-html="review.content"></div>
    <p><strong>Published:</strong> {{ review.date }}</p>
    <router-link to="/reviews" class="back-button">Back to Reviews</router-link>
  </div>
  <div v-else>
    <p>Loading review...</p>
  </div>
</template>

<script>
import { getReviewById } from "../services/api.js"; 

export default {
  name: "ReviewDetails",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      review: null, 
    };
  },
  methods: {
    async fetchReview() {
      try {
        this.review = await getReviewById((this.id)); 
      } catch (error) {
        console.error("Error fetching review:", error);
      }
    },

    cleanTitle(title) {
      return title
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .replace(/["']/g, '');
    },

    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    }
  },
  created() {
    this.fetchReview(); 
  },
};
</script>

<style scoped>
.review-details {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  font-size: 2rem;
  color: #333;
}

.review-content {
  margin-bottom: 15px;
  color: #666;
}

.back-button {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  text-decoration: none;
}

.back-button:hover {
  background-color: #0056b3;
}
</style>
