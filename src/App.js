import React from 'react';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import login from './Components/Login/login.jsx'

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={ Registration } />
        <Route exact path="/login" component={ login } />
      </Router>
    </div>
  );
}

export default App;
