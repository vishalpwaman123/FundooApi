import React, { useState, useEffect } from 'react'
import noteService from '../../Services/noteServices';
import { Modal, Container, Button } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import IconButton from '@material-ui/core/IconButton';
import logo from '../../Asserts/pin.svg';
import Icon from './Icons'
import './Update.scss'

const note_service = new noteService();

export default function UpdateNote(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setDescription(props.notes.description);
        setTitle(props.notes.title);
    }, [props.notes.description, props.notes.title]);

    const Noteupdate = () => {
        const data = {
            noteId: props.notes.id,
            title: title,
            description: description
        }

        note_service.NoteUpdate(data).then(data => {
            console.log(data);

        }).catch(error => {
            console.log(error);
        })

    }

    return (
        <div >
            <Modal className="UpdateModel"
                {...props}
                centered
            >
                {/* <Modal.Header closeButton>
                    
                </Modal.Header> */}
                <Modal.Body className="show-grid">
                    <Container>
                        <form>
                            <div className="Input2">
                                <InputGroup size="lg" >
                                    <div className="firstinput">
                                        <FormControl
                                            className="InputGroup2"
                                            placeholder="Title"
                                            aria-label="Medium"
                                            value={props.notes.title}
                                            onChange={(e) => { setTitle(e.target.value) }}
                                            aria-describedby="inputGroup-sizing-sm"
                                        />
                                        
                                        <div className="ImageOutlinedIcon1">
                                            <IconButton edge="start" color="inherit" aria-label="menu">
                                                <img src={logo} fontSize="medium" />
                                            </IconButton>
                                        </div>
                                    </div>
                                </InputGroup>
                                <div className="secondinput">
                                    <FormControl
                                        className="InputGroup2"
                                        placeholder="note"
                                        aria-label="Medium"
                                        value={props.notes.description}
                                        onChange={(e) => { setDescription(e.target.value) }}
                                        aria-describedby="inputGroup-sizing-sm"
                                    />

                                </div>
                                <div className="manipulationButton">
                                    <div className="Icon">
                                        <Icon status={false} />
                                    </div>
                                    <Button
                                        variant="white"
                                        className="UpdateButton"
                                        onClick={() => { Noteupdate(); props.onHide() }}
                                    ><div className="Update">Update</div></Button>
                                </div>
                            </div>
                        </form>
                        
                    </Container>
                </Modal.Body>

            </Modal>
        </div>
    )
}

