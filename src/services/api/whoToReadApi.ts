import axios, { AxiosResponse } from "axios";

const url = "/users";

export const WhoToReadApi = {
  async fetchWhoToRead(): Promise<AxiosResponse> {
    const resp = await axios.get(url);

    return resp;
  },
};
