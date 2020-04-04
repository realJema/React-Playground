import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './App.css';

// importing the components 
import SubmenuBooks from './Components/submenu_books';
import SubmenuVideos from './Components/submenu_videos';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from "./Components/dashboard";
// {/* Hompage which contains the link to all the projects I am working on */}
export default function NativeSchools() {
    // this is necessary for adding nested routes 
    let { path, url } = useRouteMatch();
    return (
        <div className="ns_container row">
            <div className="col-md-1 ns_menu">
                <ul>
                    <li>
                    <Link to={`${url}/dashboard`}>Dashboard</Link>
                    </li>
                    <li>
                    <Link to={`${url}/books`}>Books</Link>
                    </li>
                    <li>
                    <Link to={`${url}/videos`}>Videos</Link>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route path={`${path}/dashboard`}>
                    <Dashboard />
                </Route>
                <Route path={`${path}/books`}>
                    <SubmenuBooks />
                </Route>
                <Route path={`${path}/videos`}>
                    <SubmenuVideos />
                </Route>
            </Switch>
        </div>
  );
}