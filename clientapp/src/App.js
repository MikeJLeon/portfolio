import './styles/App.css'
import Home from "./components/Home";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home/>
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
