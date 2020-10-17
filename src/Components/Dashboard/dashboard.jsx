import React from 'react';
import './dashboard.scss';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Asserts/GKeep.png';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import DehazeIcon from '@material-ui/icons/Dehaze';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import TakeNote from './TakeNote'
import GetNote from './GetNote'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'

export default class dashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Account: false,
      open: true,
      openTrash: false,
      openArchive: false,
    };
  }

  handleAccountDrop = (event) => {
    this.setState({ Account: !this.state.Account });
  };

  handleDrawerOpen = (event) => {
    this.setState({ open: !this.state.open });
  };

  TrashHandle = () => {
    this.setState({ openTrash: !this.state.openTrash });
  }

  ArchiveHandle = () => {
    this.setState({ openArchive: !this.state.openArchive });
  }

  SignOut = () => {
    localStorage.removeItem('token');
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="DmainContainer">
        <div className="innerContainer">
          <div className="navMainContainer">
            <Navbar variant="light" className="NavbarContainer">
              <div className="DehazeIcon">
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={this.handleDrawerOpen}
                  aria-label="menu">
                  <DehazeIcon />
                </IconButton>
              </div>
              <div className="keepimage">
                <img src={logo} class="keepimage" alt="Temperature" />
              </div>
              <div className="Title">
                <Navbar.Brand className="KeepTitle">
                  <div className="F">F</div>
                  <div className="U">u</div>
                  <div className="N">n</div>
                  <div className="D">d</div>
                  <div className="O">o</div>
                  <div className="O1">o</div>
                </Navbar.Brand>
              </div>
              <div className="SearchContainer">

                <div className="searchIcon">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <SearchIcon />
                  </IconButton>
                </div>

                <div className="inputBox">
                  <InputBase
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                    fullWidth
                  />
                </div>
                <div className="ClearIcon">
                  <IconButton edge="start" color="inherit" aria-label="menu">
                    <ClearIcon />
                  </IconButton>
                </div>
              </div>
              <Dropdown >
                <div className="AccountCircleIcon">
                  <Dropdown.Toggle
                    className="DropDownAccount"
                    variant="light"
                    id="dropdown-basic">
                    {/* <IconButton
                      onClick={this.handleAccountDrop}
                      edge="start"
                      color="inherit"
                      aria-label="menu"> */}
                    <AccountCircleIcon fontSize="large" />
                    {/* </IconButton> */}
                  </Dropdown.Toggle>
                  {/* <Logout className="logout" status={this.state.Account} /> */}

                  <Dropdown.Menu className="AccountContainer">

                    <Dropdown.Item variant="outline-light" className="AccountSide1">
                      <AccountCircleIcon fontSize="large" className="InnerAccountIccount" />
                      <Form.Control className="AccountEmail" plaintext readOnly defaultValue="Vishalpwaman123@gmail.com" />
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className="AccountSide2">
                      <Form className="AccountForm">
                        
                      </Form>
                      <Button
                        className="SignOut"
                        variant="outline-dark"
                        onClick={() => {this.SignOut()}}>
                        SignOut
                      </Button>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </div>

              </Dropdown>
            </Navbar>
          </div>

          <div className="innersideContainer">
            <div className="MainNavContainer">
              <div className={this.state.open ? "sideNavBar1" : "sideNavBar2"}>
                <div className="sidebar-nav">
                  <div className="firstNav">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <EmojiObjectsOutlinedIcon />
                    </IconButton>
                    <div className="Font">Notes</div>
                  </div>
                  <div className="secondNav">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <NotificationsOutlinedIcon />
                    </IconButton>
                    <div className="Font">Reminders</div>
                  </div>
                  <div className="thirdNav">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <EditOutlinedIcon />
                    </IconButton>
                    <div className="Font">Edit</div>
                  </div>
                  <div className="fourthNav" onClick={() => { this.ArchiveHandle() }}>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                      <ArchiveOutlinedIcon />
                    </IconButton>
                    <div className="Font">Archive</div>
                  </div>
                  <div className="fifthNav" onClick={() => { this.TrashHandle() }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" >
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                    <div className="Font">Trash</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className={this.props.opens ? "MidContainer1" : "MidContainer2"}>
                <TakeNote opens={this.state.open} />

                <GetNote class="NotesBox" status={this.state} />
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
    );
  }

} 