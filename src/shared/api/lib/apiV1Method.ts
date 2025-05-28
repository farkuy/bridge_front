import { ApiV1 } from "@/shared/api/InstanceAxiosApi";

export function apiV1Method<K extends keyof typeof ApiV1.api>(key: K) {
  return ApiV1.api[key];
}
