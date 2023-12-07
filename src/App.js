import "./App.css";
import Navbar from "./components/Navbar";
import VerticalLine from "./components/VerticalLine";
import Home from "./components/Home";
import About from "./components/About";

function App() {
	return (
		<main name="inner">
			<Navbar name="Tanishk Gupta | Portfolio" />
			<VerticalLine />
			<Home />
			<About />
		</main>
	);
}

export default App;
