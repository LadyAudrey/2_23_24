import { useState, useEffect } from "react";
import "./App.css";

// import { useTasksContext } from "./Contexts/TasksContext";
import { TasksWrapper } from "./Contexts/TasksContext";

import { NewTask } from "./Components/NewTask";
import { TaskLibrary } from "./Components/TaskLibrary";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks();
    // console.log(tasks);
  }, [tasks]);

  return (
    <TasksWrapper>
      <main className="h-screen w-screen bg-red-900">
        <h1 className="bg-orange-700">Welcome to Your</h1>
        <h2>Workflow Wizard</h2>
        <div>
          <button>Add a New Task</button>
          <button>Onward!</button>
        </div>
        <NewTask />
        <TaskLibrary />
      </main>
    </TasksWrapper>
  );
}

export default App;
