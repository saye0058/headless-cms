<template>
  <div class="reviews-container">
    <h1>Movie Reviews</h1>
    <input 
      type="text" 
      v-model="searchQuery" 
      placeholder="Search reviews..." 
      class="search-bar"
    />
    
    <div>
    <ul>
      <li v-for="option in apiOptions" :key="option.id">
        <router-link :to="option.link">{{ option.name }}</router-link>
      </li>
    </ul>
  </div>

    <div class="reviews-grid">
      <div v-for="review in filteredReviews" 
           :key="review.id" 
           class="review-card">
        <h2 v-html="cleanTitle(review.title.rendered)"></h2>
        <div class="review-content" v-html="review.content.rendered"></div>
        <div>
          <div>
          <a href="/mad-max">
          <button>click here for more</button>
          </a>
        </div>
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
      <div v-for="review in filteredReviews" 
           :key="review.id" 
           class="review-card"
           @click="goToReview(review.id)"> 
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
        .replace(/&#8221;/g, '"');
    },
    formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString();
    }
  }

  ,apiOptions: [
        { id: 1, name: 'movie 1', link: 'src/components/movie-review-pages/mad-max.js' },
        { id: 2, name: 'movie 2', link: 'src/components/movie-review-pages/the-social-network.js' },
        { id: 3, name: 'movie 3', link: 'src/components/movie-review-pages/everything-everywhere-all-at-once.js' },
        { id: 4, name: 'movie 4', link: 'src/components/movie-review-pages/coda.js' },
        { id: 5, name: 'movie 5', link: 'src/components/movie-review-pages/spider-man.js' },
        { id: 6, name: 'movie 6', link: 'src/components/movie-review-pages/get-out.js' },
        { id: 7, name: 'movie 7', link: 'src/components/movie-review-pages/the-grand-budapest-hotel.js' },
        { id: 8, name: 'movie 8', link: 'src/components/movie-review-pages/parasite.js' },
        { id: 9, name: 'movie 9', link: 'src/components/movie-review-pages/inception.js' },
        { id: 10, name: 'movie 10', link: 'src/components/movie-review-pages/the-shawshank-redemption.js' },
      ]
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
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
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

.movie {
            background-color: #fff;
            margin: 10px;
            padding: 15px;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        .button {
            background-color: #007BFF; 
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 5px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #0056b3;
        }
</style>