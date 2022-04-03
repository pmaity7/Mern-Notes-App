import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import {
  createNoteReducer,
  deleteNoteReducer,
  getNoteListReducer,
  updateNoteReducer,
} from "./reducers/noteReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  notesList: getNoteListReducer,
  createdNote: createNoteReducer,
  deletedNote: deleteNoteReducer,
  updatedNote: updateNoteReducer,
});

const initialState = {};

let middlewares = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
