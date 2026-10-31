
import { useState } from "react";
import Signup from "./Signup";
import Counter from "./Counter";
import "./App.css";

function App() {
  const [selectedContact, setSelectedContact] = useState("");
  
  const contacts = [
    "Ali",
    "Ahmed",
    "Basit",
    "Hamza",
    "Usman",
    "Hassan"
  ];

  return (
    <div className="container">

      <div className="sidebar">
        <h2>Contacts</h2>

        {contacts.map((contact, index) => (
          <div
            className="contact"
            key={index}
            onClick={() => setSelectedContact(contact)}
          >
            {contact}
          </div>
        ))}
      </div>

      <div className="main-content">
        <h1>Welcome to My Application</h1>

        {selectedContact && (
          <h3>Selected Contact: {selectedContact}</h3>
        )}

        <Signup />

        <Counter />
      </div>

    </div>
  );
}

export default App;
