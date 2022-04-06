import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState } from "./state";

export const selectWhoToRead = (state: RootState) => state.whoToRead;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectWhoToRead(state).loadingState;

export const selectWhoToReadIsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectWhoToReadIsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectWhoToReadItems = createSelector(selectWhoToRead, (whoToRead) => whoToRead.items);
