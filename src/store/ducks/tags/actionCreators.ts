import { Action } from "redux";
import { LoadingState, TagsState } from "./state";

// ACTION TYPES
export enum TagsActionType {
  SET_TAGS = "tags/SET_TAGS",
  FETCH_TAGS = "tags/FETCH_TAGS",
  SET_LOADING_STATE = "tags/SET_LOADING_STATE",
}

// ACTION CREATORS INTERFACES
export interface SetTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_TAGS;
  payload: TagsState["items"];
}

export interface SetTagsLoadingStateInterface extends Action<TagsActionType> {
  type: TagsActionType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTagsActionInterface extends Action<TagsActionType> {
  type: TagsActionType.FETCH_TAGS;
}

// ACTION CREATORS
export const setTags = (payload: TagsState["items"]): SetTagsActionInterface => ({
  type: TagsActionType.SET_TAGS,
  payload,
});

export const setTagsLoadingState = (payload: LoadingState): SetTagsLoadingStateInterface => ({
  type: TagsActionType.SET_LOADING_STATE,
  payload,
});

export const fetchTags = (): FetchTagsActionInterface => ({
  type: TagsActionType.FETCH_TAGS,
});

//ACTIONS
export type TagsActions =
  | SetTagsActionInterface
  | SetTagsLoadingStateInterface
  | FetchTagsActionInterface;
