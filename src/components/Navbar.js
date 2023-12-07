import { useEffect } from "react";
import { motion } from "framer-motion";
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
			<div className="container navbar">
				<motion.h1
					variants={{
						hidden: { opacity: 0 },
						visible: { opacity: 1 },
					}}
					initial="hidden"
					animate="visible"
					transition={{ duration: 0.4 }}
					className="nav-head"
				>
					{name}
				</motion.h1>
				<nav>
					<motion.li
						variants={{
							hidden: { opacity: 0, y: -25 },
							visible: { opacity: 1, y: 0 },
						}}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.7 }}
						className="nav-links"
					>
						<a href="#about-section">About</a>
					</motion.li>
					<motion.li
						variants={{
							hidden: { opacity: 0, y: -25 },
							visible: { opacity: 1, y: 0 },
						}}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.8 }}
						className="nav-links"
					>
						<a href="/">Contact</a>
					</motion.li>
				</nav>
			</div>
		</header>
	);
}
