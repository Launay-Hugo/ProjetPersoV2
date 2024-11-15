<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()

// Chronomètre
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const isRunning = ref(false)
let interval = null

const startTimer = () => {
  if (!isRunning.value) {
    isRunning.value = true
    interval = setInterval(() => {
      seconds.value += 1
      if (seconds.value === 60) {
        seconds.value = 0
        minutes.value += 1
      }
      if (minutes.value === 60) {
        minutes.value = 0
        hours.value += 1
      }
    }, 1000)
  }
}

const stopTimer = () => {
  isRunning.value = false
  clearInterval(interval)
}

const resetTimer = () => {
  stopTimer()
  hours.value = 0
  minutes.value = 0
  seconds.value = 0
}
</script>

<template>
  <div class="sidebar">
    <h1 class="logo">Projet Fitness</h1>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'home' }" :class="{ active: route.name === 'home' }"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'programmes' }" :class="{ active: route.name === 'programmes' }"
            >Programmes</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'mouvements' }" :class="{ active: route.name === 'mouvements' }"
            >Mouvements</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'catégories' }" :class="{ active: route.name === 'catégories' }"
            >Catégories</RouterLink
          >
        </li>
      </ul>
    </nav>

    <!-- Affichage du chronomètre -->
    <div class="timer">
      <h2>Chronomètre</h2>
      <p class="time-display">
        {{ String(hours).padStart(2, '0') }}:{{ String(minutes).padStart(2, '0') }}:{{
          String(seconds).padStart(2, '0')
        }}
      </p>
      <div class="timer-controls">
        <button @click="startTimer" :disabled="isRunning">Démarrer</button>
        <button @click="stopTimer" :disabled="!isRunning">Arrêter</button>
        <button @click="resetTimer">Réinitialiser</button>
      </div>
    </div>

    <a href="#" class="logout">Logout</a>
  </div>
</template>

<style scoped>
.sidebar {
  width: 240px;
  border-radius: 30px;
  background-color: var(--lowgrey);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

.logo {
  color: var(--yellow);
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 20px;
  text-align: center;
}

nav ul {
  margin-top: 100px;
  list-style: none;
  padding: 0;
}

nav a {
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  font-family: var(--faculty);
  font-size: 20px;
  transition: background-color 0.3s ease;
  border-radius: 8px;
}

/* Style pour le lien actif */
nav a.active {
  background-color: var(--yellow);
  color: black;
  font-weight: bold;
}

/* Effet de survol */
nav a:hover {
  background-color: var(--lowgrey);
}

/* Chronomètre Styles */
.timer {
  margin-top: 100px;
  text-align: center;
  color: #fff;
}

.timer h2 {
  color: var(--yellow);
  font-size: 20px;
  margin-bottom: 10px;
}

.time-display {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: var(--roboto);
}

.timer-controls button {
  background-color: green;
  color: #fff;
  border: none;
  padding: 8px 12px;
  margin: 0 5px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.timer-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.timer-controls button:nth-child(2) {
  background-color: red;
}

.timer-controls button:nth-child(3) {
  background-color: var(--lowgrey);
  border: solid 1px black;
}

.logout {
  color: red;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  margin-top: auto;
  padding: 10px;
  transition: color 0.3s ease;
}

.logout:hover {
  color: #ff1a1a;
}
</style>
