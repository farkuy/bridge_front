import { Button } from "@mantine/core";
import { useUnit } from "effector-react/compat";
import { $user } from "@/entities/User";
import { clearAuth, setIsShowAuth } from "@/entities/Authentication";

export const AuthButton = () => {
  const [user, setVisible, logout] = useUnit([$user, setIsShowAuth, clearAuth]);

  const onShowAuth = () => {
    setVisible(true);
  };

  return (
    <div>
      {!user?.email ? (
        <Button onClick={onShowAuth}>Войти</Button>
      ) : (
        <Button color={"red"} variant={"outline"} onClick={logout}>
          Выйти
        </Button>
      )}
    </div>
  );
};
