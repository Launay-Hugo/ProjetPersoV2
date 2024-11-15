<script>
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import { createSearchStore } from './store'

export default {
  setup() {
    createSearchStore()
  },
  components: {
    Sidebar,
    Header,
  },
  data() {
    return {
      sidebarOpen: true, // Variable to track sidebar state (open/close)
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
    <Sidebar v-if="sidebarOpen" />

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

<style>
#app {
  display: flex;
  background-color: var(--black);
  color: #ffffff;
}
.container {
  margin-left: 160px;
}
.main-content {
  flex: 1;
  padding: 20px;
  transition: width 0.3s ease; /* Smooth transition */
}

/* When sidebar is closed, expand the main content */
.main-content.expanded {
  display: flex;
  flex-direction: column;
  width: 170vh; /* Adjust width when sidebar is closed */
  max-height: 260vh;
  align-content: center;
  background-color: var(--black);
  margin-left: 90px;
  font-size: 120%;
}
/* Toggle Button Style */
.toggle-sidebar {
  background: none;
  border: none;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  position: fixed;
  background-color: var(--lowgrey);
  padding: 10px 10px;
  border-radius: 10px;
}
</style>
