import { Button } from "@mantine/core";
import { AuthModal } from "../../features/Auth/AuthModal";
import { useDisclosure } from "@mantine/hooks";

export const MainePage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div>
      <AuthModal visible={opened} onClose={close} />
      <Button onClick={open}>Клик</Button>
    </div>
  );
};
