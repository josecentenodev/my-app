import React, { useState } from "react";


function CreateArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const {title, content} = note;

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(e) {
        e.preventDefault();
        props.onAdd(note);
        setNote({
            title: "",
            content: ""
        })
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" value={title} onChange={handleChange}/>
                <textarea name="content" placeholder="Take a note..." rows="3" value={content} onChange={handleChange}/>
                <button onClick={submitNote}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
