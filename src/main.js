import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';


createApp(App).use(router).mount('#app');

//fetching data from wordpress 
fetch('https://dev-movie-reviews-cms.pantheonsite.io/wp-admin/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
  //
//fetching Rest API
    const fetchButton = document.getElementById('fetch-button');
    const dataDiv = document.getElementById('data');

    fetchButton.addEventListener('click', () => {
        // Fetching data from a sample API
        fetch('https://dev-movie-reviews-cms.pantheonsite.io/wp-json/wp/v2/review')
            .then(response => response.json())
            .then(data => {
                // Displaying the fetched data
                dataDiv.innerHTML = data.map(post => `<h3>${post.title}</h3><p>${post.body}</p>`).join('');
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                dataDiv.innerHTML = '<p>Error fetching data. Please try again later.</p>';
            });
    });
//
    new Vue({
    el: '#app',
    data: {
        data: null,
    },
    methods: {
        fetchData() {
            fetch('https://dev-movie-reviews-cms.pantheonsite.io/wp-json/wp/v2/review') // Replace with your API endpoint
                .then(response => response.json())
                .then(data => {
                    this.data = data;
                })
                .catch(error => console.error('Error fetching data:', error));
        }
    }
    });
    //
    //api
    export default {
        data() {
          return {
            apiData: null,
          };
        },
        mounted() {
          this.fetchData();
        },
        methods: {
          async fetchData() {
            try {
              const response = await fetch('https://dev-movie-reviews-cms.pantheonsite.io/wp-json/wp/v2/review');
              const data = await response.json();
              this.apiData = data; // Ensure you're setting the data correctly
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          },
        },
      };