<template>
  <div id="app">
    <div v-if="$route.path == '/'" ref="headerRef" class="header">
      <Header></Header>
    </div>
    <div v-if="$route.path == '/'" v-show="showSidebar">
      <Sidebar class="sidebar" :expanded="isChatOpen" @toggle-chat="toggleChat"></Sidebar>
    </div>
    <router-view v-slot="{ Component }">
      <Transition name="slide-down">
        <Component :is="Component" />
      </Transition>
    </router-view>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Sidebar from "@/components/sidebar.vue";
import api from "@/api";
import { mainStore } from "./stores/main";

export default {
  name: 'App',
  components: {
    Header, 
    Sidebar,
  },
  data() {
    return {
      showSidebar: false,
      headerRef: null, 
      isChatOpen: false,
      store: mainStore,
    };
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    initObserver() {
      this.$nextTick(() => {
        // clean up old observer 
        if (this.observer) {
          this.observer.disconnect();
          this.observer = null;
        }

        // only run if header exists 
        if (!this.$refs.headerRef) {
          this.showSidebar = false;
          return;
        }

        this.observer = new IntersectionObserver(
          ([entry]) => {
            console.log('Header visible: ', entry.isIntersecting);
            this.showSidebar = !entry.isIntersecting;
          },
          { threshold: 0 }
        );
        this.observer.observe(this.$refs.headerRef);
      });
    }, 
    async fetchData() {
      console.log('API base URL:', import.meta.env.VITE_API_BASE_URL);
      if (mainStore.isReady) return;
      try {
        const [education, experiences, projects] = await Promise.all([
          api.get('/api/education/').catch(e => { console.error('education failed:', e); return { data: [] }; }),
          api.get('/api/experiences/').catch(e => { console.error('experiences failed:', e); return { data: [] }; }),
          api.get('/api/projects/').catch(e => { console.error('projects failed:', e); return { data: [] }; }),
        ]);
        mainStore.setData({
          education: education.data,
          experiences: experiences.data,
          projects: projects.data,
        });
      } catch (err) {
        console.error('Failed to fetch data:', err);
      }
    }
  },
  async created() {
    await this.fetchData();
  },
  mounted() {
    this.initObserver();
  },
  watch: {
    // re-run when route changes or on refresh
    $route() {
      this.initObserver();
    }
  },

  beforeUnmount() {
    this.observer?.disconnect();
  }
}
</script>

<style>
@import './styles/index.scss';
@import './styles/text_index.scss';
@import './styles/768_index.scss';

  /* Vue Transition Animations */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

.slide-down-enter-from, .slide-down-leave-to {
  opacity: 0; 
  transform: translateY(50%);
}

.slide-down-enter-active, .slide-down-leave-active {
  transition: 0.3s ease-out;
}
</style>