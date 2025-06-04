import { createEvent, createStore } from "effector";
import type { INotification } from "../type/notification";

export const $notifications = createStore<INotification[]>([]);
export const addNotification = createEvent<INotification>();
export const delNotificationId = createEvent<string>();

addNotification.watch((notification) =>
  setTimeout(() => delNotificationId(notification.id), 10 * 1000),
);

$notifications
  .on(addNotification, (_, newNotification) => {
    const notifications = [..._, newNotification];
    if (notifications.length > 7) notifications.shift();
    return notifications;
  })
  .on(delNotificationId, (_, delNotification) =>
    _.filter((not) => not.id !== delNotification),
  );
