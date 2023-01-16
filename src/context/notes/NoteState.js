import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const noteTest = [];
  // eslint-disable-next-line
  const [notes, setNotes] = useState(noteTest);

  //Get Notes
  const getNotes = async () => {
    //API call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMjc4MDk3MTkwYzRkMzkwZTNhMTdjIn0sImlhdCI6MTY3MzY4OTEyNX0.xvI_SOvqCuGO6fr3Kqy-yagrDBmiyXJh5KFOavXcvsI",
      },
    });
    const json = await response.json();
    // console.log(json);
    setNotes(json);
  };

  //Add Note
  const addNote = async (title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMjc4MDk3MTkwYzRkMzkwZTNhMTdjIn0sImlhdCI6MTY3MzY4OTEyNX0.xvI_SOvqCuGO6fr3Kqy-yagrDBmiyXJh5KFOavXcvsI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    const note = {
      _id: "63be8c4e6aedb161f854877de01",
      user: "63be8c1b6aedb161f8547dfd",
      title: title,
      description: description,
      tag: "Public",
      date: "2023-01-11T10:15:42.370Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  //Delete Note
  const deleteNote = async (id) => {
    //API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMjc4MDk3MTkwYzRkMzkwZTNhMTdjIn0sImlhdCI6MTY3MzY4OTEyNX0.xvI_SOvqCuGO6fr3Kqy-yagrDBmiyXJh5KFOavXcvsI",
      },
    });
    const json = response.json();
    console.log(json);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //Edit Note
  const editNote = async (id, title, description, tag) => {
    //API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNjMjc4MDk3MTkwYzRkMzkwZTNhMTdjIn0sImlhdCI6MTY3MzY4OTEyNX0.xvI_SOvqCuGO6fr3Kqy-yagrDBmiyXJh5KFOavXcvsI",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //LOGIC TO EDIT IN CLIENT
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
