import { createWebHistory, createRouter } from 'vue-router'

import WelcomeView from '../views/welcome.vue'
import ProfileView from '../views/profile.vue'
import EducationView from '../views/education.vue'
import ExperienceView from '../views/experiences.vue'
import CertificatesView from '../views/certificates.vue'
import ProjectsView from '../views/projects.vue'

const routes = [
  { path: '/', component: WelcomeView },
  { path: '/aboutme', component: ProfileView },
  { path: '/education', component: EducationView },
  { path: '/experiences', component: ExperienceView },
  { path: '/certificates', component: CertificatesView },
  { path: '/projects', component: ProjectsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router