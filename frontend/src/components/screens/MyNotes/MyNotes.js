import React, { useEffect, useState } from "react";
import MainScreen from "../../MainScreen";
import { Link } from "react-router-dom";
import axios from "axios";
import Note from "./Note";
import { Button } from "@mui/material";

function MyNotes() {
  const [notes, setNotes] = useState([]);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const deleteHandler = (id) => {
    console.log(id);
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back!!">
      <Link to="createnote" style={{ textDecoration: "none" }}>
        <Button
          size="large"
          style={{ marginLeft: 10, marginBottom: 6 }}
          variant="contained"
        >
          Create Note
        </Button>
      </Link>
      {notes.map((note) => (
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
