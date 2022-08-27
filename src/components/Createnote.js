import React from 'react'



function Createnote({updateText,saveNote,inputText}){
    return (
        <div className='note' >
            <textarea onChange={updateText} maxLength={100} placeholder='Type Here...' value={inputText} ></textarea>
            <div className='note-footer'>
                <button onClick={saveNote}>Save note</button>
            </div>
        </div>
    )
}


export default Createnote