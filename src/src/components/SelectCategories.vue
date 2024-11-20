<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Boutons des catégories
const categories = [
  'All',
  'Jambes',
  'Abdominaux',
  'Bras',
  'Cardio',
  'Posture',
  'Pectoraux',
  'Fesier',
]

// Gestion du clic pour redirection
const handleCategoryClick = (category) => {
  router.push({ name: 'categories', query: { category } })
}
</script>

<template>
  <div class="categories-buttons">
    <button
      v-for="category in categories"
      :key="category"
      @click="handleCategoryClick(category)"
      class="category-button"
    >
      {{ category }}
    </button>
  </div>
</template>

<style scoped>
.categories-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.category-button {
  background-color: var(--yellow);
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  font-family: var(--faculty);
  font-size: 15px;
  transition: background-color 0.3s ease;
  border-radius: 8px;
}

.category-button:hover {
  background-color: orangered;
  cursor: pointer;
}
</style>
