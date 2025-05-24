import { Button, Input, Stack } from "@mantine/core";
import { registrationConfig } from "./consts/config";
import { useRegistrationSubmit } from "./hooks/useRegistrationSubmit";

export const Registration = () => {
  const { register, errors, handleSubmit, onSubmit, isLoading } =
    useRegistrationSubmit();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        {registrationConfig.map(
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
        <Button type={"submit"} loading={isLoading}>
          Войти
        </Button>
      </Stack>
    </form>
  );
};
