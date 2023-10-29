import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DisplayWork = ({ work, onClose }) => {
  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-center bg-white text-black rounded-lg font-name gap-3 w-fit h-fit">
        <p className="text-center text-2xl font-bold mt-5 ">{work.title}</p>
        <img src={work.image} alt="" className="p-5 " />
        <p className="text-center font-bold text-xl p-5">{work.work}</p>
        {work.website && <a href={work.website} className="hover:underline bg-black text-white hover:bg-blue-700 hover:text-white p-2 rounded-lg">See Website</a>}
        <p className="text-center ">{work.doneIn}</p>
        
        <button
          className=" bg-red-700 p-2 mb-10 text-white text-xl rounded-lg "
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

export default DisplayWork;
