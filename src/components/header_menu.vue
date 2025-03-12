<template>
  <div id="menu" class="web_menu">
    <div id="aboutme" class="item" @click="aboutme">About Me</div>
    <div id="education" class="item" @click="education">Education</div>
    <div id="experiences" class="item" @click="experiences">Experiences</div>
    <div id="certificates" class="item" @click="certificates">Certificates</div>
    <div id="projects" class="item" @click="projects">Projects</div>
    <div id="skills" class="item">Skills</div>
    <div id="contactme" class="item" @click="contact_me = true">Contact Me</div>
    <Contact v-if="contact_me" @close="contact_me = false"></Contact>
  </div> <!-- menu closing div -->
</template>

<script>
import Contact from './contact.vue';

export default {
  name: "web-menu",

  components: {
    Contact
  },

  data() {
    return {
      contact_me: false, // Controls contact_me modal visibility
    };
  },

  methods: {
    aboutme() {
      this.$router.push('/aboutme');
    }, 
    education() {
      this.$router.push('/education');
    }, 
    experiences() {
      this.$router.push('/experiences');
    }, 
    certificates() {
      this.$router.push('/certificates');
    },
    projects() {
      this.$router.push('/projects');
    }
  }
}
</script>