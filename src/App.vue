<script setup>
import { RouterLink, useRoute } from 'vue-router'
import Header from './components/Header.vue'
import { createSearchStore } from './store'
import { ref, onMounted, onUnmounted } from 'vue'

createSearchStore()

const sidebarOpen = ref(true)
const isMobile = ref(false) // Indique si on est en mode mobile

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

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}
// Ferme la barre latérale quand un lien est cliqué (pour mobile)

const checkMobileView = () => {
  isMobile.value = window.innerWidth <= 768 // Définir la largeur max pour mobile
}

// Ferme la barre latérale si on est en mode mobile
const closeSidebar = () => {
  if (isMobile.value) {
    sidebarOpen.value = false
  }
}
onMounted(() => {
  checkMobileView()
  window.addEventListener('resize', checkMobileView)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobileView)
})
</script>

<template>
  <div id="app">
    <!-- Sidebar -->
    <div class="sidebar" :class="{ hidden: !sidebarOpen, mobile: isMobile }">
      <h1 class="logo">Projet Fitness</h1>
      <nav>
        <ul>
          <li>
            <RouterLink
              :to="{ name: 'home' }"
              :class="{ active: route.name === 'home' }"
              @click="closeSidebar"
            >
              Accueil
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'programmes' }"
              :class="{ active: route.name === 'programmes' }"
              @click="closeSidebar"
            >
              Programmes
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'mouvements' }"
              :class="{ active: route.name === 'mouvements' }"
              @click="closeSidebar"
            >
              Mouvements
            </RouterLink>
          </li>
          <li>
            <RouterLink
              :to="{ name: 'categories' }"
              :class="{ active: route.name === 'categories' }"
              @click="closeSidebar"
            >
              Catégories
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Timer -->
      <div class="timer-container">
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
    </div>

    <!-- Toggle Button -->
    <button
      class="toggle-sidebar"
      :class="{ 'toggle-left': sidebarOpen, 'toggle-right': !sidebarOpen }"
      @click="toggleSidebar"
    >
      <span>{{ sidebarOpen ? '‹' : '›' }}</span>
    </button>

    <!-- Main Content -->
    <div class="main-content" :class="{ expanded: !sidebarOpen && !isMobile }">
      <div class="container">
        <Header />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* App Container */
#app {
  display: flex;
  height: 100vh;
  background-color: var(--black);
  color: #ffffff;
  overflow: hidden; /* Prevent content from overflowing */
}

/* Sidebar Styles */
.sidebar {
  width: 280px;
  border-radius: 30px;
  background-color: var(--lowgrey);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease; /* Smooth slide in/out */
  transform: translateX(0); /* Default position */
  z-index: 1000;
}

.sidebar.hidden {
  transform: translateX(-100%); /* Slide out when hidden */
}
.sidebar.mobile {
  width: 100%; /* Full width on mobile */
  height: 100%; /* Full height on mobile */
  position: fixed;
  top: 0;
  left: 0;
}

.logo {
  color: var(--yellow);
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  padding: 20px;
  text-align: center;
}

nav ul {
  margin-top: 40px;
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
  max-width: 85%;
}

nav a.active {
  background-color: var(--yellow);
  color: black;
  font-weight: bold;
}

nav a:hover {
  background-color: #3a3a3a;
}

/* Timer Styles */
.timer-container {
  text-align: center;
  margin: 20px auto;
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  text-align: center;
}

.timer-image {
  display: block;
  max-width: 100%; /* Ensure the image is responsive */
  max-height: 50%;
  object-fit: contain;
  height: auto;
  margin: 0 auto;
  margin-bottom: 20px; /* Add space below the image */
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Optional shadow for aesthetic */
}

.timer {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  padding: 15px 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: block;
  height: auto;
  width: auto;
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
}

.timer-controls button:hover {
  background-color: orange;
}

.timer-controls button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* Main Content */
.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  background-color: var(--black);
  transition: all 0.3s ease; /* Smooth transition */
}

.main-content.expanded {
  padding-left: 0; /* Remove left padding when sidebar is hidden */
  flex: 1.2; /* Slightly expand the content when sidebar is hidden */
}

.container {
  width: 100%;
  height: 100%;
  transition: width 0.3s ease;
}

.main-content.expanded .container {
  max-width: 80%; /* Make the content take up more space */
}

.container > * {
  transition: transform 0.3s ease;
}

/* Sidebar Toggle Button */
.toggle-sidebar {
  background-color: var(--lowgrey);
  color: var(--yellow);
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 12px;
  border-radius: 8px;
  position: fixed;
  transition:
    left 0.3s ease,
    transform 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  top: 90px;
  z-index: 2000;
}
/* Toggle Button Positions */
.toggle-sidebar.toggle-left {
  left: 320px;
}

.toggle-sidebar.toggle-right {
  left: 0px; /* Positioned closer to the edge of the screen */
}

.toggle-sidebar:hover {
  background-color: #3a3a3a;
  color: var(--yellow);
}
.toggle-sidebar span {
  font-size: 18px;
  color: inherit; /* Match button text color */
}
</style>
