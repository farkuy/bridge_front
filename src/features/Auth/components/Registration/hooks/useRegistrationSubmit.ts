import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import type { RegistrationSchema } from "../schema/registration";
import { registrationSchema } from "../schema/registration";
import { apiV1request } from "@/shared/api/InstanceAxiosApi";
import { useState } from "react";
import { setAccessToken, setIsShowAuth } from "@/entities/Authentication";
import { setUser } from "@/entities/User";

const QUERY_KEY = "authControllerRegistration";

export const useRegistrationSubmit = () => {
  const [changeAccessToken, setUserInfo, setVisibleAuth] = useUnit([
    setAccessToken,
    setUser,
    setIsShowAuth,
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegistrationSchema>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit: SubmitHandler<RegistrationSchema> = async (data) => {
    setIsLoading(true);
    try {
      const {
        data: { accessToken, ...other },
      } = await apiV1request(QUERY_KEY)(data);

      changeAccessToken(accessToken);
      setUserInfo(other);

      setVisibleAuth(false);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    register,
    reset,
    errors,
    handleSubmit,
    onSubmit,
    isLoading,
  };
};
