import type { ComponentType } from "react";
import { Input, PasswordInput } from "@mantine/core";

interface RegistrationInput {
  value: "email" | "password" | "repeatPassword";
  label: string;
  placeholder: string;
  component: ComponentType<any>;
}

export const registrationConfig: RegistrationInput[] = [
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
  {
    value: "repeatPassword",
    label: "Повторите пароль",
    placeholder: "Введите пароль еще раз",
    component: PasswordInput,
  },
];
