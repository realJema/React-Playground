import React from "react";
import {
  Link
} from "react-router-dom";
import "./App.css";


import 'bootstrap/dist/css/bootstrap.css';
// {/* Hompage which contains the link to all the projects I am working on */}
export default function Home() {
    return (
		<div className="main_container">
			<h1 className="brand">NATIVE</h1>
			<br />
			<ul className="row">
				<li>
					<a
						className="btn  btn-outline-dark"
						rel="noopener noreferrer"
						target="_blank"
						href="https://selfmade.native237.com"
					>
						Self Made
					</a>
				</li>
				<li>
					<a
						className="btn  btn-outline-dark"
						rel="noopener noreferrer"
						target="_blank"
						href="https://truestory.native237.com"
					>
						True Story
					</a>
				</li>
				<li>
					<Link className="btn  btn-outline-dark" to="/colors">
						Colors
					</Link>
				</li>
			</ul>
			<footer>
				<Link className="footer" to="/sponsors">
					<p>Sponsored by</p>
				</Link>
			</footer>
		</div>
	);
}
