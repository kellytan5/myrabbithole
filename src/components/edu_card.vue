<template>
  <!-- container -->
  <div class="card-container">
    <div class="details-container">
      <div class="info-text">
        <p class="header-3">{{ card.title }}</p>
        <p class="description">{{ card.description }}</p>
      </div>
      <div class="center-container">
        <p class="info-duration">{{ card.location }} [{{ formatDate(card.start_date) }}-{{ formatDate(card.end_date) }}]</p>
        <div id="img" class="img-box center-container">
          <img :src="card.image" alt="image" />
        </div>
      </div>
    </div> <!-- card-content closing div -->
    <!-- footer -->
    <div id="footer" class="info-footer">
      <p style="text-align: left; padding-left: 1.5rem;">{{ card.name }}</p>
      <p style="text-align: right; padding-right: 1.5rem;">{{ card.id }} / {{ total }}</p>
    </div> <!-- footer closing div -->
  </div> <!-- container closing div -->
</template>

<script>
export default {
  name: "edu-card",
  props: {
    card: Object, 
    total: Number
  },
  setup(props) {
    console.log(props.title)
    console.log(props.location)
    console.log(props.description)
    console.log(props.duration)
    console.log(props.image)
    console.log(props.name)
    console.log(props.position)
    console.log(props.link)
  },

  methods: {
    formatDate(dateStr) {
      if (!dateStr) return "Present"; // Handle empty dates
      const [year] = dateStr.split("-"); // Extract YYYY and MM
      // const date = new Date(year, month - 1); // JS months are 0-indexed
      return `${year}`; // "March-2020"
    },
  }
}
</script>

<style scoped>
  @import '../styles/edu_index/card.scss';
</style>