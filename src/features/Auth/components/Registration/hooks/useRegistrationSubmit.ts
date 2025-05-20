import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { $axios } from "../../../../../shared/api/InstanceAxiosApi";
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
    const user = await $axios.post("auth/registration", data);
    changeAccessToken(user.data.accessToken);
    return user;
  };

  return {
    register,
    reset,
    errors,
    handleSubmit,
    onSubmit,
  };
};
