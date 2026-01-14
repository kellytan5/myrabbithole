<template>
  <div id="app">
    <div v-if="$route.path !== '/'" class="header">
      <Header></Header>
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

export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
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