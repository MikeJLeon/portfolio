import './styles/App.css'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Intro from "./components/Intro";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
    </div>
  );
}

export default App;
