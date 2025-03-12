<template>
  <div id="app">
    <div v-if="$route.path !== '/'" class="menu-container" :class="{ open: isMenuOpen }">
      <Menu @click="toggleMenu" class="menu-btn"></Menu>
      <transition name="slide">
        <div v-if="isMenuOpen" class="mini-menu">
          <Mini_Menu />
        </div>
      </transition>
    </div>
    <router-view />
  </div>
</template>

<script>
import { Menu } from 'lucide-vue-next'; 
import Mini_Menu from '@/components/mini_menu.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'App',
  components: {
    Menu, 
    Mini_Menu
  },
  data() {
    return {
      isMenuOpen: false, // Controls mini_menu modal visibility
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
  mounted() {
    const route = useRoute();

    watch(route, () => {
      this.isMenuOpen = false; // Close menu when the page changes
    });
  },
}
</script>

<style>
@import './styles/index.scss';
@import './styles/text_index.scss';

  /* Vue Transition Animations */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>
