<script setup>
import { ref, watch } from 'vue'
import { useSearchStore } from '../store'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const { searchQuery } = useSearchStore()
const { highlights } = useSearchStore()

const filteredHighlights = ref([])
const currentIndex = ref(0)
const showText = ref(false)

const route = useRoute()

onMounted(() => {
  console.log('Search Query:', route.query.q)
})

const incrementHighlightCount = (id) => {
  const highlight = highlights.value.find((h) => h.id === id)
  if (highlight) {
    highlight.searchCount += 1
    // console.log(`Incrémentation : ${highlight.title} -> ${highlight.searchCount}`) // Debug
  }
}

const updateFilteredHighlights = () => {
  const query = searchQuery.value.toLowerCase().trim()

  if (!query) {
    // Si l'input est vide, afficher tous les mouvements
    filteredHighlights.value = [...highlights.value]
  } else {
    // Sinon, filtrer les mouvements sans incrémenter
    filteredHighlights.value = highlights.value.filter((item) =>
      item.title.toLowerCase().includes(query),
    )
  }

  // console.log('Filtered Highlights:', filteredHighlights.value) //
}

// Regarder les changements dans la recherche
watch(searchQuery, updateFilteredHighlights, { immediate: true })

const setActive = (index) => {
  currentIndex.value = index
}

const toggleText = () => {
  showText.value = !showText.value
}
</script>

<template>
  <main :class="{ 'center-content': filteredHighlights.length === 1 }">
    <section v-if="filteredHighlights.length > 0" class="highlight-carousel">
      <div class="carousel">
        <div
          v-for="(highlight, index) in filteredHighlights"
          :key="highlight.id"
          :class="['carousel-item', { active: currentIndex === index }]"
          @click="
            () => {
              setActive(index)
              incrementHighlightCount(highlight.id) // Incrémenter lors du clic
            }
          "
        >
          <img :src="highlight.image" alt="Highlight Image" />
          <div class="highlight-info" v-if="currentIndex === index">
            <div class="arrow" @click="toggleText">
              <h2>
                {{ highlight.title }}
              </h2>
              <font-awesome-icon :icon="['fas', 'arrow-up']" />
            </div>
            <div v-if="showText" class="text-box" @click="toggleText">
              {{ highlight.description }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <p v-else class="no-results">Aucun exercice ne correspond à votre recherche.</p>
  </main>
</template>

<style scoped>
main {
  width: 100%;
  height: 100vh;
  background-color: var(--black);
}

.highlight-carousel {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
}

.carousel {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.carousel-item {
  position: relative;
  width: 350px;
  height: 450px;
  opacity: 0.5;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  cursor: pointer;
  transform: scale(0.8);
}

.carousel-item.active {
  transform: scale(1);
  opacity: 1;
}

.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
}

.highlight-info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  color: #ffffff;
  background-color: var(--black);
  padding: 10px;
  border-radius: 10px;
  font-size: 20px;
  font-family: var(--faculty);
}
.highlight-info:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}

.arrow {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 22px;
}

.text-box {
  margin-top: 5px;
  color: #cccccc;
}

svg {
  color: var(--yellow);
}

.no-results {
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
}
</style>
