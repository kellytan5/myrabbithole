<template>
  <div id="app">
    <div v-if="$route.path !== '/'" class="menu-container" :class="{ open: isMenuOpen }">
      <Menu @click="toggleMenu" class="menu-btn" v-tippy="{ placement : 'left' }" content="Menu"></Menu>
      <transition name="slide">
        <div v-if="isMenuOpen" class="mini-menu">
          <Mini_Menu @toggle-contact="toggleContact"/>
        </div>
      </transition>
    </div>
    <router-view />
    <Contact v-if="isContactVisible" @close="toggleContact" />
    <div v-if="$route.path !== '/' && $route.path !== '/aboutme'" class="back-home" @click="backHome">
      <span class="arrow">&#9664;</span>Back to About Me
    </div>
  </div>
</template>

<script>
import { Menu } from 'lucide-vue-next'; 
import Mini_Menu from '@/components/mini_menu.vue';
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import Contact from '@/components/contact.vue';

export default {
  name: 'App',
  components: {
    Menu, 
    Mini_Menu, 
    Contact, 
  },
  data() {
    return {
      isMenuOpen: false, // Controls mini_menu modal visibility
      isContactVisible: false,
    };
  },
  methods: {
    backHome() {
      this.$router.push('/aboutme')
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleContact() {
      this.isContactVisible = !this.isContactVisible;
    }
  },
  mounted() {
    const route = useRoute();

    watch(route, () => {
      this.isMenuOpen = false; // Close menu when the page changes
      this.isContactVisible = false;
    });
  },
}
</script>

<style>
@import './styles/index.scss';
@import './styles/text_index.scss';
@import './styles/menu_index.scss';
@import './styles/768_index.scss';

  /* Vue Transition Animations */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
</style>
