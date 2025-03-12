<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Education</p>
      <p> {{ currentIndex + 1 }} / {{ education_list.length }}</p>
    </div>
    <div class="card-container">
      <Card_container :card="education_list[currentIndex]" />
      <button class="back-btn" v-if="currentIndex > 0" @click="prevCard">←</button>
      <button class="next-btn" v-if="currentIndex < education_list.length - 1" @click="nextCard">→</button>
    </div>
    <div class="back-home" @click="backHome">
      <span class="arrow">&#9664;</span><p>Back to About Me</p>
    </div>
  </div>
</template>

<script>
import Card_container from '@/components/card_container.vue';

export default {
  name: "education-view",
  components: { 
    Card_container,
  },
  data() {
    return {
      education_list: [
        {
          title: "Bachelor of Science in Computer Science (Honours)",
          description: "Specialization in Software Engineering",
          location: "Peterborough, ON",
          duration: "2021-2024",
          image: "/images/company-logo1.png",
          name:"Kelly Tan",
          position:"0744164",
          link:"Related Projects"
        },
        {
          title: "Software Engineering Technology",
          description: "",
          location: "Toronto, ON",
          duration: "2018-2020",
          image: "/images/company-logo2.png",
          name:"Kelly Tan",
          position:"300991647",
          link:"Related Projects"
        }
      ],
      currentIndex: 0
    };
  },  
  methods: {
    backHome() {
      this.$router.push('/aboutme')
    },
    nextCard() {
      if (this.currentIndex < this.education_list.length - 1) {
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