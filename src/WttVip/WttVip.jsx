import React from 'react'
import Header from '../Components/Header'
import wttvip from "../assets/wttvip.png";
import crypto from "../assets/crypto.svg";
import Slider from '../Components/Slider';
import Accordion from '../Components/Accordion';
import Footer from '../Components/Footer';

const WttVip = () => {
    return (
        <div className='bg-black'>
            <Header />

            <div className="bgg mx:-mt-10">
                <div className="flex flex-col gap-4 justify-center items-center mx:h-[250px] h-[516px] edi">
                    <p className="font-bold mx:text-[40px] text-center mx:pt-40 mx:leading-[80px] text-[77px] leading-[94.71px] text-[#e4e4e7] logo">
                        WTT VIP Signals
                    </p>
                    <p className="text-[16.9px] mx:pb-36 font-normal leading-7 text-[#A1A1AA] text-center int">
                        Commodo nec mi id ullamcorper vitae augue neque dis. Nunc lacinia
                        viverra orci diam. Nibh est vitae <br /> suspendisse parturient sed
                        lorem eu.
                    </p>
                </div>
            </div>

            <div className='flex mx:px-0 mx:gap-6 mx:flex-col mx:justify-center mx:items-center px-28 justify-between bg-[#1CCBB1] py-20 mx:py-10'>
                <div className='flex flex-col gap-4 my-auto'>
                    <p className='text-white mx:text-center mx:text-[32px] mx:leading-[36px] text-[50px] leading-[61.5px] font-semibold unv'>Gain a Competitive Edge <br /> with Our Exclusive VIP <br /> Signals Channel</p>

                    <p className='text-base mx:text-sm font-normal mx:leading-5 mx:text-center leading-7 text-white intt'>Elevate your trading experience with Crystals Trading Hub's VIP Signals Channel. Designed <br /> for traders who want to stay ahead of the market, our VIP Signals Channel offers real-time <br /> trading signals, expert analysis, and actionable insights to help you make informed trading <br /> decisions.</p>

                    <div className='mx:flex mx:justify-center mx:items-center'>
                        <button className="bg-white text-[#000000] unv text-base font-medium leading-8 py-1 px-10 rounded-md hover:bg-[#1f1e1e] transition-all duration-500 hover:text-[#ffffff]">
                            Get Started
                        </button>
                    </div>
                </div>

                <img src={wttvip} alt="" className='mx:w-[90%]'/>
            </div>

            <div className='flex flex-col gap-6 py-20'>
                <p className='text-[#1CCBB1] text-center mx:text-lg text-[17px] leading-6 font-medium int'>Benefits</p>

                <p className='text-[50px] mx:text-[36px] mx:leading-[50px] font-semibold text-center unv leading-[61.5px] text-[#e4e4e7]'>What you’ll  benefit</p>

                <div className='flex flex-col gap-5'>
                    <div className='flex mx:px-0 mx:justify-center mx:items-center mx:gap-6 mx:flex-col px-36 justify-between'>
                        <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
                            <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                    1
                                </p>
                            </div>
                            <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                                Timely Alerts
                            </p>
                            <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                                Instant notifications on major market <br /> movements and trading opportunities.
                            </p>
                        </div>

                        <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center px-8 py-4 items-center border border-[#212A33]">
                            <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                    2
                                </p>
                            </div>
                            <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                                In-Depth Reports
                            </p>
                            <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                                Comprehensive market reports covering <br /> trends, economic events, and technical <br /> analyses.
                            </p>
                        </div>

                        <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center px-8 py-4 items-center border border-[#212A33]">
                            <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                    3
                                </p>
                            </div>
                            <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                                Live Trading Sessions
                            </p>
                            <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                                Participate in sessions where experts <br /> analyze the market and provide real-time <br /> insights.
                            </p>
                        </div>
                    </div>

                    <div className='flex px-36 mx:px-0 mx:justify-center mx:items-center mx:gap-6 mx:flex-col justify-between'>
                        <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
                            <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                    4
                                </p>
                            </div>
                            <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                                Educational Growth
                            </p>
                            <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                                Enhance your trading knowledge with <br /> exclusive educational materials and learn <br /> advanced strategies from experts.
                            </p>
                        </div>

                        <div className="flex flex-col w-[345px] h-[217px] gap-3 justify-center px-8 py-4 items-center border border-[#212A33]">
                            <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                    5
                                </p>
                            </div>
                            <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                                VIP Community Access
                            </p>
                            <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                                Connect with like-minded traders, share <br /> insights, and participate in exclusive <br /> discussions.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 w-[345px] h-[217px] justify-center px-8 py-4 items-center border border-[#212A33]">
                            <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                                <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                    6
                                </p>
                            </div>
                            <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                                Personalized Support
                            </p>
                            <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                                Direct assistance from our team <br /> of experts for any trading-related <br /> questions.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <button className="bg-[#1CCBB1] text-[#fff] intt text-base font-bold leading-8 py-1 px-6 rounded-md hover:bg-[#1f1e1e] transition-all duration-500 hover:text-[#ffffff]">
                        Join community
                    </button>
                </div>
            </div>

            <div className='flex px-28 mx:gap-4 mx:px-0 mx:flex-col mx:justify-center mx:items-center justify-between bg-[#0D0F11] py-20 mx:py-10'>
            <img src={crypto} alt="" className='mx:w-[90%]'/>

            <div className='flex flex-col gap-4 my-auto'>
                <p className="text-[#1CCBB1] mx:text-lg mx:text-center text-[17px] leading-6 font-medium int">
                    Mentorship program
                </p>

                <p className="text-[50px] mx:text-[32px] mx:leading-[40px] font-semibold unv leading-[61.5px] text-[#e4e4e7] mx:text-center">
                    Unlock Your Trading <br /> Potential with  Gu
                </p>

                <p className="mx:leading-6 text-[#AAAAB3] mx:text-xs leading-7 text-base intt font-normal mx:text-center">
                    At Crystals Trading Hub, we believe that every trader’s journey is unique. <br /> Our Mentorship Program is designed to provide you with the personalized <br /> guidance, support, and expertise you need to achieve your trading goals. <br />
                    At Crystals Trading Hub, we believe that every trader’s journey is unique. <br /> Our Mentorship Program is designed to provide you with the personalized <br /> guidance, support, and expertise you need to achieve your trading goals.
                </p>
            </div>
            </div>

            <Slider />

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
    )
}

export default WttVip
