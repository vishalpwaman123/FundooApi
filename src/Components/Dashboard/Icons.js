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
import Button from 'react-bootstrap/Button';

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

      deleteHandle = event => {
            event.preventDefault();
            //console.log(event);
            const Data=
            {
                isDeleted: true, 
                noteIdList: [this.props.notesId]
            }
            console.log(Data);
            note_service.DeleteNotes(Data)
            .then(data=>{
                console.log(data);
                
            }).catch(error=>{
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
                    <IconButton edge="start" color="inherit" aria-label="menu" size={this.props.iconstatus === true ? "small" : ""}>
                        <AddAlertOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="Icon">
                    <IconButton edge="start" color="inherit" aria-label="menu" size={this.props.iconstatus === true ? "small" : ""}>
                        <PersonAddOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="Icon">
                    <IconButton edge="start" color="inherit" aria-label="menu" size={this.props.iconstatus === true ? "small" : ""}>
                        <ColorLensOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="Icon">
                    <IconButton edge="start" color="inherit" aria-label="menu" size={this.props.iconstatus === true ? "small" : ""}>
                        <ImageOutlinedIcon fontSize="small" />
                    </IconButton>
                </div>
                <div className="Icon">
                    <IconButton edge="start" color="inherit" aria-label="menu" size={this.props.iconstatus === true ? "small" : ""}>
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