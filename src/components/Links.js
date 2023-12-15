import React from "react";

export default function Links() {
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
					</div>
					{/* <------TIMELINE--------> */}

					<div className="timeline">
						<div className="bullet"></div>
					</div>
				</div>
			</section>
			<main>
				<a href="/">
					<div className="sideBrand link">
						<h1 className="brandText brandLogo">C.</h1>
						<p className="brandText brandPara">Links</p>
					</div>
				</a>
			</main>
		</>
	);
}
