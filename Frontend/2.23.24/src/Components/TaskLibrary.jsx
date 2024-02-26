import { useState, useEffect } from "react";

import { useListsContext } from "../Contexts/TasksContext";

import { Prerequisites } from "./Prerequisites";

export function TaskLibrary() {
  const { tasks, setTasks } = useListsContext();
  const taskNamesArr = tasks.map((obj) => Object.keys(obj));
  const [changingPrerequisite, setChangingPrerequisite] = useState(false);

  useEffect(() => {}, [tasks]);
  return (
    <>
      <fieldset>
        <legend className="text-2xl text-slate-50">Your tasks</legend>
        <div>
          {taskNamesArr.length > 0 &&
            taskNamesArr.map((task, index) => {
              let hasPrereq = false;
              {
                setChangingPrerequisite(!changingPrerequisite);
              }
              {
                const taskPrereqsKey = taskNamesArr[index];

                if (
                  Object.values(tasks[index][taskPrereqsKey]).includes(true)
                ) {
                  hasPrereq = true;
                }
              }
              return (
                <li key={task} className="m-10 text-slate-50 flex">
                  <h4>{task}</h4>
                  <input
                    value={hasPrereq}
                    type="checkbox"
                    className="mx-5"
                    onChange={() => {
                      changingPrerequisite = !changingPrerequisite;
                    }}
                  />
                  {changingPrerequisite && (
                    <Prerequisites
                      changingPrerequisite={changingPrerequisite}
                      setChangingPrerequisite={setChangingPrerequisite}
                    />
                  )}
                </li>
              );
            })}
        </div>
      </fieldset>
      {/* <Prerequisites task={"deploySite"} /> */}
    </>
  );
}
