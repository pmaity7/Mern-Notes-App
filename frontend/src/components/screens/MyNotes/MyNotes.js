import React, { useEffect } from "react";
import MainScreen from "../../MainScreen";
import { Link, Navigate } from "react-router-dom";
import Note from "./Note";
import { Button } from "@mui/material";
import { deleteNote, getNotesList } from "../../../actions/noteAction";

import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Loading";
import ErrorPage from "../../ErrorPage";

function MyNotes() {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const notesList = useSelector((state) => state.notesList);
  const deletedNote = useSelector((state) => state.deletedNote);
  const { loading, notes, error } = notesList;
  console.log("Notes: " + notes);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete this?")) {
      dispatch(deleteNote(id));
    }
  };

  useEffect(() => {
    dispatch(getNotesList());
  }, [dispatch, deletedNote]);

  return (
    <MainScreen title="Welcome back!!">
      {loading && <Loading />}
      {error && <ErrorPage error={error} type="error" />}
      <Link to="/createnote" style={{ textDecoration: "none" }}>
        <Button
          size="large"
          style={{ marginLeft: 10, marginBottom: 6 }}
          variant="contained"
        >
          Create Note
        </Button>
      </Link>
      {notes?.reverse().map((note) => (
        <Note
          note={note}
          key={note._id}
          expanded={expanded}
          handleChange={handleChange}
          deleteHandler={deleteHandler}
        />
      ))}
    </MainScreen>
  );
}

export default MyNotes;
