import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase.config";

export const useCreateUser = async (registerForm, userContext, navigate) => {
  const userCollectionReference = collection(db, "users");
  try {
    await addDoc(userCollectionReference, registerForm);
    await createUserWithEmailAndPassword(
      auth,
      registerForm.email,
      registerForm.password
    );
    onAuthStateChanged(auth, (currentUser) => {
      userContext.dispatch({ type: "login", user: currentUser });
    });
    navigate("/");
  } catch (error) {
    console.log(error.message);
  }
};
