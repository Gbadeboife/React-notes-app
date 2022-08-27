import React from "react"


function Note({id,deleteNote,text}){
    return(
        <div className="note">
            <div className="note-body">{text}</div>
            <div className="note-footer">
                <button onClick={()=> deleteNote(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Note