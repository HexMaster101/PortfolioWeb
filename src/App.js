import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import React from "react";
import Links from "./components/Links";

function App() {
	return (
		<main name="inner">
			<Navbar name="Tanishk Gupta | Portfolio" />
			<Home />
			<WhatIDo />
			<About />
			<Links />
		</main>
	);
}

export default App;
