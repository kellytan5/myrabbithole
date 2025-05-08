import { createApp } from 'vue'
import router from './assets/router'
import App from './App.vue'

import { plugin as TippyPlugin } from 'vue-tippy'

createApp(App)
  .use(router)
  .use(TippyPlugin, {
    directive: 'tippy',
    defaultProps: {
      placement: 'bottom',
      animation: 'fade',
      duration: [50, 50], 
    },
  })
  .mount('#app')
