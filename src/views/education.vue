<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Education</p>
      <p> {{ currentIndex + 1 }} / {{ edu_list.length }}</p>
    </div>
    <LoadingSpinner v-if="isloading" />
    <div v-else-if="edu_list.length" class="card-container">
        <Card_container :card="edu_list[currentIndex]" />
        <div class="arrows">
          <button class="back-btn" v-if="currentIndex > 0" @click="prevCard">←</button>
          <button class="next-btn" v-if="currentIndex < edu_list.length - 1" @click="nextCard">→</button>
        </div>
    </div>
  </div>
</template>

<script>
import Card_container from '@/components/card_container.vue';
import LoadingSpinner from '@/components/loading_spinner.vue';
import api from '../api';

export default {
  name: "education-view",
  components: { 
    Card_container,
    LoadingSpinner
  },
  data() {
    return {
      edu_list: [],
      currentIndex: 0, 
      isloading: true
    };
  },  
  async mounted() {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      this.getData()
    } finally {
      this.isloading = false
    }
  },
  methods: {
    async getData() {
      try {
        // fetch data 
        const response = await api.get('/api/edu_list/');
        // set the data returned as educations
        this.edu_list = response.data.sort((a, b) => new Date(b.end_date) - new Date(a.end_date));
        console.log(this.edu_list);
      } catch (error) {
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
  @import '../styles/edu_index.scss';
</style>