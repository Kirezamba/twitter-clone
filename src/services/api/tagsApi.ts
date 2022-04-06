import axios, { AxiosResponse } from "axios";

const url = "/tags";

export const TagsApi = {
  async fetchTags(): Promise<AxiosResponse> {
    const resp = await axios.get(url);

    return resp;
  },
};
