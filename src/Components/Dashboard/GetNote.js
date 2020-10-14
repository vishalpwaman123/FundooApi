import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import noteService from '../../Services/noteServices';
import './NoteLayout.scss'
import Icon from './Icons'
import UpdateNote from './UpdateNote'

const note_service = new noteService();

export default function GetNote(props) {
    const [notes, setNotes] = useState([]);
    const [show, setshow] = useState(false);
    const [currentNote, setNote] = useState('')

    useEffect(() => {
        note_service.getNotes()
            .then(data => {
                console.log(data.data.data.data);
                setNotes(data.data.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleNote = (event) => {
        setshow(true);
        setNote(event);
    }

    const Notes = notes.map(note =>
        <div >
            {
            note.isDeleted ? "" :
            <Card className="NoteLayout" >
                <Card.Body onClick={() => { handleNote(note) }} className="CartTitle">{note.title}</Card.Body>
                <Card.Body onClick={() => { handleNote(note) }} className="CartDescription">{note.description}</Card.Body>
                <div className="NoteIcon" ><Icon iconstatus={true} notesId={note.id} status={true}/></div>
                <UpdateNote notes={currentNote} show={show} onHide={() => { setshow(false); }} />
            </Card>
            }
        </div>

    )

    return (
        <div className="Notedisplay">
            {Notes}
        </div>
    );
}