import React, { useState } from "react";
import "./ContactPage.css";
import image from "../../assets/images/phone.webp";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required!";
    } else if (!/^[A-Za-z\s]{3,}$/.test(name)) {
      errors.name = "Only letters and spaces, min 3 chars!";
    }

    if (!email.trim()) {
      errors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Write the email in the correct format!";
    }

    if (!password.trim()) {
      errors.password = "Password is required!";
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
    ) {
      errors.password = "Min 8 chars, 1 uppercase, 1 lowercase, 1 digit!";
    }

    return errors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setName("");
          setEmail("");
          setPassword("");
          setErrors({});
        })
        .catch((error) => console.error("Error:", error));
    }
  };

  return (
    <div className="form">
      <img src={image} />
      <div className="formContainer">
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        {errors.name && <p className="error">{errors.name}</p>}
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <br />
        <button onClick={handleSubmit} className="buttonn">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
