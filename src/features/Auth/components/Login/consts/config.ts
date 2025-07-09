import type { ComponentType } from "react";
import { Input, PasswordInput } from "@mantine/core";
import type { InputProps, PasswordInputProps } from "@mantine/core";

interface LoginInput {
  value: "email" | "password";
  label: string;
  placeholder: string;
  component: ComponentType<InputProps> | ComponentType<PasswordInputProps>;
}

export const loginConfig: LoginInput[] = [
  {
    value: "email",
    label: "Логин",
    placeholder: "Введите логин",
    component: Input,
  },
  {
    value: "password",
    label: "Пароль",
    placeholder: "Введите пароль",
    component: PasswordInput,
  },
];
