import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Links from "./components/Links";
import Cursor from "./components/Cursor";

function App() {
	return (
		<main name="inner">
			<Navbar name="Tanishk Gupta | Portfolio" />
			<Home />
			<WhatIDo />
			<About />
			<Links />
			<Cursor />
		</main>
	);
}

export default App;
