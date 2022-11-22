import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

export const useAuthUser = async (loginForm, userContext, navigate) => {
  try {
    await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password);
    onAuthStateChanged(auth, (currentUser) => {
      userContext.dispatch({ type: "login", user: currentUser });
    });
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
