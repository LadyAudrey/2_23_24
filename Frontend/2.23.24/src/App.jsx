import { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="h-screen w-screen bg-red-900">
      <h1 className="bg-orange-700">Welcome to Your</h1>
      <h2>Workflow Wizard</h2>
      <div>
        <h3>Add Your Tasks</h3>
        <h3>Does it have Prerequisites?</h3>
      </div>
      <div>
        <button>Add a new Task</button>
        <button>Onward!</button>
      </div>
    </div>
  );
}

export default App;
