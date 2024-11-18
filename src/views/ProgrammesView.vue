<script>
export default {
  data() {
    return {
      currentIndex: 0,
      highlights: [
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
          image:
            'https://res.cloudinary.com/dskfvpsiu/image/upload/v1731803377/troph%C3%A9Or_iqykwt.png',
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
      ],
      messages: {
        Bronze: 'Programme pour Débutant conçu pour les personnes sans activité physique.',
        Argent:
          'Programme pour Débutant conçu pour les personnes ayant une activité physique faible.',
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
          <RouterLink v-if="highlight.niveau" :to="`/programmes/${highlight.niveau}`">
            <p>Voir le programme {{ highlight.niveau }}</p>
          </RouterLink>
        </div>
      </div>
    </div>

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
  margin-top: 50px;
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
.highlight-info a {
  text-decoration: none;
  color: var(--yellow);
}
.carousel-controls {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
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
.niveau-message {
  margin-top: 30px;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
}
.view-program-link {
  display: inline-block;
  margin-top: 10px;
  color: var(--yellow);
  text-decoration: underline;
  font-weight: bold;
  font-size: 16px;
}
</style>
