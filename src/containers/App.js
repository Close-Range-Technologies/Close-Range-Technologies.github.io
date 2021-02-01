import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/logo.png";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navigation /> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CloseRange Technologies</h1>
          <p>Website coming soon...</p>
        </header>
      </div>
    </Router>
  );
}

export default App;
