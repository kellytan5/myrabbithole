<template>
  <div>
    <p class="header-2">Work Experiences</p>
    <LoadingSpinner v-if="isloading" /> <!-- Loading Spinner -->
    <div v-if="isError"> <!-- Load Error -->
      <CloudAlert />
      <p>Looks like something went wrong.</p>
    </div>
    <div v-else class="content text">
      <ul>
        <li class="exp-list" v-for="(item, index) in exp_list" :key="index">
          <div class="exp-list-card" @click="toggleDetails(index)" :ref="`expItem-${index}`">
            <div style="text-align: left;">
              <p style="font-weight: bold">{{ item.title }}</p>
              <p>{{ item.company }}</p>
            </div>
            <p style="text-align: right;">{{ item.environment }}</p>
            <div v-if="!item.showDetails">
              <ChevronsDown strokeWidth={3} />
            </div>
            <div v-if="item.showDetails">
              <ChevronsUp strokeWidth={3} />
            </div>
          </div> <!-- title closing div -->
          <div v-if="item.showDetails">
            <div class="showDetails text-paragraph">
              <div></div> <!-- Empty Column -->
              <div class="overview">{{ item.overview }}</div>
            </div>
          </div> <!-- ShowDetails closing div-->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../../api';
import LoadingSpinner from '@/components/loading_spinner.vue';
import { CloudAlert, ChevronsDown, ChevronsUp } from 'lucide-vue-next';

export default {
  name: "experiences-list-view", 
  components: {
    LoadingSpinner,
    CloudAlert, 
    ChevronsDown,
    ChevronsUp
  },
  data() { 
    return {
      exp_list: [], 
      isloading: true,
      isError: false,
    }
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
        const response = await api.get('/api/experiences/');
        // set the data returned as experiences
        this.exp_list = response.data;
        console.log(this.exp_list);
      } catch (error) {
        this.isError = true;
        console.error('There was an error: ', error);
      }
    }, 
    toggleDetails(index) {
      this.exp_list[index].showDetails = !this.exp_list[index].showDetails;
    }, 
  }
}
</script>

<style>
  @import '../../styles/exp_index.scss';
</style>