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
        <div class="profile-content">
          <font-awesome-icon :icon="['far', 'user']" />
          <p>Se connecter</p>
        </div>
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

.profile a {
  display: flex;
  flex-direction: column;
  color: var(--yellow);
  text-decoration: none;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;
}
.profile a .profile-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--yellow);
  text-decoration: none;
}
.profile svg {
  color: white;
}
</style>
