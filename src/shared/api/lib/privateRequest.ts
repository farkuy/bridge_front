import type { ApiRequestProps } from "../types/types";
import { isAxiosError } from "axios";
import { apiV1Method } from "./apiV1Method";
import { setAccessToken } from "@/entities/Authentication";

async function apiPrivateRequest<P, R>(
  props: ApiRequestProps<P, R>,
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

export function privateRequest<P, R>({
  request,
}: Omit<ApiRequestProps<P, R>, "params">) {
  return function (params: P): Promise<R> {
    return apiPrivateRequest({ params, request });
  };
}
