import React from 'react'

export default function Hero({mainText, subText}) {
    return (
        <div className="flex flex-col gap-4 justify-center items-center mx:h-[250px] h-[250px] edi">
            <p className="font-bold capitalize mx:text-[60px] mx:mt-40 mx:leading-[80px] text-[77px] leading-[94.71px] text-[#e4e4e7] logo">
              {mainText}
            </p>
            <p className="text-[16.9px] mx:pb-36 font-normal leading-7 text-[#A1A1AA] text-center int">
                {subText}
            </p>
        </div>
    )
}
