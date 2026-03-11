<template>
  <div>
    <!-- title -->
    <p class="header-2">Projects</p>
    <div v-if="isError"> <!-- Load Error -->
      <CloudAlert />
      <p>Looks like something went wrong.</p>
    </div>
    <!-- content -->
    <div v-else-if="project_list.length" class="content-container">
      <div class="nav-left">
        <ChevronsLeft class="arrows" v-if="currentIndex > 0" @click="prevCard" />
      </div>
      <div class="card-group">
        <Project_Card :item="project_list[currentIndex]"/>
      </div>
      <div class="nav-right">
        <ChevronsRight class="arrows" v-if="currentIndex < project_list.length - 1" @click="nextCard" />
      </div>
    </div>
  </div> <!-- container closing div -->
</template>

<script>
import { ChevronsRight, ChevronsLeft, CloudAlert } from 'lucide-vue-next';
import Project_Card from '@/components/project_card.vue';

export default {
  name: "projects-view", 
  props: {
    project_list: Array
  }, 
  components: {
    Project_Card,
    ChevronsRight, 
    ChevronsLeft,
    CloudAlert
  }, 
  data() {
    return {
      currentIndex: 0, 
      isError: false,
    };
  }, 
  methods: {
    nextCard() {
      if (this.currentIndex < this.project_list.length - 1) {
        this.currentIndex++;
      }
    },
    prevCard() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      }
    }
  }
}
</script>

<style scoped>
  @import '../../styles/project_index/index.scss';
</style>