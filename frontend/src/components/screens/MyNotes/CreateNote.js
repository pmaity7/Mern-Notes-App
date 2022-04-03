import React, { useState } from "react";
import MainScreen from "../../MainScreen";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { createNote } from "../../../actions/noteAction";
import { useNavigate } from "react-router-dom";

function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    console.log(title + content + category);
    dispatch(createNote(title, content, category));
    /*navigate("/mynotes");*/
  }
  return (
    <div>
      <MainScreen title="Create Note">
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "50%" },
          }}
          autoComplete="off"
          onSubmit={submitHandler}
        >
          <div className="container">
            {/* {loading && <Loading />}
            {error && <ErrorPage title={error} type="error" />} */}
            <TextField
              required={true}
              id="outlined-required"
              label="Title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <TextField
              required={true}
              id="outlined-textarea-required"
              label="Content"
              type="text"
              multiline
              rows={4}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
            />
            <TextField
              required={true}
              id="outlined-required"
              label="Category"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Category"
            />

            <br />
            <Button
              variant="contained"
              type="submit"
              className="form-button"
              sx={{ m: 1 }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </MainScreen>
    </div>
  );
}

export default CreateNote;
