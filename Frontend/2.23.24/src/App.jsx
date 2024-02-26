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
      <main className="h-screen w-screen overflow-scroll flex flex-col items-center bg-gradient-to-b from-yellow-900 to-orange-950">
        <h1 className="text-5xl text-slate-50">Welcome to Your</h1>
        <h2 className="text-3xl text-slate-50">Workflow Wizard</h2>
        <div>
          <button className="text-xl text-slate-50">Add a New Task</button>
          <button className="text-xl text-slate-50">Onward!</button>
        </div>
        <NewTask />
        <TaskLibrary />
      </main>
    </TasksWrapper>
  );
}

export default App;
