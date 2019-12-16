import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from "./store";
import './App.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './components/home/Home.jsx'
import UserRepos from './components/user-repos/UserRepos.jsx'

const main = (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route path="/repos/:id" component = {UserRepos} />
        </Switch>
      </div>
    </Router>
  </Provider>
)
ReactDOM.render(main, document.getElementById('app'))

