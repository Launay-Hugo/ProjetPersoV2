<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSearchStore } from '@/store'
import SelectCategories from '@/components/SelectCategories.vue'

const route = useRoute()

let highlights
try {
  const store = useSearchStore()
  highlights = store.highlights
  // console.log('Highlights from store:', highlights.value) //
} catch (error) {
  console.error('Error accessing store:', error.message)
}

// Filtrer les mouvements en fonction de la catégorie
const filteredHighlights = computed(() => {
  const category = route.query.category || 'All'

  if (category === 'All') {
    return highlights.value
  }

  return highlights.value.filter(
    (highlight) => highlight.category && highlight.category.includes(category),
  )
})

// console.log('Filtered highlights:', filteredHighlights.value)//
</script>

<template>
  <div class="select">
    <SelectCategories />
  </div>
  <div class="categories-page">
    <h2>{{ route.query.category || 'All' }} - Mouvements</h2>
    <div v-if="filteredHighlights.length > 0" class="movements-grid">
      <div v-for="highlight in filteredHighlights" :key="highlight.id" class="movement-card">
        <div class="card-header">
          <img :src="highlight.image" :alt="highlight.title" />
        </div>
        <div class="card-body">
          <h3 class="card-title">{{ highlight.title }}</h3>
          <div class="card-description">
            <p>{{ highlight.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Aucun mouvement trouvé pour cette catégorie.</p>
  </div>
</template>

<style scoped>
.select {
  padding: 20px;
}
.categories-page {
  text-align: center;
  padding: 20px;
}
.categories-page h2 {
  margin-bottom: 30px;
  font-size: bold;
}

.movements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  justify-content: center;
}

.movement-card {
  background: #1c1c1c;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition:
    transform 0.3s,
    box-shadow 0.3s;
  cursor: pointer;
}

.movement-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.card-header {
  height: 200px;
  overflow: hidden;
  position: relative;
}

.card-header img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.movement-card:hover .card-header img {
  transform: scale(1.1);
}

.card-body {
  padding: 15px;
  text-align: left;
}

.card-title {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  margin-bottom: 10px;
}

.card-description {
  max-height: 60px;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  color: #ccc;
  font-size: 14px;
  line-height: 1.5;
}

.movement-card:hover .card-description {
  max-height: 100vh; /* Ajuste en fonction de la longueur de la description */
}

.card-description p {
  margin: 0;
}
</style>
