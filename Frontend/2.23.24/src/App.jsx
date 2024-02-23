import { useState } from "react";
import "./App.css";
import "./index.css";

const tasks = {
  TaskName: [],
};

function App() {
  const [newTask, setNewTask] = useState("");
  const [hasPrerequisite, setHasPrerequisite] = useState(false);

  async function handleNewName() {
    await fetch("http://localhost:3001/", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(tasks),
    });
  }

  return (
    <div className="h-screen w-screen bg-red-900">
      <h1 className="bg-orange-700">Welcome to Your</h1>
      <h2>Workflow Wizard</h2>
      <div>
        <button>Add a New Task</button>
        <button>Onward!</button>
      </div>
      <div>
        <input
          autoFocus
          value={newTask}
          className=""
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
          onBlur={handleNewName}
        />
        <input
          value={hasPrerequisite}
          type="checkbox"
          className=""
          onChange={() => {
            setHasPrerequisite(!hasPrerequisite);
          }}
        />
      </div>
    </div>
  );
}

export default App;
