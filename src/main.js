import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueDragscroll from "vue-dragscroll";
import VueKinesis from "vue-kinesis";

import './assets/main.css'

const app = createApp(App)

app.use(VueDragscroll)
app.use(createPinia())
app.use(router)
app.use(VueKinesis)


app.mount('#app')
