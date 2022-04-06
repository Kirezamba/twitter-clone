import { Action } from "redux";
import { LoadingState, WhoToReadState } from "./state";

// ACTION TYPES
export enum WhoToReadActionType {
  SET_WHO_TO_READ = "tweets/SET_WHO_TO_READ",
  FETCH_WHO_TO_READ = "tweets/FETCH_WHO_TO_READ",
  SET_LOADING_STATE = "tweets/SET_LOADING_STATE",
}

// ACTION CREATORS INTERFACES
export interface SetWhoToReadActionInterface extends Action<WhoToReadActionType> {
  type: WhoToReadActionType.SET_WHO_TO_READ;
  payload: WhoToReadState["items"];
}

export interface SetWhoToReadLoadingStateInterface extends Action<WhoToReadActionType> {
  type: WhoToReadActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchWhoToReadActionInterface extends Action<WhoToReadActionType> {
  type: WhoToReadActionType.FETCH_WHO_TO_READ;
}

// ACTION CREATORS
export const setWhoToRead = (payload: WhoToReadState["items"]): SetWhoToReadActionInterface => ({
  type: WhoToReadActionType.SET_WHO_TO_READ,
  payload,
});

export const setWhoToReadLoadingState = (
  payload: LoadingState
): SetWhoToReadLoadingStateInterface => ({
  type: WhoToReadActionType.SET_LOADING_STATE,
  payload,
});

export const fetchWhoToRead = (): FetchWhoToReadActionInterface => ({
  type: WhoToReadActionType.FETCH_WHO_TO_READ,
});

//ACTIONS
export type WhoToReadActions =
  | SetWhoToReadActionInterface
  | SetWhoToReadLoadingStateInterface
  | FetchWhoToReadActionInterface;
