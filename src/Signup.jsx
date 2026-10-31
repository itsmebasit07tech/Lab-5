import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (name.trim() === "" || email.trim() === "") {
      setMessage("Please enter your name and email!");
    } else {
      setMessage("Welcome " + name + "! Your signup was successful.");
    }
  };

  return (
    <div className="signup">
      <h2>Create Your Account</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button onClick={handleSubmit}>Sign Up</button>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Signup;
