import { useContext, useState } from "react";

import { useListsContext } from "../Contexts/TasksContext";

import { Prerequisites } from "./Prerequisites";

export function TaskLibrary() {
  const [changingPrerequisite, setChangingPrerequisite] = useState(false);
  const { tasks, setTasks } = useListsContext();
  const taskNamesArr = tasks.map((obj) => Object.keys(obj));
  console.log(taskNamesArr);
  return (
    <>
      <h3>What do I need to do first?</h3>
      <fieldset>
        <legend className="text-2xl">Your tasks</legend>
        <div>
          {taskNamesArr.length > 0 &&
            taskNamesArr.map((task, index) => {
              {
                const taskPrereqs = taskNamesArr[index];
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
      {/* <Prerequisites task={"deploySite"} /> */}
    </>
  );
}
