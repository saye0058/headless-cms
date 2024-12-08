<template>
  <div class="review-details">
    <h1>{{ review?.title }}</h1>
    <div v-html="review?.content"></div>
    <p><strong>Date:</strong> {{ review?.date }}</p>
    <router-link to="/reviews" class="back-button">Back to Reviews</router-link>
  </div>
</template>



