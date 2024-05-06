import { createApp } from 'vue'
import App from './App.vue'
import { uiComponents } from "./components";
import { router } from "./router";
import "./styles/app.scss"

const app = createApp(App);

app.use(router)
    .mount('#app');

for (const [key, value] of Object.entries(uiComponents)) {
    app.component(key, value);
}