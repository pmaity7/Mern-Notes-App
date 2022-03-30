const expressAsyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes = expressAsyncHandler(async (req, res) => {
  const note = await Note.find({ user: req.user._id });
  res.json(note);
});

const createNote = expressAsyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !category || !content) {
    res.status(400);
    throw new Error("Please fill all the details");
  } else {
    const note = new Note({ user: req.user._id, title, content, category });
    const createdNote = await note.save();
    res.status(201);
    res.json(createdNote);
  }
});

const getNoteById = expressAsyncHandler(async (req, res) => {
  const id = req.params.id;
  //console.log("id: " + id);

  const note = await Note.findById({ _id: id });
  if (note) {
    res.status(200);
    res.json(note);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const updateNote = expressAsyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  const note = await Note.findById(req.params.id);
  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("We can't perform this action");
  }
  if (note) {
    note.title = title;
    note.content = content;
    note.category = category;
    const updatedNote = await note.save();
    res.json(updatedNote);
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

const deleteNote = expressAsyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note.user.toString() !== req.user._id.toString()) {
    res.status(401);
    throw new Error("We can't perform this action");
  }

  if (note) {
    await note.remove();
    res.json("Note removed");
  } else {
    res.status(404);
    throw new Error("Note not found");
  }
});

module.exports = { getNotes, createNote, getNoteById, updateNote, deleteNote };
