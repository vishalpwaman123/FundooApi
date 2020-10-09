import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import React, { Component } from 'react';
import './dashboard.scss';
import logo from '../../Asserts/pin.svg';
import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import Button from 'react-bootstrap/Button'
import noteService from '../../Services/noteServices';
import Form from 'react-bootstrap/Form'
//import ToastMessage from './ToastMessage'
//import Createcard from './CreateCard'

const note_service = new noteService();

export default class TakeNote extends Component {

    constructor(props) {
        super(props);
        this.state = {

            Notes: true,
            title: null,
            description: null,
            toastAlert: true,
            toastMessage: null,

            CartNotes: {
                title: null,
                description: null,
            }
        };
    }

    clickHandler = (event) => {
        this.setState({
            Notes: !this.state.Notes
        });
    };

    Submit = event => {
        event.preventDefault();

        if (this.state.title === null) {
            //this.state.toastAlert = false;
            console.log("Please Enter Title");
            this.state.toastMessage = "Please Enter Title"
        } else {
            console.log(this.state.title);
            const note = {
                title: this.state.title,
                description: this.state.description,
            };

            note_service.CreateNote(note)
                .then(data => {
                    console.log("Cart Data :", data);
                    const object = data.data;
                    console.log(object.success);
                    console.log(object.message);
                    
                })
                .catch(error => {
                    console.log(error);
                })
        }

    }

    render() {
        return (
            <div>
                { this.state.toastAlert ?
                    <div>
                        <div className="NoteInputField">
                            {this.state.Notes ?

                                <div className={this.props.opens ? "Middleinput1" : "Middleinput2"}>
                                    <InputGroup size="lg" >
                                        <Form.Control
                                            placeholder="Take a note...."
                                            className="InputGroup"
                                            aria-label="Large"
                                            value={this.state.title}
                                            aria-describedby="inputGroup-sizing-sm"
                                            onClick={this.clickHandler}
                                        />
                                        <div className="checkBoxOutlinedIcon">
                                            <IconButton edge="start" color="inherit" aria-label="menu">
                                                <CheckBoxOutlinedIcon fontSize="medium" />
                                            </IconButton>
                                        </div>
                                        <div className="BrushOutlinedIcon">
                                            <IconButton edge="start" color="inherit" aria-label="menu">
                                                <BrushOutlinedIcon fontSize="medium" />
                                            </IconButton>
                                        </div>
                                        <div className="ImageOutlinedIcon">
                                            <IconButton edge="start" color="inherit" aria-label="menu">
                                                <ImageOutlinedIcon fontSize="medium" />
                                            </IconButton>
                                        </div>
                                    </InputGroup>
                                </div>
                                :
                                <div className={this.props.opens ? "Middleinput1" : "Middleinput2"}>
                                    <form onSubmit={this.handleSubmit}>
                                        <div className="Input2">
                                            <InputGroup size="lg" >
                                                <div className="firstLine">
                                                    <FormControl
                                                        className="InputGroup2"
                                                        placeholder="Title"
                                                        aria-label="Medium"
                                                        onChange={(e)=>{this.setState({title:e.target.value})}}
                                                        aria-describedby="inputGroup-sizing-sm"
                                                    />
                                                    <div className="ImageOutlinedIcon">
                                                        <IconButton edge="start" color="inherit" aria-label="menu">
                                                            <img src={logo} fontSize="medium" />
                                                        </IconButton>
                                                    </div>
                                                </div>
                                            </InputGroup>
                                            <div className="secondLine">
                                                <FormControl
                                                    className="InputGroup2"
                                                    placeholder="Take a note..."
                                                    aria-label="Medium"
                                                    onChange={(e)=>{this.setState({description:e.target.value})}}
                                                    aria-describedby="inputGroup-sizing-sm"
                                                />
                                            </div>
                                            <div className="manipulationButton">
                                                <div className="Icon">
                                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                                        <AddAlertOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                                <div className="Icon">
                                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                                        <PersonAddOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                                <div className="Icon">
                                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                                        <ColorLensOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                                <div className="Icon">
                                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                                        <ImageOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                                <div className="Icon">
                                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                                        <ArchiveOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                                <div className="Icon">
                                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                                        <MoreVertOutlinedIcon fontSize="small" />
                                                    </IconButton>
                                                </div>
                                                <Button
                                                    variant="white"
                                                    className="closeButton"
                                                    onClick={this.Submit}
                                                >Close</Button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            }
                        </div>
                        <div className="CartsSection">

                        </div>
                    </div>

                    :
                    <div>

                    </div>
                }
            </div>
        )
    }
}