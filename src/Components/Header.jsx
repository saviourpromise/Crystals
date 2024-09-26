import React, { useState } from "react";
import arrow from "../assets/arrow.svg";
import { FaHamburger, FaTimes, } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    const [menu, setmenu] = useState(false);

    const toggleNavVisibility = () => {
        setmenu(!menu);
    };
    return (
        <div className="bg-black">
            <header>
                <div className="hidden mx:flex mx:px-8 mx:py-2 mx:justify-between">
                    <p className="text-white text-xl font-bold leading-7 mx:text-3xl">
                        <Link to="/">Logo</Link>
                    </p>
                    {!menu ? (
                        <FaHamburger
                            className="text-[#1CCBB1] w-10 h-10"
                            onClick={() => {
                                toggleNavVisibility();
                            }}
                        />
                    ) : (
                        <FaTimes className="text-[#1CCBB1] w-10 h-10" onClick={() => {
                            toggleNavVisibility();
                        }} />
                    )}
                </div>

                <div className="flex mx:flex-col mx:gap-4 items-center px-16 py-4 justify-between z-[-1]">
                    <p className="text-white text-xl font-bold leading-7 logo mx:hidden mx:text-2xl">
                        <Link to="/">LOGO</Link>
                    </p>

                    {menu ?  <div><div className="flex mx:justify-center mx:items-center mx:flex-col gap-[17px] mx:ml-0 ml-24">
                        <p
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            <Link to="about">About Us</Link>
                        </p>
                        <p
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            <Link to="/mentorship">Testimonials</Link>
                        </p>
                        <div className="flex gap-2 one">
                            <p
                                className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                            >
                                <Link to="/freeforex">Resources</Link>
                            </p>
                            <img src={arrow} alt="" className="mt-1 two" />
                            {/* <div className="flex flex-col bg-yellow-400 p-3 absolute dave rounded">
                                <p className="text-base font-semibold">Resources</p>
                                <p className="text-base font-semibold">Resources</p>
                                <p className="text-base font-semibold">Resources</p>
                            </div> */}
                        </div>
                        <a
                            href="www.com"
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            Contact Us
                        </a>
                        <p
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            <Link to="/wttvip">FAQs</Link>
                        </p>
                    </div>
                    <button className="bg-[#1CCBB1] mt-4 mb-4 text-white int text-base font-medium leading-8 py-1 border px-10 rounded-md hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
                        Get Started
                    </button></div> : ""}

                    <div className="flex mx:justify-center mx:hidden mx:items-center mx:flex-col gap-[17px] mx:ml-0 ml-24">
                        <p
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            <Link to="/about">About Us</Link>
                        </p>
                        <p
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            <Link to="/mentorship">Testimonials</Link>
                        </p>
                        <div className="flex gap-2 one">
                            <p
                                className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                            >
                                <Link to="/freeforex">Resources</Link>
                            </p>
                            <img src={arrow} alt="" className="mt-1 two" />
                            {/* <div className="flex flex-col bg-yellow-400 p-3 absolute dave rounded">
                                <p className="text-base font-semibold">Resources</p>
                                <p className="text-base font-semibold">Resources</p>
                                <p className="text-base font-semibold">Resources</p>
                            </div> */}
                        </div>
                        <a
                            href="www.com"
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            Contact Us
                        </a>
                        <p
                            className="text-[#A6AAB2] int text-base mx:text-lg font-medium leading-6"
                        >
                            <Link to="/wttvip">FAQs</Link>
                        </p>
                    </div>
                    <button className="bg-[#1CCBB1] mx:hidden text-white int text-base font-medium leading-8 py-1 border px-10 rounded-md hover:bg-[#256e62] hover:transition-all hover:text-[#ffffff]">
                        Get Started
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
