import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router-dom";
const SuccessPage = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(interval);
          navigate("/");
          return 0;
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col  ">
      <div className=" flex justify-between p-[20px]">
        <img src={logo} alt="Logo" className="h-[47px]  " />
      </div>

      <div className="h-[466px] w-[718px] m-auto">
        <div className=" w-2/2 h-1/3 text-center  pb-0 ">
          <span className="mb-[25px] inline-block">
            <CheckCircleIcon style={{ color: "#16a34b", fontSize: "80px" }} />
          </span>

          <p className="  text-green-600 font-covered text-[28px]">
            Success Submitted
          </p>
          <p className="text-[67px] text-center font-[600] ">
            {" "}
            Congratulations
          </p>

          <p className="text-[27px]">
            Your request has been successfully submitted to us. We will validate
            your information and reach out to your shortly with updates
          </p>
        </div>
      </div>

      <div>
        <p className="text-center pb-12">
          Redirecting you to Homepage in {timer} Seconds
        </p>
      </div>
    </div>
  );
};

export default SuccessPage;
