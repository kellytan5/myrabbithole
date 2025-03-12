<template>
  <div class="header">
    <div id="name" class="name" @click="about_me">Kelly Tan</div>
    <web_menu></web_menu>
    <div id="socials" class="socials">
      <div id="github"></div>
      <div id="linkedin"></div>
    </div> <!-- socials closing div -->
  </div> <!-- header closing div -->
</template>

<script>
import web_menu from "./header_menu.vue";
// import mobile_menu from "./mobile_menu.vue";

export default {
  name: "header_component",

  components: {
    web_menu
  },

  methods: {
    about_me() {
      this.$router.push("/aboutme")
    }
  }
}
</script>