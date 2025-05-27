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
import { setAccessToken, setIsShowAuth } from "@/entities/Authentication";
import { AuthModal } from "@/features/Auth";
import { $user, setUser } from "@/entities/User";

export const NavBar = () => {
  const theme = useMantineTheme();
  const [user, setVisible] = useUnit([
    $user,
    setIsShowAuth,
    setUser,
    setAccessToken,
  ]);

  const onShowAuth = () => {
    setVisible(true);
  };

  const onExit = () => {
    setUser(null);
    setAccessToken("");
  };

  //TODO разделить их на компоненты по логике
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
          {!user?.email ? (
            <Button onClick={onShowAuth}>Войти</Button>
          ) : (
            <Button color={"red"} variant={"outline"} onClick={onExit}>
              Выйти
            </Button>
          )}
          <AuthModal />
        </Group>
      </Group>
    </Box>
  );
};
