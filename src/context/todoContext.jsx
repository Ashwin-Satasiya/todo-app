import { createContext } from "react";

export const todoContext = createContext();

export const TodoContextProvider = ({ children }) => {
  return <>{children}</>;
};
