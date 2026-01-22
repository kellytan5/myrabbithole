<template>
  <div>
    <p class="header-2">Work Experiences</p>
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
import { CloudAlert, ChevronsDown, ChevronsUp } from 'lucide-vue-next';

export default {
  name: "experiences-list-view", 
  props: {
    exp_list: Array
  },
  components: {
    CloudAlert, 
    ChevronsDown,
    ChevronsUp
  },
  data() { 
    return {
      isError: false,
    }
  },
  methods: {
    toggleDetails(index) {
      this.exp_list[index].showDetails = !this.exp_list[index].showDetails;
    }, 
  }
}
</script>

<style>
  @import '../../styles/exp_index.scss';
</style>