import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./scss/main.scss";

import NotificationsPlugin from "@/plugins";

const app = createApp(App);
app.use(router);
app.use(NotificationsPlugin);
app.mount("#app");
