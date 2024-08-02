import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) =>{
    
    const notesInitial=[
        {
          "_id": "66aa5f960db3201b5b856a3a",
          "user": "66aa1e809f54a6ebb4d53010",
          "title": "New Note",
          "description": " Please find the playlist",
          "tag": "youtube",
          "date": "2024-07-31T16:00:22.695Z",
          "__v": 0
        },
        {
          "_id": "66aa5f960db3201b5b856a3a",
          "user": "66aa1e809f54a6ebb4d53010",
          "title": "New Note",
          "description": " Please find the playlist",
          "tag": "youtube",
          "date": "2024-07-31T16:00:22.695Z",
          "__v": 0
        },
        {
          "_id": "66aa5f960db3201b5b856a3a",
          "user": "66aa1e809f54a6ebb4d53010",
          "title": "New Note",
          "description": " Please find the playlist",
          "tag": "youtube",
          "date": "2024-07-31T16:00:22.695Z",
          "__v": 0
        },
        {
          "_id": "66aa5f960db3201b5b856a3a",
          "user": "66aa1e809f54a6ebb4d53010",
          "title": "New Note",
          "description": " Please find the playlist",
          "tag": "youtube",
          "date": "2024-07-31T16:00:22.695Z",
          "__v": 0
        },
        {
          "_id": "66aa5f960db3201b5b856a3a",
          "user": "66aa1e809f54a6ebb4d53010",
          "title": "New Note",
          "description": " Please find the playlist",
          "tag": "youtube",
          "date": "2024-07-31T16:00:22.695Z",
          "__v": 0
        },
        {
          "_id": "66aa5f960db3201b5b856a3a",
          "user": "66aa1e809f54a6ebb4d53010",
          "title": "New Note",
          "description": " Please find the playlist",
          "tag": "youtube",
          "date": "2024-07-31T16:00:22.695Z",
          "__v": 0
        },
        {
          "_id": "66aa5f960db3201b5b856a3a",
          "user": "66aa1e809f54a6ebb4d53010",
          "title": "New Note",
          "description": " Please find the playlist",
          "tag": "youtube",
          "date": "2024-07-31T16:00:22.695Z",
          "__v": 0
        }
    ]

      const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;