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
        <div class="opening-msg text-paragraph">
          <CodeXml></CodeXml>
          <p>Hi! I'm Kelly Tan</p>
          <p>Welcome to My First Official Project, My Portfolio.</p>
        </div> <!-- opening_msg closing div -->
        <Button class="start-btn" v-if="!loading.isLoading" action_msg="Start Here" @click="startLoading"></Button> <!-- use Button component -->
        <div id="loading_bar" v-else class="retro-loading-bar">
          <p class="loading-msg">Loading...</p>
          <LoadingBar :loading="loading.isLoading" :progress="loading.progress" />
          <p v-if="loading.error" class="error-msg">Looks like something went wrong. Please try again later. </p>
        </div> <!-- loading_bar closing div -->
      </div> <!-- content closing div -->
    </div> <!-- window closing div -->
  </div> <!-- container closing div -->
</template>

<script>
import Button from "../components/button.vue";
import LoadingBar from "../components/loading_bar.vue";
import { CodeXml } from 'lucide-vue-next';
import { loadingStore } from '../stores/loading';
import { bootstrapAppData } from "../services/bootstrap";

export default {
  name: 'welcome-view',

  components: {
    Button,
    LoadingBar, 
    CodeXml
  },

  data() {
    return {
      loading: loadingStore
    };
  },

  methods: {
    async startLoading() {
      if (this.loading.isLoading) return;
      await bootstrapAppData();
      this.$router.push('/home');
    }
  }
}
</script>

<style>
  @import '../styles/welcome_index.scss';
</style>