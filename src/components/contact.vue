<template>
  <div class="container center modal" @click.self="$emit('close')">
    <span class="close-button" @click="close_modal">✕</span> 
    <div class="text-paragraph">
      <p class="header-3">Let's get in touch</p>
      <p class="text">Looking for Kelly? Please leave your contact information and a message.</p>
      <p class="text">Thank You, Kelly will get back to you ASAP.</p>
    </div>
    <form v-on:submit.prevent="submitForm" class="retro-form">
      <div class="form-group">
        <label for="name">Your name:</label>
        <input id="name" v-model="contact_name" />
      </div>
      <div class="form-group">
        <label for="email">Your email:</label>
        <input id="email" v-model="contact_email" />
      </div>
      <div class="form-group">
        <label for="message">Leave a message:</label>
        <textarea id="message" v-model="contact_message"></textarea>
      </div>
      <div class="content" style="align-items: center;">
        <Button type="submit" action_msg="Send Message"></Button> <!-- use Button component -->
      </div>
    </form>
  </div> <!-- container closing div -->
</template>

<script>
import Button from "../components/button.vue";
// import api from '../api';

export default {
  name: "contact_me",
  data() {
    return {
      // contactlist 
      contactlist: [''],
      contact_name: '',
      contact_email: '',
      contact_message: ''
    };
  },
  emits: ["close"], // Define the emitted event
  components: {
    Button
  },
  methods: {
    close_modal() {
      this.$emit("close") // Emit the close event
      console.log("Close button clicked!");
    },
    // async postData() {
    //   try {
    //     const response = await api.post('/api/tasks/', {
    //       contact_name: this.contact_name,
    //       contact_email: this.contact_email,
    //       contact_message: this.contact_message
    //     });
    //     // append the returned data to the tasks array 
    //     this.contactlist.push(response.data);
    //     // reset the input field values 
    //     this.contact_name = '';
    //     this.contact_email = '';
    //     this.contact_message = '';
    //   } catch (error) {
    //     // Log the error
    //     console.log(error);
    //   }
    // }
  }
}
</script>