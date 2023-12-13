import React from "react";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<section id="home-background">
			<div className="container home-background">
				<motion.p
					variants={{
						hidden: { opacity: 0, y: -25 },
						visible: { opacity: 1, y: 0 },
					}}
					initial="hidden"
					animate="visible"
					transition={{ delay: 1.1 }}
					className="home-text"
				>
					Home/{">"}
				</motion.p>
				<motion.div
					variants={{
						hidden: { opacity: 0, x: 100 },
						visible: { opacity: 1, x: 0 },
					}}
					initial="hidden"
					animate="visible"
					transition={{ delay: 1.4 }}
					className="intro"
				>
					<h1 className="intro-text">
						Hii, My Name Is <span className="my-name">Tanishk Gupta</span>
					</h1>
					<h1 className="intro-text">
						i <span className="word-design">design</span> and develop
						webpages/web-apps.
					</h1>
					<p className="intro-para">Let me show You...</p>
				</motion.div>

				{/* <------TIMELINE--------> */}

				<div className="timeline-home">
					<div className="bullet-home bullet"></div>
					<a href="#wid-section" className="link">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 32 32"
							id="mouse"
						>
							<g
								data-name="Layer 2"
								fill="#000000"
								className="color000000 svgShape"
							>
								<path
									d="M16,2a9.01,9.01,0,0,0-9,9V21a9,9,0,0,0,18,0V11A9.01,9.01,0,0,0,16,2Zm7,19A7,7,0,0,1,9,21V11a7,7,0,0,1,14,0Z"
									fill="#000000"
									className="color000000 svgShape"
								></path>
								<path
									d="M16,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,16,8Z"
									fill="#000000"
									className="color000000 svgShape"
								></path>
							</g>
						</svg>
						<span name="scroll-button">SCROLL</span>
					</a>
				</div>
			</div>
		</section>
	);
}
