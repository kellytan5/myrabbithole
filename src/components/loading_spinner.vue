<template>
  <div class="center">
    <Loader class="animate-spin-slow" />
    <p>LOADING...</p>
  </div>
</template>

<script>
import { Loader } from 'lucide-vue-next';

export default {
  name: "LoadingSpinner",
  components: {
    Loader
  }
}
</script>

<style scoped>
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin-slow {
  animation: spin-slow 2s linear infinite;
}
</style>