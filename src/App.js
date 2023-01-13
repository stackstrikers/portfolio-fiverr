import { About, Banner, Cursor, Marquee, Projects } from "./components";
import "./styles/App.css";

function App() {
  return (
    <div className="app">
      <div className="noise"></div>
      <Cursor />
      <Banner />
      <About />
      <Marquee firstText="HIGHLITED" secondText="PROJECTS" />
      <Projects />
    </div>
  );
}

export default App;
