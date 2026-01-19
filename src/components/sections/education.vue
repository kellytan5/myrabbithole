<template>
  <div>
    <p class="header-2">Education</p>
    <LoadingSpinner v-if="isloading" />
    <div v-if="isError">
      <CloudAlert />
      <p>Looks like something went wrong.</p>
    </div>
    <div v-else-if="edu_list.length" class="card-container">
      <div class="nav-left">
        <ArrowBigLeft class="back-btn" v-if="currentIndex > 0" @click="prevCard" />
      </div>
      <div class="card-group">
        <Card_container :card="edu_list[currentIndex]" :total="edu_list.length" />
      </div>
      <div class="nav-right">
        <ArrowBigRight class="next-btn" v-if="currentIndex < edu_list.length - 1" @click="nextCard" />
      </div>
    </div>
  </div>
</template>

<script>
import Card_container from '@/components/card_container.vue';
import LoadingSpinner from '@/components/loading_spinner.vue';
import { CloudAlert, ArrowBigRight, ArrowBigLeft } from 'lucide-vue-next';
import api from '../../api';

export default {
  name: "education-view",
  components: { 
    Card_container,
    LoadingSpinner, 
    CloudAlert, 
    ArrowBigRight,
    ArrowBigLeft
  },
  data() {
    return {
      edu_list: [],
      currentIndex: 0, 
      isloading: true, 
      isError: false
    };
  },  
  async mounted() {
    try {
      await this.getData();
    } finally {
      this.isloading = false;
    }
  },
  methods: {
    async getData() {
      try {
        // fetch data 
        const response = await api.get('/api/education/');
        // set the data returned as educations
        this.edu_list = response.data.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
        console.log(this.edu_list);
      } catch (error) {
        this.isError = true;
        console.error('There was an error: ', error);
      }
    },
    nextCard() {
      if (this.currentIndex < this.edu_list.length - 1) {
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

<style>
  @import '../../styles/edu_index.scss';
</style>