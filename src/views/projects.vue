<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Projects</p>
    </div> <!-- title closing div -->
    <LoadingSpinner v-if="isloading" /> <!-- LoadingSpinner -->
    <div v-if="isError"> <!-- Load Error -->
      <CloudAlert />
      <p>Looks like something went wrong.</p>
    </div>
    <div v-else class="content text" v-for="(item, index) in project_list" :key="index">
      <div id="project-title" class="title">
        <p class="header-3">{{ item.title }}</p>
        {{ index + 1 }} / {{ project_list.length }}
      </div> <!-- business name closing div -->
      <div id="project_desc" class="text-paragraph">
        <p>{{ item.description }}</p>
      </div> <!-- description closing div -->
      <div id="conclusion" style="font-weight: bold; padding-top: 1%;">
        Conclusion: {{ item.conclusion }}
      </div> <!-- conclusion closing div -->
      <div id="links" class="project-links">
        <div id="github" class="github-icon" v-if="item.github">
          <a :href="item.github" target="_blank" rel="noopener noreferrer"><Github class="project-icons"/> Github</a>
        </div>
        <div id="figma" v-if="item.figma">
          <a :href="item.figma" target="_blank" rel="noopener noreferrer"><Figma class="project-icons"/> Figma</a>
        </div>
        <div id="position" v-if="item.position">
          <User class="project-icons" />
          {{ item.position }}
        </div>
        <div id="duration" v-if="item.start_date">
          <CalendarDays class="project-icons" />
          {{ formatDate(item.start_date) }} - {{ formatDate(item.end_date) }}
        </div>
      </div> <!-- links closing div -->
      <div class="exhibition-container" v-if="item.images.length">
        <p class="header-4">
          <Images class="project-icons" />
          Exhibition:
        </p>
        <Exhibition :exhibitItems="item.images" />
      </div> <!-- exhibition closing div -->
    </div> <!-- content closing div -->
  </div> <!-- container closing div -->
</template>

<script>
import { Github, User, CalendarDays, Images, Figma, CloudAlert } from 'lucide-vue-next';
import Exhibition from '@/components/project_exhibit.vue';
import api from '../api';
import LoadingSpinner from '@/components/loading_spinner.vue';

export default {
  name: "projects-view", 
  components: {
    Github, 
    User, 
    CalendarDays, 
    Images, 
    Figma,
    Exhibition, 
    LoadingSpinner,
    CloudAlert
  }, 
  data() {
    return {
      project_list: [], 
      exhibitIndex: 0,
      isloading: true,
      isError: false,
    };
  },
  async mounted() {
    try {
      await this.getData()
    } finally {
      this.isloading = false
    }
  },
  methods: {
    async getData() {
      try {
        // fetch data 
        const response = await api.get('/api/project_list/');
        // set the data returned as projects
        this.project_list = response.data.sort((a, b) => {
          if (a.end_date === '') return -1; // a is "Present", comes first
          if (b.end_date === '') return 1;  // b is "Present", comes first
          return new Date(b.end_date) - new Date(a.end_date); // sort newest to oldest);
        })
        console.log(this.project_list);
      } catch (error) {
        this.isError = true;
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