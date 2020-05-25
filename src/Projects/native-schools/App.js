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
import Dashboard from "./Components/dashboard";

// importing font-awesome icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faFilePdf, faFilm, faAppleAlt, faCookie } from '@fortawesome/free-solid-svg-icons';
library.add(
  faHome,
  faFilePdf,
  faFilm,
  faAppleAlt,
  faCookie
)
// {/* Hompage which contains the link to all the projects I am working on */}
export default function NativeSchools() {
    // this is necessary for adding nested routes 
    let { path, url } = useRouteMatch();
    return (
        <div className="ns_container row">
            <div className="col-md-1 ns_menu">
                <ul>
                    <li>
                    <Link className="ns_menu_links" to={`${url}/dashboard`}><FontAwesomeIcon className="faIcons" icon="home" /></Link>
                    </li>
                    <li>
                    <Link className="ns_menu_links" to={`${url}/books`}><FontAwesomeIcon className="faIcons" icon="file-pdf" /></Link>
                    </li>
                    <li>
                    <Link className="ns_menu_links" to={`${url}/videos`}><FontAwesomeIcon className="faIcons" icon="film" /></Link>
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