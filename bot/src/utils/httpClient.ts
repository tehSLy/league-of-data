import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig } from "axios";

export const handleResponse = <T>(promise: AxiosPromise<T>) =>
  promise.then(({ data }) => data).catch((e) => console.error(e.message));

export class HTTPClient {
  private instance: AxiosInstance;
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);
  }

  get = <T>(...args: Parameters<typeof this.instance["get"]>) =>
    handleResponse(this.instance.get<T>(...args)) as Promise<T>;

  post = <T>(...args: Parameters<typeof this.instance["post"]>) =>
    handleResponse(this.instance.post<T>(...args)) as Promise<T>;

  put = <T>(...args: Parameters<typeof this.instance["put"]>) =>
    handleResponse(this.instance.put<T>(...args)) as Promise<T>;

  delete = <T>(...args: Parameters<typeof this.instance["delete"]>) =>
    handleResponse(this.instance.delete<T>(...args)) as Promise<T>;
}

export const httpClient = new HTTPClient();
