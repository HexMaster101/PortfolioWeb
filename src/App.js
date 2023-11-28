import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import VerticalLine from "./components/VerticalLine";

function App() {
	return (
		<main name="outer">
			<main name="inner">
				<Navbar name="Tanishk Gupta | portfolio" />
				<VerticalLine />
				<Home />
			</main>
		</main>
	);
}

export default App;
