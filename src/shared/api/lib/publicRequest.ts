import type { ApiRequestProps } from "../types/types";

async function apiPublicRequest<T, R>(
  props: ApiRequestProps<T, R>,
): Promise<R> {
  const { request, params } = props;
  try {
    return await request(params);
  } catch (error) {
    throw error;
  }
}

export function publicRequest<T, R>({
  request,
}: Omit<ApiRequestProps<T, R>, "params">) {
  return function (params: T): Promise<R> {
    return apiPublicRequest({ params, request });
  };
}
