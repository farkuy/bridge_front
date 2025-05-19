import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().nonempty("Введите email").email("Некорректный email"),
  password: z.string().min(3, "Пароль слишком короткий (минимум 3 символа)"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
