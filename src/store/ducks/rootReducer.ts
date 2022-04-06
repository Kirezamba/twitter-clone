import { whoToReadReducer } from "./whoToRead/whoToReadReducer";
import { combineReducers } from "redux";
import { tagsReducer } from "./tags/tagsReducer";
import { tweetsReducer } from "./tweets/tweetsReducer";

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
  whoToRead: whoToReadReducer,
});
