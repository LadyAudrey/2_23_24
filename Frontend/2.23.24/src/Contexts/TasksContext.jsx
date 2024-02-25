import { createContext, useContext } from "react";

const ListsContext = createContext();

export function TasksWrapper({ children }) {
  const defaultTasks = {
    tasks: [
      {
        taskName: {
          otherTaskName: true,
          anotherTaskName: false,
        },
      },
    ],
    setTasks: () => {},
  };

  return (
    <ListsContext.Provider value={defaultTasks}>
      {children}
    </ListsContext.Provider>
  );
}

export function useListsContext() {
  return useContext(ListsContext);
}
