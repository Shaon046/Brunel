import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import exit from "../assets/exit.svg";
import ErrorIcon from "@mui/icons-material/Error";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);

  //// Email validation
  const checkEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    if (!isValidEmail) {
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
    }
  };
  useEffect(() => {
    setEmailInvalid(false);
  }, [email]);

  ////input onchange handler
  const nameChangeHandler = (eve) => {
    setName(eve.target.value);
  };

  const emailChangeHandler = (eve) => {
    setEmail(eve.target.value);
  };

  ///input validation
  useEffect(() => {
    if (name.trim() !== "" && email.trim() !== "") {
      setIsSubmitDisable(false);
    } else {
      setIsSubmitDisable(true);
    }
  }, [name, email, emailInvalid, isSubmitDisable]);

  /////on submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    checkEmail();
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
              <p className="text-sm text-red-500 pl-4  flex items-center">
                <ErrorIcon style={{ fontSize: "15px", paddingRight: "2px" }} />{" "}
                Please enter your name
              </p>
            )}
            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 mt-5 rounded-[64px] bg-primary-gray p-4 placeholder-gray-500 "
              onBlur={(e) => {
                setEmailTouched(true);
              }}
              onChange={(e) => {
                emailChangeHandler(e);
              }}
              value={email}
            />
            {emailTouched && email === "" && (
              <p className="text-sm text-red-500 pl-4 flex items-center">
                <ErrorIcon style={{ fontSize: "15px", paddingRight: "2px" }} />{" "}
                Please enter your email
              </p>
            )}

            {emailInvalid && (
              <p className="text-sm text-red-500 pl-4 flex items-center">
                <ErrorIcon style={{ fontSize: "15px", paddingRight: "2px" }} />{" "}
                Enter a valid address
              </p>
            )}

            <input
              type="submit"
              className={`h-10 mt-5 mb-5 rounded-[64px]  text-white ${
                isSubmitDisable ? "bg-primary-gray-mid" : "bg-primary-black"
              }`}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
