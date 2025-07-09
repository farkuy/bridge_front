import type { ApiRequestProps } from "../types/types";

async function apiPublicRequest<P, R>(
  props: ApiRequestProps<P, R>,
): Promise<R> {
  const { request, params } = props;
  try {
    return await request(params);
  } catch (error) {
    throw error;
  }
}

export function publicRequest<P, R>({
  request,
}: Omit<ApiRequestProps<P, R>, "params">) {
  return function (params: P): Promise<R> {
    return apiPublicRequest({ params, request });
  };
}
