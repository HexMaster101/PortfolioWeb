import React from "react";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<>
			<section id="home-background">
				<div className="container home-background">
					<motion.p
						variants={{
							hidden: { opacity: 0, y: -25 },
							visible: { opacity: 1, y: 0 },
						}}
						initial="hidden"
						animate="visible"
						transition={{ delay: 0.25 }}
						className=" home-text"
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
						transition={{ delay: 0.65 }}
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
				</div>
			</section>
		</>
	);
}
