import { createEvent, createStore } from "effector";
import type { INotification } from "../type/notification";
import { uniqueId } from "@/shared/utils";

export const $notifications = createStore<INotification[]>([]);
export const addNotification = createEvent<INotification>();
export const delNotificationId = createEvent<string>();

addNotification.watch((notification) => {
  const { timer } = notification;
  if (!notification.id) notification.id = uniqueId();
  const id = notification.id;
  if (timer) setTimeout(() => delNotificationId(id), timer);
});

$notifications
  .on(addNotification, (_, newNotification) => {
    const notifications = [..._, newNotification];
    if (notifications.length > 7) notifications.shift();
    return notifications;
  })
  .on(delNotificationId, (_, delNotification) =>
    _.filter((not) => not.id !== delNotification),
  );
