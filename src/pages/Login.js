import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import { useAuthUser } from "../hooks/login.hook";
import { useUser } from "../hooks/user.hook";

const LoginPage = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const userContext = useUser();
  const handleAuthUser = useAuthUser;
  const navigate = useNavigate();
  return (
    <LoginForm
      loginForm={loginForm}
      handleAuthUser={handleAuthUser}
      setLoginForm={setLoginForm}
      userContext={userContext}
      navigate={navigate}
    />
  );
};

export default LoginPage;
