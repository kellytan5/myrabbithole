<template>
  <div>
    <p class="header-2">Education</p>
    <div v-if="isLoading">
      <p>Loading...</p>
    </div>
    <div v-else-if="isError">
      <CloudAlert />
      <p>Loading</p>
    </div>
    <div v-else-if="edu_list.length" class="content-container">
      <div class="nav-left">
        <ArrowBigLeft class="back-btn" v-if="currentIndex > 0" @click="prevCard" />
      </div>
      <div class="card-group">
        <Card :card="edu_list[currentIndex]" :total="edu_list.length" />
      </div>
      <div class="nav-right">
        <ArrowBigRight class="next-btn" v-if="currentIndex < edu_list.length - 1" @click="nextCard" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../edu_card.vue';
import { CloudAlert, ArrowBigRight, ArrowBigLeft } from 'lucide-vue-next';

export default {
  name: "education-view",
  props: {
    edu_list: Array
  },
  components: {
    Card,
    CloudAlert,
    ArrowBigRight,
    ArrowBigLeft
  },
  data() {
    return {
      currentIndex: 0,
      isLoading: true,
      isError: false
    };
  },
  watch: {
    edu_list(val) {
      if (val) this.isLoading = false;
    }
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

<style scoped>
@import '../../styles/edu_index/index.scss';
</style>