import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="container col-md-3 m-3">
      <div className=" row card">
        <div className="col card-body">
          <h5 className="card-title">
            {note.title ? note.title.slice(0, 15) : ""}
          </h5>
          <p className="card-text">{note.description}</p>
          <div className="row this">
            <div className="col">
              <i
                className="fa-solid fa-pen-to-square"
                onClick={() => {
                  updateNote(note);
                }}
              >
                {" "}
                Edit
              </i>
            </div>
            <div className="col">
              <i
                className="fa-solid fa-trash"
                onClick={() => {
                  deleteNote(note._id);
                }}
              >
                {" "}
                Delete
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
