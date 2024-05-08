import React, { useState } from "react";
import logo from "../assets/logo.svg";
import exit from "../assets/exit.svg";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate input fields or submit form
    // if (!name.trim()) {
    //   setNameTouched(true);
    // }
    // if (!email.trim()) {
    //   setEmailTouched(true);
    // }
  };

  const nameChangeHandler = (eve) => {
    setName(eve.target.value);
  };

  const emailChangeHandler = (eve) => {
    setEmail(eve.target.value);
  };

  const checkEmail = (eve) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the entered email matches the pattern
    const isValidEmail = emailPattern.test(eve.target.value);

    if (!isValidEmail) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
  };
  return (
    <div className="h-screen flex flex-col  ">
      <div className=" flex justify-between p-[20px]">
        <img src={logo} alt="Logo" className="h-[47px]  " />
        <img src={exit} alt="exit" className="h-[47px] " />
      </div>

      <div className="h-[466px] w-[488px] m-auto">
        <div className=" w-2/2 h-1/3 text-center p-10 pb-0 ">
          <p className="  text-green-600 font-covered text-2xl">
            Registration Form
          </p>
          <p className="text-4xl ">
            {" "}
            Start your success <br />
            Journey here!
          </p>
        </div>

        <div className="h-2/3 w-[80%] m-auto">
          <form className=" flex flex-col pt-16" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              className="h-10 rounded-[64px]  bg-primary-gray p-4 placeholder-gray-500"
              onBlur={() => setNameTouched(true)}
              onChange={(e) => nameChangeHandler(e)}
              value={name}
            />

            {nameTouched && name === "" && (
              <p className="text-sm text-red-500 pl-4">
                Please enter your name
              </p>
            )}
            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 mt-5 rounded-[64px] bg-primary-gray p-4 placeholder-gray-500 "
              onBlur={(e) => {
                setEmailTouched(true);
                checkEmail(e);
              }}
              onChange={(e) => {
                emailChangeHandler(e);
              }}
              value={email}
            />
            {emailTouched && email === "" && (
              <p className="text-sm text-red-500 pl-4">
                Please enter your email
              </p>
            )}

            {email !== "" && emailInvalid && (
              <p className="text-sm text-red-500 pl-4">Enter a valid address</p>
            )}

            <input
              type="submit"
              className={`h-10 mt-5 mb-5 rounded-[64px]${
                emailInvalid ? "bg-primary-black" : "bg-blue-500"
              }`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
