import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const app = createApp(App)
const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light'
  }
})

app.use(vuetify)

app.mount('#app')
