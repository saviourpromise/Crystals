import React from "react";
import Header from "../Components/Header";
import Bitcoin from "../assets/Bitcoin.svg";
import Etherium from "../assets/Etherium.svg";
import Chart from "../assets/chart.svg";
import tick from "../assets/tick.svg";
import toFro from "../assets/toFro.svg";
import arrow from "../assets/Stroke 1.svg";
import forex from "../assets/forex.svg";
import vip from "../assets/vip.svg";
import crypto from "../assets/crypto.svg";
import research from "../assets/research.svg";
import Youtube from "../assets/Youtube.svg";
// import { useState } from "react";
import Accordion from "../Components/Accordion";
import Slider from "../Components/Slider";
import Footer from "../Components/Footer";

const Landing = () => {

    return (
        <div className="bg-black">
            <Header />

            <div className="bgg">
                <div className="flex edi flex-col gap-4 justify-center items-center mx:-mt-20 mx:pt-0 pt-20">
                    <p className="text-white text-sm px-4 rounded-2xl mx:mt-20 flex items-center int justify-center py-1 font-medium leading-6 bg-gradient-to-b from-[#1a4943] to-[#021411]">
                        Expert advice, forex mastery, mentorship
                    </p>

                    <p className="text-[#e4e4e7] text-[77px] leading-[94px] mx:text-[30px] mx:leading-8 text-center font-semibold fff">
                        Achieve Financial Excellence <br /> with{" "}
                        <span className="text-[#1CCBB1]">Crystals</span> trading hub
                    </p>
                    <p className="text-lg mx:text-[15px] mx:leading-5 font-normal leading-8 text-[#A6AAB2] int text-center tit">
                        Unlock your trading potential with our expert-led courses and
                        resources. Join our community of <br /> traders today and take the
                        first step towards financial independence.
                    </p>
                </div>

                <div className="flex mx:px-0 px-14 justify-between pb-10">
                    <img src={Bitcoin} alt="" className="bitcoin mx:w-24" />
                    <div className="my-auto">
                        <button className="bg-[#1CCBB1] text-white int text-base font-medium leading-8 py-1 px-10 mx:px-8 rounded-md hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
                            Get Started
                        </button>
                    </div>
                    <img src={Etherium} alt="" />
                </div>
            </div>

            <div className="flex mx:flex-col mx:gap-4 mx:px-0 mx:justify-center mx:items-center px-[7rem] justify-between bg-[#0D0F11] py-16 mx:py-10">
                <img src={Chart} alt="" className="w-[48%] mx:w-[80%] my-auto" />

                <div className="flex flex-col mx:justify-center mx:items-center mx:gap-8 gap-5">
                    <p className="text-lg font-medium int leading-6 text-[#1CCBB1]">
                        About crystals trading hub
                    </p>
                    <p className="text-[#e4e4e7] mx:text-center mx:text-[36px] mx:leading-[49px] unv text-[50px] font-semibold leading-[61.5px] -mb-4 -mt-4">
                        Unveiling our story
                    </p>
                    <p className="text-[#A1A1AA] mx:text-center int mx:text-[12px] mx:leading-5 text-[17px] font-normal leading-7 border-b-[1px] border-b-[#272626] pb-6">
                        Crystals Trading Hub is dedicated to empowering individuals with
                        <br /> the knowledge and skills needed to thrive in the Forex
                        market. We <br />
                        believe in providing comprehensive education and ongoing support{" "}
                        <br />
                        to help you achieve your trading goals.
                    </p>

                    <div className="flex mx:gap-8 gap-10">
                        <div className="flex flex-col gap-4 mx:gap-6">
                            <div className="flex gap-2">
                                <img src={tick} alt="" />
                                <p className="text-lg unv font-semibold leading-5 text-white">
                                    Integrity
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <img src={tick} alt="" />
                                <p className="text-lg unv font-semibold leading-5 text-white">
                                    Community
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 mx:gap-6">
                            <div className="flex gap-2">
                                <img src={tick} alt="" />
                                <p className="text-lg unv font-semibold leading-5 text-white">
                                    Excellence
                                </p>
                            </div>

                            <div className="flex gap-2">
                                <img src={tick} alt="" />
                                <p className="text-lg unv font-semibold leading-5 text-white">
                                    Innovation
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="bg-[#1CCBB1] int text-white text-base font-medium leading-8 py-1 px-10 rounded-md hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className="flex mx:px-0 mx:justify-center mx:gap-2 mx:items-center mx:flex-col px-24 justify-between py-10">
                <p className="font-semibold unv mx:text-center mx:text-[28px] mx:leading-[49px] text-[45px] leading-[41.5px] text-[#e4e4e7]">
                    Services we can offer you
                </p>
                <p className="font-normal mx:text-center int mx:text-[12px] mx:leading-6 text-[16.9px] leading-7 text-[#A1A1AACC]">
                    With Cobalt, managing your business finances is effortless, <br />
                    empowering, and anything but boring. Our intuitive platform brings{" "}
                    <br />
                    clarity to your cash flow, simplifies your financial decision-making,
                    and <br />
                    puts the power of advanced financial management right at your <br />
                    fingertips.{" "}
                    <span className="text-[#E4E4E7]">
                        Say no to spreadsheets and tools designed in the 80s.
                    </span>
                </p>
            </div>

            <div className="flex md:grid md:grid-cols-2 md:gap-8 mx:flex-col mx:px-0 mx:items-center mx:justify-center mx:gap-4 px-24 justify-between pb-20">
                <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
                    <div>
                        <img src={toFro} alt="" />
                    </div>
                    <p className="text-[#e4e4e7] unv font-semibold text-[21px]  leading-[27.3px]">
                        Mentorship
                    </p>
                    <p className="text-[#A1A1AA] int font-normal text-base">
                        Invest in crypto anytime, anywhere <br /> with our safe, secure, and
                        easy to <br /> use online platform
                    </p>
                    <div className="flex gap-2 cursor-pointer mt-2">
                        <p className="text-base font-bold int leading-8 text-[#1CCBB1]">
                            Learn more
                        </p>
                        <img src={arrow} alt="" className="mt-1" />
                    </div>
                </div>

                <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
                    <div>
                        <img src={forex} alt="" />
                    </div>
                    <p className="text-[#e4e4e7] unv font-semibold text-[21px]  leading-[27.3px]">
                        Free Forex training
                    </p>
                    <p className="text-[#A1A1AA] int font-normal text-base">
                        Invest in crypto anytime, anywhere <br /> with our safe, secure, and
                        easy to <br /> use online platform
                    </p>
                    <div className="flex gap-2 cursor-pointer mt-2">
                        <p className="text-base font-bold int leading-8 text-[#1CCBB1]">
                            Learn more
                        </p>
                        <img src={arrow} alt="" className="mt-1" />
                    </div>
                </div>

                <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
                    <div>
                        <img src={vip} alt="" />
                    </div>
                    <p className="text-[#e4e4e7] unv font-semibold text-[21px]  leading-[27.3px]">
                        WT VIP Signals
                    </p>
                    <p className="text-[#A1A1AA] int font-normal text-base">
                        Invest in crypto anytime, anywhere <br /> with our safe, secure, and
                        easy to <br /> use online platform
                    </p>
                    <div className="flex gap-2 cursor-pointer mt-2">
                        <p className="text-base font-bold int leading-8 text-[#1CCBB1]">
                            Learn more
                        </p>
                        <img src={arrow} alt="" className="mt-1" />
                    </div>
                </div>

                <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
                    <div>
                        <img src={toFro} alt="" />
                    </div>
                    <p className="text-[#e4e4e7] unv font-semibold text-[21px]  leading-[27.3px]">
                        WT Trading bot
                    </p>
                    <p className="text-[#A1A1AA] int font-normal text-base">
                        Invest in crypto anytime, anywhere <br /> with our safe, secure, and
                        easy to <br /> use online platform
                    </p>
                    <div className="flex gap-2 cursor-pointer mt-2">
                        <p className="text-base font-bold int leading-8 text-[#1CCBB1]">
                            Learn more
                        </p>
                        <img src={arrow} alt="" className="mt-1" />
                    </div>
                </div>
            </div>

            <div className="bg-[#0D0F11] py-20 mx:py-10">
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
                        <button className="bg-[#1CCBB1] text-white int text-base font-medium leading-8 py-1 px-10 rounded-md hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
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

            <div className="flex flex-col gap-12 pt-20 pb-10 bg-gradient-to-b from-[#1CCBB1]">
                <p className="text-[50px] mx:text-[45px] mx:leading-[50px] font-semibold unv text-white leading-[61.5px] text-center">
                    We Make it Effortlessly To <br /> Track All User Analytics
                </p>

                <div className="flex mx:flex-col mx:px-0 px-24 mx:gap-8 mx:justify-center mx:items-center justify-between">
                    <img src={research} alt="" className="mx:w-[90%]" />
                    <p className="text-[#AAAAB3] mx:text-center mx:text-lg int text-base font-normal leading-7 my-auto">
                        Less Doing, More Living was a conference about productivity and
                        entrepreneurship <br /> hosted by Ari Meisel, author of two
                        bestselling books: “The Art of Less Doing” and <br /> “The
                        Replaceable Founder”. Less Doing, More Living was a conference about{" "}
                        <br /> productivity and entrepreneurship hosted by Ari Meisel,
                        author of two bestselling <br /> books: “The Art of Less Doing” and
                        “The Replaceable Founder”.Less Doing, More <br /> Living was a
                        conference about productivity and entrepreneurship hosted by Ari{" "}
                        <br /> Meisel, author of two bestselling books: “The Art of Less
                        Doing” and “The <br /> Replaceable Founder”.
                    </p>
                </div>
            </div>

            <Slider />

            <div className="flex flex-col gap-8 py-20">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <p className="text-[50px] mx:text-[45px] mx:leading-[50px] mx:text-center font-semibold unv text-white leading-[61.5px]">
                        Crystal pips hub
                    </p>
                    <p className="text-base font-normal int leading-7 text-[#A1A1AACC] text-center">
                        Oasis Online is the best way for our online family to be a part of
                        OIC from anywhere in the world! <br /> Experience deep impartations,
                        teachings, and worship on your screen. Available online and on{" "}
                        <br />
                        demand.
                    </p>
                </div>

                <div className="flex mx:flex-col px-36 mx:px-4 mx:justify-center mx:items-center mx:gap-4 justify-between">
                    <img src={Youtube} alt="" className="md:w-[50%] mx:w-[100%]" />
                    <img src={Youtube} alt="" className="md:w-[50%] mx:w-[100%]" />
                </div>

                <div className="flex justify-center items-center">
                    <button className="bg-white text-[#081815] text-base int font-bold leading-8 py-1 px-6 rounded-md hover:bg-black hover:transition-all hover:text-[#ffffff]">
                        See More videos
                    </button>
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
                        className="text-[#576A67] outline-none rounded-[2rem] int mx:pr-0 pr-44 pl-2 ml-4 bg-inherit text-[15px] font-normal leading-7"
                        placeholder="Enter your email"
                    />
                    <button className="bg-[#1CCBB1] text-white int text-base font-medium leading-8 py-1 mx:py-2 px-10 mx:px-4 rounded-[2rem] hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
                        Let's Go
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Landing;
