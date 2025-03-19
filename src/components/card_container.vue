<template>
  <div style="display: flex; align-items: center; justify-content: center; width: 100%; height: 100%;">
    <div class="content">
      <div class="card text-paragraph">
        <div class="card-content">
          <div id="info" class="info-text">
            <p class="header-2">{{ card.title }}</p>
            <p class="description">{{ card.description }}</p>
          </div>
          <div class="details">
            <div class="info-duration">{{ card.location }} | {{ card.duration }}</div>
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

  }
}
</script>

<style>
  @import '../styles/card_index.scss';
</style>