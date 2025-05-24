import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUnit } from "effector-react";
import { setAccessToken } from "../../../../../entities/Authentication/store/AuthenticationStore";
import type { RegistrationSchema } from "../schema/registration";
import { registrationSchema } from "../schema/registration";
import { apiV1request } from "../../../../../shared/api/InstanceAxiosApi";
import { useState } from "react";

const QUERY_KEY = "authControllerRegistration";

export const useRegistrationSubmit = () => {
  const [changeAccessToken] = useUnit([setAccessToken]);
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
      const { data: userData } = await apiV1request(QUERY_KEY)(data);
      changeAccessToken(userData.accessToken);
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
