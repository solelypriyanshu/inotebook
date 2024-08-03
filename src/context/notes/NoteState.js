import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:8000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //Get all notes
  const getNotes = async () => {
    //API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYTFlODA5ZjU0YTZlYmI0ZDUzMDEwIn0sImlhdCI6MTcyMjQyNzA2N30.w_cBuoN1urD6k8vQn_d53rx7gbLYVWMega2hIU-GFZc",
        },
      });

    const json = await response.json();
    console.log(json)
    setNotes(json);
  };

//add a note
const addNote = async (title, description, tag) => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYTFlODA5ZjU0YTZlYmI0ZDUzMDEwIn0sImlhdCI6MTcyMjQyNzA2N30.w_cBuoN1urD6k8vQn_d53rx7gbLYVWMega2hIU-GFZc",
        },
        body: JSON.stringify({title, description, tag}),
      });
      const note = await response.json();
      setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    //TODO: API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYTFlODA5ZjU0YTZlYmI0ZDUzMDEwIn0sImlhdCI6MTcyMjQyNzA2N30.w_cBuoN1urD6k8vQn_d53rx7gbLYVWMega2hIU-GFZc",
        },
      });
      const json = await response.json();
      console.log(json);

    const newNotes = notes.filter((note) => {return note._id !== id})
    setNotes(newNotes);
    };
  //edit a note
  const editNote = async (id,title, description, tag) => {
    //TODO: API Call
    try{
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjZhYTFlODA5ZjU0YTZlYmI0ZDUzMDEwIn0sImlhdCI6MTcyMjQyNzA2N30.w_cBuoN1urD6k8vQn_d53rx7gbLYVWMega2hIU-GFZc",
      },
      body: JSON.stringify({title, description, tag}),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));
    //logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (newNotes[index]._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    
    }
    setNotes(newNotes);
} catch (error) {
    console.error("Error updating note:", error);
  }
  };

  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
