// store.js
import { ref, provide, inject } from 'vue'

export const createSearchStore = () => {
  const searchQuery = ref('')

  const setSearchQuery = (query) => {
    searchQuery.value = query
  }

  provide('searchStore', { searchQuery, setSearchQuery })
}

export const useSearchStore = () => {
  return inject('searchStore')
}
