<script setup>
import { watch } from 'vue'
import { useSearchStore } from '@/store'
import { useRouter } from 'vue-router'

const { searchQuery } = useSearchStore()

const router = useRouter()

// Surveiller les changements dans la recherche (store)
watch(searchQuery, (newSearch) => {
  if (newSearch) {
    // Redirige vers la page mouvements avec la recherche en paramètre
    router.push({ name: 'mouvements', query: { q: newSearch } })
  }
})
</script>

<template>
  <header>
    <input type="text" v-model="searchQuery" placeholder="Rechercher un mouvement" />

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
  background-color: var(--background-color);
  box-sizing: border-box;
  width: 100%;
}

header input[type='text'] {
  padding: 10px;
  border-radius: 20px;
  border: none;
  width: 100%;
  max-width: 300px;
  box-sizing: border-box;
}

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
