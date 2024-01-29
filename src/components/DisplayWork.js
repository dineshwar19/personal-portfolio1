import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "react-lazy-load-image-component/src/effects/blur.css";


const DisplayselectedWork = ({ selectedWork, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center" onClick={onClose}>
      <div className="bg-black bg-opacity-70 backdrop-blur-2xl p-6 rounded-md w-128 mx-auto h-128 overflow-scroll scrollbar-hide">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold">{selectedWork.title}</p>
          <button
            className="bg-red-700 p-2 text-white text-2xl"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <LazyLoadImage
            loading="lazy"
            effect="blur"
            src={selectedWork.image}
            alt={selectedWork.title}
            className="my-4"
          />
          <div
            className="transition-all duration-500 hover:rotate-90 hover:bg-white hover:bg-opacity-25 rounded-full"
          >
            <span className="sr-only">Scroll to Bottom</span>
            <MdOutlineKeyboardArrowRight size={50} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          {selectedWork.work &&
            selectedWork.work.map((selectedWorkItem, index) => (
              <p key={index} className="text-center font-bold p-2">
                {selectedWorkItem}
              </p>
            ))}
        </div>
        <div className="flex gap-3 overflow-scroll scrollbar-hide">
          {selectedWork.tech.map((tech, index) => (
            <p
              key={index}
              className="border border-green-500 p-2 rounded-lg bg-gradient-to-l from-green-500 to-cyan-500 font-bold text-gray-900"
            >
              {tech}
            </p>
          ))}
        </div>
        {selectedWork.website && (
          <a
            href={selectedWork.website}
            id="bottom-of-component" // Add an ID to the bottom of the component
            target="_blank"
            rel="noreferrer"
            className="bg-white text-black font-bold hover:bg-blue-700 hover:text-white mt-4 p-2 rounded-lg block text-center"
          >
            See Website
          </a>
        )}
        <p className="text-center mt-2">{selectedWork.doneIn}</p>
      </div>
    </div>
  );
};

export default DisplayselectedWork;
