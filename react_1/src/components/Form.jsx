

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [submittedData, setSubmittedData] = useState([]);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const newData = {
      name: name,
      email: email,
      phone: phone,
      password: password,
    };

    setSubmittedData([...submittedData, newData]);

    setName("");
    setEmail("");
    setPassword("");
    setPhone("");
  };

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit={onSubmitHandler}>
        name:{" "}
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
        />
        <br />
        <br />
        email:{" "}
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
        />
        <br />
        <br />
        phone:{" "}
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          type="text"
        />
        <br />
        <br />
        password:{" "}
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
        />
        <br />
        <br />
        <input type="submit" />
      </form>
      <div>
        <h2>Submitted Data:</h2>
        {submittedData.map((data, index) => (
          <div key={index}>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
            <p>Password: {data.password}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Form;
