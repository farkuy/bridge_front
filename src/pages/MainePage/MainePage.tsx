import { Button } from "@mantine/core";
import { useUnit } from "effector-react";
import { addNotification } from "@/entities/Notification";

function MainePage() {
  const [setNot] = useUnit([addNotification]);

  const getAllUsers = async () => {
    const id = String(Math.random());
    setNot({ title: id, id });
  };

  return (
    <div>
      Мэйен
      <Button onClick={getAllUsers}>Всех</Button>
    </div>
  );
}

export default MainePage;
