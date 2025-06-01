// composables/useNotifications.ts
import { reactive } from "vue";

type NotificationType = "success" | "error" | "info" | "warning";

interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

export const notifications = reactive<Notification[]>([]);

let counter = 0;

export function notify(
  message: string,
  type: NotificationType = "info",
  duration = 5000 // Default duration of 5 seconds
) {
  const id = counter++;
  notifications.push({ id, message, type });

  duration &&
    setTimeout(() => {
      const index = notifications.findIndex((n) => n.id === id);
      if (index !== -1) notifications.splice(index, 1);
    }, duration);
}
