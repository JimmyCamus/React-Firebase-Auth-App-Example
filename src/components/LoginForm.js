const LoginForm = ({
  setLoginForm,
  loginForm,
  handleAuthUser,
  userContext,
  navigate,
}) => {
  return (
    <div>
      <h2>Login</h2>
      <input
        name="email"
        placeholder="Email"
        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
      />
      <input
        name="password"
        placeholder="Password"
        type="password"
        onChange={(e) =>
          setLoginForm({ ...loginForm, password: e.target.value })
        }
      />
      <button onClick={() => handleAuthUser(loginForm, userContext, navigate)}>
        Login
      </button>
    </div>
  );
};

export default LoginForm;
