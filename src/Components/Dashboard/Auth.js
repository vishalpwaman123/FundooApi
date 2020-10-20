import React from 'react'
import {Route,Redirect} from 'react-router-dom';

function Auth (props){
    
    if(!(localStorage.getItem("token") === null))
    {
        return(
            <Route  path={props.path}  exact={props.exact} component={props.component} />
       );    
    }
    else
    {
        console.log("Hello");
        return(<Redirect  to="/" />);
    }
 } 

export  default  Auth;






