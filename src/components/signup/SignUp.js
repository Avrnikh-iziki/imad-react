import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import Alert from "../../utiles/alert/Alert";
import baseUrl from "../../utiles/baseurl";
const Signup = () => {
  const [response, setresponse] = useState({
    type: "",
    message: "",
    isExist: false,
  });

  const handlSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseUrl()}/auth`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
        username: e.target.username.value,
        phone_number: e.target.phone.value,
      }),
    });
    const { message } = await response.json();

    if (response.status === 201) {
      window.location = "/signin";
    } else setresponse({ type: "error", message: message, isExist: true });
  };

  return (
    <div className="signin">
      <form onSubmit={handlSubmit}>
        <input type="text" placeholder="imad iziki" required name="username" />

        <input
          type="email"
          placeholder="imadiziki1@gmail.com"
          required
          name="email"
        />
        <input
          type="phone"
          placeholder="+212 6 41 49 31 39"
          required
          name="phone"
        />
        <input
          type="password"
          placeholder="password"
          required
          name="password"
        />
        <div className="signupRegistration">
          <span>
            <Link to="/signin">
              <FontAwesomeIcon icon={faChevronLeft} />
            </Link>
          </span>

          <button type="submit">Sign Up</button>
        </div>
      </form>
      {response.isExist && (
        <Alert setresponse={setresponse} response={response} />
      )}
    </div>
  );
};

export default Signup;
