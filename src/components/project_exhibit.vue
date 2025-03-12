<template>
  <div class="container">
    <button v-if="showArrows" @click="scrollLeft" class="arrow back-btn">&lt;</button>
    <div ref="exhibitRef" class="exhibit">
      <div v-for="(item, index) in exhibitItems" :key="index" class="exhibit-item"></div>
    </div>
    <button v-if="showArrows" @click="scrollRight" class="arrow next-btn">&gt;</button>
  </div>
</template>

<script>
export default {
  name: "project-exhibit", 
  data() {
    return {
      exhibitItems: [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
      ]
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding: 0;
}

.exhibit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2%;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for IE/Edge */
}

.exhibit::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari */
}

.exhibit-item {
  width: 20%;
  height: 100%;
  background-color: #d3d3d3;
  border: 1px solid #999;
}
</style>