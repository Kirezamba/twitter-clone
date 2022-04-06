import axios, { AxiosResponse } from "axios";

const url = "/tweets";

export const TweetsApi = {
  async fetchTweets(): Promise<AxiosResponse> {
    const resp = await axios.get(url);

    return resp;
  },
};
