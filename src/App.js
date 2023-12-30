import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Links from "./components/Links";
import CustomCursor from "./components/CustomCursor";

function App() {
	return (
		<main name="inner">
			<Navbar name="Tanishk Gupta | Portfolio" />
			<Home />
			<WhatIDo />
			<About />
			<Links />
			<CustomCursor />
		</main>
	);
}

export default App;
