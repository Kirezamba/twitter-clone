export interface WhoToRead {
  _id?: string;
  fullname: string;
  username: string;
  avatarUrl: string;
}

export enum LoadingState {
  LOADED = "LOADED",
  LOADING = "LOADING",
  ERROR = "ERROR",
  NEVER = "NEVER",
}

export interface WhoToReadState {
  items: WhoToRead[];
  loadingState: LoadingState;
}
