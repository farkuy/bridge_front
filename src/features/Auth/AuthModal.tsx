import { Modal } from "@mantine/core";
import { Login } from "./components/Login/Login";

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
}

export const AuthModal = (props: AuthModalProps) => {
  const { visible, onClose } = props;
  return (
    <Modal
      opened={visible}
      onClose={onClose}
      title="Authentication"
      centered
      size={"md"}
    >
      <Login />
    </Modal>
  );
};
