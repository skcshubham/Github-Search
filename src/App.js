import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/Users/UserList";
import "./App.css";

function App() {
	return (
		<div>
			<Navbar title="GITHUB SEARCH ENGINE" />
			Search will go here
			<div className="container">
				<UserList />
			</div>
		</div>
	);
}

export default App;
