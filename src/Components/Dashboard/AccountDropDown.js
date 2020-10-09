import React , {Component} from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import Overlay from 'react-bootstrap/Overlay'
import Popover from 'react-bootstrap/Popover'



export default class AccountDropDown extends Component {
    
    constructor() {
        super();



    }

   render() {

       return (
           <div >
               { this.props.Accounts ? 
               <div className="DropdownMenu">
                    Hello
               </div>
               :
               <div>
                    false
               </div>
                }
           </div>
       )
   } 
}