import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const noteTest = [
    {
      _id: "63be8c3e6aedb161f8547dff",
      user: "63be8c1b6aedb161f8547dfd",
      title: "test title test title test title test title",
      description: "test note for first client ",
      tag: "Public",
      date: "2023-01-11T10:15:26.942Z",
      __v: 0,
    },
    {
      _id: "63be8c4e6aedb161f8547e01",
      user: "63be8c1b6aedb161f8547dfd",
      title: "test title 2",
      description: "test note for first client and same note",
      tag: "Public",
      date: "2023-01-11T10:15:42.370Z",
      __v: 0,
    },
    {
      _id: "63be8c4e6aedb161f8547e01",
      user: "63be8c1b6aedb161f8547dfd",
      title: "test title 2",
      description: "test note for first client and same note",
      tag: "Public",
      date: "2023-01-11T10:15:42.370Z",
      __v: 0,
    },
    {
      _id: "63be8c4e6aedb161f8547e01",
      user: "63be8c1b6aedb161f8547dfd",
      title: "test title 2",
      description: "test note for first client and same note",
      tag: "Public",
      date: "2023-01-11T10:15:42.370Z",
      __v: 0,
    },
    {
      _id: "63be8c4e6aedb161f8547e01",
      user: "63be8c1b6aedb161f8547dfd",
      title: "test title 2",
      description: "test note for first client and same note",
      tag: "Public",
      date: "2023-01-11T10:15:42.370Z",
      __v: 0,
    },
    {
      _id: "63be8c4e6aedb161f8547e01",
      user: "63be8c1b6aedb161f8547dfd",
      title: "test title 2",
      description: "test note for first client and same note",
      tag: "Public",
      date: "2023-01-11T10:15:42.370Z",
      __v: 0,
    },
    {
      _id: "63be8c4e6aedb161f8547e01",
      user: "63be8c1b6aedb161f8547dfd",
      title: "test title 2",
      description: "test note for first client and same note",
      tag: "Public",
      date: "2023-01-11T10:15:42.370Z",
      __v: 0,
    },
  ];
  // eslint-disable-next-line
  const [notes, setNotes] = useState(noteTest);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
