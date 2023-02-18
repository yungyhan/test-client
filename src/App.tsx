import { Hello } from "./Hello";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p style={{ fontSize: 200 }}>No you're a cocoon!!!</p>
        <Hello name={"cocoon"} />
        <Hello name={"coconut"} />
        <Hello name={"ruminant"} />
        <Hello name={"potato"} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
