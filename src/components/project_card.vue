<template>
  <!-- container -->
  <div class="card-container">
    <!-- gallery -->
    <div id="gallery" class="gallery-container" :class="{ 'has-resource': current }">
      <div class="showcase-media">
        <img :src="current.link" v-if="isImage(current)" />
        <video controls autoplay ref="videoPlayer" :key="currentIndex" v-else-if="isVideo(current)">
          <source :src="current.link" />
        </video>
        <iframe v-else-if="isPdf(current)" :src="getPdfSrc(current)" style="border:none" />
        <iframe v-else-if="isLink(current)" :src="current.link" style="border:none" allowfullscreen />
        <div v-else-if="isCode(current)" class="code-viewer">
          <pre><code>{{ codeContent }}</code></pre>
        </div>
      </div>
      <!-- Arrows -->
      <div class="nav-left-gallery">
        <ChevronLeft class="arrows" @click="prev" v-show="currentIndex > 0" />
      </div>
      <div class="nav-right-gallery">
        <ChevronRight class="arrows" @click="next" v-show="currentIndex < item.exhibition.length - 1" />
      </div>
      <div class="showcase-caption" v-if="current.caption">
        <strong>{{ current.caption_title }}</strong>
        <p class="caption">{{ current.caption }}</p>
      </div>
    </div>
    <!-- content -->
    <div id="content" class="info-container">
      <!-- header -->
      <div id="header" class="header-container">
        <div class="header-tags">
          <div id="card-tag" class="card-tags">
            <p v-for="(tag, index) in item.card_tags" :key="index" class="caption">{{ tag }}</p>
          </div>
          <div id="role" class="role">
            <User />
            <p>{{ item.role }}</p>
          </div>
        </div>
        <!-- title -->
        <div id="project-title" class="title">
          <p class="header-3 title-position">{{ item.title }}</p>
          <p class="index">0{{ item.id }}</p>
        </div>
        <!-- tags -->
        <div id="tags" class="tags">
          <div v-for="(tag, index) in item.tags" :key="index" class="ind_tag">{{ tag }}</div>
        </div>

        <!-- case study button -->
        <div class="case-study-btn">
          <button class="button" @click="toggleDetails()">
            <p>Read Case Study</p>
            <Minus style="height: 0.8rem;" v-if="isOpenCaseStudy" />
            <Plus style="height: 0.8rem;" v-if="!isOpenCaseStudy" />
          </button>
        </div>
      </div>
      <!-- case study -->
      <div class="case-study-container" v-if="isOpenCaseStudy">
        <div id="overview" class="case-study-section section-border">
          <p class="sub-title">Overview:</p>
          <p class="text">{{ item.overview }}</p>
        </div>
        <div id="problem" class="case-study-section two-col-section">
          <div>
            <p class="sub-title">Problem:</p>
            <p class="text">{{ item.problem }}</p>
          </div>
          <div>
            <p class="sub-title">Approach:</p>
            <p class="text">{{ item.approach }}</p>
          </div>
        </div>
        <div id="outcome" class="case-study-section two-col-section">
          <div>
            <p class="sub-title">Outcome:</p>
            <p class="text">{{ item.outcome }}</p>
          </div>
          <div>
            <p class="sub-title">What I'd Improve:</p>
            <p class="text">{{ item.improvements }}</p>
          </div>
        </div>
        <div id="scope" class="case-study-section">
          <p class="sub-title">Scope:</p>
          <p class="text">{{ item.scope }}</p>
        </div>
      </div>
      <!-- links -->
      <div class="card-links" v-if="item.links && Object.keys(item.links).length">
        <a v-for="(url, label) in item.links" :key="label" :href="url" target="_blank" class="text">
          View in {{ label }}
          <ArrowRight style="height: 0.8rem;" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { User, Minus, Plus, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-vue-next';

export default {
  name: "project-card",
  props: {
    item: Object
  },
  components: {
    User,
    Minus,
    Plus,
    ChevronLeft,
    ChevronRight,
    ArrowRight
  },
  data() {
    return {
      isOpenCaseStudy: false,
      currentIndex: 0,
      codeContent: ''
    }
  },
  computed: {
    current() {
      return this.item.exhibition[this.currentIndex]
    }
  },
  watch: {
    current: {
      immediate: true,
      handler(val) {
        this.$nextTick(() => {
          if (this.$refs.videoPlayer) {
            this.$refs.videoPlayer.playbackRate = 3.0
          }
        })
        if (this.isCode(val)) {
          fetch(val.link)
            .then(r => r.text())
            .then(text => this.codeContent = text)
        } else {
          this.codeContent = ''
        }
      }
    }
  },
  methods: {
    toggleDetails() {
      this.isOpenCaseStudy = !this.isOpenCaseStudy;
    },
    isImage(resource) {
      return /\.(png|jpg|jpeg|gif|webp)$/i.test(resource.link)
    },
    isVideo(resource) {
      return /\.(mp4|webm|ogg)$/i.test(resource.link)
    },
    isLink(resource) {
      return resource.link.startsWith('https') && !this.isImage(resource) && !this.isVideo(resource)
    },
    isPdf(resource) {
      return /\.pdf$/i.test(resource.link)
    },
    getPdfSrc(resource) {
      return `${resource.link}#toolbar=0`
    },
    isCode(resource) {
      return /\.(js|ts|py|html|css|scss|json|jsx|vue|java|cpp|c|txt)$/i.test(resource.link)
    },
    next() {
      if (this.currentIndex < this.item.exhibition.length - 1)
        this.currentIndex++
    },
    prev() {
      if (this.currentIndex > 0)
        this.currentIndex--
    }
  }
}
</script>

<style scoped>
@import '../styles/project_index/card.scss';
</style>