import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Notes from './atomic/molecules/Notes/Notes';
import Login from './atomic/molecules/Auth/Login';
import Other from './atomic/molecules/Other/Other';


const App = () => {
  return (
    <Router>
      <div>
        <nav className="navigation">
          <ul>
            <li>
              <Link to="/">Notes</Link>
            </li>
						<li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/login" component={Login} />
          <Route component={Other} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;