import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import './dashboard'

function Logout(props) {
    return (
        <div>
            { props.status ?
                <div >
                    <Dropdown>
                        <Dropdown.Menu show>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                :
                <div>
                    {/* <IconButton onClick={this.handleAccountDrop} edge="start" color="inherit" aria-label="menu">
                  <AccountCircleIcon fontSize="large" />
                </IconButton> */}
                </div>
            }
        </div>
    )
}

export default Logout
