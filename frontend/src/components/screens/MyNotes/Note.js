import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Chip,
  Typography,
} from "@mui/material";

function Note({ note, expanded, handleChange, deleteHandler }) {
  return (
    <>
      <Accordion
        expanded={expanded === `panel${note._id}`}
        onChange={handleChange(`panel${note._id}`)}
        sx={{ marginTop: 3 }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${note._id}bh-header`}
          id={`panel${note._id}bh-header`}
          sx={{
            backgroundColor: "#e3e3e3",
            flex: 1,
            width: "100%",
            flexShrink: 0,
            alignSelf: "center",
          }}
        >
          <Typography
            sx={{
              flex: 1,
              flexShrink: 0,
              alignSelf: "center",
            }}
          >
            {note.title}
          </Typography>

          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "flex-end",
            }}
          >
            <Button variant="contained" href={`/note/${note._id}`}>
              Edit
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={() => deleteHandler(note._id)}
            >
              Delete
            </Button>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Chip label={note.category} color="success" size="small" />
          <Typography variant="h6" component="div">
            {note.content}
          </Typography>
          <Typography variant="p" component="footer">
            {`Created on date ${note.createdAt.slice(0, 10)}`}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default Note;
