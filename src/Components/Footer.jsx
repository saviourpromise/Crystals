import React from "react";
import x from "../assets/xxx.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";

const Footer = () => {
    return (
        <div>
            <footer className="bg-[#0D0F11] py-10">
                <div className="flex mx:flex-col mx:gap-8 mx-20 mx:mx-4 justify-between border-b-[#38383f] border-b pb-8">
                    <div className="flex flex-col gap-6 mx:justify-center mx:items-center">
                        <p className="text-white text-[30px] int font-bold leading-[38.28px]">
                            Logo
                        </p>
                        <p className="text-[#A1A1AA] int mx:text-center text-base font-normal leading-7">
                            Amet minim mollit non deserunt ullamco est sit <br /> aliqua dolor
                            do amet sint. Velit officia consequat <br /> duis enim velit
                            mollit.
                        </p>

                        <div className="flex gap-4">
                            <img src={x} alt="" />
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={github} alt="" />
                        </div>
                    </div>

                    <div className="flex mx:gap-20 gap-40 mx:justify-center mx:items-center">
                        <div className="flex flex-col gap-[11px] mx:justify-center mx:items-center">
                            <p className="text-white font-bold int text-[17px] leading-[22px] pb-5">
                                Navigation
                            </p>
                            <p className="text-base font-normal int leading-7 text-[#A1A1AA]">
                                Features
                            </p>
                            <p className="text-base font-normal int leading-7 text-[#A1A1AA]">
                                How it Works
                            </p>
                            <p className="text-base font-normal int leading-7 text-[#A1A1AA]">
                                Testimonials
                            </p>
                            <p className="text-base font-normal int leading-7 text-[#A1A1AA]">
                                FAQs
                            </p>
                        </div>

                        <div className="flex flex-col gap-[11px] mx:justify-center mx:items-center">
                            <p className="text-white font-bold int text-[17px] leading-[22px] pb-5">
                                Help
                            </p>
                            <p className="text-base font-normal int leading-7 text-[#A1A1AA]">
                                Customer Support
                            </p>
                            <p className="text-base font-normal int leading-7 text-[#A1A1AA]">
                                Terms & Conditions
                            </p>
                            <p className="text-base font-normal int leading-7 text-[#A1A1AA]">
                                Privacy Policy
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex px-20 mx:flex-col mx:px-0 justify-between pt-8">
                    <p className="text-base font-normal mx:text-center int leading-7 text-[#A1A1AA]">
                        Copyright©2024{" "}
                    </p>
                    <p className="text-base font-normal mx:text-center int leading-7 text-[#A1A1AA]">
                        All Rights Reserved |{" "}
                        <a href="www.com" className="text-[#1CCBB1] underline">
                            Terms and Conditions
                        </a>{" "}
                        |{" "}
                        <a href="www.com" className="text-[#1CCBB1] underline">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
