import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import type { LoginSchema } from "../schema/login";
import { loginSchema } from "../schema/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { $axios } from "../../../../../shared/api/InstanceAxiosApi";
import { useUnit } from "effector-react";
import { setAccessToken } from "../../../../../entities/Authentication/store/AuthenticationStore";

export const useLoginSubmit = () => {
  const [changeAccessToken] = useUnit([setAccessToken]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    const user = await $axios.post("auth/login", data);
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
