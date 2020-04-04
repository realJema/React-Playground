import React from "react";
import {
  useParams,
} from "react-router-dom";
// {/* Hompage which contains the link to all the projects I am working on */}
export default function Content() {
    
  let { id } = useParams();
    return (
        <div className="col-md-9 ns_content">
            <h6>This is the content {id}</h6>
        </div>
  );
}