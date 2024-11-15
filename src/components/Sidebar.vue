<script setup>
import { RouterLink } from 'vue-router';

</script>
<template>
    <div class="sidebar">
      <h1 class="logo">Projet Fitness</h1>
      <nav>
        <ul>
          <li><RouterLink :to="{name:'home'}">Home</RouterLink></li>
          <li><RouterLink :to="{name:'programmes'}">Programmes</RouterLink></li>
          <li><RouterLink :to="{name:'mouvements'}">Mouvements</RouterLink></li>
          <li><RouterLink :to="{name:'catégories'}">Catégories</RouterLink></li>
        </ul>
      </nav>
      <a href="#" class="logout">Logout</a>
    </div>
  </template>
  
  <style scoped>
  .sidebar {
    width: 240px;
    border-radius: 30px;
    background-color: var(--lowgrey);
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
   
  }
  .logo {
    color: var(--yellow);
    font-size: 30px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }
  nav ul {
    list-style: none;
  }
  nav a {
    color: #ffffff;
    text-decoration: none;
    display: block;
    padding: 10px ;
    font-family:'Times New Roman', Times, serif;
    font-size: 20px;
  }
  .playlists p {
    font-size: 16px;
    color: #aaaaaa;
  }
  .logout {
    color: #ff4b4b;
    text-decoration: none;
    font-size: 16px;
  }
  </style>