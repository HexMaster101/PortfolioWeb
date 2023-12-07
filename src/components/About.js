import React from "react";

export default function About() {
	return (
		<section id="about-section">
			<div className="container">
				<p className="about-text">About/{">"}</p>
				<div className="myDetailsContainer">
					<div data-line-nr="01" class="codeLine">
						<h1>
							<span className="colorPink">class</span>{" "}
							<span className="colorBlue">Tanishk_Gupta( )</span>:
						</h1>
					</div>
					<div data-line-nr="02" class="codeLine">
						<h1>
							<span name="dots">· ·</span>{" "}
							<span className="colorGrey">
								# My craziness is not everyone's cup of tea so just ignore it.
							</span>
						</h1>
					</div>
					<div data-line-nr="03" class="codeLine">
						<h1>
							<span name="dots">· ·</span>{" "}
							<span className="colorGrey">
								# I like to go a little overboard, because I want to!
							</span>
						</h1>
					</div>
					<div data-line-nr="04" class="codeLine">
						<h1>
							<span name="dots">· ·</span>{" "}
							<span className="colorGrey">
								# I am still a beginner and has yet to learn a lot!
							</span>
						</h1>
					</div>
					<div data-line-nr="05" class="codeLine emptyLine"></div>
					<div data-line-nr="06" class="codeLine">
						<h1>
							<span name="dots">· ·</span>{" "}
							<span className="colorPink">def</span>
							<span className="colorPurple"> __init__(self)</span>:
						</h1>
					</div>
					<div data-line-nr="07" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorPurple">self</span>.name{" "}
							<span className="colorPink">=</span>{" "}
							<span className="colorYellow">' Tanishk Gupta'</span>
						</h1>
					</div>
					<div data-line-nr="08" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorPurple">self</span>.birthUnixTimestamp{" "}
							<span className="colorPink">=</span>{" "}
							<span className="colorPurple">1070043300</span>
						</h1>
					</div>
					<div data-line-nr="09" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorPurple">self</span>.email{" "}
							<span className="colorPink">=</span>{" "}
							<span className="colorYellow">'luckygupta9219@gmail.com'</span>
						</h1>
					</div>
					<div data-line-nr="10" class="codeLine emptyLine"></div>
					<div data-line-nr="11" class="codeLine">
						<h1>
							<span name="dots">· ·</span>{" "}
							<span className="colorPink">def</span>
							<span className="colorGreen">
								{" "}
								education(<span className="colorPurple">self</span>)
							</span>
							:
						</h1>
					</div>
					<div data-line-nr="12" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorPurple">self</span>.underGraduationBoard{" "}
							<span className="colorPink">=</span>{" "}
							<span className="colorYellow">'CBSE Board'</span>
						</h1>
					</div>
					<div data-line-nr="13" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorPurple">self</span>.graduation{" "}
							<span className="colorPink">=</span>
							<span className="colorGreen"> {`{`}</span>
						</h1>
					</div>
					<div data-line-nr="14" class="codeLine">
						<h1>
							<span name="dots">· · · · · ·</span>{" "}
							<span className="colorYellow">'2021 - 2024' </span>:
							<span className="colorYellow">
								{" "}
								'Bachelor of Science - (B.Sc), Computer Science (IT)',
							</span>
						</h1>
					</div>
					<div data-line-nr="15" class="codeLine">
						<h1>
							<span name="dots">· · · · · ·</span>{" "}
							<span className="colorYellow">'2025 - 2027' </span>:
							<span className="colorYellow">
								{" "}
								'Master"s of Computer Application - (MCA), Computer Science (IT)
								(planned)'
							</span>
						</h1>
					</div>
					<div data-line-nr="16" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorGreen"> {`}`}</span>
						</h1>
					</div>
					<div data-line-nr="17" class="codeLine emptyLine"></div>
					<div data-line-nr="18" class="codeLine">
						<h1>
							<span name="dots">· ·</span>{" "}
							<span className="colorPink">def</span>
							<span className="colorGreen">
								{" "}
								skills(<span className="colorPurple">self</span>)
							</span>
							:
						</h1>
					</div>
					<div data-line-nr="19" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorPink">return</span>{" "}
							<span className="colorGreen"> {`{`}</span>
						</h1>
					</div>
					<div data-line-nr="20" class="codeLine">
						<h1>
							<span name="dots">· · · · · ·</span>{" "}
							<span className="colorYellow">
								'HTML/CSS/JS', 'Bootstrap', 'Node.js', 'React.js',
								'npm/yarn/pnpm', 'Adobe-Photoshop', 'Adobe-Illustrator',
								'Canva', 'Figma', 'Ui/Ux', 'Python', 'C++'
							</span>
						</h1>
					</div>
					<div data-line-nr="21" class="codeLine">
						<h1>
							<span name="dots">· · · ·</span>{" "}
							<span className="colorGreen"> {`}`}</span>
						</h1>
					</div>
					<div data-line-nr="22" class="codeLine emptyLine"></div>
					<div data-line-nr="23" class="codeLine">
						<h1>
							myDetails<span className="colorPink"> =</span>
							<span className="colorBlue"> Tanishk_Gupta( )</span>
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
}
