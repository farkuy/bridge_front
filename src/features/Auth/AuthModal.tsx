import { Modal } from "@mantine/core";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { SwitchForm } from "./components/SwitchForm/SwitchForm";
import { useState } from "react";
import type { AuthForm } from "./types/form";
import { useUnit } from "effector-react/compat";
import { $isShowAuth, setIsShowAuth } from "@/entities/Authentication";

export const AuthModal = () => {
  const [visible, setVisible] = useUnit([$isShowAuth, setIsShowAuth]);
  const [selectableForm, setSelectableForm] = useState<AuthForm>("login");

  const form = selectableForm === "login" ? <Login /> : <Registration />;

  return (
    <Modal
      opened={visible}
      onClose={() => setVisible(false)}
      title="Авторизация"
      centered
      size={"md"}
    >
      {form}
      <SwitchForm selected={selectableForm} onChange={setSelectableForm} />
    </Modal>
  );
};
