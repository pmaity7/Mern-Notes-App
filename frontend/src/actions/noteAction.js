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
import axios from "axios";

export const getNotesList = () => async (dispatch, getState) => {
  try {
    dispatch({ type: NOTES_LIST_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get("/api/notes", config);
    console.log("Notes " + data);
    dispatch({ type: NOTES_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: NOTES_LIST_FAIL,
      payload:
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createNote =
  (title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: CREATE_NOTE_REQUEST });
      if (!title || !category || !content) {
        throw new Error("All fields are required");
      }
      const {
        userLogin: { userInfo },
      } = getState();

      console.log("userInfo" + userInfo);

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.post(
        "/api/notes/create",
        { title, content, category },
        config
      );
      console.log(data);
      dispatch({ type: CREATE_NOTE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: CREATE_NOTE_FAIL, payload: message });
    }
  };

export const deleteNote = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: DELETE_NOTE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.delete(`/api/notes/${id}`, config);
    dispatch({ type: DELETE_NOTE_SUCCESS, payload: data });
  } catch (error) {
    const message =
      error.message && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: DELETE_NOTE_FAIL, error: message });
  }
};

export const updateNote =
  (id, title, content, category) => async (dispatch, getState) => {
    try {
      dispatch({ type: UPDATE_NOTE_REQUEST });
      if (!title || !content || !category) {
        throw new Error("Provide all details");
      }

      const {
        userLogin: { userInfo },
      } = getState;

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `/api/notes/${id}`,
        { title, content, category },
        config
      );
      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: data });
    } catch (error) {
      const message =
        error.message && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({ type: UPDATE_NOTE_FAIL, error: message });
    }
  };
