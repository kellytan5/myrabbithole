<template>
  <div class="sidebar-shell" :class="{'expanded': expanded}">
    <!-- Chatbot Panel -->
    <div class="chatbot-panel" v-if="expanded">
      <Chatbot />
    </div>
    <div class="sidebar-container">
      <div class="sidebar-item-group">
        <router-link class="sidebar-item" :to="{ path: '/home', hash: '#profile' }"><UserRound /></router-link>
        <router-link class="sidebar-item" :to="{ path: '/home', hash: '#education' }"><GraduationCap /></router-link>
        <router-link class="sidebar-item" :to="{ path: '/home', hash: '#experiences' }"><BriefcaseBusiness /></router-link>
        <router-link class="sidebar-item" :to="{ path: '/home', hash: '#projects' }"><FolderCode /></router-link>
        <router-link class="sidebar-item" :to="{ path: '/home', hash: '#certificates' }"><Award /></router-link>
      </div>
      <div></div>
      <div class="chatbot-toggle">
        <a href="#" @click.prevent="$emit('toggle-chat')"><MessageCircleMore /></a>
      </div>
    </div>
  </div>
</template>

<script>
import { MessageCircleMore, UserRound, GraduationCap, FolderCode, BriefcaseBusiness, Award } from 'lucide-vue-next';
import Chatbot from '@/components/chatbot.vue';

export default {
  name: 'sidebar_component',
  props: {
    expanded: Boolean
  },
  components: {
    MessageCircleMore, 
    UserRound, 
    GraduationCap,
    FolderCode, 
    BriefcaseBusiness,
    Award, 
    Chatbot
  }
}
</script>

<style>
@import '../styles/sidebar_index.scss';
</style>