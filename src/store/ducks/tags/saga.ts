import { setTags, setTagsLoadingState, TagsActionType } from "./actionCreators";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoadingState } from "./state";
import { TagsApi } from "../../../services/api/tagsApi";

export function* fetchTagsRequest() {
  try {
    const { data } = yield call(TagsApi.fetchTags);
    yield put(setTags(data));
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionType.FETCH_TAGS, fetchTagsRequest);
}
