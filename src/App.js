import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.css";
import "@fontsource/montserrat";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/resume" Component={Resume} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
