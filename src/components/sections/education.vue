<template>
  <div>
    <p class="header-2">Education</p>
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
import Card_container from '../card_container.vue';
import { CloudAlert, ArrowBigRight, ArrowBigLeft } from 'lucide-vue-next';

export default {
  name: "education-view",
  props: {
    edu_list: Array
  }, 
  components: { 
    Card_container,
    CloudAlert, 
    ArrowBigRight,
    ArrowBigLeft
  },
  data() {
    return {
      currentIndex: 0, 
      isError: false
    };
  },
  methods: {
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