import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState } from "./state";

export const selectTags = (state: RootState) => state.tags;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTags(state).loadingState;

export const selectTagsIsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTagsIsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTagsItems = createSelector(selectTags, (tags) => tags.items);
