import { useUnit } from "effector-react";
import { $notifications } from "@/entities/Notification";
import { Flex, Notification } from "@mantine/core";
import cls from "./notification.module.css";
import clsx from "clsx";
import { useClose } from "@/features/Notification/hooks/useClose";

export const Notifications = () => {
  const [notifications] = useUnit([$notifications]);
  const { closeIds, close } = useClose();

  return (
    <Flex gap={20}>
      {notifications.map(({ id = "not_id", ...otherProps }, index) => {
        const bottom = (notifications.length - index - 1) * 70;
        const isClose = closeIds.includes(id);
        return (
          <Notification
            id={id}
            key={id}
            className={clsx(cls.notification, {
              [cls.hide]: isClose,
            })}
            title={"Уведомление"}
            color={"pink"}
            onClose={() => close(id)}
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
