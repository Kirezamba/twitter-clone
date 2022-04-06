import { Action } from "redux";
import { LoadingState, TweetsState } from "./state";

// ACTION TYPES
export enum TweetsActionType {
  SET_TWEETS = "tweets/SET_TWEETS",
  FETCH_TWEETS = "tweets/FETCH_TWEETS",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

// ACTION CREATORS INTERFACES
export interface SetTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_TWEETS;
  payload: TweetsState["items"];
}

export interface SetTweetsLoadingStateInterface extends Action<TweetsActionType> {
  type: TweetsActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionType> {
  type: TweetsActionType.FETCH_TWEETS;
}

// ACTION CREATORS
export const setTweets = (payload: TweetsState["items"]): SetTweetsActionInterface => ({
  type: TweetsActionType.SET_TWEETS,
  payload,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
  type: TweetsActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
  type: TweetsActionType.FETCH_TWEETS,
});

//ACTIONS
export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingStateInterface
  | FetchTweetsActionInterface;
