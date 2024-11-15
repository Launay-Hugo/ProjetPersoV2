<script>
export default {
  data() {
    return {
      categories: ["All", "Jambes", "Abdominaux", "Biceps", "Triceps", "Cardio", "Relaxing", ]
    };
  }
};
</script>

<template>
    <section class="categories">
      <h3>Select Categories</h3>
      <div class="category-tags">
        <button v-for="category in categories" :key="category">{{ category }}</button>
      </div>
    </section>
  </template>
  <style scoped>
  .categories{
    margin: auto;
   margin-top: 50px;
   
  }
  .category-tags button {
    margin-top: 20px;
    margin-right: 10px;
    padding: 8px 15px;
    border: none;
    border-radius: 20px;
    background-color: #444444;
    color: #ffffff;
    cursor: pointer;
  }
  </style>
  