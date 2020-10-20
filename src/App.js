import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import login from './Components/Login/login.jsx'
import ResetPassword from './Components/ResetPassword/resetpassword.jsx'
import forgetPassword from './Components/ForgetPassword/forgetpassword.jsx'
import dashboard from './Components/Dashboard/dashboard.jsx'
import Auth from './Components/Dashboard/Auth'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/login" component={login} />
          <Route exact path="/forgetPassword" component={forgetPassword} />
          <Auth path="/resetpassword/:token" component={ResetPassword} />
          <Auth path="/dashboard" component={dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
