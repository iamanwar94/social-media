import React, { useState } from "react";
import Gendre from "./Gendre";
import "./signup.css";
import wed from "../image/wed.png"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gendre, setGendre] = useState("");
  const nameChangeHandler = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const gendreChangeHandler = (e) => {
    setGendre(e.target.value);
    console.log(gendre);
  };
  const submitHanlder = (e) => {
    e.preventDefault();
    email.indexOf("@") === -1 && alert("please insert Valid Email");
    let nameLength = name.length;
    if (nameLength <= 5) {
      alert("Insert Valid Name");
    }
    // console.log(nameLength)(nameLength >= 4) && alert("Name not valid");
  };
  return (
    <div className="container">
      <div className="logo">
        <img src={wed} alt="wedding" />
        <h1>RightPartner.com</h1>
        <p className="para">
          A place where you can find life partner of your own choice
        </p>
      </div>
      <div className="form">
        <h1>Registration Form for Finding Your Soulmate</h1>
        <hr />
        <form onSubmit={submitHanlder}>
          <input
            type="text"
            placeholder="Name"
            id="name"
            value={name}
            onChange={nameChangeHandler}
          />
          <input type="text" placeholder="Age" />
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={emailChangeHandler}
          />
          <select
            id="gendre"
            value={gendre}
            required
            onChange={gendreChangeHandler}
          >
            <option defaultValue>Gendre</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {gendre === "male" ? <Gendre name="Sir"/> : gendre === "female" ? <Gendre name="Ma'am" /> : ""}
          <hr />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
