import produce, { Draft } from "immer";
import { WhoToReadActions, WhoToReadActionType } from "./actionCreators";
import { LoadingState, WhoToReadState } from "./state";

const initialWhoToReadState: WhoToReadState = {
  items: [],
  loadingState: LoadingState.NEVER,
};

export const whoToReadReducer = produce(
  (draft: Draft<WhoToReadState>, action: WhoToReadActions) => {
    switch (action.type) {
      case WhoToReadActionType.SET_WHO_TO_READ:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case WhoToReadActionType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case WhoToReadActionType.FETCH_WHO_TO_READ:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      default:
        break;
    }
  },
  initialWhoToReadState
);
