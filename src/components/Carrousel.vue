<script>
import { RouterLink } from 'vue-router'
export default {
  data() {
    return {
      currentIndex: 0,
      highlights: [
        {
          title: 'Programme',
          niveau: 'Bronze',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731593824/Bronze_fevq5c.png',
        },
        {
          title: 'Programme',
          niveau: 'Argent',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731593810/Silver_dnynqa.png',
        },
        {
          title: 'Programme',
          niveau: 'Or',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731593879/Gold_axscli.png',
        },
        {
          title: 'Programme',
          niveau: 'Platine',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731593799/Platine_olo1up.png',
        },
        {
          title: 'Programme',
          niveau: 'Diamant',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731593805/diamond_f0daqu.png',
        },
      ],
    }
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.highlights.length
    },
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.highlights.length) % this.highlights.length
    },
    setActive(index) {
      this.currentIndex = index
    },
  },
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
          <h2>{{ highlight.title }}</h2>
          <p>{{ highlight.niveau }}</p>
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
  object-fit: cover;
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
  background: none;
  border: none;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: var(--yellow);
}
</style>
