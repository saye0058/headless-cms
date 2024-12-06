<template>
    <div id="home">
      <header>
        <h1>Welcome to Our Customer Reviews</h1>
        <p>Explore real feedback from our satisfied clients!</p>
        <router-link to="/reviews" class="cta-button">Read Our Reviews</router-link>
      </header>
    
      <footer>
        <p>&copy; 2024 Customer Reviews. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "Home",
  };
  </script>
  
  <style>
  #home {
    font-family: 'Arial', sans-serif;
    background-color: #ffffff;
    color: #333;
    padding: 50px 20px;
  }
  
  header {
    text-align: center;
    margin-bottom: 50px;
  }
  
  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1.2rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .cta-button {
    display: inline-block;
    padding: 12px 20px;
    font-size: 1.1rem;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
  }
  
  .cta-button:hover {
    background-color: #0056b3;
  }
  
  .intro {
    text-align: center;
    margin-bottom: 50px;
  }
  
  footer {
    text-align: center;
    margin-top: 50px;
    font-size: 1rem;
    color: #888;
  }
  </style>
  