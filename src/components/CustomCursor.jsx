"use client";
import { useEffect } from "react";

export default function CustomCursor() {
	useEffect(() => {
		const cursor = document.getElementById("cursor");
		const chaser = document.getElementById("chaser");

		let elementsArray = document.getElementsByClassName("link");
		for (let i = 0; i < elementsArray.length; i++) {
			elementsArray[i].addEventListener("mouseover", function () {
				chaser.style.height = "82px";
				chaser.style.transition = "all .35s";
			});
			elementsArray[i].addEventListener("mouseout", function () {
				chaser.style.height = "40px";
			});
		}

		const handleMouseMove = (e) => {
			let posX = e.clientX;
			let posY = e.clientY;

			cursor.style.left = `${posX}px`;
			cursor.style.top = `${posY}px`;

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
	}, []);

	return (
		<>
			<div id="chaser"></div>
			<div id="cursor"></div>
		</>
	);
}
