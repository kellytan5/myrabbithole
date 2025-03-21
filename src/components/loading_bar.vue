<template>
  <div class="loading-container">
    <div class="loading-bar">
      <div class="progress" :style="{ width: progress + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading-bar",
  data() {
    return {
      progress: 0
    };
  },
  mounted() {
    this.startLoading();
  }, 
  methods: {
    startLoading() {
      const interval = setInterval(() => {
        if (this.progress < 100) {
          this.progress += 10;
        } else {
          clearInterval(interval);
        }
      }, 500);
    }
  }
}
</script>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.loading-bar {
  flex: 1;
  background: #FDFDF3; /* Custom color */
  border: 1vh solid #FDFDF3;
  width: 80%;
  height: 50%;
  overflow: hidden;
}

.progress {
  height: 100%;
  background-color: #A5A58D;
  transition: width 0.5s ease-in-out;
}
</style>