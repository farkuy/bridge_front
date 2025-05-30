import { Box, Group, Text, useMantineTheme } from "@mantine/core";
import { AuthModal } from "@/features/Auth";
import { AuthButton, HeaderLinks } from "./ui/index";

export const NavBar = () => {
  const theme = useMantineTheme();

  return (
    <Box component="header" px="md" py="sm" bg={theme.colors.gray[0]}>
      <Group display={"flex"} justify={"space-between"}>
        <Text size="xl" color="blue">
          Bridge
        </Text>
        <Group gap={"xl"}>
          <HeaderLinks />
          <AuthButton />
          <AuthModal />
        </Group>
      </Group>
    </Box>
  );
};
