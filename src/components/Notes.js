import React,{useState} from 'react'
import Note from './Note'
import Createnote from './Createnote'
import {v4 as uuid} from 'uuid'
import './css/Notes.css'


function Notes(){



    const updateText=(e)=>{
        setText(e.target.value)
    }

    const saveNote=()=>{
        setNotes((prevState)=>[
            ...prevState , {
                key:uuid(),
                id:uuid(),
                text:text,
            }
        ]);
        setText('');
    }

    const deleteNote =(id)=>{
        const filteredNotes=notes.filter((note)=>{return note.id !== id});
        setNotes(filteredNotes);
    }
    
    useEffect(()=>{const data=JSON.parse(localStorage.getItem('Notes'));setNotes(data)},[]);
    
    useEffect(()=>{localStorage.setItem('Notes',JSON.stringify(notes))},[notes]);

    return(
        <div className='Notes'>
            {notes.map((note)=>(
            <Note deleteNote={deleteNote} id={note.id} text={note.text}/>
            ))}
            <Createnote updateText={updateText} saveNote={saveNote} inputText={text}/>
        </div>
    )
}

export default Notes
