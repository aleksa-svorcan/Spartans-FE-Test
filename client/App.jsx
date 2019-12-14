import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './components/home/Home.jsx'
import UserRepos from './components/user-repos/UserRepos.jsx'

const routing = (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/repos">Users</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path="/repos/:id" component = {UserRepos} />
      </Switch>
    </div>
  </Router>
)
ReactDOM.render(routing, document.getElementById('app'))