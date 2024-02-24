import { useState } from "react";

let dummyTasks = {
  deploySite: ["get fetches working", "create backend", "create UI"],
  getFetchesWorking: ["create backend", "createUI"],
  createUI: [],
  createBackend: [],
};

export function TaskLibrary() {
  const taskNamesArr = Object.keys(dummyTasks);
  return (
    <>
      <h3>What do I need to do first?</h3>
      <fieldset>
        <legend className="text-2xl">TDL</legend>
        <div>
          {!taskNamesArr && <h2>data pending</h2>}
          {taskNamesArr.length &&
            taskNamesArr.map((list) => {
              {
                /* uuidv4 creates a random, unique identifier string */
              }
              return <List key={uuidv4()} list={list} />;
            })}
        </div>
      </fieldset>
    </>
  );
}
