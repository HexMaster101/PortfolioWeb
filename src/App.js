import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
	return (
		<main name="outer">
			<main name="inner">
				<Navbar name="Tanishk Gupta | portfolio" />
				<Home />
			</main>
		</main>
	);
}

export default App;
