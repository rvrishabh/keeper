import React, { useState } from "react";


function CreateText(props) {
    const [inputText, setinputText] = useState({
        title: "",
        content: "",
    })

    function createNote(event) {
        const {name, value} = event.target
        setinputText(prevItem => {
            return {
                ...prevItem,
                [name]: value
            }
        });
    };

    function SubmitNote(event) {
        props.onAdd(inputText);
        setinputText({
        title: "",
        content: "",
        })
        event.preventDefault();
    }

    return (
        <div>
            <form>
            <input onChange={createNote} name="title" type="text" placeholder="Title" value={inputText.title} />
            <textarea onChange={createNote} name="content" placeholder="Take a note..." value={inputText.content} cols="30" rows="10"></textarea>
            <button onClick={SubmitNote}>Add</button>
            </form>
        </div>
    )
}

export default CreateText;