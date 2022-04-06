import { all } from "redux-saga/effects";
import { tagsSaga } from "./ducks/tags/saga";
import { tweetsSaga } from "./ducks/tweets/saga";
import { whoToReadSaga } from "./ducks/whoToRead/saga";

export default function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga(), whoToReadSaga()]);
}
