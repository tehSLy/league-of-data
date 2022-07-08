import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import axiosRetry from "axios-retry";
import { handleResponse } from "./handleResponse";
export class HTTPClient {
  private instance: AxiosInstance;
  constructor(config?: AxiosRequestConfig) {
    this.instance = axios.create(config);

    axiosRetry(this.instance, {
      retries: 4,
      retryDelay: (retryCount) => {
        return retryCount * 2000;
      },
      retryCondition: (error) => {
        return error?.response?.status === 429;
      },
    });
  }

  get = <T>(...args: Parameters<typeof this.instance["get"]>) =>
    handleResponse(this.instance.get<T>(...args)) as Promise<T>;

  post = <T>(...args: Parameters<typeof this.instance["post"]>) =>
    handleResponse(this.instance.post<T>(...args)) as Promise<T>;

  put = <T>(...args: Parameters<typeof this.instance["put"]>) =>
    handleResponse(this.instance.put<T>(...args)) as Promise<T>;

  delete = <T>(...args: Parameters<typeof this.instance["delete"]>) =>
    handleResponse(this.instance.delete<T>(...args)) as Promise<T>;

  getInstance = () => {
    return this.instance;
  };
}

export const httpClient = new HTTPClient();
