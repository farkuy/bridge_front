import { Button, CloseButton, Input } from "@mantine/core";
import { useLoginSubmit } from "./hooks/useLoginSubmit";

export const Login = () => {
  const { register, reset, errors, handleSubmit, onSubmit } = useLoginSubmit();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Введите логин"
        id={"email"}
        {...register("email")}
        mt="md"
        rightSection={
          <CloseButton aria-label="Clear input" onClick={() => reset()} />
        }
        error={errors.email?.message}
      />
      <Input
        placeholder="Введите пароль"
        id={"password"}
        {...register("password")}
        mt="md"
        rightSection={
          <CloseButton aria-label="Clear input" onClick={() => reset()} />
        }
        error={errors.password?.message}
      />
      <Button>Войти</Button>
    </form>
  );
};
