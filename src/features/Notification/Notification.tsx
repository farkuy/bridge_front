import { useUnit } from "effector-react";
import { $notifications, delNotificationId } from "@/entities/Notification";
import { Flex, Notification } from "@mantine/core";
import cls from "./notification.module.css";
export const Notifications = () => {
  const [notifications, deleted] = useUnit([$notifications, delNotificationId]);

  return (
    <Flex gap={20}>
      {notifications.map(({ id, ...otherProps }, index) => {
        const bottom = (notifications.length - index) * 70;
        return (
          <Notification
            id={id}
            key={id}
            className={cls.notification}
            title={"Уведомление"}
            color={"pink"}
            onClose={() => deleted(id)}
            bottom={bottom}
            right={0}
            pos={"absolute"}
            {...otherProps}
          />
        );
      })}
    </Flex>
  );
};
