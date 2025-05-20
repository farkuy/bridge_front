import { Modal } from "@mantine/core";
import { Login } from "./components/Login/Login";
import { Registration } from "./components/Registration/Registration";
import { SwitchForm } from "./components/SwitchForm/SwitchForm";
import { useState } from "react";
import type { AuthForm } from "./types/form";

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AuthModal = (props: AuthModalProps) => {
  const { visible, onClose } = props;
  const [selectableForm, setSelectableForm] = useState<AuthForm>("login");

  const form = selectableForm === "login" ? <Login /> : <Registration />;

  return (
    <Modal
      opened={visible}
      onClose={onClose}
      title="Авторизация"
      centered
      size={"md"}
    >
      {form}
      <SwitchForm selected={selectableForm} onChange={setSelectableForm} />
    </Modal>
  );
};
