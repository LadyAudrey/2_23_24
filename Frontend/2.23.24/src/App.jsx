import { useState } from "react";
import "./App.css";
import "./index.css";

import { NewTask } from "./Components/NewTask";

const tasks = {
  TaskName: [],
};

function App() {
  return (
    <div className="h-screen w-screen bg-red-900">
      <h1 className="bg-orange-700">Welcome to Your</h1>
      <h2>Workflow Wizard</h2>
      <div>
        <button>Add a New Task</button>
        <button>Onward!</button>
      </div>
      <NewTask tasks={tasks} />
    </div>
  );
}

export default App;
