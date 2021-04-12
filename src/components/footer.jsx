import React from "react";

const Footer = () => {
  return (
    <div classNameName="grid bg-black text-white font-italic float-bottom">
      <div className=" lg:grid-cols-3 md:grid-cols-2 md:grid-cols-1 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div>
          <div></div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study hello1
            </div>
            <a
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
        <hr />
        <div>
          <div></div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
        <hr />
        <div>
          <div></div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
