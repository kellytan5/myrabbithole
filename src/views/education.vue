<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Education</p>
      <p> {{ currentIndex + 1 }} / {{ edu_list.length }}</p>
    </div>
    <div v-if="edu_list.length" class="card-container">
      <Card_container :card="edu_list[currentIndex]" />
      <button class="back-btn" v-if="currentIndex > 0" @click="prevCard">←</button>
      <button class="next-btn" v-if="currentIndex < edu_list.length - 1" @click="nextCard">→</button>
    </div>
  </div>
</template>

<script>
import Card_container from '@/components/card_container.vue';
import api from '../api';

export default {
  name: "education-view",
  components: { 
    Card_container,
  },
  data() {
    return {
      edu_list: [],
      currentIndex: 0
    };
  },  
  mounted() {
    this.getData();
  },
  methods: {
    async getData() {
      try {
        // fetch data 
        const response = await api.get('/api/edu_list/');
        // set the data returned as educations
        this.edu_list = response.data.sort((a, b) => b.id - a.id);
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