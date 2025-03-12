<template>
  <div class="container">
    <div class="title">
      <p class="header-1">Work Experiences</p>
    </div>
    <div class="content">
      <ul>
        <li class="exp-list" v-for="(item, index) in exp_items" :key="index">
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
export default {
  name: "experiences-list-view", 
  data() { 
    return {
      exp_items: [
        { id: 1, date: "May 2020 - Aug 2020", title: "Software Engineering Internship", company: "Cya Live", location: "Remote" },
        { id: 2, date: "Sept 2019 - Dec 2019", title: "Software Engineering Internship", company: "Cya Live", location: "Toronto, ON" },
        { id: 3, date: "Jan 2019 - Apr 2019", title: "IT Helpdesk Internship", company: "Centennial College", location: "Toronto, ON" }
      ]
    }
  },
  methods: {
    backHome() {
      this.$router.push('/aboutme')
    }, 
    viewDetails() {
      
    }
  }
}
</script>