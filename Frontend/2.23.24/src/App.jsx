import { useState } from "react";
import "./App.css";

import { NewTask } from "./Components/NewTask";

let dummyTasks = {
  deploySite: ["get fetches working", "create backend", "create UI"],
  getFetchesWorking: ["create backend", "createUI"],
  createUI: [],
  createBackend: [],
};

function App() {
  const [tasks, setTasks] = useState(dummyTasks);
  return (
    <div className="h-screen w-screen bg-red-900">
      <h1 className="bg-orange-700">Welcome to Your</h1>
      <h2>Workflow Wizard</h2>
      <div>
        <button>Add a New Task</button>
        <button>Onward!</button>
      </div>
      <NewTask />
    </div>
  );
}

export default App;
