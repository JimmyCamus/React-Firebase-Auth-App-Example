const RegisterForm = ({
  setRegisterForm,
  registerForm,
  handleCreateUser,
  userContext,
  navigate,
}) => {
  return (
    <div>
      <h2>Register</h2>
      <input
        name="email"
        placeholder="Email"
        onChange={(e) =>
          setRegisterForm({ ...registerForm, email: e.target.value })
        }
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setRegisterForm({ ...registerForm, password: e.target.value })
        }
      />
      <button
        onClick={() => handleCreateUser(registerForm, userContext, navigate)}
      >
        Register
      </button>
    </div>
  );
};

export default RegisterForm;
