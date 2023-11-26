import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

const DisplayWork = ({ work }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-t from-slate-900 to-black  text-white font-name gap-3 pb-10 px-10 relative">
      <div className="flex items-center ">
        <p className="text-center text-2xl font-bold mt-5 ">{work.title}</p>
        <button
          onClick={() => navigate("/")}
          className=" bg-red-700 p-2 text-white text-2xl absolute top-0 right-0 "
        >
          <AiOutlineClose />
        </button>
      </div>
      <LazyLoadImage
        loading="lazy"
        effect="blur"
        src={work.image}
        alt={work.title}
      />
      <div className="flex flex-col items-center w-2/3">
        {work.work &&
          work.work.map((workItem, index) => (
            <p key={index} className="text-center font-bold text-xl p-2">
              {workItem}
            </p>
          ))}
      </div>
      <div className="flex gap-3 ">
        {work.tech.map((tech) => (
          <p
            key={work.index}
            className="border border-green-500 p-2 rounded-lg bg-gradient-to-l from-green-500 to-cyan-500 font-bold text-gray-900"
          >
            {tech}
          </p>
        ))}
      </div>
      {work.website && (
        <a
          href={work.website}
          target="_blank"
          rel="noreferrer"
          className=" bg-white text-black font-bold hover:bg-blue-700 hover:text-white mt-5 p-2 rounded-lg"
        >
          See Website
        </a>
      )}
      <p className="text-center ">{work.doneIn}</p>
    </div>
  );
};

export default DisplayWork;
