import { onAuthStateChanged } from "firebase/auth";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import { auth } from "./firebase.config";
import { useUser } from "./hooks/user.hook";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
const App = () => {
  const userContext = useUser();
  const ctxUser = userContext.user;

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      userContext.dispatch({ type: "login", user: currentUser });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage ctxUser={ctxUser} />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
