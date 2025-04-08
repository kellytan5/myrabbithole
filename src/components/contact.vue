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
        <input id="name" v-model="form.name" />
      </div>
      <div class="form-group">
        <label for="email">Your email:</label>
        <input id="email" v-model="form.email" />
      </div>
      <div class="form-group">
        <label for="message">Leave a message:</label>
        <textarea id="message" v-model="form.message" rows="5"></textarea>
      </div>
      <div class="content" style="align-items: center;">
        <Button class="btn" type="submit" action_msg="Send Message"></Button> <!-- use Button component -->
      </div>

      <div v-if="responseMsg">
        <p>{{ responseMsg }}</p>
      </div>
    </form>
  </div> <!-- container closing div -->
</template>

<script>
import Button from "../components/button.vue";
import api from '../api';

export default {
  name: "contact_me",
  data() {
    return {
      // contactlist 
      form: {
        name: '',
        email: '',
        message: ''
      },
      responseMsg: ''
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
    async submitForm() {
      try {
        // Make an API request to the Django backend
        const response = await api.post(
          "/api/new_contact/",
          this.form
        );

        // Show success message
        this.responseMessage = response.data.name + "has left a message.";
        // Clear the form
        this.form.name = "";
        this.form.email = "";
        this.form.message = "";
      } catch (error) {
        // Handle any errors
        if (error.response) {
          this.responseMessage = "There was an error submitting the form.";
        } else {
          this.responseMessage = "Network error. Please try again.";
        }
      }
    }
  }
}
</script>