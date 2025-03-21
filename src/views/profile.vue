<template>
  <div class="container content profile-container">
    <div id="aboutme" class="text-paragraph">
      <p class="text">Hey, My name is </p>
      <p class="header-1">Kelly Tan</p>
      <p class="header-2">Welcome to my Portfolio</p>
      <div class="text profile-text-container">
        <p>I am a recent Computer Science graduate located in Markham, Ontario looking to build my career in 
          Software Engineering, Artificial Intelligence and UX/UI design.</p>
        <p>I've worked on various projects and completed multiple internships—both in-person and remote—across the Greater Toronto Area. </p>
      </div>
    </div> <!-- aboutMe closing div -->
    <div class="content contact-btn" style="align-items: center;">
      <Button class="btn btn-text" action_msg="Get In Touch" @click="contact_me = true"></Button>
      <Contact v-if="contact_me" @close="contact_me = false" />
    </div>
    <div class="profile-socials">
      <a :href="github_link" target="_blank" rel="noopener noreferrer"><Github class="profile-icons"/></a>
      <a :href="linkedin_link" target="_blank" rel="noopener noreferrer"><Linkedin class="profile-icons" @click="linkedin_link" /></a>
    </div>
  </div> <!-- profile closing div -->
</template>

<script>
import Button from '@/components/button.vue';
import Contact from '@/components/contact.vue';
import { Github, Linkedin } from 'lucide-vue-next';

export default {
  name: "profile-view",

  data() {
    return {
      contact_me: false, // Controls contact_me modal visibility, 
      github_link: "", 
      linkedin_link: ""
    };
  },

  components: {
    Button,
    Contact, 
    Github, 
    Linkedin
  },

  methods: {

  }
}
</script>