import React from 'react'
import Header from '../Components/Header'
import Slider from '../Components/Slider'
import Accordion from '../Components/Accordion'
import Footer from '../Components/Footer'
import Hero from '../Components/Hero'

const WttBot = () => {
    return (
        <div className='bg-black'>

            <Header />

            <div className="bgg">
                <Hero 
                mainText={"WTT Trading bot"}
                subText={"Tryout our wtt trading bot"}
                />
            </div>

            <div className='flex px-28 mx:px-0 justify-between flex-col gap-6 bg-[#0D0F11] py-20'>
                <p className='text-white mx:text-center mx:text-[28px] mx:leading-[30px] text-[50px] leading-[61.5px] font-semibold unv'>Automate Your Trading with Our Advanced <br /> Trading Bot</p>

                <p className='text-base mx:text-xs font-normal mx:leading-5 mx:text-center leading-7 text-white intt'>Elevate your trading experience with Crystals Trading Hub's VIP Signals Channel. Designed for traders who want to stay ahead of the market, our VIP Signals Channel offers real-time trading signals, expert analysis, and actionable insights to help you make informed trading decisions.</p>

                <div className='flex gap-4 mx:flex-col mx:justify-center mx:items-center'>
                    <div className='bg-[#042A24] w-[576px] h-[481px] mx:w-[370px] mx:h-[300px]'></div>
                    <div className='bg-[#042A24] w-[576px] h-[481px] mx:w-[370px] mx:h-[300px]'></div>
                </div>
            </div>

            <div className='flex mx:px-0 mx:gap-10 mx:flex-col mx:justify-center mx:items-center px-32 justify-between py-20'>
                <div className='grid grid-cols-2 mx:grid-cols-1 gap-6'>
                    <div className="flex flex-col w-[300px] h-[246px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
                        <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                            <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                1
                            </p>
                        </div>
                        <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                            Web design
                        </p>
                        <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.
                        </p>
                    </div>

                    <div className="flex flex-col w-[300px] h-[246px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
                        <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                            <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                2
                            </p>
                        </div>
                        <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                            Web development
                        </p>
                        <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.
                        </p>
                    </div>

                    <div className="flex flex-col w-[300px] h-[246px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
                        <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                            <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                3
                            </p>
                        </div>
                        <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                            UI/UX design
                        </p>
                        <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.
                        </p>
                    </div>

                    <div className="flex flex-col w-[300px] h-[246px] gap-3 justify-center items-center px-8 py-4 border border-[#212A33]">
                        <div className="h-[33px] w-[33px] rounded-full bg-white flex items-center justify-center">
                            <p className="text-base font-medium leading-[25.6px] text-[#1CCBB1] unv">
                                4
                            </p>
                        </div>
                        <p className="text-white font-semibold text-[21px] leading-[25.83px] unv">
                            Product design
                        </p>
                        <p className="text-base font-normal leading-7 text-center intt text-[#A1A1AA]">
                            Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalar cons elementum tempus hac.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col gap-4 my-auto'>
                    <p className="text-[#1CCBB1] mx:text-lg mx:text-center text-[17px] leading-6 font-medium int">
                        Features
                    </p>

                    <p className="text-[50px] mx:text-[32px] mx:leading-[40px] font-semibold unv leading-[61.5px] text-[#e4e4e7] mx:text-center">
                        Highly effective <br /> solutions
                    </p>

                    <p className="mx:leading-6 text-[#AAAAB3] mx:text-sm leading-7 text-base intt font-normal mx:text-center">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli <br /> mattis sit phasellus mollis sit aliquam sit.
                    </p>

                    <div className='mx:items-center mx:flex mx:justify-center'>
                        <button className="font-medium text-base text-[#fff] leading-8 intt text-center bg-[#1CCBB1] px-8 rounded-md py-1">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='flex px-28 mx:justify-center mx:items-center mx:gap-10 mx:px-0 mx:flex-col justify-between bg-[#0D0F11] py-20'>
                <div className='flex flex-col gap-10'>
                    <div className='bg-[#042A24] w-[539px] h-[456px] mx:w-[370px] mx:h-[300px]'></div>

                    <div className='flex flex-col gap-4'>
                        <p className="text-[30px] mx:text-[28px] mx:leading-[30px] font-semibold unv leading-[36.9px] text-[#e4e4e7] mx:text-center">
                            Crafting visually stunning <br /> websites
                        </p>

                        <p className="mx:leading-6 text-[#AAAAB3] mx:text-xs leading-7 text-base intt font-normal mx:text-center">
                            Lorem fusce orci enim scelerisque phasellus congue nibh at quam <br /> venenatis vel gravida elit enim aliquet hac duis habitasse vitae <br /> posuere etiam consequat. Sit nibh risus molestie nunc eu nibh ac <br /> adipiscing ultrices id elementum.
                        </p>

                        <div className='mx:flex mx:justify-center'>
                            <button className="font-medium text-base text-[#fff] leading-8 intt text-center bg-[#1CCBB1] px-8 rounded-md py-1">Get Started</button>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col-reverse gap-10'>
                    <div className='bg-[#042A24] w-[539px] h-[456px] mx:w-[370px] mx:h-[300px]'></div>

                    <div className='flex flex-col gap-4 pl-20 mx:pl-0'>
                        <p className="text-[30px] mx:text-[28px] mx:leading-[30px] font-semibold unv leading-[36.9px] text-[#e4e4e7] mx:text-center">
                            Crafting visually stunning <br /> websites
                        </p>

                        <p className="mx:leading-6 text-[#AAAAB3] mx:text-xs leading-7 text-base intt font-normal mx:text-center">
                            Lorem fusce orci enim scelerisque phasellus congue nibh at quam <br /> venenatis vel gravida elit enim aliquet hac duis habitasse vitae <br /> posuere etiam consequat. Sit nibh risus molestie nunc eu nibh ac <br /> adipiscing ultrices id elementum.
                        </p>

                        <div className='vis mx:flex mx:justify-center'>
                            <button className="font-medium text-base text-[#fff] leading-8 intt text-center bg-[#1CCBB1] px-8 rounded-md py-1">Get Started</button>
                        </div>
                    </div>
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

export default WttBot
