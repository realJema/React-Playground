import React from "react";
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import Content from "./content";
// {/* Hompage which contains the link to all the projects I am working on */}
export default function SubmenuBooks() {
     // this is necessary for adding nested routes 
     let { path, url } = useRouteMatch();
     return (
         
        <div className="col-md-11 ns_subcontainer">
            <div className="col-md-2 ns_submenu ns_submenu_videos">
                {/* this list has to be generated from the db */}
                 <ul>
                     <li>
                     <Link to={`${url}/1`}>Bokk 1</Link>
                     </li>
                     <li>
                     <Link to={`${url}/2`}>Book 2</Link>
                     </li>
                 </ul>
             </div>
 
             <Switch>
                 <Route path={`${path}/:id`}>
                     <Content/>
                 </Route>
             </Switch>
         </div>
  );
}