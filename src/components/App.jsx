import React, { useState } from "react";
import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note";
import CreateText from "./CreateText";


function App() {

    const [notes, setNotes]= useState([]);

    function addnote(newNote) {
        setNotes(prevItem => {
            return [...prevItem, newNote]
        })
    }

    function deleteNote(id) {
        setNotes(prevItem => {
           return prevItem.filter((noteItem, index) => {
                return index !== id; 
            })
        })
    }

    return (
    <div>
        <Header />
        <CreateText onAdd={addnote} />
        {notes.map((noteItem, index) => {
            return ( <Note
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content} 
            onDelete={deleteNote} 
            />)
        })}
        <Footer />
    </div>
    )
}
export default App;

