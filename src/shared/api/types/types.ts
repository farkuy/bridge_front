import { ApiV1 } from "../InstanceAxiosApi";

export type ApiV1Keys = keyof typeof ApiV1.api;

export interface ApiRequestProps<T, R> {
  request: (params: T) => Promise<R>;
  params: T;
}
