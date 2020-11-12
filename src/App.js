import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Colors from './Projects/Colors/App';
import Sponsors from './Views/Sponsors';
import Missions from './Views/Missions';
import Home from './Views/Home';

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/colors">
            <Colors />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
