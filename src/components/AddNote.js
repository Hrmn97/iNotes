import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-5">
        <h1>Add Note</h1>
        <form>
          <div className="mb-3">
            <input
              id="title"
              name="title"
              type="text"
              className="form-control"
              onChange={onChange}
              placeholder="Add Your Title"
            />
          </div>
          <div className="mb-3">
            <input
              id="description"
              name="description"
              type="text"
              className="form-control"
              onChange={onChange}
              placeholder="Add Your Description"
            />
          </div>
          <div className="mb-3">
            <input
              id="tag"
              name="tag"
              type="text"
              className="form-control"
              onChange={onChange}
              placeholder="Tag it"
            />
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="btn btn-primary"
          >
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
