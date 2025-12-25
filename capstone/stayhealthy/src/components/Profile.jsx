import { useState } from "react";

function Profile() {
  const [name, setName] = useState("John Doe");

  return (
    <div>
      <h3>Profile</h3>
      <p>Name: {name}</p>
      <button onClick={() => setName("Updated Name")}>
        Save
      </button>
    </div>
  );
}
export default Profile;
