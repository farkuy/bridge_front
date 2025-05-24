import { Flex, NavLink } from "@mantine/core";
import type { AuthForm } from "../../types/form";

interface SwitchFormProps {
  selected: AuthForm;
  onChange: (form: AuthForm) => void;
}

export const SwitchForm = (props: SwitchFormProps) => {
  const { selected, onChange } = props;

  return (
    <Flex justify="center">
      <NavLink
        label="Войти"
        active={selected === "login"}
        onClick={() => onChange("login")}
      />
      <NavLink
        label="Зарегистрироваться"
        active={selected === "registration"}
        onClick={() => onChange("registration")}
      />
    </Flex>
  );
};
