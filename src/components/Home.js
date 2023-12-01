import React from "react";

export default function Home() {
	return (
		<>
			<section id="home-background">
				<div className="container home-background">
					<p className=" home-text">Home/{">"}</p>
					<div className="intro">
						<h1 className="intro-text">
							Hii, My Name Is <span className="my-name">Tanishk Gupta</span>
						</h1>
						<h1 className="intro-text">
							i <span className="word-design">design</span> and develop
							webpages/web-apps.
						</h1>
						<p className="intro-para">Let me show You...</p>
					</div>
				</div>
			</section>
		</>
	);
}
