import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Game from "./components/Game.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="heading">
          <p>TIC-TAC-TOE</p>
        </div>
        <div className="container">
          <Game />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
