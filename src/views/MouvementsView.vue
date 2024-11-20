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
  }
}

const updateFilteredHighlights = () => {
  const query = searchQuery.value.toLowerCase().trim()

  if (!query) {
    filteredHighlights.value = [...highlights.value]
  } else {
    filteredHighlights.value = highlights.value.filter((item) =>
      item.title.toLowerCase().includes(query),
    )
  }
}

watch(searchQuery, updateFilteredHighlights, { immediate: true })

const setActive = (index) => {
  currentIndex.value = index
}

const toggleText = (index) => {
  if (currentIndex.value === index && showText.value) {
    showText.value = false
  } else {
    currentIndex.value = index
    showText.value = true
  }
}
</script>

<template>
  <main :class="{ 'center-content': filteredHighlights.length === 1 }">
    <section v-if="filteredHighlights.length > 0" class="highlight-mouvements">
      <div class="mouvements">
        <div
          v-for="(highlight, index) in filteredHighlights"
          :key="highlight.id"
          :class="['mouvements-item', { active: currentIndex === index }]"
          @click="
            () => {
              setActive(index)
              incrementHighlightCount(highlight.id)
            }
          "
        >
          <div class="image-container" @click="toggleText(index)">
            <img
              v-if="currentIndex !== index || !showText"
              :src="highlight.image"
              alt="Highlight Image"
            />
            <div v-else class="description-box">
              <p>{{ highlight.description }}</p>
              <button class="close-button" @click.stop="toggleText(index)">Fermer</button>
            </div>
          </div>
          <div class="title">
            <h3>{{ highlight.title }}</h3>
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
  min-height: 100vh;
  background-color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.highlight-mouvements {
  margin-top: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mouvements {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  gap: 20px;
}

.mouvements-item {
  position: relative;
  width: 300px;
  height: 400px;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
  transform: scale(0.9);
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--lowgrey);
}

.mouvements-item.active {
  transform: scale(1);
  opacity: 1;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
  height: auto;
}

.image-container {
  display: flex;
  flex-direction: column;
}

.image-container img {
  width: 100%;
  height: 350px; /* Hauteur fixe pour uniformité */
  object-fit: cover;
  border-bottom: 3px solid var(--yellow);
}

.title {
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
  color: var(--yellow);
  font-family: var(--faculty);
}

.description-box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  min-height: 200px;
  background-color: var(--lowgrey);
  color: #fff;
  text-align: justify;
  border-radius: 10px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.3);
  animation: fadeIn 0.3s ease-in-out;
}

.description-box h3 {
  font-size: 20px;
  margin-bottom: 10px;
  color: var(--yellow);
  text-align: center;
}

.description-box p {
  font-size: 16px;
  line-height: 1.5;
  color: #eaeaea;
  flex-grow: 1;
}

.description-box .close-button {
  align-self: flex-end;
  padding: 10px 15px;
  background-color: var(--yellow);
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.description-box .close-button:hover {
  background-color: orangered;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.no-results {
  color: #ffffff;
  font-size: 18px;
  text-align: center;
  padding-top: 20px;
}
</style>
