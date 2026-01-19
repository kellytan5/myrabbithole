<template>
  <div id="app">
    <div v-if="$route.path !== '/'" ref="headerRef" class="header">
      <Header></Header>
    </div>
    <div v-if="$route.path !== '/'" v-show="showSidebar" class="sidebar">
      <Sidebar></Sidebar>
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

export default {
  name: 'App',
  components: {
    Header, 
    Sidebar,
  },
  data() {
    return {
      showSidebar: false,
      headerRef: null
    };
  },
  methods: {
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
    }
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