import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import exit from "../assets/exit.svg";
import ErrorIcon from "@mui/icons-material/Error";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const RegistrationPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [isSubmitDisable, setIsSubmitDisable] = useState(true);

  const emailInvalid2 = useRef();

  //// Email validation
  const checkEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailPattern.test(email);
    emailInvalid2.current = !isValidEmail;

    if (!isValidEmail) {
      emailInvalid2.current = true;
      console.log("TRUE");
      setEmailInvalid(true);
    } else {
      setEmailInvalid(false);
      emailInvalid2.current = false;
      console.log("FALSE");
      navigate("/success");
    }
  };
  useEffect(() => {
    emailInvalid2.current = false;
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
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    checkEmail();
  };

  return (
    <div className=" flex flex-col  ">
      <div className=" flex justify-between p-[20px]">
        <img src={logo} alt="Logo" className="h-[47px]  " />

        <Link to="/">
          {" "}
          <img src={exit} alt="exit" className="h-[47px] " />
        </Link>
      </div>

      <div className="h-[572px]  m-auto">
        <div className=" w-2/2 h-1/3 text-center p-10 pb-0 ">
          <p className="  text-green-600 font-covered text-[28px]">
            Registration Form
          </p>
          <p className="text-[56px] leading-[67px]  font-[600]">
            {" "}
            Start your success <br />
            Journey here!
          </p>
        </div>

        <div className="mt-[47px] w-[417px] m-auto pt-[62px]">
          <form className=" flex flex-col " onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter your name"
              className="h-10 rounded-[64px]  bg-primary-gray py-[24px] px-[36px] placeholder-gray-500"
              onBlur={() => setNameTouched(true)}
              onChange={(e) => nameChangeHandler(e)}
              value={name}
            />

            {nameTouched && name === "" && (
              <p className="text-sm text-red-500 pt-2 pl-4  flex items-center">
                <ErrorIcon style={{ fontSize: "15px", paddingRight: "2px" }} />{" "}
                Please enter your name
              </p>
            )}
            <input
              type="text"
              placeholder="Enter your email"
              className="h-10 mt-5 rounded-[64px] bg-primary-gray py-[24px] px-[36px] placeholder-gray-500 "
              onBlur={(e) => {
                setEmailTouched(true);
              }}
              onChange={(e) => {
                emailChangeHandler(e);
              }}
              value={email}
            />
            {emailTouched && email === "" && !emailInvalid && (
              <p className="text-sm text-red-500 pt-2 pl-4 flex items-center">
                <ErrorIcon style={{ fontSize: "15px", paddingRight: "2px" }} />{" "}
                Please enter your email
              </p>
            )}

            {emailInvalid && (
              <p className="text-sm text-red-500 pt-2 pl-4 flex items-center">
                <ErrorIcon style={{ fontSize: "15px", paddingRight: "2px" }} />{" "}
                Enter a valid address
              </p>
            )}

            <input
              type="submit"
              value="Submit"
              className={`h-10 mt-12 mb-5 rounded-[64px]  text-white ${
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
