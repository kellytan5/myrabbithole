<template>
  <div class="container">
    <div ref="exhibitRef" class="exhibit">
      <div v-for="(item, index) in displayedItems" :key="item.id" class="exhibit-item">
        <!-- If it's an image -->
        <img
          v-if="isImage(item.image)"
          :src="`/project_content/${extractFileName(item.image)}`"
          :alt="'Exhibit Image ' + index"
        />
        <!-- If it's a PDF -->
        <iframe
          v-else-if="isPDF(item.image)"
          :src="`/project_content/${extractFileName(item.image)}#toolbar=0`"
          :alt="'Exhibit Image ' + index"
          width="100%"
        ></iframe>
      </div>
    </div>
    <div v-if="exhibitItems.length > 2">
      <button @click="previous" :disabled="currentIndex === 0">←</button>
      <button @click="next" :disabled="currentIndex + 2 >= exhibitItems.length">→</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "project-exhibit", 
  props: {
    exhibitItems: {
      type: Array,
      required: true
    }
  },
  computed: {
    displayedItems() {
      // Slice the array to display only 4 items at a time
      return this.exhibitItems.slice(this.currentIndex, this.currentIndex + 2);
    },
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    isImage(file) {
      return /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(file);
    },
    isPDF(file) {
      return /\.pdf$/i.test(file);
    },
    next() {
      // Move to the next set of images
      if (this.currentIndex + 2 < this.exhibitItems.length) {
        this.currentIndex += 2;
      }
    },
    previous() {
      // Move to the previous set of images
      if (this.currentIndex - 2 >= 0) {
        this.currentIndex -= 2;
      }
    }, 
    extractFileName(url) {
      if (!url) return '';
      // This removes everything before the last slash
      return url.split('/').pop();
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