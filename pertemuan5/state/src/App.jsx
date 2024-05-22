import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(["error 1", "error 2", "error 3"]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs"></p>
      <p>List of errors</p>
      <ul>
        {error.map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </ul>
      <button
        onClick={() => {
          setError([...error, "new error"]);
        }}
      >
        add error
      </button>
    </>
  );
}

export default App;
