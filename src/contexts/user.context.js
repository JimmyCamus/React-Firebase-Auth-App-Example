import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/user.reducer";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, dispatch] = useReducer(userReducer, {});
  const value = { user, dispatch };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
