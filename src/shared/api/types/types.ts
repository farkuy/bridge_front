export interface ApiRequestProps<P, R> {
  request: (params: P) => Promise<R>;
  params: P;
}
