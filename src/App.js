import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";

function App() {
	return (
		<main name="inner">
			<Navbar name="Tanishk Gupta | Portfolio" />
			<Home />
			<About />
			<WhatIDo></WhatIDo>
		</main>
	);
}

export default App;
