import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import noteService from '../../Services/noteServices';
import './NoteLayout.scss'
import Icon from './Icons'
import UpdateNote from './UpdateNote'

const note_service = new noteService();

export default function GetNote(props) {
    //const [notes, setNotes] = useState([]);
    const [show, setshow] = useState(false);
    const [currentNote, setNote] = useState('')
    // const [DescriptionNote, setDescriptionNote] = useState('')

    // useEffect(() => {

    //     note_service.getNotes()
    //         .then(data => {
    //             props.GetNotes();
    //             console.log(data.data.data.data);
    //             setNotes(data.data.data.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, []);

    

    const handleNote = (event) => {
        setshow(true);
        setNote(event);
    }

    // const handleDescriptionNote = (event) => {
    //     setshow(true);
    //     setDescriptionNote(event);

    // }

    const Notes = props.notes.map(note =>
        
        <div>
            {props.status.SearchTitle === '' ?
                <div>
                    {
                        props.status.openArchive ?
                            <div>
                                {
                                    note.isArchived && !note.isDeleted ?
                                        <Card className="NoteLayout" style={{ backgroundColor: note.color }}>
                                            <Card.Body onClick={() => { handleNote(note) }} className="CartTitle">{note.title}</Card.Body>
                                            <Card.Body onClick={() => { handleNote(note) }} className="CartDescription">{note.description}</Card.Body>
                                            <div className="NoteIcon" ><Icon iconstatus={true} notesId={note.id} status={true} GetNotes={props.GetNotes()}/></div>
                                            <UpdateNote notes={currentNote} show={show} onHide={() => { setshow(false); }}></UpdateNote>
                                        </Card>
                                        :
                                        ""
                                }
                            </div>
                            :

                            <div>
                                {
                                    props.status.openTrash ?
                                        <div>
                                            {
                                                //delete deplay
                                                <div>
                                                    {
                                                        ( note.isDeleted )?
                                                            <div>
                                                                <Card className="NoteLayout" style={{ backgroundColor: note.color }}>
                                                                    <Card.Body className="CartTitle">{note.title}</Card.Body>
                                                                    <Card.Body className="CartDescription">{note.description}</Card.Body>
                                                                    {/* <div className="NoteIcon" ><Icon iconstatus={true} notesId={note.id} status={true} /></div> */}
                                                                    {/* <UpdateNote noteT={currentNote} noteD={DescriptionNote} show={show} onHide={() => { setshow(false); }} /> */}
                                                                </Card>
                                                            </div>
                                                            :
                                                            ""
                                                    }
                                                </div>
                                            }
                                        </div>
                                        :

                                        <div>
                                            {
                                                //Active Note

                                                note.isDeleted || note.isArchived ?
                                                    ""
                                                    :
                                                    <Card className="NoteLayout" style={{ backgroundColor: note.color }}>
                                                        <Card.Body onClick={() => { handleNote(note) }} className="CartTitle">{note.title}</Card.Body>
                                                        <Card.Body onClick={() => { handleNote(note) }} className="CartDescription">{note.description}</Card.Body>
                                                        <div className="NoteIcon" ><Icon iconstatus={true} notesId={note.id} status={true} GetNotes={props.GetNotes()}/></div>
                                                        <UpdateNote notes={currentNote} show={show} onHide={() => { setshow(false); }} />
                                                    </Card>
                                            }
                                        </div>
                                }
                            </div>
                    }
                </div>
                :
                <div>
                    {(props.status.SearchTitle === note.title) && (!note.isDeleted && !note.isArchived) ?
                        <div>
                            <Card className="NoteLayout" style={{ backgroundColor: note.color }}>
                                <Card.Body onClick={() => { handleNote(note) }} className="CartTitle">{note.title}</Card.Body>
                                <Card.Body onClick={() => { handleNote(note) }} className="CartDescription">{note.description}</Card.Body>
                                <div className="NoteIcon" ><Icon iconstatus={true} notesId={note.id} status={true} GetNotes={props.GetNotes}/></div>
                                <UpdateNote notes={currentNote} show={show} onHide={() => { setshow(false); }} GetNotes={props.GetNotes}/>
                            </Card>
                        </div>
                        :
                        <div>

                        </div>
                    }
                </div>
            }
        </div>
    )

    return (
        <div className="Notedisplay">
            {Notes}
        </div>
    );
}