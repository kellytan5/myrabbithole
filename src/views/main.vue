<template>
  <div class="main-container">
    <section id="profile">
      <ProfileSection />
    </section>
    <section id="education">
      <EducationSection />
    </section>
    <section id="experiences">
      <ExperienceSection />
    </section>
    <section id="projects">
      <ProjectSection />
    </section>
    <section id="certificates">
      <CertificateSection />
    </section>
  </div>
</template>

<script>
import ProfileSection from './profile.vue';
import EducationSection from './education.vue';
import ExperienceSection from './experiences.vue';
import ProjectSection from './projects.vue';
import CertificateSection from './certificates.vue';

export default {
  name: "main-view",
  components: {
    ProfileSection,
    EducationSection, 
    ExperienceSection,
    ProjectSection,
    CertificateSection
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