<script setup>
import { ref, computed } from 'vue'

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

const messages = {
  Bronze: 'Programme pour Débutant conçu pour les personnes sans activité physique.',
  Argent: 'Programme pour Débutant conçu pour les personnes ayant une activité physique faible.',
  Or: 'Programme intermédiaire conçu pour les personnes ayant une activité physique moyenne.',
  Platine:
    'Programme intermédiaire conçu pour les personnes ayant une activité physique régulière.',
  Diamant: 'Programme avancé conçu pour les personnes ayant une activité physique poussée.',
}

const borderColors = {
  Bronze: 'var(--bronze)',
  Argent: 'var(--silver)',
  Or: 'var(--gold)',
  Platine: 'var(--platinium)',
  Diamant: 'var(--diamond)',
}

const currentMessage = computed(() => {
  const niveau = highlights[currentIndex.value]?.niveau
  return messages[niveau] || ''
})

const currentNiveau = computed(() => highlights[currentIndex.value]?.niveau || '')

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
        :key="highlight.title + (highlight.niveau || index)"
        :class="['carousel-item', { active: currentIndex === index }]"
        @click="setActive(index)"
        :style="{
          border: `8px solid ${borderColors[highlight.niveau]}`,
          boxShadow: currentIndex === index ? `0 0 12px ${borderColors[highlight.niveau]}` : 'none',
        }"
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
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  justify-content: center;
  position: relative;
  gap: 20px;
}
.carousel-item {
  position: relative;
  flex: 1 1 calc(20% - 20px); /* Largeur de base : 20% du conteneur, moins l'espacement */
  max-width: 250px; /* Limite la largeur maximale */
  min-width: 150px; /* Largeur minimale pour les petits écrans */
  height: auto;
  aspect-ratio: 1 / 1.4; /* Ratio d'image */
  opacity: 0.5;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease,
    border 0.3s ease;
  cursor: pointer;
  transform: scale(0.8);
  border-radius: 10px;
}
.carousel-item.active {
  transform: scale(1);
  opacity: 1;
}
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.highlight-info {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%; /* Ajuste à un pourcentage de la hauteur du parent */
  background-color: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.8rem + 0.3vw); /* Taille de police adaptative */
  padding: 5px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-sizing: border-box; /* Inclut le padding dans la taille */
  text-align: center;
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
