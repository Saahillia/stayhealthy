import { useState } from "react";

function Login() {
  const [password, setPassword] = useState("");

  return (
    <div>
      <h3>Login</h3>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {password === "" && <p style={{ color: "red" }}>Password required</p>}
      <button>Login</button>
    </div>
  );
}
export default Login;
