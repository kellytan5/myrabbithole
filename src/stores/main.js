import { reactive } from 'vue';

export const mainStore = reactive({
  isReady: false,
  education: [],
  experiences: [],
  projects: [],
  
  setData({ education, experiences, projects }) {
    this.education = education;
    this.experiences = experiences;
    this.projects = projects;
    this.isReady = true;
  }
})