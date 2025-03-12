<template>
  <div class="container">
    <div class="title">
      <p class="header-1">Projects</p>
    </div> <!-- title closing div -->
    <div class="content text" v-for="(item, index) in project_list" :key="index">
      <div id="project-title" class="title">
        <p class="header-2">{{ item.title }}</p>
        {{ index + 1 }} / {{ project_list.length }}
      </div> <!-- business name closing div -->
      <div id="project_desc" class="text-paragraph">
        <p>{{ item.description }}</p>
      </div> <!-- description closing div -->
      <div id="conclusion" style="font-weight: bold; padding-top: 1%;">
        Conclusion: {{ item.conclusion }}
      </div> <!-- conclusion closing div -->
      <div id="links" class="project-links">
        <div id="github" class="github-icon">
          <Github class="project-icons" />
          Github
        </div>
        <div id="position">
          <User class="project-icons" />
          {{ item.position }}
        </div>
        <div id="duration">
          <CalendarDays class="project-icons" />
          {{ item.duration }}
        </div>
        <div id="figma" v-if="item.figma != null">
          <Figma class="project-icons" />
          Figma
        </div>
      </div> <!-- links closing div -->
      <div class="exhibition-container">
        <p class="header-3">
          <Images class="project-icons" />
          Exhibition:
        </p>
        <Exhibition />
      </div> <!-- exhibition closing div -->
    </div> <!-- content closing div -->
    <div class="back-home" @click="backHome">
      <span class="arrow">&#9664;</span>Back to About Me
    </div>
  </div> <!-- container closing div -->
</template>

<script>
import { Github, User, CalendarDays, Images, Figma } from 'lucide-vue-next';
import Exhibition from '@/components/project_exhibit.vue';

export default {
  name: "projects-view", 
  components: {
    Github, 
    User, 
    CalendarDays, 
    Images, 
    Figma,
    Exhibition
  }, 
  data() {
    return {
      project_list: [
        {
          title: "Rabbithole-design",
          description: "The Rabbithole Design portfolio was meticulously crafted in Figma to visualize the layout, user experience, and design flow of the web application. The Figma prototype serves as a reference and guide throughout the development process, ensuring a cohesive design between the front-end in Vue.js and the back-end in Django. This project demonstrates my approach to combining thoughtful design with functional development, resulting in a seamless user interface that aligns with both aesthetic and technical goals.",
          conclusion: "Satisfaction of Owner",
          location: "Markham, ON",
          duration: "May2024-Current",
          position: "UI/UX Designer|Web Developer",
          github: "",
          figma: "",
        },
        {
          title: "Ministry of Natural Resources and Forestry Services",
          description: "Pinecone is a Python-based desktop application with an HTML interface, designed to process LiDAR scans using advanced algorithms. It enhances object identification and tree taper modeling accuracy by effectively reducing noise in the scans.",
          conclusion: "End of University Year",
          location: "Peterborough, ON",
          duration: "Sept2023-Apr2024",
          position: "Software Engineer",
          github: "",
          figma: null,
        },
        {
          title: "MyBee Technologies Inc.",
          description: "As part of my development process, I conducted thorough manual testing on over 200 lines of code, meticulously identifying and resolving critical bugs that were affecting the application's functionality. Through these efforts, I was able to improve performance by 30%, leading to a smoother and more responsive user experience. This hands-on approach highlights my attention to detail and commitment to delivering high-quality, user-centric applications.",
          conclusion: "Lack of Team Members",
          location: "Toronto, ON",
          duration: "Dec2020-May2021",
          position: "Quality Assurance Tester",
          github: "",
          figma: null,
        }
      ],
      currentIndex: 0
    };
  },
  methods: {
    backHome() {
      this.$router.push('/aboutme')
    },
  }
}
</script>