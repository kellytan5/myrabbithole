<template>
  <div class="container content profile-container">
    <div id="aboutme" class="text-paragraph">
      <p class="text">Hey, My name is </p>
      <p class="header-1 name">Kelly Tan</p>
      <p class="header-3">Welcome to my Portfolio</p>
      <div class="text profile-text-container">
        <p>I am a passionate Computer Science graduate based in Markham, Ontario, with a keen interest in software engineering, 
          artificial intelligence, and UX/UI design. I thrive on solving complex problems and creating intuitive, visually appealing 
          digital experiences.</p>
        <p>Over the years, I’ve worked on various projects and completed multiple internships, gaining hands-on experience in frontend 
          and backend development, user-centered design, and AI-driven applications. I love collaborating with teams—both in-person and 
          remotely—across the Greater Toronto Area to bring innovative ideas to life.</p>
        <p>I’m always eager to learn and explore new technologies, and I’m excited about opportunities that allow me to grow as a 
          developer and designer.</p>
      </div>
    </div> <!-- aboutMe closing div -->
    <div class="profile-socials">
      <a :href="github_link" target="_blank" rel="noopener noreferrer"><Github class="profile-icons"/></a>
      <a :href="linkedin_link" target="_blank" rel="noopener noreferrer"><Linkedin class="profile-icons"/></a>
    </div>
  </div> <!-- profile closing div -->
</template>

<script>
import { Github, Linkedin } from 'lucide-vue-next';

export default {
  name: "profile-view",

  data() {
    return {
      github_link: "https://github.com/kellytan5/", 
      linkedin_link: "https://linkedin.com/in/kelly-tan-09/"
    };
  },

  components: {
    Github, 
    Linkedin
  },

  methods: {

  }
}
</script>