import { useState } from "react";

export function NewTask(props) {
  const tasks = props;
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
