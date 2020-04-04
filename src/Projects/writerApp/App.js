import React from "react";
import './App.css';

// importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
// {/* Hompage which contains the link to all the projects I am working on */}
export default function WriterApp() {
    return (
        <div className="main_writer row">
            {/* we divide the  content of this page into 3 sections  */}
            <div className="col-md-2">
                <h3>sidebar</h3>
            </div>
            <div className="col-md-5">
                <h3>Second column</h3>
            </div>
            <div className="col-md-5">
                <h3>third column</h3>
            </div>
        </div>
  );
}