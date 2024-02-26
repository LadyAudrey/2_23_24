import { useState } from "react";
import { useListsContext } from "../Contexts/TasksContext";
import { Prerequisites } from "./Prerequisites";

export function NewTask() {
  const { tasks, setTasks } = useListsContext();
  let [newTask, setNewTask] = useState("");
  const [hasPrerequisite, setHasPrerequisite] = useState(false);

  function handleNewTask() {
    const newTaskDict = { [newTask]: {} };
    setTasks(tasks.push(newTaskDict));
    console.log(tasks);
  }
  return (
    <>
      <div>
        <input
          autoFocus
          value={newTask}
          className=""
          onChange={(event) => {
            setNewTask(event.target.value);
          }}
          // const taskNamesArr = Object.keys(tasks);

          onBlur={handleNewTask}
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
    </>
  );
}
