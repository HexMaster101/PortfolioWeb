"use client";
import { useEffect } from "react";
import Button from "./utils/Button";

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
			<div className="container navbar">
				<h1 className="nav-head">{name}</h1>
				<nav>
					<li className="nav-links">
						<a href="#about-section" className="link">
							WhatIDO
						</a>
					</li>
					<li className="nav-links">
						<a href="#about-section" className="link">
							About
						</a>
					</li>
					<li className="nav-links">
						<a href="#contact-section" className="link">
							Contact
						</a>
					</li>
				</nav>
				<Button text="My Resume" href="#" target="_self" />
			</div>
		</header>
	);
}
