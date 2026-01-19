<template>
  <div>
    <div class="title">
      <p class="header-2">Certificates</p>
    </div>
    <div class="pdf-container">
      <iframe :src="`/Certificate.pdf#toolbar=0`" frameborder="0"></iframe>
      <a href="https://coursera.org/share/c88ed0d55b3ec87311e7b521b430f96d" class="text" target="_blank" rel="noopener noreferrer">Link to Certificate</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "certificates-view"
}
</script>