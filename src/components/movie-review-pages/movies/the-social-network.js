const routes = [
    { path: '/movie 2', component: movie2Component },
  ];
  
  const router = new VueRouter({
    routes
  });
  
  new Vue({
      el: '#app',
      router,
      render: h => h(App)
    });