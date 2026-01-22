<template>
  <div class="main-container">
    <section id="profile">
      <ProfileSection />
    </section>
    <section id="education">
      <EducationSection :edu_list="education" />
    </section>
    <section id="experiences">
      <ExperienceSection :exp_list="experiences" />
    </section>
    <section id="projects">
      <ProjectSection :project_list="projects" />
    </section>
    <section id="certificates">
      <CertificateSection />
    </section>
  </div>
</template>

<script>
import ProfileSection from '../components/sections/profile.vue';
import EducationSection from '../components/sections/education.vue';
import ExperienceSection from '../components/sections/experiences.vue';
import ProjectSection from '../components/sections/projects.vue';
import CertificateSection from '../components/sections/certificates.vue';

import { mainStore } from '../stores/main';

export default {
  name: "main-view",
  components: {
    ProfileSection,
    EducationSection, 
    ExperienceSection,
    ProjectSection,
    CertificateSection
  }, 
  computed: {
    education() {
      return mainStore.education;
    },
    experiences() {
      return mainStore.experiences;
    },
    projects() {
      return mainStore.projects;
    },
    isReady() {
      return mainStore.isReady;
    }
  },
  mounted() {
    if (!this.isReady) {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  gap: 80px; /* space between sections */
  scroll-behavior: smooth;
}
</style>