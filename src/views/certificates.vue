<template>
  <div class="container">
    <div class="title">
      <p class="header-1">Certificates</p>
    </div>
    <div class="content pdf-container">
      <iframe :src="pdfUrl" frameborder="0"></iframe>
    </div>
    <div class="back-home" @click="backHome">
      <span class="arrow">&#9664;</span>Back to About Me
    </div>
  </div>
</template>

<script>
export default {
  name: "certificates-view",
  data() {
    return {
      pdfUrl: new URL('@/assets/Certificate.pdf', import.meta.url).href
    }
  },
  methods: {
    backHome() {
      this.$router.push('/aboutme')
    }
  }
}
</script>