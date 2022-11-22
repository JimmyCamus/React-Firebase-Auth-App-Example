import { signOut } from "firebase/auth";
import { auth } from "../firebase.config";

export const useLogOut = async (userContext) => {
  await signOut(auth);
  userContext.dispatch({ type: "singout" });
};
