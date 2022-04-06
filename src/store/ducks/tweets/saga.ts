import { TweetsApi } from "./../../../services/api/tweetsApi";
import { setTweets, setTweetsLoadingState, TweetsActionType } from "./actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoadingState } from "./state";

export function* fetchTweetsRequest() {
  try {
    const { data } = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(data));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionType.FETCH_TWEETS, fetchTweetsRequest);
}
