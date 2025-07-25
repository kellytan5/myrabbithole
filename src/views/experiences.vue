<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Work Experiences</p>
    </div>
    <LoadingSpinner v-if="isloading" /> <!-- Loading Spinner -->
    <div v-if="isError"> <!-- Load Error -->
      <CloudAlert />
      <p>Looks like something went wrong.</p>
    </div>
    <div v-else class="content text">
      <ul>
        <li class="exp-list" v-for="(item, index) in exp_list" :key="index">
          <div class="exp-list-card" @click="toggleDetails(index)" :ref="`expItem-${index}`" v-tippy="{
              content: 'Expand for More Information',
              followCursor: true,
              placement: 'top',
            }">
            <p style="text-align: left;">{{ formatDate(item.start_date) }}-{{ formatDate(item.end_date) }}</p>
            <div style="text-align: left;">
              <p style="font-weight: bold">{{ item.title }}</p>
              <p>{{ item.company }}</p>
            </div>
            <p style="text-align: right;">{{ item.location }}</p>
          </div>
          <div v-if="item.showDetails">
            <div class="showDetails">
            <div></div> <!-- Empty Column -->
              <ul class="detail-list">
                <li v-for="(detail, detailIndex) in item.description" :key="detailIndex">
                  <p style="text-align: left;">{{ detail }}</p>
                </li>
              </ul>
            </div>
            <a v-if="item.projects.length" style="text-align: right">Related Projects</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import api from '../api';
import LoadingSpinner from '@/components/loading_spinner.vue';
import { CloudAlert } from 'lucide-vue-next';

export default {
  name: "experiences-list-view", 
  components: {
    LoadingSpinner,
    CloudAlert
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
        const response = await api.get('/api/exp_list/');
        // set the data returned as experiences
        this.exp_list = response.data.map(item => ({
          ...item,
          showDetails: false // initialize showDetails as false
        }));
        console.log(this.exp_list);
      } catch (error) {
        this.isError = true;
        console.error('There was an error: ', error);
      }
    }, 
    formatDate(dateStr) {
      if (!dateStr) return "Present"; // Handle empty dates
      const [year, month] = dateStr.split("-"); // Extract YYYY and MM
      const date = new Date(year, month - 1); // JS months are 0-indexed
      return `${date.toLocaleString("en-US", { month: "short" })} ${year}`; // "March-2020"
    },
    toggleDetails(index) {
      this.exp_list[index].showDetails = !this.exp_list[index].showDetails;
      if (this.exp_list[index].showDetails) {
        this.$nextTick(() => {
          const el = this.$refs[`expItem-${index}`]?.[0] || this.$refs[`expItem-${index}`];
          if (el) {
            el.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
          }
        });
      }
    }, 
  }
}
</script>

<style>
  @import '../styles/exp_index.scss';
</style>