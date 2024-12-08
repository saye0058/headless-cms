const routes = [
  { path: 'src/components/movie-review-pages/mad-max.js', component: movie1Component },
];

const router = new VueRouter({
  routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
  });

