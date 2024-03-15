import logo from "./logo.svg";
import "./App.css";
import NavBarDesktop from "./components/NavBarDesktop";

function App() {
  return (
    <div className="App">
      <main>
        <NavBarDesktop></NavBarDesktop>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </main>
    </div>
  );
}

export default App;
