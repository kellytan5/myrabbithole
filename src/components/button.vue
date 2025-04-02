<template>
  <button :class="button">
    <slot>{{ action_msg }}</slot>
  </button>
</template>

<script>
export default {
  name: "button_component",

  computed: {
    button() {
      switch (this.$route.path) {
        case "/":
          return "retro-button";
        default:
          return "btn";
      }
    }
  },

  props: ['action_msg'],
  setup(props) {
    console.log(props.action_msg)
  }
}
</script>

<style>
  @import '../styles/welcome_index.scss';
</style>