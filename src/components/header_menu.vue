<template>
  <div class="header-group">
    <div class="left"></div>
    <div class="item-group">
      <router-link class="item text" :to="{ path: '/home', hash: '#profile' }">Creator's Profile</router-link>
      <router-link class="item text" :to="{ path: '/home', hash: '#education' }">Education</router-link>
      <router-link class="item text" :to="{ path: '/home', hash: '#experiences' }">Experiences</router-link>
      <router-link class="item text" :to="{ path: '/home', hash: '#projects' }">Projects</router-link>
      <router-link class="item text" :to="{ path: '/home', hash: '#certificates' }">Certificates</router-link>
    </div> <!-- item-group closing div -->
    <div class="socials-group">
      <a :href="github_link" target="_blank" rel="noopener noreferrer"><Github class="item socials-item"/></a>
      <a :href="linkedin_link" target="_blank" rel="noopener noreferrer"><Linkedin class="item socials-item"/></a>
    </div> <!-- item-group closing div -->
  </div>
</template>

<script>
import { Github, Linkedin } from 'lucide-vue-next';

export default {
  name: "header-menu",

  components: {
    Github, 
    Linkedin
  },

  data() {
    return {
      github_link: "https://github.com/kellytan5/", 
      linkedin_link: "https://linkedin.com/in/kelly-tan-09/"
    };
  },
}
</script>

<style>
@import '../styles/header_menu.scss'
</style>