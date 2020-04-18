import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MoviesApp from './Projects/moviesApp/App';
import Counter from './Projects/counter/App';
import Ads from './Projects/ads/App';
import WriterApp from './Projects/writerApp/App';
import NativeSchools from './Projects/native-schools/App';
import Home from './Home';

export default function App() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/nativeschools">
            <NativeSchools />
          </Route>
          <Route path="/moviesapp">
            <MoviesApp />
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}