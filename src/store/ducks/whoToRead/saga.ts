import { setWhoToRead, setWhoToReadLoadingState, WhoToReadActionType } from "./actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoadingState } from "./state";
import { WhoToReadApi } from "../../../services/api/whoToReadApi";

export function* fetchTweetsRequest() {
  try {
    const { data } = yield call(WhoToReadApi.fetchWhoToRead);
    yield put(setWhoToRead(data));
  } catch (error) {
    yield put(setWhoToReadLoadingState(LoadingState.ERROR));
  }
}

export function* whoToReadSaga() {
  yield takeLatest(WhoToReadActionType.FETCH_WHO_TO_READ, fetchTweetsRequest);
}
