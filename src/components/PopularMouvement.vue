<script>
export default {
  data() {
    return {
      mouvement: [
        { title: "Fente de révérence",  image: "https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450787/fenteDeReverence_n71jbc.gif" },
        { title: "Planche", image: "https://res.cloudinary.com/dskfvpsiu/image/upload/v1731450788/plancheLateral1_q9dms8.jpg" },
        // Ajoutez plus de chansons ici
      ]
    };
  }
};
</script>
<template>
    <section class="popular-mouvement">
      <h3>Popular Mouvement</h3>
      <div class="mouvement-list">
        <div class="mouvement-card" v-for="mouvement in mouvement" :key="mouvement.title">
          <img :src="mouvement.image" alt="" />
          <p>{{ mouvement.title }}</p>
        </div>
      </div>
    </section>
  </template> 
  
  <style scoped>
  .popular-mouvement{
    margin-top: 50px;
  }
  .mouvement-list {
    display: flex;
    overflow-x: auto;
  }
  .mouvement-card {
    margin-top: 20px;
    background-color: #333333;
    border-radius: 10px;
    padding: 10px;
    width: 120px;
    margin-right: 15px;
    text-align: center;
  }
  .mouvement-card img {
    width: 100%;
    border-radius: 10px;
  }
  </style>
  