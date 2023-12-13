import React, { useEffect } from "react";

export default function Cursor() {
	useEffect(() => {
		const cursor = document.getElementById("cursor");
		const chaser = document.getElementById("chaser");

		const handleMouseMove = (e) => {
			let posX = e.clientX;
			let posY = e.clientY;

			cursor.style.left = `${posX}px`;
			cursor.style.top = `${posY}px`;

			// chaser.style.left = `${posX}px`;
			// chaser.style.top = `${posY}px`;
			chaser.animate(
				{
					left: `${posX}px`,
					top: `${posY}px`,
				},
				{ duration: 300, fill: "forwards" }
			);
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []); // Empty dependency array ensures the effect runs once after the initial render

	return (
		<>
			<div id="chaser"></div>
			<div id="cursor"></div>
		</>
	);
}
