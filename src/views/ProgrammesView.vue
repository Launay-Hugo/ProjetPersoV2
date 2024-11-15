<script>
export default {
  data() {
    return {
      currentIndex: 0,
      highlights: [
        {
          title: 'Programme',
          niveau: 'Bronze',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731685663/Bronze_lsn3jk.png',
        },
        {
          title: 'Programme',
          niveau: 'Argent',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731685713/Silver_yrqbe3.png',
        },
        {
          title: 'Programme',
          niveau: 'Or',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731685697/Gold_johfy7.png',
        },
        {
          title: 'Programme',
          niveau: 'Platine',
          image:
            'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731685709/platinum_b8dbwq.png',
        },
        {
          title: 'Programme',
          niveau: 'Diamant',
          image: 'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731685674/diamond_k98cvh.png',
        },
      ],
      messages: {
        Bronze: 'Programme pour Débutant conçu pour les personnes sans activité physique.  ',
        Argent:
          ' Programme pour Débutant conçu pour les personnes ayant une activité physique faible.',
        Or: 'Programme intermédiaire conçu pour les personnes ayant une activité physique moyenne.',
        Platine:
          'Programme intermédiaire conçu pour les personnes ayant une activité physique régulière.',
        Diamant: 'Programme avancé conçu pour les personnes ayant une activité physique poussée.',
      },
    }
  },
  computed: {
    currentMessage() {
      const niveau = this.highlights[this.currentIndex]?.niveau
      return this.messages[niveau] || ''
    },
    currentNiveau() {
      return this.highlights[this.currentIndex]?.niveau || ''
    },
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
        :key="highlight.title + (highlight.niveau || index)"
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

    <!-- Phrase dynamique en fonction du niveau sélectionné -->
    <div v-if="currentMessage" class="niveau-message">
      <p>{{ currentMessage }}</p>
      <RouterLink :to="`/programmes/${currentNiveau}`" class="view-program-link">
        Aller au programme {{ currentNiveau }}
      </RouterLink>
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
.niveau-message {
  margin-top: 100px;
  height: 40px;
}
.view-program-link {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
</style>
