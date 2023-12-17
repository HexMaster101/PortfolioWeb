import React, { useEffect } from "react";

export default function Links() {
	useEffect(() => {
		// const cards = document.getElementsByClassName();
		const footer = document.getElementById("footer");
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle("show", entry.isIntersecting);
				});
			},
			{
				threshold: 0.75,
			}
		);

		observer.observe(footer);

		// for (let i = 0; i < cards.length; i++) {
		// 	observer.observe(cards[i]);
		// }
	}, []);
	return (
		<>
			<section id="contact-section">
				<div className="container">
					<p className="about-text">Contact/{">"}</p>
					<div class="contact-content-con">
						<div class="contact-content-inner-con">
							<h1 className="contact-head">Get In Touch</h1>
							<p className="contact-para">
								I'm Currently looking for remote jobs or any new opportunities.
								<br />
								weather you have a project to discuss or just want to say "Hey",
								My inbox is open for all!
							</p>
							<a
								className="contact-link link"
								href="mailto:luckygupta9219@gmail.com"
								target="_blank"
								rel="noreferrer"
							>
								<span className="">Say Hey!!</span>
							</a>
						</div>
						<footer id="footer">
							<a
								href="https://github.com/HexMaster101/"
								target="_blank"
								className="link Link"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="img"
									class="iconify iconify--tabler"
									viewBox="0 0 24 24"
								>
									<path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2c2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2a4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6c-.6.6-.6 1.2-.5 2V21"
									></path>
								</svg>
							</a>
							<a
								href="https://www.instagram.com/tanishq092"
								className="link Link"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="img"
									class="iconify iconify--mdi"
									viewBox="0 0 24 24"
								>
									<path
										fill="currentColor"
										d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
									></path>
								</svg>
							</a>
							<a
								href="https://twitter.com/tanishq_gupta_"
								className="link Link"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="img"
									class="iconify iconify--lucide"
									viewBox="0 0 24 24"
								>
									<path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"
									></path>
								</svg>
							</a>
							<a
								href="https://www.linkedin.com/in/ttanishq/"
								className="link Link"
								target="_blank"
								rel="noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									role="img"
									class="iconify iconify--lucide"
									viewBox="0 0 24 24"
								>
									<g
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
										<circle cx="4" cy="4" r="2"></circle>
									</g>
								</svg>
							</a>
						</footer>
					</div>
					{/* <------TIMELINE--------> */}

					<div className="timeline">
						<div className="bullet"></div>
					</div>
				</div>
			</section>
			<main>
				<a href="#contact-section">
					<div className="sideBrand link">
						<h1 className="brandText brandLogo">C.</h1>
						<p className="brandText brandPara">Links</p>
					</div>
				</a>
			</main>
		</>
	);
}
