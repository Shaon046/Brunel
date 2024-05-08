import React from "react";
import logo from "../assets/logo.svg";
import hero from "../assets/hero.svg";
import Frame from "../assets/Frame.svg";
import background from "../assets/Group.svg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const Main = () => {
  return (
    <div>
      <div className="p-4 ">
        <div className=" h-16 p-2 w-full rounded-[56px] border-[1px] border-primary-gray-dark flex justify-between items-center">
          <img src={logo} alt="Logo" className="h-[47px]  " />

          <div>
            <button className="p-2 rounded-[56px] border-[1px] border-primary-gray-dark mr-2">
              Get Projects
            </button>
            <button className="p-2 rounded-[56px] bg-primary-black text-white">
              Onboard Talents
            </button>
          </div>
        </div>

        <div className="">
          <div className="text-center ">
            <p className="font-covered text-2xl text-green-500">
              Success stories
            </p>
            <p className="text-4xl  ">
              Every success journey <br /> we’ve encountered.
            </p>
          </div>

          <div className="grid grid-cols-2 justify-around h-[396px] py-16 ">

            {/* left grid */}
            <div className=" relative ">
              <img src={hero} alt="hero" className="h-[393px] m-auto" />
              <div className=" w-[200px] bg-white absolute top-[10%] shadow-xl rounded-lg">
                <p className=" text-6xl text-primary-black pl-4 pt-8 font-semibold  ">
                  {" "}
                  40%
                </p>
                <p className=" w-[80%] m-auto text-sm p-2">
                  Achieved reduction in project execution time by optimising
                  team availability{" "}
                </p>
              </div>
              <div className="absolute top-[80%] left-[10%] shadow-lg max-h-max px-4 py-1 max-w-max bg-white rounded-[56px] flex items-center">
                <img src={Frame} alt="img" />
                <div>
                  <p className="font-semibold text-sm ">10 DAYS</p>
                  <p className="text-sm ">Staff Deployment</p>
                </div>
              </div>

              <div className=" h-[200px] w-[200px]  bg-primary-black absolute top-[40%] right-1 flex flex-col items-center p-2 ">
                <p className="text-4xl text-white font-semibold ">
                  $0.5 <span className=" text-lg "> MILLION</span>
                </p>
                <p className=" text-white pt-2 text-sm">
                  Reduced client expenses by saving on hiring and employee
                  costs.
                </p>
              </div>
            </div>

            {/* //grid right */}
            <div
              className="flex justify-start items-center ml-[30%]"
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="relative">
                <Carousel showArrows showIndicators>
                  <div className="w-[396px]">
                    <p className="text-4xl font-semibold">
                      Enhance fortune 50 company’s insights teams research
                      capabilities
                    </p>
                  </div>
                  <div className="w-[396px]">
                    <p className="text-4xl font-semibold">
                      Enhance fortune 50 company’s insights teams research
                      capabilities
                    </p>
                  </div>
                  <div className="w-[396px]">
                    <p className="text-4xl font-semibold">
                      Enhance fortune 50 company’s insights teams research
                      capabilities
                    </p>
                  </div>
                </Carousel>
                <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                  <div className="carousel-indicators mt-4"></div>
                </div>
              </div>
            </div>





          </div>
        </div>
        
{/* part 2 */}

<div className=" bg-primary-green  m-auto mt-48 h-80 rounded-lg py-8 px-4 grid grid-cols-2" >

{/* left div */}
<div className=" bg-white">
    
    <div className="py-4 px-12">
        <p>What’s on your mind</p>
        <p className="text-4xl font-semibold">Ask Questions</p>
    </div>

    
     </div>

{/* right div */}
<div> </div>

</div>
      </div>
   







    </div>
  );
};

export default Main;
