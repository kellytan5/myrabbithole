<template>
  <div class="container">
    <div class="window center">
      <div class="window-header">
        <div class="window-controls">
          <span class="minimize">-</span>
          <span class="expand">⛶</span>
          <span class="close">✕</span>
        </div>
      </div>
      <div class="window-content">
        <div class="opening-msg text-paragraph text">
          <p>Hi! I'm Kelly Tan</p>
          <p>Welcome to My 1st Official Project, My Rabbit Hole.</p>
        </div> <!-- opening_msg closing div -->
        <Button class="start-btn" v-if="!isLoading" action_msg="Start Here" @click="startLoading"></Button> <!-- use Button component -->
        <div id="loading_bar" v-else class="retro-loading-bar">
          <p class="loading-msg">Loading...</p>
          <LoadingBar :loading="isLoading" :progress="progress" />
        </div> <!-- loading_bar closing div -->
      </div> <!-- content closing div -->
    </div> <!-- window closing div -->
  </div> <!-- container closing div -->
</template>

<script>
import Button from "../components/button.vue";
import LoadingBar from "../components/loading_bar.vue";

export default {
  name: 'welcome-view',

  components: {
    Button,
    LoadingBar
  },

  data() {
    return {
      isLoading: false,
      progress: 0,
    };
  },

  methods: {
    start() {
      this.$router.push('/aboutme');
      console.log("start here");
    },
    startLoading() {
      this.isLoading = true;
      this.progress = 0;
      
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 10; // Increase progress
        } else {
          clearInterval(interval);
          this.$router.push('/aboutme');
        }
      }, 500);
    }
  }
}
</script>

<style>
  @import '../styles/welcome_index.scss';
</style>