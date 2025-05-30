import type { ApiRequestProps } from "../types/types";
import { isAxiosError } from "axios";
import { apiV1Method } from "./apiV1Method";
import { setAccessToken } from "@/entities/Authentication";

async function apiPrivateRequest<T, R>(
  props: ApiRequestProps<T, R>,
): Promise<R> {
  const { request, params } = props;
  try {
    return await request(params);
  } catch (error) {
    if (isAxiosError(error)) {
      const status = error.response?.status;

      if (status === 401) {
        const {
          data: { accessToken },
        } = await apiV1Method("tokensControllerUpdate")();
        setAccessToken(accessToken);
        return await request(params);
      }
      //TODO добавить логику для запроса
    }
    throw error;
  }
}

export function privateRequest<T, R>({
  request,
}: Omit<ApiRequestProps<T, R>, "params">) {
  return function (params: T): Promise<R> {
    return apiPrivateRequest({ params, request });
  };
}
