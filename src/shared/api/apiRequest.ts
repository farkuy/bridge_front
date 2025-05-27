import { ApiV1 } from "./InstanceAxiosApi";

interface ApiRequestProps<T, R> {
  request: (params: T) => Promise<R>;
  params: T;
}

export async function xxxx<T, R>(props: ApiRequestProps<T, R>): Promise<R> {
  const { request, params } = props;

  try {
    return await request(params);
  } catch (error) {
    throw error;
  }
}

export function apiRequest<T, R>({
  request,
}: Omit<ApiRequestProps<T, R>, "params">) {
  return function (params: T) {
    return xxxx({ params, request });
  };
}

export function apiV1request<K extends keyof typeof ApiV1.api>(key: K) {
  return ApiV1.api[key];
}
