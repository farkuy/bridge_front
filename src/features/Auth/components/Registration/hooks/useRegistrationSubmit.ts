import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { setAccessToken } from "../../../../../entities/Authentication/store/AuthenticationStore";
import type { RegistrationSchema } from "../schema/registration";
import { registrationSchema } from "../schema/registration";

export const useRegistrationSubmit = () => {
  const [changeAccessToken] = useUnit([setAccessToken]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationSchema> = async (data) => {
    return data;
  };

  return {
    register,
    reset,
    errors,
    handleSubmit,
    onSubmit,
  };
};
