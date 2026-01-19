<template>
  <div class="sidebar-container">
    <div class="item-group">
      <router-link class="sidebar-item" :to="{ path: '/home', hash: '#profile' }"><UserRound /></router-link>
      <router-link class="sidebar-item" :to="{ path: '/home', hash: '#education' }"><GraduationCap /></router-link>
      <router-link class="sidebar-item" :to="{ path: '/home', hash: '#experiences' }"><BriefcaseBusiness /></router-link>
      <router-link class="sidebar-item" :to="{ path: '/home', hash: '#projects' }"><FolderCode /></router-link>
      <router-link class="sidebar-item" :to="{ path: '/home', hash: '#certificates' }"><Award /></router-link>
    </div>
    <div></div>
    <div>
      <a href="#" @click.prevent="toggleChatbot"><MessageCircleMore /></a>
    </div>
  </div>
</template>

<script>
import { MessageCircleMore, UserRound, GraduationCap, FolderCode, BriefcaseBusiness, Award } from 'lucide-vue-next';

export default {
  name: 'sidebar_component',
  components: {
    MessageCircleMore, 
    UserRound, 
    GraduationCap,
    FolderCode, 
    BriefcaseBusiness,
    Award
  },
  methods: {
    toggleChatbot() {
      this.$emit('toggle-chatbot');
    },
  }
}
</script>

<style>
@import '../styles/sidebar_index.scss';
</style>