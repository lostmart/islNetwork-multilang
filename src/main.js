import { createApp } from "vue"
import vueVimeoPlayer from "vue-vimeo-player"
import router from "./router"
import store from "./store"
import "bootstrap/dist/css/bootstrap.min.css"
//import "bootstrap/dist/js/bootstrap.bundle.min.js"
import "bootstrap"
import App from "./App.vue"
import "./assets/styles/custom.css"

const app = createApp(App)
app.use(vueVimeoPlayer)
app.use(router)
app.use(store)
app.mount("#app")
