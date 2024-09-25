import React from "react";
import Header from "../Components/Header";
import empty from "../assets/empty.png";
import crypto from "../assets/crypto.svg";
import ceo from "../assets/ceo.png";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";

const About = () => {
  return (
    <div className="bg-black">
      <Header />

      <div className="bgg mx:-mt-10">
        <div className="flex flex-col gap-4 justify-center items-center mx:h-[250px] h-[516px] edi">
          <p className="font-bold mx:text-[60px] mx:pt-40 mx:leading-[80px] text-[77px] leading-[94.71px] text-[#e4e4e7] logo">
            About us
          </p>
          <p className="text-[16.9px] mx:pb-36 font-normal leading-7 text-[#A1A1AA] text-center int">
            Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
            viverra orci diam. Nibh est vitae <br /> suspendisse parturient sed
            lorem eu.
          </p>
        </div>
      </div>

      <div className="bg-[#0D0F11] flex flex-col gap-8 py-10">
        <div className="flex flex-col gap-[17px] px-16">
          <p className="text-[#e4e4e7] mx:text-center mx:text-[32px] mx:leading-[50px] text-[50px] leading-[61.5px] font-semibold unv">
            We are a lorem ipsum dolor
          </p>
          <p className="text-base mx:text-sm font-normal mx:text-center leading-7 text-[#AAAAB3] intt">
            Less Doing, More Living was a conference about productivity and
            entrepreneurship hosted by Ari Meisel, author of two bestselling
            books: “The Art of Less Doing” and “The Replaceable <br /> Founder”.
            Less Doing, More Living was a conference about productivity and
            entrepreneurship hosted by Ari Meisel, author of two bestselling
            books: “The Art of Less Doing” and “The <br /> Replaceable
            Founder”.Less Doing, More Living was a conference about productivity
            and entrepreneurship hosted by Ari Meisel, author of two bestselling
            books: “The Art of Less Doing” <br /> and “The Replaceable Founder”.
            Less Doing, More Living was a conference about productivity and
            entrepreneurship hosted by Ari Meisel, author of two bestselling
            books: “The Art of Less <br /> Doing” and “The Replaceable Founder”.
            Less Doing, More Living was a conference about productivity and
            entrepreneurship hosted by Ari Meisel, author of two bestselling
            books: “The Art <br /> of Less Doing” and “The Replaceable
            Founder”.Less Doing, More Living was a conference about productivity
            and entrepreneurship hosted by Ari Meisel, author of two bestselling
            books: <br /> “The Art of Less Doing” and “The Replaceable Founder”.
          </p>
        </div>

        <div className="flex px-16 mx:gap-8 mx:flex-col justify-between">
          <img src={empty} alt="" />
          <img src={empty} alt="" />
        </div>
      </div>

      <div className="flex px-36 mx:gap-8 mx:px-0 mx:flex-col mx:justify-center mx:items-center justify-between py-10">
        <div className="flex flex-col gap-4">
          <p className="text-[#e4e4e7] text-[50px] mx:text-[32px] mx:leading-[40px] mx:text-center leading-[61.5px] font-semibold unv">
            Numbers that showcase <br /> our success
          </p>
          <p className="text-base mx:text-sm font-normal leading-7 mx:text-center text-[#AAAAB3] intt">
            Lorem ipsum dolor sit amet consectetur nunc nunc sit velit eget{" "}
            <br /> sollicitudin sit posuere augue vestibulum eget turpis
            lobortis <br /> donec sapien integer phasellus quisque.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-20 my-auto">
          <div className="flex flex-col">
            <p className="text-[#1CCBB1] text-[27px] leading-[33.21px] logo">
              200+
            </p>
            <p className="text-base font-normal leading-7 text-[#AAAAB3] intt">
              Lorem Ipsum
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#1CCBB1] text-[27px] leading-[33.21px] logo">
              97+
            </p>
            <p className="text-base font-normal leading-7 text-[#AAAAB3] intt">
              Lorem Ipsum
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#1CCBB1] text-[27px] leading-[33.21px] logo">
              34+
            </p>
            <p className="text-base font-normal leading-7 text-[#AAAAB3] intt">
              Team members
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-[#1CCBB1] text-[27px] leading-[33.21px] logo">
              100+
            </p>
            <p className="text-base font-normal leading-7 text-[#AAAAB3] intt">
              Lorem Ipsum
            </p>
          </div>
        </div>
      </div>

      <div className="pt-10 pb-4 bg-gradient-to-b from-[#1CCBB1]">
        <p className="text-white text-[17px] leading-6 font-medium text-center mb-2 int">
          Our Values
        </p>
        <p className="text-[50px] mx:text-[40px] mx:leading-[50px] font-semibold unv text-white leading-[61.5px] text-center">
          We Make it Effortlessly To <br /> Track All User Analytics
        </p>

        <div className="flex mx:flex-col mx:gap-8 pt-10 mx:px-0 px-44 justify-between">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                01
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
              Integrity
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
              Commodo nec mi id ullamcorper vitae <br /> augue neque dis. Nunc
              lacinia viverra <br /> orci.
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                02
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
              Innovation
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
              Commodo nec mi id ullamcorper vitae <br /> augue neque dis. Nunc
              lacinia viverra <br /> orci.
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                03
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
              Customer-Centricity
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
              Commodo nec mi id ullamcorper vitae <br /> augue neque dis. Nunc
              lacinia viverra <br /> orci.
            </p>
          </div>
        </div>

        <div className="flex mx:flex-col mx:gap-8 pt-10 px-44 mx:px-0 justify-between">
          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                04
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
              Collaboration
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
              Commodo nec mi id ullamcorper vitae <br /> augue neque dis. Nunc
              lacinia viverra <br /> orci.
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                05
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
              Accountability
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
              Commodo nec mi id ullamcorper vitae <br /> augue neque dis. Nunc
              lacinia viverra <br /> orci.
            </p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center">
            <div className="h-[70px] w-[70px] rounded-full bg-white flex items-center justify-center">
              <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                06
              </p>
            </div>
            <p className="text-white font-semibold text-[21px] leading-[27.3px] unv">
              Empowerment
            </p>
            <p className="text-base font-normal leading-7 intt text-[#E0E0E3] text-center">
              Commodo nec mi id ullamcorper vitae <br /> augue neque dis. Nunc
              lacinia viverra <br /> orci.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#0D0F11] py-16 mx:py-10">
        <div className="flex mx:flex-col mx:justify-center mx:items-center mx:px-0 px-24 pb-10 justify-between">
          <div className="flex flex-col gap-3">
            <p className="text-[17px] mx:text-center text-[#1CCBB1] int font-medium leading-6">
              Our Mission
            </p>
            <p className="text-[50px] mx:text-center unv mx:text-[32px] mx:leading-[40px] font-semibold leading-[61.5px] text-[#e4e4e7]">
              Crystal trading hub’s Mission
            </p>
          </div>
          <div className="mt-12 mx:mt-4">
            <button className="bg-[#1CCBB1] text-white int text-base font-medium leading-8 py-1 border px-10 rounded-md hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex mx:flex-col mx:px-0 mx:justify-center mx:items-center px-24 justify-between mx:gap-8">
          <div className="flex flex-col gap-5 my-auto">
            <div className="flex gap-4 mx:flex-col mx:justify-center mx:items-center">
              <p className="text-[17px] text-[#1CCBB1] int font-bold leading-6 flex justify-center items-center rounded-full w-8 h-8 bg-white">
                1
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[21px] mx:text-center font-semibold unv leading-6 text-[#e4e4e7]">
                  Secure Crypto Solutions
                </p>
                <p className="text-[#A1A1A1] mx:text-center font-normal int text-base leading-7">
                  Commodo nec mi id ullamcorper vitae augue <br /> neque dis
                  nunc lacinia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mx:flex-col mx:justify-center mx:items-center">
              <p className="text-[17px] text-[#1CCBB1] int font-bold leading-6 flex justify-center items-center rounded-full w-8 h-8 bg-white">
                2
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[21px] mx:text-center font-semibold unv leading-6 text-[#e4e4e7]">
                  Empowering Crypto Education
                </p>
                <p className="text-[#A1A1A1] mx:text-center font-normal int text-base leading-7">
                  Commodo nec mi id ullamcorper vitae augue <br /> neque dis
                  nunc lacinia.
                </p>
              </div>
            </div>

            <div className="flex gap-4 mx:flex-col mx:justify-center mx:items-center">
              <p className="text-[17px] text-[#1CCBB1] int font-bold leading-6 flex justify-center items-center rounded-full w-8 h-8 bg-white">
                3
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[21px] mx:text-center font-semibold unv leading-6 text-[#e4e4e7]">
                  Advancing Decentralization
                </p>
                <p className="text-[#A1A1A1] mx:text-center font-normal int text-base leading-7">
                  Commodo nec mi id ullamcorper vitae augue <br /> neque dis
                  nunc lacinia.
                </p>
              </div>
            </div>
          </div>

          <img src={crypto} alt="" className="mx:w-[90%]" />
        </div>
      </div>

      <div className="py-10">
      <p className="text-[50px] font-semibold leading-[61.5px] text-center pb-12 unv text-[#e4e4e7]">
        Meet your CEO
      </p>

      <div className="flex px-32 mx:px-0 mx:flex-col justify-between">
        <img src={ceo} alt="" />
        <div className="h-[498px] mx:h-[550px] mx:px-10 mx:w-[410px] bg-gradient-to-b from-[#1CCBB1] flex justify-center items-center w-[672px]">
          <p className="text-white font-normal text-base leading-7 intt">
            Our vision is to foster widespread adoption and trust in blockchain{" "}
            <br /> technology and cryptocurrencies by championing innovation,
            accessibility, <br /> and security. We aim to empower individuals
            and businesses globally through <br /> user-friendly solutions that
            simplify complex financial processes and enable <br /> seamless
            participation in the digital economy. Our vision is to foster <br />{" "}
            widespread adoption and trust in blockchain technology and <br />{" "}
            cryptocurrencies by championing innovation, accessibility, and
            security. We <br /> aim to empower individuals and businesses
            globally through user-friendly <br /> solutions that simplify
            complex financial processes and enable seamless <br /> participation
            in the digital economy.
          </p>
        </div>
      </div>
      </div>

      <Accordion />

      <div className="flex flex-col gap-4 justify-center items-center pt-20 pb-16 bg-gradient-to-b from-[#34867b]">
                <p className="text-[50px] mx:text-[30px] mx:leading-[45px] font-semibold unv text-white leading-[61.5px] text-center">
                    Get Started With Crystals <br /> Trading Hub Today
                </p>
                <p className="text-base mx:text-base font-normal leading-7 int text-[#AAAAB3] text-center">
                    We are self-service data analytics software that lets you create
                    visually appealing data <br /> visualisations and insightful
                    dashboards in minutes.
                </p>
                <div className="flex bg-white py-1 mx:py-[6px] pr-1 rounded-[2rem] gap-1">
                    <input
                        type="text"
                        className="text-[#576A67] rounded-[2rem] int mx:pr-0 pr-44 pl-2 ml-4 bg-inherit text-[15px] font-normal leading-7"
                        placeholder="Enter your email"
                    />
                    <button className="bg-[#1CCBB1] text-white int text-base font-medium leading-8 py-1 mx:py-2 px-10 mx:px-6 rounded-[2rem] hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
                        Let's Go
                    </button>
                </div>
            </div>

            <Footer />
    </div>
  );
};

export default About;
