import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { useCreateUser } from "../hooks/register.hook";
import { useUser } from "../hooks/user.hook";

const RegisterPage = () => {
  const [registerForm, setRegisterForm] = useState({ email: "", password: "" });
  const userContext = useUser();
  const handleCreateUser = useCreateUser;

  return (
    <RegisterForm
      registerForm={registerForm}
      setRegisterForm={setRegisterForm}
      userContext={userContext}
      handleCreateUser={handleCreateUser}
    />
  );
};

export default RegisterPage;
