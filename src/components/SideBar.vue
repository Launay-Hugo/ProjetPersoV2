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
            >Accueil</RouterLink
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
          <RouterLink :to="{ name: 'categories' }" :class="{ active: route.name === 'categories' }"
            >Catégories</RouterLink
          >
        </li>
      </ul>
    </nav>

    <!-- Timer Section -->
    <div id="app" class="timer-container">
      <img
        src="https://res.cloudinary.com/dskfvpsiu/image/upload/v1731847567/chrono_fsno22.png"
        alt="Chibi with Timer"
        class="timer-image"
      />
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

nav a.active {
  background-color: var(--yellow);
  color: black;
  font-weight: bold;
}

nav a:hover {
  background-color: var(--lowgrey);
}

.timer-container {
  text-align: center;
  margin: 20px auto; /* Center the container */
}

.timer-image {
  display: block;
  max-width: 100%; /* Ensure the image is responsive */
  height: auto;
  margin-bottom: 20px; /* Add space below the image */
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow for aesthetic */
}

.timer {
  background: rgba(255, 255, 255, 0.9); /* Slightly opaque white background */
  border-radius: 12px;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.timer h2 {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
}

.time-display {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  border: 2px solid var(--yellow);
  border-radius: 8px;
  padding: 5px 10px;
  margin-bottom: 10px;
  display: inline-block;
  font-family: var(--roboto);
}

.timer-controls button {
  margin: 5px;
  padding: 8px 12px;
  font-size: 14px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  background-color: var(--yellow);
  color: white;
  transition: background-color 0.3s ease;
  font-family: var(--faculty);
}

.timer-controls button:hover {
  background-color: orange;
}

.timer-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
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
