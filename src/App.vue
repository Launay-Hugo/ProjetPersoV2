<script>
import SideBar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import { createSearchStore } from './store'

export default {
  setup() {
    createSearchStore()
  },
  components: {
    SideBar,
    Header,
  },
  data() {
    return {
      sidebarOpen: true, // Track sidebar state (open/close)
    }
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen
    },
  },
}
</script>

<template>
  <div id="app">
    <!-- Sidebar -->
    <SideBar v-if="sidebarOpen" />

    <!-- Main Content -->
    <div :class="['main-content', { expanded: !sidebarOpen }]">
      <!-- Toggle Button for Sidebar -->
      <button class="toggle-sidebar" @click="toggleSidebar">
        {{ sidebarOpen ? 'Close Sidebar' : 'Open Sidebar' }}
      </button>

      <!-- Other Components -->
      <div class="container">
        <Header />
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  height: 100vh; /* Full height of viewport */
  background-color: var(--black);
  color: #ffffff;
  align-items: stretch; /* Ensure sidebar and main content stretch to full height */
}

/* Sidebar Styling */
.sidebar {
  width: 240px;
  background-color: var(--lowgrey);
  padding: 20px;
  box-sizing: border-box;
  flex-shrink: 0; /* Prevent sidebar from shrinking */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; /* Full height of parent */
}

.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto; /* Allow scrolling if content overflows */
  background-color: var(--black);
  transition: margin-left 0.3s ease; /* Smooth transition for sidebar toggle */
}

.main-content.expanded {
  margin-left: 60px; /* Adjust this if sidebar closes or opens */
  background-color: var(--black);
}

/* Resetting body margins */
body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
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
  top: 110px;
  left: 60px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition:
    background-color 0.3s ease,
    color 0.3s ease; /* Smooth transition */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

/* Hover Effect */
.toggle-sidebar:hover {
  background-color: #3a3a3a;
  color: var(--yellow);
}

/* Icon Style (Optional) */
.toggle-sidebar svg {
  font-size: 18px; /* Adjust icon size */
  color: inherit; /* Match button text color */
}
</style>
