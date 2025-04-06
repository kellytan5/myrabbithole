<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Projects</p>
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
          {{ formatDate(item.start_date) }} - {{ formatDate(item.end_date) }}
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
  </div> <!-- container closing div -->
</template>

<script>
import { Github, User, CalendarDays, Images, Figma } from 'lucide-vue-next';
import Exhibition from '@/components/project_exhibit.vue';
import api from '../api'

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
      project_list: []
    };
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        // fetch data 
        const response = await api.get('/api/project_list/');
        // set the data returned as projects
        this.project_list = response.data.sort((a, b) => b.end_date - a.end_date);
        console.log(this.project_list);
      } catch (error) {
        console.error('There was an error: ', error);
      }
    }, 
    formatDate(dateStr) {
      if (!dateStr) return "Present"; // Handle empty dates
      const [year, month] = dateStr.split("-"); // Extract YYYY and MM
      const date = new Date(year, month - 1); // JS months are 0-indexed
      return `${date.toLocaleString("en-US", { month: "short" })} ${year}`; // "Mar-2020"
    },
  }
}
</script>

<style>
  @import '../styles/project_index.scss';
</style>