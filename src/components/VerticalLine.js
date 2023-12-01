import React from "react";

export default function VerticalLine() {
	return (
		<div className="container">
			<a href="#about-section">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="mouse">
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
			<div className="timeline"></div>
			<div className="bullet"></div>
		</div>
	);
}
