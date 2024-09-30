import React from 'react'
import Header from '../Components/Header'
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkdln from "../assets/linkdln.png";
import instagram from "../assets/instagram.png";
import Accordion from '../Components/Accordion';
import Footer from '../Components/Footer';
import Hero from '../Components/Hero';

const Contact = () => {
    return (
        <div className='bg-black'>
            <Header />

            <div className="bgg mx:-mt-10">
                <Hero 
                mainText={"Contact us"}
                subText={"Wanna contact us?"}
                />
            </div>

            <div className='flex flex-col gap-6 bg-[#0D0F11] py-20'>
                <p className='text-[50px] mx:text-[32px] mx:leading-[40px] font-semibold unv leading-[61.5px] text-[#e4e4e7] text-center'>Get In Touch</p>

                <p className='mx:leading-6 text-[#A1A1AA] mx:text-sm leading-7 text-base int font-normal text-center'>Facilisis commodo mattis neque nulla ultrices mattis sed. Ullamcorper <br /> tempus mattis ac tristique gravida ornare faucibus suspendisse.</p>

                <div className='flex mx:gap-6 mx:px-4 mx:flex-col mx:justify-center mx:items-center px-40 justify-between'>
                    <div className='flex flex-col gap-6 p-6 rounded-lg bg-gradient-to-b from-[#1CCBB1]'>
                        <p className='text-white font-normal intt text-base leading-7'>Your Name</p>

                        <input type="text" placeholder='John' className='text-white placeholder:text-white placeholder:font-normal placeholder:text-base placeholder:leading-7 placeholder:int pl-4 font-medium rounded-md intt text-base leading-7 w-[463px] mx:w-[300px] h-[48px] bg-[#091B19]' />

                        <p className='text-white font-normal intt text-base leading-7'>Your Email</p>

                        <input type="email" placeholder='johndoe@gmail.com' className='text-white placeholder:text-white placeholder:font-normal placeholder:text-base placeholder:leading-7 placeholder:int pl-4 font-medium rounded-md intt text-base leading-7 w-[463px] mx:w-[300px] h-[48px] bg-[#091B19]' />

                        <p className='text-white font-normal intt text-base leading-7'>Your Message</p>

                        <input type="email" placeholder='Write your message here...' className='text-white placeholder:text-white placeholder:font-normal placeholder:text-base placeholder:leading-7 placeholder:int pl-4 font-medium rounded-md intt text-base leading-7 w-[463px] mx:w-[300px] h-[198px] bg-[#091B19]' />

                        <div>
                            <button className="bg-white text-[#2D2D2D] int text-base font-semibold leading-8 py-1 px-8 rounded-md hover:bg-[#2D2D2D] transition-all duration-500 hover:text-[#ffffff]">
                                Send Message
                            </button>
                        </div>
                    </div>

                    <div className='flex mx:justify-center mx:items-center flex-col gap-4 mt-6'>
                        <p className='font-semibold text-[23px] leading-[28.29px] text-[#e4e4e7] unv'>Want to reach out directly?</p>

                        <p className='mx:leading-6 mx:text-center text-[#A1A1AA] mx:text-sm leading-7 text-base int font-normal'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit <br /> phasellus mollis sit aliquam sit nullam.</p>

                        <div className='flex gap-3 bg-[#101214] w-[465px] mx:w-[320px] h-[81px] rounded-lg'>
                            <div className='mt-[6px] pl-6'>
                                <img src={email} alt="" />
                            </div>
                            <div className='flex flex-col my-auto'>
                                <p className='text-[#A1A1AA] font-normal text-base leading-7 intt'>Email:</p>
                                <p className='text-[#A1A1AA] font-semibold text-base leading-7 intt'>contact@email.com</p>
                            </div>
                        </div>

                        <div className='flex gap-3 bg-[#101214] w-[465px] mx:w-[320px] h-[81px] rounded-lg'>
                            <div className='mt-[6px] pl-6'>
                                <img src={phone} alt="" />
                            </div>
                            <div className='flex flex-col my-auto'>
                                <p className='text-[#A1A1AA] font-normal text-base leading-7 intt'>Phone:</p>
                                <p className='text-[#A1A1AA] font-semibold text-base leading-7 intt'>(234) 564 - 6788</p>
                            </div>
                        </div>

                        <p className='font-semibold mt-6 text-[23px] leading-[28.29px] text-[#e4e4e7] unv'>Follow Us:</p>

                        <div className='flex gap-4'>
                            <img src={facebook} alt="" />
                            <img src={twitter} alt="" />
                            <img src={linkdln} alt="" />
                            <img src={instagram} alt="" />
                        </div>
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
    )
}

export default Contact
