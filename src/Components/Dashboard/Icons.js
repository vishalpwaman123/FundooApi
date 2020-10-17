import React, { Component } from 'react';
import AddAlertOutlinedIcon from '@material-ui/icons/AddAlertOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import IconButton from '@material-ui/core/IconButton';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import './OptionsDrawer.scss'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import noteService from '../../Services/noteServices';

import Dropdown from 'react-bootstrap/Dropdown'

//import Color from './Color'

const note_service = new noteService();

export default class Icons extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            anchorEl: null,
        };
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });

    };

    handleClose = () => {

        this.setState({ anchorEl: null });

    };

    changeColor = (event) => {
        
        //console.log(props.notes);
        const Data={
            color:event,
            noteIdList: [this.props.notesId]
        }
        note_service.changeColor(Data)
        .then(data=>{
            console.log(data)
        }).catch(error=>{
            console.log(error);
        });
        
    }

    ArchiveHandle = event => {
        event.preventDefault();
        //console.log(event);
        const Data =
        {
            isArchived: true,
            noteIdList: [this.props.notesId]
        }
        console.log(Data);
        note_service.ArchiveNotes(Data)
            .then(data => {
                console.log(data);

            }).catch(error => {
                console.log(error);
            })

    }


    deleteHandle = event => {
        event.preventDefault();
        //console.log(event);
        const Data =
        {
            isDeleted: true,
            noteIdList: [this.props.notesId]
        }
        console.log(Data);
        note_service.DeleteNotes(Data)
            .then(data => {
                console.log(data);

            }).catch(error => {
                console.log(error);
            })

    }

    handleOption = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { anchorEl } = this.state;
        return (
            <div className={this.props.opens ? "manipulationButton1" : "manipulationButton"}>
                <div className="Icon1">
                    <IconButton edge="start"
                        color="inherit"
                        aria-label="menu"
                        size={this.props.iconstatus === true ? "small" : ""}>
                        <AddAlertOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="Icon">
                    <IconButton edge="start"
                        color="inherit"
                        aria-label="menu"
                        size={this.props.iconstatus === true ? "small" : ""}>
                        <PersonAddOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="Icon">
                    <Dropdown >
                        <IconButton edge="start"
                            color="inherit"
                            aria-label="menu"
                            size={this.props.iconstatus === true ? "small" : ""}
                        >
                            <Dropdown.Toggle
                                className="DropDownMaterial"
                                variant="light"
                                id="dropdown-basic"
                            >

                                <ColorLensOutlinedIcon fontSize="small" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item className="DropDownMain">
                                        <div className="MainColorContainer">
                                            <div className="A1"
                                                 onClick={() => {this.changeColor("#ff8080")}}>
                                            </div>
                                            <div className="A2"
                                                 onClick={() => {this.changeColor("#ff8080")}}>
                                            </div>
                                            <div className="A3"
                                                 onClick={() => {this.changeColor("#ff80ff")}}>
                                            </div>
                                            <div className="A4"
                                                 onClick={() => {this.changeColor("#3f4bf1")}}>
                                            </div>
                                            <div className="A5"
                                                 onClick={() => {this.changeColor("#8080ff")}}>
                                            </div>
                                            <div className="A6"
                                                 onClick={() => {this.changeColor("#80ff80")}}>
                                            </div>
                                            <div className="A7"
                                                 onClick={() => {this.changeColor("#ccccb3")}}>
                                            </div>
                                            <div className="A8"
                                                 onClick={() => {this.changeColor("#c93a42")}}>
                                            </div>
                                            <div className="A9"
                                                 onClick={() => {this.changeColor("#df9f9f")}}>
                                            </div>
                                            <div className="A10"
                                                 onClick={() => {this.changeColor("#80ffbf")}}>
                                            </div>
                                            <div className="A11"
                                                 onClick={() => {this.changeColor("#8080ff")}}>
                                            </div>
                                            <div className="A12"
                                                 onClick={() => {this.changeColor("#f332d9")}}>
                                            </div>
                                        </div>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </IconButton>
                    </Dropdown>
                </div>

                <div className="Icon">
                    <IconButton edge="start"
                        color="inherit"
                        aria-label="menu"
                        size={this.props.iconstatus === true ? "small" : ""}>
                        <ImageOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="Icon">
                    <IconButton edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={this.ArchiveHandle}
                        size={this.props.iconstatus === true ? "small" : ""}>
                        <ArchiveOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                
                <div className="Icon">
                    <IconButton edge="start" onClick={this.handleOption}
                        color="inherit"
                        aria-label="menu"
                        size={this.props.iconstatus === true ? "small" : ""}
                        aria-owns={anchorEl ? 'simple-menu' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleClick}
                    >
                        <MoreVertOutlinedIcon fontSize="small" />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={this.handleClose}
                    >
                        {
                            this.props.status ? <MenuItem onClick={this.deleteHandle}>Delete</MenuItem>
                                :
                                <div>
                                    <MenuItem>Add Label</MenuItem>
                                    <MenuItem>Add Drawing</MenuItem>
                                </div>
                        }
                    </Menu>
                </div>

            </div>
        )
    }
}