import { useState } from "react";

import { Prerequisites } from "./Prerequisites";

let dummyTasks = {
  deploySite: ["get fetches working", "create backend", "create UI"],
  getFetchesWorking: ["create backend", "createUI"],
  createUI: [],
  createBackend: [],
};

export function TaskLibrary() {
  const [changingPrerequisite, setChangingPrerequisite] = useState(false);
  const taskNamesArr = Object.keys(dummyTasks);
  return (
    <>
      <h3>What do I need to do first?</h3>
      <fieldset>
        <legend className="text-2xl">Your tasks</legend>
        <div>
          {!taskNamesArr && <h2>data pending</h2>}
          {taskNamesArr.length > 0 &&
            taskNamesArr.map((task, index) => {
              {
                const taskPrereqs = dummyTasks[task];
              }
              return (
                <li key={task}>
                  <h4>{task}</h4>
                  <input
                    value={changingPrerequisite}
                    type="checkbox"
                    className=""
                    onChange={() => {
                      setChangingPrerequisite(!changingPrerequisite);
                    }}
                  />
                </li>
              );
            })}
        </div>
      </fieldset>
      <Prerequisites task={"deploySite"} />
    </>
  );
}
