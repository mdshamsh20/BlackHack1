import React from 'react';

const HorizontalScrollCards = () => {
  return (
    <div className="max-w-screen-xl mt-20 mx-auto p-4 overflow-hidden">
      <div className="flex space-x-4 overflow-x-auto p-4" style={{ animation: 'scroll 20s linear infinite' }}>
        <div >
          <button className="px-16 py-2 text-lg   text-black bg-white hover:bg-cyan-300 rounded-3xl">XSS</button>
        </div>
        <div >
          <button className="px-16 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">DDOS</button>
        </div>
        <div >
          <button className="px-16 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">XSS2</button>
        </div>

        <div >
          <button className="px-16 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">HACKER</button>
        </div>
        <div >
          <button className="px-16 py-2 text-lg font-semibold text-black bg-white  hover:bg-cyan-300 rounded-3xl">LeaderBord</button>
        </div>
       
      </div>
    </div>
  );
};

export default HorizontalScrollCards;
