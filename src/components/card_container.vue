<template>
  <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
    <div class="content">
      <div class="card text-paragraph">
        <div class="card-content">
          <div id="info" class="info-text">
            <p class="header-3">{{ card.title }}</p>
            <p class="description">{{ card.description }}</p>
          </div>
          <div class="details">
            <div class="info-duration text">{{ card.location }} [{{ formatDate(card.start_date) }}-{{ formatDate(card.end_date) }}]</div>
            <div id="img" class="img-box">
              <img :src="card.image" alt="image" />
            </div>
          </div>
        </div> <!-- card-content closing div -->
        <div id="footer" class="info-footer">
          <div class="text" id="footer-details">
            <p>{{ card.name }}</p>
            <p>{{ card.position }}</p>
          </div>
          <div id="link" class="link">
            <a href="#" class="link">{{ card.link }} →</a>
          </div>
        </div> <!-- footer closing div -->
      </div> <!-- card closing div -->
    </div> <!-- content closing div -->
  </div> <!-- container closing div -->
</template>

<script>
export default {
  name: "card-container",
  props: {
    card: Object
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

<style>
  @import '../styles/card_index.scss';
</style>