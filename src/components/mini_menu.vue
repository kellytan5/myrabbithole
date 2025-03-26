<template>
  <div class="mini-menu-container">
    <div class="menu-button" style="margin: 10% 5% 5% 5%;" @click="aboutme">
        <p>About Me</p>
    </div>
    <div class="menu-button" @click="education">
        <p>Education</p>
    </div>
    <div class="menu-button" @click="experiences">
        <p>Work Experience</p>
    </div>
    <div class="menu-button" @click="projects">
        <p>Projects</p>
    </div>
    <div class="menu-button" @click="certificates">
        <p>Certificates</p>
    </div>
    <div class="menu-socials">
      <a :href="github_link" target="_blank" rel="noopener noreferrer"><Github class="menu-icons"/></a>
      <a href="#" @click.prevent="toggleContact"><MessageCircleMore class="menu-icons" /></a>
      <a :href="linkedin_link" target="_blank" rel="noopener noreferrer"><Linkedin class="menu-icons" @click="linkedin_link" /></a>
    </div>
  </div>
</template>

<script>
import { Github, Linkedin, MessageCircleMore } from 'lucide-vue-next';

export default {
  name: 'mini-menu',
  data() {
    return {
      github_link: "https://github.com/kellytan5/", 
      linkedin_link: "https://linkedin.com/in/kelly-tan-09/"
    }
  },
  components: {
    Github, 
    Linkedin, 
    MessageCircleMore
  },
  methods: {
    aboutme() {
      this.$router.push('/aboutme');
    }, 
    education() {
      this.$router.push('/education');
    }, 
    experiences() {
      this.$router.push('/experienceslist');
    }, 
    projects() {
      this.$router.push('/projects');
    },
    certificates() {
      this.$router.push('/certificates');
    },
    toggleContact() {
      this.$emit('toggle-contact');
    },
  }
}
</script>