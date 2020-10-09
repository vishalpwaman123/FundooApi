import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card'
import noteService from '../../Services/noteServices';

const note_service = new noteService();

export default function GetNote() {
    const[notes,setNotes]=useState([]);

    useEffect(() => {
        note_service.getNotes()
        .then(data=> {
            console.log(data.data);
            setNotes(data.data);
        })
        .catch(error=>{
            console.log(error);
        });
    }, [])

    const Notes=notes.map(note=>
        <div className="NoteLayout">
            <Card>
                <Card.Body>{note.title}</Card.Body>
                <Card.Body>{note.description}</Card.Body>
            </Card>
        </div>
        )

    return(
        <div className="Notedisplay">
            {Notes}
        </div>
    );
}