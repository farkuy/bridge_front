import { z } from "zod";

export const registrationSchema = z
  .object({
    email: z.string().nonempty("Введите email").email("Некорректный email"),
    password: z.string().min(3, "Пароль слишком короткий (минимум 3 символа)"),
    repeatPassword: z.string(),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: "Пароли не совпадают",
    path: ["repeatPassword"],
  });

export type RegistrationSchema = z.infer<typeof registrationSchema>;
