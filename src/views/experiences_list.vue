<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Work Experiences</p>
    </div>
    <div class="content">
      <ul>
        <li class="exp-list" v-for="(item, index) in exp_list" :key="index">
          <div class="exp-list-card">
            <p style="text-align: left;">{{ item.date }}</p>
            <div style="text-align: left;">
              <p>{{ item.title }}</p>
              <p>{{ item.company }}</p>
            </div>
            <p style="text-align: right;">{{ item.location }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div class="back-home" @click="backHome">
      <span class="arrow">&#9664;</span><p>Back to About Me</p>
    </div>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: "experiences-list-view", 
  data() { 
    return {
      exp_list: []
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    backHome() {
      this.$router.push('/aboutme')
    }, 
    viewDetails() {
      
    }, 
    async getData() {
      try {
        // fetch data 
        const response = await api.get('/api/exp_list/');
        // set the data returned as experiences
        this.exp_list = response.data;
        console.log(this.exp_list);
      } catch (error) {
        console.error('There was an error: ', error);
      }
    }
  }
}
</script>