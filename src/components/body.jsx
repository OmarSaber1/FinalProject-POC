import React from "react";

const Body = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 h-30 border ">
        <div className="flex-1 border-solid border-4 border-light-blue-500 rounded bg-gray-200">
          <img
            className="w-full h-3/6 max-h-96   "
            src="https://bashooka.com/wp-content/uploads/2018/04/scg-canvas-background-animation-5.jpg"
            alt=""
          />
          <div className="text-center pt-3"> 
          <h1 className="font-bold font-italic">this a flexbox try</h1>
          <p className="font-bold ">try it!</p>
          <button className="bg-yellow-500 hover:bg-red-700 rounded px-3 py-2 mt-2">Button</button>
          </div>
        </div>
        <div className="flex-1 border-solid border-4 border-light-blue-500 rounded bg-gray-200">
          <img
            className="w-full h-3/6 max-h-96   "
            src="https://bashooka.com/wp-content/uploads/2018/04/scg-canvas-background-animation-5.jpg"
            alt=""
          />
          <div className="text-center pt-3"> 
          <h1 className="font-bold font-italic">this a flexbox try</h1>
          <p className="font-bold ">try it!</p>
          <button className="bg-yellow-500 hover:bg-red-700 rounded px-3 py-2 mt-2">Button</button>
          </div>
        </div>
        <div className="flex-1 border-solid border-4 border-light-blue-500 rounded bg-gray-200">
          <img
            className="w-full h-3/6 max-h-96   "
            src="https://bashooka.com/wp-content/uploads/2018/04/scg-canvas-background-animation-5.jpg"
            alt=""
          />
          <div className="text-center pt-3"> 
          <h1 className="font-bold font-italic">this a flexbox try</h1>
          <p className="font-bold ">try it!</p>
          <button className="bg-yellow-500 hover:bg-red-700 rounded px-3 py-2 mt-2">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
