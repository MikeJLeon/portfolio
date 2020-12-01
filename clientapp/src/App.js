import './styles/App.css'
import Home from "./components/Home";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <Projects />
      <About />
    </div>
  );
}

export default App;
