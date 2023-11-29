import { useEffect } from "react";
import React from "react";

const hideNavWhileScrolling = (id = "navbar", offset = 100, when = true) => {
	const nav = document.getElementById(id);
	if (!nav) return;

	let prevScrollPos = window.scrollY;

	window.onscroll = () => {
		if (when) {
			const curScrollPos = window.scrollY;
			if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
			else nav.style.top = "0";
			prevScrollPos = curScrollPos;
		}
	};
};

export default function Navbar({ name }) {
	useEffect(() => {
		hideNavWhileScrolling();
	}, []);

	return (
		<header id="navbar">
			<h1 className="nav-head">{name}</h1>
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
