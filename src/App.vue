<template>
  <div id="app">
    <nav>
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/reviews" class="nav-link">Reviews</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  provide() {
    return {
      reviews: this.reviews,
    };
  },
  data() {
    return {
      reviews: [
        { id: 1, title: "Exceptional Service!", content: "The team went above and beyond to deliver a fantastic product. Highly recommend!", author: "Jane Doe", date: "2024-12-01", rating: 5 },
        { id: 2, title: "Great Experience", content: "The entire process was smooth and efficient. I was very impressed with their professionalism.", author: "John Smith", date: "2024-11-25", rating: 4.5 },
        { id: 3, title: "Good, but Room for Improvement", content: "Overall, the service was good, but there were some delays in communication.", author: "Emily White", date: "2024-11-20", rating: 4 },
        { id: 4, title: "Fantastic Results", content: "I loved the design they created for my website. It was creative and aligned with my vision.", author: "Michael Brown", date: "2024-11-15", rating: 5 },
        { id: 5, title: "Satisfied Customer", content: "I am happy with the final product. The team was responsive and addressed my concerns.", author: "Sophia Green", date: "2024-11-10", rating: 4.5 },
        { id: 6, title: "Highly Recommend", content: "Their expertise in web development is unmatched. I’m thrilled with the results!", author: "Chris Lee", date: "2024-11-05", rating: 5 },
        { id: 7, title: "Value for Money", content: "Affordable services without compromising on quality. Great for small businesses.", author: "Anna Clark", date: "2024-10-30", rating: 4.8 },
        { id: 8, title: "Amazing Team", content: "The team was friendly, approachable, and always ready to help. A pleasure to work with.", author: "Ethan Wilson", date: "2024-10-25", rating: 4.7 },
        { id: 9, title: "Met Expectations", content: "The project met my expectations, but there’s room for more creative input.", author: "Isabella Davis", date: "2024-10-20", rating: 4 },
        { id: 10, title: "Impressive Work", content: "Their attention to detail is commendable. The end result exceeded my expectations.", author: "Mason Brown", date: "2024-10-15", rating: 4.9 },
        { id: 11, title: "Great Communication", content: "The team kept me updated at every step, making the process stress-free.", author: "Olivia Harris", date: "2024-10-10", rating: 5 },
        { id: 12, title: "Quick Turnaround", content: "The project was delivered on time without compromising quality. Great job!", author: "Liam Martinez", date: "2024-10-05", rating: 4.6 },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f9f9f9;
  color: #333;
}

nav {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}

.nav-link {
  margin: 0 15px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #007bff;
  text-decoration: none;
}

.nav-link:hover {
  color: #0056b3;
}

router-view {
  display: block;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
