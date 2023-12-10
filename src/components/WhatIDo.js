import React from "react";
import Lottie from "lottie-react";
import lottieJson from "/public/lottie-animation/Animation - 1702107952627"; // Adjust the path based on your project structure

export default function WhatIDo() {
	return (
		<section id="wid-section">
			<div className="container">
				<div>
					<h1 className="wid-heading">What I Do</h1>
					<div className="about-content">
						<div className="lottie-container">
							<Lottie animationData={lottieJson} />
						</div>
						<div>
							<h1 className="content">Full Stack Development</h1>
						</div>
					</div>
				</div>
				{/* <------TIMELINE--------> */}

				<div className="timeline">
					<div className="bullet"></div>
				</div>
			</div>
		</section>
	);
}
