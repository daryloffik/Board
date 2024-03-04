import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import './style.css'
import App from './App.vue'
import './index.css'
import { firebaseApp } from './firebase.js'
import router from './router.js'

const app = createApp(App)
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
})

app.use(router).mount('#app')
