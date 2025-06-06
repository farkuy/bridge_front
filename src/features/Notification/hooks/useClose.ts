import { useState, useCallback } from "react";
import { useUnit } from "effector-react";
import { delNotificationId } from "@/entities/Notification";

export const useClose = () => {
  const deleted = useUnit(delNotificationId);
  const [closeIds, setCloseId] = useState<string[]>([]);

  const close = useCallback(
    (id: string) => {
      setCloseId((prev) => (prev.includes(id) ? prev : [id, ...prev]));
      setTimeout(() => deleted(id), 300);
    },
    [deleted],
  );

  return { closeIds, close };
};
