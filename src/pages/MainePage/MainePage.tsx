import { Button } from "@mantine/core";
import { AuthModal } from "../../features/Auth/AuthModal";
import { useDisclosure } from "@mantine/hooks";
import { request } from "../../shared/api/InstanceAxiosApi";

export const MainePage = () => {
  const [opened, { open, close }] = useDisclosure(false);
  console.log(request("authControllerLogin"));

  return (
    <div>
      <AuthModal visible={opened} onClose={close} />
      <Button onClick={open}>Клик</Button>
    </div>
  );
};
