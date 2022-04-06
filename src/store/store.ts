import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./ducks/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { TweetsState } from "./ducks/tweets/state";
import { TagsState } from "./ducks/tags/state";
import { WhoToReadState } from "./ducks/whoToRead/state";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  whoToRead: WhoToReadState;
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  (typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
