import React from "react";

function App() {
  return (
    <div style={{ padding: "20px", border: "2px solid blue", margin: "10px" }}>
      <h1>Remote Application</h1>
      <p>This is a remote app component</p>
      <button onClick={() => alert("Hello from Remote!")}>
        Click Remote Button
      </button>
    </div>
  );
}

export default App;
