import produce, { Draft } from "immer";
import { TagsActions, TagsActionType } from "./actionCreators";
import { LoadingState, TagsState } from "./state";

const initialTagsState: TagsState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const tagsReducer = produce((draft: Draft<TagsState>, action: TagsActions) => {
  switch (action.type) {
    case TagsActionType.SET_TAGS:
      draft.items = action.payload;
      draft.loadingState = LoadingState.LOADED;
      break;

    case TagsActionType.SET_LOADING_STATE:
      draft.loadingState = action.payload;
      break;

    case TagsActionType.FETCH_TAGS:
      draft.items = [];
      draft.loadingState = LoadingState.LOADING;
      break;

    default:
      break;
  }
}, initialTagsState);
