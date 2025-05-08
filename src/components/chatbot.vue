<template>
  <div class="chatbot">
    <div class="chatbot-header">
      Chat with me
    </div>

    <div ref="chatContainer" class="chatbot-messages">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['chatbot-message', msg.from]"
      >
        <div class="chatbot-bubble">{{ msg.text }}</div>
      </div>
    </div>

    <form v-on:submit.prevent="sendMessage" class="chatbot-form">
      <input
        v-model="userInput"
        type="text"
        placeholder="Type a message"
        class="chatbot-input"
      />
      <button
        type="submit"
        class="chatbot-send"
        :disabled="loading"
      >
        {{ loading ? '...' : 'Send' }}
      </button>
    </form>
  </div>
</template>

<script>
import api from '../api';

export default {
  name: 'ChatBot',
  data() {
    return {
      messages: [
        { from: 'bot', text: 'Hi! Ask me anything about Kelly Tan.' }
      ],
      userInput: '',
      loading: false
    }
  },
  methods: {
    async sendMessage() {
      const message = this.userInput.trim()
      if (!message) return

      this.messages.push({ from: 'user', text: message })
      this.userInput = ''
      this.loading = true
      this.$nextTick(this.scrollToBottom) // Scroll after user message

      try {
        const response = await api.post('/api/chat/', { message })
        this.messages.push({ from: 'bot', text: response.data.response })
        this.$nextTick(this.scrollToBottom) // Scroll after bot message
      } catch (error) {
        console.error(error)
        this.messages.push({
          from: 'bot',
          text: 'Sorry, something went wrong.'
        })
        this.$nextTick(this.scrollToBottom)
      } finally {
        this.loading = false
      }
    }, 
    scrollToBottom() {
      const container = this.$refs.chatContainer
      if (container) {
        container.scrollTop = container.scrollHeight
      }
    }
  }
}
</script>

<style>
  @import '../styles/bot_index.scss'; 
</style>