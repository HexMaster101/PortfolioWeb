import React from "react";

export default function Navbar(props) {
	return (
		<header className="navbar">
			<h1 className="nav-head">{props.name}</h1>
			<nav>
				<li className="nav-links">
					<a href="/">About</a>
				</li>
				<li className="nav-links">
					<a href="/">Contact</a>
				</li>
			</nav>
		</header>
	);
}
