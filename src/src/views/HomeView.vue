<script setup>
import Carrousel from '@/components/Carrousel.vue'
import PopularMouvement from '@/components/PopularMouvement.vue'
import SelectCategories from '@/components/SelectCategories.vue'
</script>
<template>
  <Carrousel />
  <div class="select">
    <SelectCategories />
  </div>
  <PopularMouvement />
</template>
<style scoped>
.select {
  padding: 20px;
  margin-top: 10px;
}
</style>
