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
import ProfileSection from '../components/sections/profile.vue';
import EducationSection from '../components/sections/education.vue';
import ExperienceSection from '../components/sections/experiences.vue';
import ProjectSection from '../components/sections/projects.vue';
import CertificateSection from '../components/sections/certificates.vue';

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