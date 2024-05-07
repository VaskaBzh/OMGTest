import { createApp } from 'vue'
import App from './App.vue'
import { uiComponents } from "./components";
import { router } from "./router";
import "./styles/app.scss"

const app = createApp(App);

app.use(router)
    .component("main-block", uiComponents[0])
    .mount('#app');