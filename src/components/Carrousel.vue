<script setup>
import { ref } from 'vue'

// State for current index and highlights
const currentIndex = ref(0)
const highlights = [
  {
    title: 'Programme',
    niveau: 'Bronze',
    image:
      'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803368/troph%C3%A9eBronze_ak0fk3.png',
  },
  {
    title: 'Programme',
    niveau: 'Argent',
    image:
      'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803364/troph%C3%A9eArgent_wvdtli.png',
  },
  {
    title: 'Programme',
    niveau: 'Or',
    image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803377/troph%C3%A9Or_iqykwt.png',
  },
  {
    title: 'Programme',
    niveau: 'Platine',
    image:
      'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803375/Troph%C3%A9ePlatine_kco4hd.png',
  },
  {
    title: 'Programme',
    niveau: 'Diamant',
    image:
      'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803373/troph%C3%A9eDiamant_zdgzve.png',
  },
]

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % highlights.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + highlights.length) % highlights.length
}

const setActive = (index) => {
  currentIndex.value = index
}
</script>

<template>
  <section class="highlight-carousel">
    <div class="carousel">
      <div
        v-for="(highlight, index) in highlights"
        :key="highlight.title + (highlight.artist || index)"
        :class="['carousel-item', { active: currentIndex === index }]"
        @click="setActive(index)"
      >
        <img :src="highlight.image" alt="Highlight Image" />
        <div class="highlight-info" v-if="currentIndex === index">
          <!-- Utilisez `path` pour naviguer vers la page de chaque niveau -->
          <RouterLink v-if="highlight.niveau" :to="`/programmes/${highlight.niveau}`">
            <p>Voir le programme {{ highlight.niveau }}</p>
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="carousel-controls">
      <button @click="prev">‹</button>
      <button @click="next">›</button>
    </div>
  </section>
</template>
<style scoped>
.highlight-carousel {
  margin-top: 100px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  position: relative;
}
.carousel-item {
  position: relative;
  width: 250px;
  height: 350px;

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
  object-fit: contain;
  border-radius: 10px;
}
.highlight-info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 5px;
}
.carousel-controls {
  display: flex;
  justify-content: space-between;
  width: 100px;
  margin-top: 10px;
}
.carousel-controls button {
  background: #333;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}
.carousel-controls button:hover {
  background: var(--yellow);
}
a {
  text-decoration: none;
  color: var(--yellow);
}
</style>
