import { applyMiddleware, combineReducers, createStore } from "redux";
import { menuReducer } from "./menu/reducer";
import { authorizationReducer } from "./authorization/reducer";
import { postsReducer } from "./posts/reducer";
import { postReducer } from "./post/reducer";
import { commentsReducer } from "./comments/reducer";
import { regReducer } from "./registration/reducer";
import { createReducer } from "./create/reducer";
import { searchReducer } from "./search/reducer";
import { editingReducer } from "./editing/reducer";
import { profileReducer } from "./profile/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  menu: menuReducer,
  auth: authorizationReducer,
  reg: regReducer,
  posts: postsReducer,
  post: postReducer,
  comments: commentsReducer,
  create: createReducer,
  search: searchReducer,
  editing: editingReducer,
  profile: profileReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
