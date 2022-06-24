import { AxiosPromise } from "axios";

export const handleResponse = <T>(promise: AxiosPromise<T>) =>
  promise.then(({ data }) => data).catch((e) => console.error(e.message));
