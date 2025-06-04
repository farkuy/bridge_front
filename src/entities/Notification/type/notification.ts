import type { NotificationProps } from "@mantine/core";

export interface INotification extends Omit<NotificationProps, "id"> {
  id: string;
}
