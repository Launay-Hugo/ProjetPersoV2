<script setup>
import { computed } from 'vue'
import { useSearchStore } from '../store'

const { highlights, setSearchQuery } = useSearchStore()

// Calculer les 3 mouvements les plus populaires
const topHighlights = computed(() => {
  return [...highlights.value]
    .sort((a, b) => b.searchCount - a.searchCount) // Tri décroissant par `searchCount`
    .slice(0, 3) // Prendre les 3 premiers
})

// Fonction pour gérer le clic sur un mouvement
const handleHighlightClick = (highlight) => {
  setSearchQuery(highlight.title) // Mettre à jour la barre de recherche
}
</script>

<template>
  <div class="popular-movements">
    <h2 class="section-title">Mouvements les plus populaires</h2>
    <div class="movements-grid" v-for="highlight in topHighlights" :key="highlight.id">
      <img
        :src="highlight.image"
        :alt="highlight.title"
        @click="handleHighlightClick(highlight)"
        class="clickable-image"
      />
      <p>{{ highlight.title }} (Recherches : {{ highlight.searchCount }})</p>
    </div>
  </div>
</template>

<style scoped>
.popular-movements {
  text-align: center;
  padding: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  color: var(--yellow);
  margin-bottom: 20px;
}

.movements-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #1c1c1c;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 8px var(--lowgray);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
}

.movements-grid:hover {
  transform: translateY(-5px); /* Légère élévation au survol */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); /* Effet d'ombre accentué */
}

img {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Forme circulaire */
  border: 2px solid var(--yellow);
  margin-bottom: 10px;
  cursor: pointer; /* Indique que c'est cliquable */
  transition: transform 0.3s;
}

p {
  font-size: 16px;
  color: #ffffff;
  font-family: var(--roboco);
}

p span {
  font-size: 14px;
  color: var(--yellow);
}
</style>
