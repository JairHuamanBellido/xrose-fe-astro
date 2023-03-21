export interface UseCase<TRequest = unknown, TResponse = unknown> {
  execute(params?: TRequest | undefined): TResponse | Promise<TResponse>;
}
