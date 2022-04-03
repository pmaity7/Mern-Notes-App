import {
  CREATE_NOTE_FAIL,
  CREATE_NOTE_REQUEST,
  CREATE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  NOTES_LIST_FAIL,
  NOTES_LIST_REQUEST,
  NOTES_LIST_SUCCESS,
  UPDATE_NOTE_FAIL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
} from "../constants/notesConstants";

export const getNoteListReducer = (state = { notes: [] }, action) => {
  switch (action.type) {
    case NOTES_LIST_REQUEST:
      return { loading: true };
    case NOTES_LIST_SUCCESS:
      return { loading: false, notes: action.payload };
    case NOTES_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_NOTE_REQUEST:
      return { loading: true };
    case CREATE_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case CREATE_NOTE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const deleteNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_NOTE_REQUEST:
      return { loading: true };
    case DELETE_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case DELETE_NOTE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const updateNoteReducer = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_NOTE_REQUEST:
      return { loading: true };
    case UPDATE_NOTE_SUCCESS:
      return { loading: false, success: true, note: action.payload };
    case UPDATE_NOTE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
