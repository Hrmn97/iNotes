import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div className="container col-md-3 m-3">
      <div class=" row card">
        <div class="col card-body">
          <h5 class="card-title">
            {note.title ? note.title.slice(0, 15) : ""}
          </h5>
          <p class="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
