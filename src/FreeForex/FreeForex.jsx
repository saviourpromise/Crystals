import React from "react";
import Header from "../Components/Header";
import images from "../assets/Images.png";
import forex from "../assets/forex.svg";
import imgReplace1 from "../assets/imgReplace1.png";
import Accordion from "../Components/Accordion";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";

const FreeForex = () => {
    return (
        <div className="bg-black">
            <Header />

            <div className="bgg">
                <Hero 
                mainText={"Free Forex Training"}
                subText={"How can you enjoy our free forex training program?"}
                />
            </div>

            <div className="flex mx:gap-10 mx:px-0 mx:flex-col px-20 justify-between bg-[#0D0F11] py-16">
                <div className="flex flex-col gap-4 my-auto mx:justify-center mx:items-center">
                    <p className="text-[#1CCBB1] mx:text-lg text-[17px] leading-6 font-medium int">
                        Mentorship program
                    </p>

                    <p className="text-[50px] mx:text-[32px] mx:leading-[40px] font-semibold unv leading-[61.5px] text-[#e4e4e7] mx:text-center">
                        Explore the World of <br /> Forex Trading with Our <br /> Free
                        Training
                    </p>

                    <p className="mx:leading-6 text-[#AAAAB3] mx:text-base leading-7 text-base intt font-normal mx:text-center">
                        At Crystals Trading Hub, we believe that quality education should be
                        accessible to <br /> everyone. Our Free Forex Training program is
                        designed to introduce you to the <br /> fundamentals of Forex
                        trading and provide you with the knowledge you need to start your{" "}
                        <br /> trading journey confidently.
                    </p>

                    <div>
                        <button className="text-white font-bold text-base leading-8 unv bg-[#1CCBB1] px-4 py-2 rounded-lg">
                            Join community
                        </button>
                    </div>
                </div>

                <img src={images} alt="" />
            </div>

            <div className="flex flex-col gap-10 py-14">
                <p className="text-[50px] mx:text-[28px] mx:leading-[40px] mx:text-center px-16 font-semibold unv leading-[61.5px] text-[#e4e4e7]">
                    Why Choose Our Free Training
                </p>

                <div className="flex mx:px-0 mx:flex-col mx:justify-center mx:items-center mx:gap-4 px-16 justify-between">
                    <div className="flex flex-col mx:w-[90%] gap-3 px-4 py-4 rounded-xl bg-gradient-to-b from-[#1d3a31] to-[#010201]">
                        <div>
                            <img src={forex} alt="" />
                        </div>
                        <p className="text-white unv font-semibold text-[21px]  leading-[27.3px]">
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
                        <p className="text-white unv font-semibold text-[21px]  leading-[27.3px]">
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
                        <p className="text-white unv font-semibold text-[21px]  leading-[27.3px]">
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

            <div className="bg-[#0D0F11] flex flex-col gap-2 py-20">
                <p className="text-[50px] mx:text-[36px] mx:leading-[40px] text-center font-semibold unv leading-[61.5px] text-[#e4e4e7] mb-6">
                    What You'll Learn
                </p>

                <div className="flex gap-14 bg-[#101214] mx:mx-4 mx:flex-col mx-[5.5rem] p-4 rounded-md border-[#292929] border-2">
                    <img src={imgReplace1} alt="" />

                    <div className="flex flex-col gap-8 my-auto">
                        <p className="text-white unv font-semibold text-[21px] leading-[27.3px]">
                            Introduction to Forex
                        </p>
                        <p className="text-[#A1A1AA] int font-normal text-base">
                            Understand what Forex trading is, how the market operates, <br />{" "}
                            and the benefits of trading currencies.
                        </p>
                    </div>
                </div>

                <div className="flex mx:px-4 mx:gap-3 mx:flex-col px-[5.5rem] justify-between">
                    <div className="flex flex-col gap-8 bg-[#101214] p-4 pr-[18px] rounded-md border-[#292929] border-2">
                        <div className="flex flex-col gap-4">
                            <p className="text-white unv font-semibold text-[21px] leading-[27.3px]">
                                Basic Terminology
                            </p>
                            <p className="text-[#A1A1AA] int font-normal text-base leading-7">
                                Familiarize yourself with essential trading terms such as pips,
                                spreads, <br /> leverage, and margins.
                            </p>
                        </div>

                        <div>
                            <img src={imgReplace1} alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-8 bg-[#101214] p-4 pr-[18px] rounded-md border-[#292929] border-2">
                        <div className="flex flex-col gap-4">
                            <p className="text-white unv font-semibold text-[21px] leading-[27.3px]">
                                Market Participants
                            </p>
                            <p className="text-[#A1A1AA] int font-normal text-base leading-7">
                                Learn about the key players in the Forex market, including
                                banks, <br /> institutions, retail traders, and more.
                            </p>
                        </div>

                        <div>
                            <img src={imgReplace1} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex mx:px-4 mx:gap-3 mx:flex-col px-[5.5rem] justify-between">
                    <div className="flex flex-col gap-4 bg-[#101214] p-3 rounded-md border-[#292929] border-2">
                        <p className="text-white unv font-semibold text-[21px] leading-[27.3px]">
                            Analyzing the Market
                        </p>
                        <p className="text-[#A1A1AA] int font-normal text-base leading-7">
                            Explore basic analysis techniques, including <br /> technical and
                            fundamental analysis, to help you <br /> make informed trading
                            decisions.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 bg-[#101214] p-3 rounded-md border-[#292929] border-2">
                        <p className="text-white unv font-semibold text-[21px] leading-[27.3px]">
                            Trading Platforms
                        </p>
                        <p className="text-[#A1A1AA] int font-normal text-base leading-7">
                            Get an overview of popular trading platforms and <br /> how to use
                            them to execute trades.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 bg-[#101214] p-3 rounded-md border-[#292929] border-2">
                        <p className="text-white unv font-semibold text-[21px] leading-[27.3px]">
                            Risk Management
                        </p>
                        <p className="text-[#A1A1AA] int font-normal text-base leading-7">
                            Discover the importance of risk management and <br /> how to
                            protect your trading capital.
                        </p>
                    </div>
                </div>
            </div>

            <Accordion />

            <div className="flex flex-col gap-4 justify-center items-center pt-20 pb-16 bg-gradient-to-b from-[#34867b]">
                <p className="text-[50px] mx:text-[30px] mx:leading-[45px] font-semibold unv text-white leading-[61.5px] text-center">
                Join Our Free Forex <br /> Training Community
                </p>
                <p className="text-base mx:text-base font-normal leading-7 int text-[#AAAAB3] text-center">
                Take the first step towards mastering Forex trading with personalized mentorship from Crystals <br /> Trading Hub. Apply now and start your journey to becoming a successful trader.
                </p>
                <button className="font-medium text-base text-[#2D2D2D] leading-8 intt text-center bg-white px-6 rounded-md py-1">Join Community</button>
            </div>

            <Footer />
        </div>
    );
};

export default FreeForex;
