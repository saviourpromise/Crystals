// Loading.js
import React from 'react';
import loadingfif from "../assets/Animation - 1727201002511.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={loadingfif} alt="Loading..." className='w-[20%] bg-black'/>
    </div>
  );
};

export default Loading;
