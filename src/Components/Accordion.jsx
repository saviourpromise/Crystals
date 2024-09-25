import React from "react";
import { useState } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = [
        {
            question: "What do i learn from Crystals trading hub?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
        },
        {
            question: "How long is the mentorship program?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
        },
        {
            question: "Do you provide ongoing support?",
            answer:
                "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
        },
        {
            question: "How to start trading",
            answer:
                "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
        },
        {
            question: "How to start trading",
            answer:
                "Lorem ipsum dolor sit amet, consectetur cdolor col adipiscing elit. Integer mattis nunc augue vel lacinia erat euismod ut. Sed eleifend tellus nonole tincidunt aliquet. Fusce aliquam mi felis.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="bg-black">
            <div className="bg-[#0D0F11] py-14">
                <div className="flex flex-col gap-4 justify-center items-center">
                    <p className="text-[50px] mx:text-center mx:text-[40px] mx:leading-[50px] font-semibold unv text-white leading-[61.5px]">
                        Frequently Asked Questions
                    </p>
                    <p className="text-base mx:text-center font-normal leading-7 int text-[#AAAAB3]">
                        Have a question not answered here? contact us at{" "}
                        <a href="support@loremipsum.com" className="text-[#1CCBB1]">
                            support@loremipsum.com
                        </a>
                    </p>
                </div>

                <div className="max-w-[45rem] mx:max-w-[23rem] mx-auto mt-10 flex flex-col gap-4">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#101214] shadow-inner border border-gray-700 rounded-lg"
                        >
                            <div
                                className="flex justify-between items-center py-4 cursor-pointer px-6"
                                onClick={() => toggleAccordion(index)}
                            >
                                <h3 className="text-[22px] unv font-medium text-[#A4A4AD] leading-7">
                                    {item.question}
                                </h3>
                                <div className="text-2xl">
                                    {activeIndex === index ? (
                                        <FaTimes className="text-[#1CCBB1] transition duration-100 transform rotate-90" />
                                    ) : (
                                        <FaPlus className="text-[#1CCBB1] transition duration-100 transform rotate-0" />
                                    )}
                                </div>
                            </div>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${activeIndex === index
                                    ? "max-h-40 opacity-100"
                                    : "max-h-0 opacity-0"
                                    }`}
                            >
                                <p className="text-[#AAAAB3] font-normal int text-base leading-7 px-6 pb-3">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Accordion;
