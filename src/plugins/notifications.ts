import { createApp } from "vue";
import Notifications from "@/components/Notifications.vue";

export default {
  install(app: ReturnType<typeof createApp>) {
    // Create and mount the notification container ONCE
    const mountNode = document.createElement("div");
    document.body.appendChild(mountNode);
    const containerApp = createApp(Notifications);
    containerApp.mount(mountNode);
  },
};
