import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Counter from './Projects/counter/App';
import Ads from './Projects/ads/App';
import Kanban from './Projects/kanban/App';
import Finder from './Projects/finder/App';
import WriterApp from './Projects/writerApp/App';
import NativeSchools from './Projects/native-schools/App';
import Sponsors from './Projects/sponsors';
import Home from './Projects/Home';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Details from "./Projects/finder/Components/layout/details";

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/finder/details">
            <Details />
          </Route>
          <Route path="/nativeschools">
            <NativeSchools />
          </Route>
          <Route path="/writerapp">
            <WriterApp />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
          <Route path="/ads">
            <Ads />
          </Route>
          <Route path="/kanban">
            <Kanban />
          </Route>
          <Route path="/finder">
            <Finder />
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
