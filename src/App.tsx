import React from 'react';
import Login from './Components/LoginForm'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Signup from './Components/Signup'
import Forgotpsw from './Components/forgotpassword'
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgotpsw" component={Forgotpsw} />
      </Router>
    </div>
  );
}

export default App;
