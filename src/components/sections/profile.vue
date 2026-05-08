<template>
  <div class="center-container profile-grid">
    <div id="aboutme" class="text-paragraph">
      <p class="text">Hey, My name is </p>
      <p class="header-1 name">Kelly Tan</p>
      <p class="header-3">Welcome to my Portfolio</p>
      <div class="text">
        <p style="padding-bottom: 1rem;">I’m a Software Engineering graduate focused on building intuitive, user-centred
          web applications. I specialize
          in front-end development with modern frameworks such as Vue.js and React, translating complex requirements
          into
          responsive, maintainable interfaces.</p>
        <p>With experience in both frontend and backend development, I enjoy bridging design and logic — creating
          systems
          that are not only visually engaging, but thoughtfully structured under the hood. I’m driven by
          problem-solving,
          collaboration, and building digital experiences that feel seamless from concept to deployment.</p>
      </div>
    </div> <!-- aboutMe closing div -->
    <div class="center-container">
      <img style="width: 20rem; height: 20rem; border-radius: 2rem;" src="/profile_2.png" alt="image" />
    </div>
  </div> <!-- profile closing div -->
</template>

<script>

export default {
  name: "profile-view",
}
</script>