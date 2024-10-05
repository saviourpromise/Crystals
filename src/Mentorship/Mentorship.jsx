import React from "react";
import Header from "../Components/Header";
import crypto from "../assets/crypto.svg";
import forex from "../assets/forex.svg";
import arrowTo from "../assets/arrowTo.png";
import Slider from "../Components/Slider";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const Mentorship = () => {
  return (
    <div className="bg-black">
      <Header />

      <div className="bgg">
        <Hero 
        mainText={"Mentorship"}
        subText={"How can you enjoy our free mentorship program?"}
        />
      </div>

      <div className="bg-[#0D0F11] py-10">
        <div className="flex flex-col gap-4">
          <p className="text-[#1CCBB1] text-center mx:text-lg text-[17px] leading-6 font-medium int">
            Mentorship program
          </p>
          <p className="text-[50px] mx:text-[36px] mx:leading-[50px] font-semibold text-center unv leading-[61.5px] text-[#e4e4e7]">
            Unlock Your Trading Potential with <br /> Personalized Guidance
          </p>
          <p className="text-center mx:leading-6 text-[#AAAAB3] leading-7 text-base intt font-normal">
            At Crystal pips Hub, we believe that every trader’s journey is
            unique. Our Mentorship <br /> Program is designed to provide you
            with the personalized guidance, support, and <br /> expertise you
            need to achieve your trading goals.
          </p>
        </div>

        <div className="flex mx:flex-col mx:px-0 mx:justify-center mx:items-center px-[7.5rem] pt-8 justify-between mx:gap-8">
          <img src={crypto} alt="" className="mx:w-[90%]" />

          <div className="flex flex-col gap-5 my-auto">
            <div className="flex gap-4 mx:flex-col mx:justify-center mx:items-center">
              <p className="text-[17px] text-[#1CCBB1] int font-bold leading-6 flex justify-center items-center rounded-full w-8 h-8 bg-white">
                1
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[21px] mx:text-center font-semibold unv leading-6 text-[#e4e4e7]">
                  Expert Mentors
                </p>
                <p className="text-[#A1A1A1] mx:text-center font-normal int text-base leading-7">
                  Learn from seasoned traders with years of experience in the{" "}
                  <br /> Forex market.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mx:flex-col mx:justify-center mx:items-center">
              <p className="text-[17px] text-[#1CCBB1] int font-bold leading-6 flex justify-center items-center rounded-full w-8 h-8 bg-white">
                2
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[21px] mx:text-center font-semibold unv leading-6 text-[#e4e4e7]">
                  Tailored Learning Experience:
                </p>
                <p className="text-[#A1A1A1] mx:text-center font-normal int text-base leading-7">
                  Our mentors will work with you to create a customized <br />{" "}
                  learning path that aligns with your individual goals and{" "}
                  <br /> trading style.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mx:flex-col mx:justify-center mx:items-center">
              <p className="text-[17px] text-[#1CCBB1] int font-bold leading-6 flex justify-center items-center rounded-full w-8 h-8 bg-white">
                3
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[21px] mx:text-center font-semibold unv leading-6 text-[#e4e4e7]">
                  Hands-On Support
                </p>
                <p className="text-[#A1A1A1] mx:text-center font-normal int text-base leading-7">
                  Gain practical experience with real-time trading sessions,{" "}
                  <br /> where mentors provide live feedback and advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 py-14">
        <p className="text-[50px] mx:text-[40px] mx:leading-[50px] font-semibold text-center unv leading-[61.5px] text-[#e4e4e7]">
          Why Choose Our Mentorship <br /> Program?
        </p>

        <div className="flex mx:px-0 mx:flex-col mx:justify-center mx:items-center mx:gap-4 px-16 justify-between">
          <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
            <div>
              <img src={forex} alt="" />
            </div>
            <p className="text-[#A4A4AD] unv font-semibold text-[21px]  leading-[27.3px]">
              Ongoing Development
            </p>
            <p className="text-[#A1A1AA] int font-normal text-base">
              Trading is a journey, and our mentorship program <br /> is
              designed to support your ongoing development. <br /> Stay updated
              with the latest market trends, <br /> strategies, and tools
              through continuous learning <br /> and mentor support.
            </p>
          </div>

          <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
            <div>
              <img src={forex} alt="" />
            </div>
            <p className="text-[#A4A4AD] unv font-semibold text-[21px]  leading-[27.3px]">
              One-on-One Sessions
            </p>
            <p className="text-[#A1A1AA] int font-normal text-base">
              Benefit from dedicated one-on-one sessions with <br /> your
              mentor. These personalized meetings are <br /> designed to address
              your specific questions, <br /> challenges, and goals.
            </p>
          </div>

          <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
            <div>
              <img src={forex} alt="" />
            </div>
            <p className="text-[#A4A4AD] unv font-semibold text-[21px]  leading-[27.3px]">
              Trading Tools and Resources
            </p>
            <p className="text-[#A1A1AA] int font-normal text-base">
              Access a suite of trading tools and resources that <br /> enhance
              your learning experience. From advanced <br /> charting software
              to proprietary trading indicators, <br /> we provide the tools you
              need to succeed.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-12 pt-16 pb-4 bg-gradient-to-b from-[#1CCBB1]">
      <p className="text-[50px] font-semibold text-center unv leading-[61.5px] text-[#fff]">How to Enroll</p>

      <div className="flex mx:flex-col mx:px-0 mx:justify-center mx:items-center mx:gap-16 px-20 justify-between">
      <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                01
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
            Application
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
            Apply on our website. Share your <br /> trading background, goals, and <br /> mentorship program aspirations.
            </p>
          </div>

          <div className="pt-8 mx:pt-0 mx:rotate-[90deg]">
          <img src={arrowTo} alt="" />
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                02
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
            Consultation
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
            Schedule a free consultation to help us <br /> understand your needs and match you <br /> with a mentor.
            </p>
          </div>

          <div className="pt-8 mx:pt-0 mx:rotate-[90deg]">
          <img src={arrowTo} alt="" />
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                03
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
            Enrollment
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
            Once matched, enroll in the program. <br /> Your mentor will outline your path and <br /> schedule your first session.
            </p>
          </div>

          <div className="pt-8 mx:pt-0 mx:rotate-[90deg]">
          <img src={arrowTo} alt="" />
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                04
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
            Start Learning
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
            Begin with personalized sessions and <br /> support. Your mentor ensures <br /> consistent progress every step.
            </p>
          </div>
      </div>
      </div>

      <Slider />

      <Accordion />

      <div className="flex flex-col gap-4 justify-center items-center pt-20 pb-16 bg-gradient-to-b from-[#34867b]">
                <p className="text-[50px] mx:text-[30px] mx:leading-[45px] font-semibold unv text-white leading-[61.5px] text-center">
                Get Started Today!
                </p>
                <p className="text-base mx:text-base font-normal leading-7 int text-[#AAAAB3] text-center">
                Take the first step towards mastering Forex trading with personalized mentorship from Crystals <br /> Trading Hub. Apply now and start your journey to becoming a successful trader.
                </p>
                <button className="font-medium text-base text-[#2D2D2D] leading-8 intt text-center bg-white px-14 rounded-md py-1">Let’s go!</button>
            </div>

            <Footer />
    </div>
  );
};

export default Mentorship;
