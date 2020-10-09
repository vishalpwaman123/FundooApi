import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import login from './Components/Login/login.jsx'
import ResetPassword from './Components/ResetPassword/resetpassword.jsx'
import forgetPassword from './Components/ForgetPassword/forgetpassword.jsx'
import dashboard from './Components/Dashboard/dashboard.jsx'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ Registration } />
        <Route exact path="/login" component={ login } />
        <Route exact path="/forgetPassword" component={ forgetPassword } />
        <Route exact path="/resetPassword" component={ ResetPassword } />
        <Route exact path="/dashboard" component={ dashboard } />
      </Router>
    </div>
  );
}

export default App;
