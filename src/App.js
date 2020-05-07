import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Kanban from './Projects/kanban/App';
import WriterApp from './Projects/writerApp/App';
import Sponsors from './sponsors';
import Home from './Home';

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/writerapp">
            <WriterApp />
          </Route>
          <Route path="/kanban">
            <Kanban />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}