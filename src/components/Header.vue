<script setup>
import { ref, watch } from 'vue'
import { useSearchStore } from '@/store'
import { useRouter } from 'vue-router'

const { setSearchQuery } = useSearchStore()
const search = ref('')
const router = useRouter()

// Surveiller les changements de la recherche
watch(search, (newSearch) => {
  if (newSearch) {
    router.push({ name: 'mouvements', query: { q: newSearch } })
    setSearchQuery(newSearch)
  }
})
</script>

<template>
  <header>
    <input
      type="text"
      v-model="search"
      placeholder="Rechercher un mouvement"
      @input="setSearchQuery(search)"
    />

    <div class="profile">
      <RouterLink :to="{ name: 'login' }">
        <font-awesome-icon :icon="['far', 'user']" />
        <p>Se connecter</p>
      </RouterLink>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: var(--background-color); /* Replace with actual background color */
  box-sizing: border-box;
  width: 100%;
}

/* Styling for the search input */
header input[type='text'] {
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
}

/* Profile section to be aligned to the right */
.profile {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.profile a {
  color: var(--yellow);
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.profile svg {
  color: white;
}
</style>
