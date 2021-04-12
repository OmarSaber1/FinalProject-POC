import React from "react";

const Nav = () => {
  return (
    <div className=" flex flex-col-reverse justify-center items-canter">
      <div className="bg-green-500 pt-3 pb-3 pl-2 text-center">
        <h1 className="font-sans font-bold">Imagination and bayond</h1>
        <button class="bg-red-500 hover:bg-red-700 rounded-full p-1 mt-2">
          Button
        </button>
      </div>
      <img
        className="w-screen max-h-96"
        src="https://bs-uploads.toptal.io/blackfish-uploads/uploaded_file/file/192772/image-1582504280612-e389f651255c7bed5775c123514d6ee3.png"
        alt=""
      />
    </div>
  );
};

export default Nav;
