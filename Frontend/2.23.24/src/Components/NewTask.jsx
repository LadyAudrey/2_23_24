import { useState } from "react";

let tasks = {
  deploySite: ["get fetches working", "create backend", "create UI"],
  getFetchesWorking: ["create backend", "createUI"],
  createUI: [],
  createBackend: [],
};

export function NewTask() {
  //   const tasks = props;
  let [newTask, setNewTask] = useState("");
  const [hasPrerequisite, setHasPrerequisite] = useState(false);

  //   deleted the async to avoid errorsS
  function handleNewName() {
    // console.log("I would send something, but it won't go anywhere");
    // const newTaskName = newTask;
    tasks[newTask] = [];
    console.log(tasks);
    // await fetch("http://localhost:3001/", {
    //   headers: { "Content-Type": "application/json" },
    //   method: "POST",
    //   body: JSON.stringify(tasks),
    // });
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
    </>
  );
}
