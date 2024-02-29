declare module "response" {
  interface ApiResponse<T = unknown> {
    data: T;
    messagae: string;
  }
}
