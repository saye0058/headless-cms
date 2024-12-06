<template>
  <div>
    <h1>{{ review?.title }}</h1>
    <p><strong>By:</strong> {{ review?.author }} | <strong>Rating:</strong> {{ review?.rating }}⭐ | <strong>Date:</strong> {{ review?.date }}</p>
    <p>{{ review?.content }}</p>
    <router-link to="/reviews">Back to Reviews</router-link>
  </div>
</template>

<script>
export default {
  name: "ReviewDetails",
  inject: ["reviews"],
  computed: {
    review() {
      const id = parseInt(this.$route.params.id, 10);
      return this.reviews.find((review) => review.id === id);
    },
  },
};
</script>

<style>
p {
  margin: 10px 0;
}
</style>
