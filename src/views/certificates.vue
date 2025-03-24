<template>
  <div class="container">
    <div class="title">
      <p class="header-2">Certificates</p>
    </div>
    <div class="content pdf-container">
      <iframe :src="pdfUrl" frameborder="0"></iframe>
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
  }
}
</script>