<template>
  <div class="mini-menu-container">
    <div class="menu-button" @click="aboutme">
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
  </div>
</template>

<script>
export default {
  name: 'mini-menu',
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
  }
}
</script>