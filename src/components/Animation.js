import { useEffect } from "react";

export default function Animation() {
	useEffect(() => {
		const footer = document.getElementById("footer");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle("show", entry.isIntersecting);
					if (entry.isIntersecting) observer.unobserve(entry.target);
				});
			},
			{
				threshold: 0.5,
			}
		);
		const sections = document.getElementsByClassName("section");
		for (let i = 0; i < sections.length; i++) {
			observer.observe(sections[i]);
		}
		observer.observe(footer);
	}, []);
}
