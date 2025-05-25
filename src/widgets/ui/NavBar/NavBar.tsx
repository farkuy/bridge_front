import {
  Anchor,
  Box,
  Button,
  Group,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { links } from "./consts/links";
import { useUnit } from "effector-react/compat";
import { setIsShowAuth } from "@/entities/Authentication";
import { AuthModal } from "@/features/Auth/AuthModal";
import { $user } from "@/entities/User";

export const NavBar = () => {
  const theme = useMantineTheme();
  const [user, setVisible] = useUnit([$user, setIsShowAuth]);

  const onShowAuth = () => {
    setVisible(true);
  };

  return (
    <Box
      component="header"
      px="md"
      py="sm"
      style={{
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
      }}
    >
      <Group display={"flex"} justify={"space-between"} align="center">
        <Text size="xl" color="blue">
          Bridge
        </Text>
        <Group gap={"xl"} visibleFrom="sm">
          {links.map((link) => (
            <Anchor key={link.label} href={link.href} size="md">
              {link.label}
            </Anchor>
          ))}
          {!user.email && <Button onClick={onShowAuth}>Войти</Button>}
          <AuthModal />
        </Group>
      </Group>
    </Box>
  );
};
