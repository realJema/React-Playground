import React from "react";
import {
  Link
} from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.css';
// {/* Hompage which contains the link to all the projects I am working on */}
export default function Home() {
  let footerLinks = {
    padding: "0 14px",
    margin: 0,
  }
    return (
        <div className="main_container">
          <img className="logo" src={require('./logo.svg')} alt="native-logo" />
          <ul className="row">
            <li>
              <Link className="btn  btn-outline-dark" to="/nativeschools">Schools</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/writerapp">Writer</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/counter">Counter</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/ads">Ads</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/kanban">Kanban</Link>
            </li>
            <li>
              <Link className="btn  btn-outline-dark" to="/finder">Finder</Link>
            </li>
          </ul>
        <footer>
          <ul className="row">
            <li style={footerLinks}>
            <Link className="footer" to="/sponsors" 
            ><p>Sponsored by </p></Link>
            </li>
            <li style={footerLinks}>
            <Link className="footer" to="/missions" 
            > <p>Missions & Vision</p></Link>
            </li>
          </ul>
          </footer>
        </div>
  );
}
