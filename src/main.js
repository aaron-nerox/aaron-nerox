import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueKinesis from "vue-kinesis"
import VueParticles from 'vue-particles'

createApp(App)
        .use(router)
        .use(VueKinesis)
        .use(VueParticles)
        .mount('#app')
