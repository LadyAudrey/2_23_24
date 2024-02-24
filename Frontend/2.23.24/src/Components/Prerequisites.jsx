import { useState } from "react";

let dummyTasks = {
  "deploy site": ["get fetches working", "create backend", "create UI"],
  "get fetches working": ["create backend", "create UI"],
  "create UI": [],
  "create Backend": [],
};

export function Prerequisites() {
  const currentTaskPrereqs = dummyTasks["deploy site"];
  const tasks = Object.keys(dummyTasks);

  function handleChange(task) {
    const preReqIndex = currentTaskPrereqs.indexOf(task);
    console.log(currentTaskPrereqs);
    currentTaskPrereqs.splice(preReqIndex, 1);
    console.log(currentTaskPrereqs);
  }

  return (
    <>
      <div>
        <h4>What do I need to do first?</h4>
        <img src="/Figma/add.svg" />
      </div>
      <div>
        {!tasks && <h2>Create more tasks and you'll see them here!</h2>}
        {tasks.length > 0 &&
          tasks.map((task, index) => {
            console.log(currentTaskPrereqs);
            return (
              <li key={task}>
                <h4>{task}</h4>
                <input
                  value={currentTaskPrereqs.includes(task)}
                  type="checkbox"
                  className=""
                  onChange={handleChange(task)}
                />
              </li>
            );
          })}
      </div>
    </>
  );
}
