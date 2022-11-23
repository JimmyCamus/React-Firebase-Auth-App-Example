import { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import { useCreateUser } from "../hooks/register.hook";
import { useUser } from "../hooks/user.hook";

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState({ email: "", password: "" });
  const userContext = useUser();
  const handleCreateUser = useCreateUser;
  const navigate = useNavigate();

  return (
    <RegisterForm
      registerForm={registerForm}
      setRegisterForm={setRegisterForm}
      userContext={userContext}
      handleCreateUser={handleCreateUser}
      navigate={navigate}
    />
  );
};

export default RegisterPage;
