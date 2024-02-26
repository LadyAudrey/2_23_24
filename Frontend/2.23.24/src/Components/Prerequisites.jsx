import { useState } from "react";

export function Prerequisites(props) {
  [changingPrerequisite, setChangingPrerequisite] = props;
  function exitPrereqs() {
    setChangingPrerequisite(!changingPrerequisite);
  }
  function handleChange(task) {}
  return (
    <>
      <div className="flex bg-gradient-to-b from-yellow-700 to-orange-700 p-5 border-4 border-solid border-cyan-950 rounded-md">
        <h4>What do I need to do first?</h4>
        <img
          className="w-5 h-auto mx-3"
          onClick={exitPrereqs()}
          src="/Figma/add.svg"
        />
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
}
