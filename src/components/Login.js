import * as React from "react";
import { useSetUserContext } from "../contexts/user";

const Login = () => {
  const [user, setUser] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {email: "", password: ""}
  );
  const [error, setError] = React.useState(null);

  const isValidEmail = email => /\S+@\S+\.\S+/.test(email)

  React.useEffect(() => {
    setError(null);
  }, [user.email, user.password]);

  const setUserContext = useSetUserContext();

  const onSubmit = (e) => {
    setError(null);
    e.preventDefault();

    if (
      user.email &&
      isValidEmail(user.email) &&
      user.password &&
      user.password.trim() === "password"
    ) {
      setUserContext({
        name: "Test User",
        ...user
      });
    } else {
      setError("invalid");
    }
  }

  return (
    <React.Fragment>
      <h1>Login</h1>
      {error && <p>Error: {error}</p>}
      <form
        onSubmit={onSubmit}
      >
        <input
          name="email"
          onChange={event => {
            setUser({email: event.target.value})
          }}
        />
        <input
          name="password"
          onChange={event => {
            setUser({password: event.target.value})
          }}
        />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  );
};

export default Login;
