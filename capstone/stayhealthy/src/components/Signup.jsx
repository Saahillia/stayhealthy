import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");

  return (
    <div>
      <h3>Signup</h3>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {email === "" && <p style={{ color: "red" }}>Email is required</p>}
      <button>Register</button>
    </div>
  );
}
export default Signup;
