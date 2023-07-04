import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState=(props)=>{
const notesInitial= [
    {
      "_id": "64a2822fc4afb7aeadghjd968e62",
      "user": "64a26e66f4525c93a9b1133f",
      "title": "My first note",
      "description": "Trying for the first time",
      "tag": "personal",
      "date": "2023-07-03T08:09:19.808Z",
      "__v": 0
    },
    {
      "_id": "64a2822fc4afb7aeartydd98e64",
      "user": "64a26e66f4525c93a9b1133f",
      "title": "My first note",
      "description": "Trying for the first time",
      "tag": "personal",
      "date": "2023-07-03T08:09:19.988Z",
      "__v": 0
    },
    {
      "_id": "64a28230c4afbger7aeadd98e66",
      "user": "64a26e66f4525c93a9b1133f",
      "title": "My first note",
      "description": "Trying for the first time",
      "tag": "personal",
      "date": "2023-07-03T08:09:20.143Z",
      "__v": 0
    },
    {
        "_id": "64a2822fc4afb57aeweadd98e62",
        "user": "64a26e66f4525c93a9b1133f",
        "title": "My first note",
        "description": "Trying for the first time",
        "tag": "personal",
        "date": "2023-07-03T08:09:19.808Z",
        "__v": 0
      },
      {
        "_id": "64a2822fc4afb73ae34a9dd98e64",
        "user": "64a26e66f4525c93a9b1133f",
        "title": "My first note",
        "description": "Trying for the first time",
        "tag": "personal",
        "date": "2023-07-03T08:09:19.988Z",
        "__v": 0
      },
      {
        "_id": "64a28230c4afb7a23eaddrty98e66",
        "user": "64a26e66f4525c93a9b1133f",
        "title": "My first note",
        "description": "Trying for the first time",
        "tag": "personal",
        "date": "2023-07-03T08:09:20.143Z",
        "__v": 0
      },
      {
        "_id": "64a2822fc4afb372aeadd98etyu62",
        "user": "64a26e66f4525c93a9b1133f",
        "title": "My first note",
        "description": "Trying for the first time",
        "tag": "personal",
        "date": "2023-07-03T08:09:19.808Z",
        "__v": 0
      }
  ]
const [notes,setNotes]=useState(notesInitial);
return(
    <NoteContext.Provider value={{notes,setNotes}}>
        {props.children}
    </NoteContext.Provider>
)
}

export default NoteState;