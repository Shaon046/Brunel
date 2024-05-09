import React from "react";
import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";
import Frame from "../assets/Frame.svg";
import background from "../assets/Group.svg";
import Union from "../assets/Union.svg";
import spark from "../assets/spark.svg";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Accordion from "../Components/Accordion";



const Main = () => {
  const items = [
    {
      title: "Section 1",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      title: "Section 2",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution. for section 2...",
    },
    {
      title: "Section 3",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      title: "Section 4",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      title: "Section 5",
      content:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
  ];

  return (
    <div>
      <div className="p-4 ">
        <div className=" h-16 p-2 w-full rounded-[56px] border-[1px] border-primary-gray-dark flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-[47px]  " />

          <div className="text-[18px] ">
            <Link to="/register">
              <button className="p-3 rounded-[56px] border-[1px] border-primary-gray-dark mr-2 hover:bg-primary-gray-mid">
                Get Projects
              </button>
            </Link>

            <button className="p-3 rounded-[56px] bg-primary-black text-white hover:bg-primary-gray-dark ">
              Onboard Talents
            </button>
          </div>
        </div>

        <div className="">
          <div className="text-center ">
            <p className="font-covered text-[28px] text-green-500 mt-6">
              Success stories
            </p>
            <p className="text-[56px] leading-[67px] font-[600] ">
              Every success journey <br /> we’ve encountered.
            </p>
          </div>

          <div className="grid grid-cols-2 justify-around py-16 px-8 ">
            {/* left grid */}
            <div className=" relative ">
              <img
                src={hero}
                alt="hero"
                className="w-[519px] h-[693px] m-auto"
              />
              <div className=" w-[200px] bg-white absolute top-[25%] shadow-xl rounded-lg">
                <img
                  src={spark}
                  alt="spark"
                  className="absolute -translate-y-6 -translate-x-4"
                />
                <p className=" text-[64px] text-primary-black pl-4 pt-8 font-[600] leading-[76px] ">
                  {" "}
                  40%
                </p>
                <p className=" w-[80%] m-auto text-sm p-2">
                  Achieved reduction in project execution time by optimising
                  team availability{" "}
                </p>
              </div>

              <div className="absolute top-[70%]  shadow-lg max-h-max px-4 py-1 max-w-max bg-white rounded-[56px] flex items-center">
                <div className="bg-primary-gray rounded-[40px] p-2 mr-3">
                  <img src={Frame} alt="img" />
                </div>

                <div>
                  <p className="font-[700] text-[24px] ">10 DAYS</p>
                  <p className="text-[16px] ">Staff Deployment</p>
                </div>
              </div>

              <div className=" w-[240px] rounded-lg p-4 bg-primary-black absolute top-[70%] right-1 flex flex-col items-center  ">
                <p className="text-[60px] text-white font-semibold ">
                  $0.5 <span className=" text-[16px] "> MILLION</span>
                </p>
                <p className=" text-white pt-2 text-sm">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>
            </div>

            {/* //grid right */}
            <div
              className="flex flex-col justify-center items-start  ml-[30%]"
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="relative ">
                <Carousel showStatus={false} showIndicators autoPlay>
                  <p className="text-4xl font-semibold text-start">
                    Enhance fortune 50 company’s insights teams research
                    capabilities
                  </p>
                  <p className="text-4xl font-semibold text-start">
                    Enhance fortune 50 company’s insights teams research
                    capabilities
                  </p>
                </Carousel>
              </div>
              <div>
                <button className="flex items-center p-3 mt-10 rounded-[56px] bg-primary-black text-white hover:bg-primary-gray-dark ">
                  Explore More <ArrowForwardIcon sx={{ paddingLeft: "8px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* part 2 */}

        <div className=" bg-primary-green h-[450px] m-auto mt-48 rounded-lg py-12 grid grid-cols-2">
          {/* left div */}
          <div className=" px-24">
            <div className="  pb-4">
              <p className="font-covered font-[400] text-[#9E9D9D]">
                What’s on your mind
              </p>
              <p className="text-4xl font-semibold">Ask Questions</p>
            </div>

            {/* //image */}
            <img
              src={Union}
              alt="img"
              className="-translate-x-32"
              style={{ height: "314px", width: " 491px" }}
            />
          </div>

          {/* right div */}
          <div>
            <Accordion items={items} />
          </div>
        </div>

        {/* //footer */}

        <div className="flex h-[144px] bg-primary-gray p-[60px] justify-between rounded-[40px] text-[18px] mt-[64px]">
          <p>
            {" "}
            <span className="inline-block pr-2">&copy;</span>Talup 2023. All
            rights reserved
          </p>

          <p> Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
