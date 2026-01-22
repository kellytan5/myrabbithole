<template>
  <div>
    <!-- title -->
    <p class="header-2">Projects</p>
    <div v-if="isError"> <!-- Load Error -->
      <CloudAlert />
      <p>Looks like something went wrong.</p>
    </div>
    <!-- content -->
    <div v-else class="content text text-paragraph" v-for="(item, index) in project_list" :key="index">
      <div id="project-title" class="title">
        <p class="header-3">{{ item.title }}</p>
        {{ index + 1 }} / {{ project_list.length }}
      </div> <!-- project name closing div -->
      <div style="display: flex; flex-direction:column; gap: 15px;">
        <div id="project-overview">
          <p style="font-weight: bold;">Overview:</p><p>{{ item.overview }}</p>
        </div> <!-- overview closing div -->
        <div id="project-problem">
          <p style="font-weight: bold;">Problem:</p>{{ item.problem }}
        </div> <!-- problem closing div -->
        <div id="project-approach">
          <p style="font-weight: bold;">Approach:</p>{{ item.approach }}
        </div> <!-- approach closing div -->
        <div id="project-outcome">
          <p style="font-weight: bold;">Outcome:</p>{{ item.outcome }}
        </div> <!-- outcome closing div -->
        <div id="project-improve">
          <p style="font-weight: bold;">What I'd Improve:</p>{{ item.improvements }}
        </div> <!-- improve closing div -->
        <div id="project-scope">
          <p style="font-weight: bold;">My Scope:</p>{{ item.scope }}
        </div> <!-- improve closing div -->
        <div id="project-role">
          <User class="project-icons" />
          {{ item.role }}
        </div> <!-- role closing div-->
      </div>
      <div id="links" class="project-links">
        <div id="github" class="github-icon" v-if="item.github">
          <a :href="item.github" target="_blank" rel="noopener noreferrer"><Github class="project-icons"/> Github</a>
        </div>
        <div id="figma" v-if="item.figma">
          <a :href="item.figma" target="_blank" rel="noopener noreferrer"><Figma class="project-icons"/> Figma</a>
        </div>
      </div> <!-- links closing div -->
      <!-- <div class="exhibition-container" v-if="item.images.length">
        <p class="header-4">
          <Images class="project-icons" />
          Exhibition:
        </p>
        <Exhibition :exhibitItems="item.images" />
      </div> exhibition closing div -->
    </div> <!-- content closing div -->
  </div> <!-- container closing div -->
</template>

<script>
import { Github, User, Figma, CloudAlert } from 'lucide-vue-next';
// import Exhibition from '@/components/project_exhibit.vue';

export default {
  name: "projects-view", 
  props: {
    project_list: Array
  }, 
  components: {
    Github, 
    User, 
    // Images, 
    Figma,
    // Exhibition, 
    CloudAlert
  }, 
  data() {
    return {
      // exhibitIndex: 0,
      isError: false,
    };
  }
}
</script>

<style>
@import '../../styles/project_index.scss';
</style>