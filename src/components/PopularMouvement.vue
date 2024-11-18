<script setup>
import { computed } from 'vue'
import { useSearchStore } from '../store'

const { highlights } = useSearchStore()

// Calculer les 3 mouvements les plus populaires
const topHighlights = computed(() => {
  return [...highlights.value]
    .sort((a, b) => b.searchCount - a.searchCount) // Tri décroissant par `searchCount`
    .slice(0, 3) // Prendre les 3 premiers
})
</script>

<template>
  <div>
    <h3>Mouvements les plus populaires</h3>
    <ul>
      <li v-for="highlight in topHighlights" :key="highlight.id">
        <img :src="highlight.image" :alt="highlight.title" />
        <p>{{ highlight.title }} (Recherches : {{ highlight.searchCount }})</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
  text-align: center;
}

img {
  max-width: 100px;
  height: auto;
  border-radius: 5px;
}
</style>
