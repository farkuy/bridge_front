export interface ApiRequestProps<T, R> {
  request: (params: T) => Promise<R>;
  params: T;
}
