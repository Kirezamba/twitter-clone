import { createSelector } from "reselect";
import { RootState } from "../../store";
import { LoadingState } from "./state";

export const selectTweets = (state: RootState) => state.tweets;

export const selectLoadingState = (state: RootState): LoadingState =>
  selectTweets(state).loadingState;

export const selectTweetsIsLoading = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetsIsLoaded = (state: RootState): boolean =>
  selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsItems = createSelector(selectTweets, (tweets) => tweets.items);
