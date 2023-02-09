import axios, { AxiosResponse } from "axios";

const onServerError = (response: AxiosResponse) => {
  if (response.status >= 400 || response.status >= 500) {
    throw new Error("A server error occurred", { cause: response.data });
  }
};

const onAxiosError = (error: unknown) => {
  throw new Error(axios.isAxiosError(error) ? error.message : "An unexpected error occurred", {
    cause: error,
  });
};

export const get = async <Response>(url: string): Promise<Response> => {
  try {
    const response = await axios.get<Response, AxiosResponse<Response, unknown>>(url);

    onServerError(response);

    return response.data;
  } catch (error) {
    return onAxiosError(error);
  }
};

export const post = async <Response, Data>(url: string, data: Data): Promise<Response> => {
  try {
    const response = await axios.post<Response, AxiosResponse<Response, Data>>(url, data);

    onServerError(response);

    return response.data;
  } catch (error) {
    return onAxiosError(error);
  }
};
