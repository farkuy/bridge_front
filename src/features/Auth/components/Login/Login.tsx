import { Button, Input, Stack } from "@mantine/core";
import { useLoginSubmit } from "./hooks/useLoginSubmit";
import { loginConfig } from "./consts/config";

export const Login = () => {
  const { register, errors, handleSubmit, onSubmit } = useLoginSubmit();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {loginConfig.map(
          ({ value, component: Component, label, placeholder }) => (
            <Input.Wrapper
              label={label}
              key={value}
              error={errors[value]?.message}
            >
              <Component
                placeholder={placeholder}
                type={value}
                {...register(value)}
                mt="md"
              />
            </Input.Wrapper>
          ),
        )}
        <Button type={"submit"}>Войти</Button>
      </Stack>
    </form>
  );
};
