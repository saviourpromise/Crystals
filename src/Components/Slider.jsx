import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import { useState } from "react";
import star from "../assets/star.svg";
import arrow from "../assets/Stroke 1.svg";
import "swiper/css";
import "swiper/css/navigation";

const Slider = () => {
    return (
        <div className='bg-black'>
            <div className="bg-[#0D0F11]">
                <div className="flex px-24 mx:px-0 justify-between pt-16 py-10">
                    <div className="flex flex-col gap-6 mx:gap-4">
                        <p className="text-[50px] mx:text-[45px] mx:leading-[50px] mx:text-center font-semibold unv text-white leading-[61.5px]">
                            Our Success Stories
                        </p>
                        <p className="text-[#AAAAB3] mx:text-center mx:text-lg text-base font-normal int leading-7">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu
                            egestas morbi <br /> sem vulputate etiam facilisis.
                        </p>
                    </div>

                    <div className="flex gap-2 my-auto mx:hidden">
                        <p className="text-base font-bold int leading-8 text-[#1CCBB1]">
                            Get Started
                        </p>
                        <div>
                            <img src={arrow} alt="" className="mt-[10px]" />
                        </div>
                    </div>
                </div>

                <div className="pl-24 mx:pl-4 pb-10 mx:px-4">
                    <Swiper
                        spaceBetween={60}
                        slidesPerView={1}
                        breakpoints={{
                            375: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            800: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 60,
                            },
                        }}
                        navigation
                        modules={[Navigation]}
                    >
                        <SwiperSlide>
                            {" "}
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Brian clack
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Jessie james
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            {" "}
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Ikenna Okafor
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Brian clack
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Brian clack
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Brian clack
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Brian clack
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="flex flex-col gap-4 rounded-2xl px-3 py-5 bg-gradient-to-b from-[#1d3a31]">
                                <div>
                                    <img src={star} alt="" />
                                </div>
                                <p className="text-[#A1A1AACC] text-base font-normal int leading-7">
                                    “Lorem ipsum dolor sit amet dolor sit <br /> consectetur eget
                                    maecenas sapien fusce <br /> egestas risus purus suspendisse
                                    turpis”
                                </p>

                                <div className="flex flex-col gap-2">
                                    <p className="text-[#A1A1AACC] text-[17px] unv font-semibold leading-[20.91px]">
                                        Brian clack
                                    </p>
                                    <p className="text-[#A1A1AACC] text-[15px] font-normal int leading-[18.15px]">
                                        VP of Marketing at Snapchat
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Slider
