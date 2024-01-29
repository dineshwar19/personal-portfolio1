import React, { useState } from "react";
import snake from "../assets/works/snakeGame.webp";
import linkedIn from "../assets/works/linkedIn-clone.webp";
import WeatherIndia from "../assets/works/WeatherIndia.webp";
import imageGallery from "../assets/works/ImageGallery.webp";
import todoList from "../assets/works/TodoList.webp";
import hulu from "../assets/works/Hulu-clone.webp";
import { AiOutlineZoomIn } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import DisplayWork from "./DisplayWork";
const Experience = () => {
  const [selectedWork, setSelectedWork] = useState(null);
  const works = [
    {
      id: 0,
      title: "Stream Sphere (Hulu-Clone)",
      work: [
        `Developed a web application that  replicates the design of the Hulu streaming service, allowing users to browse movies and TV shows by genre.`,
        `The Movie Database (TMDb) API: Integrated to fetch movie and TV show data based on different genres.`,
        `Implemented dynamic content rendering based on genres using React components.`,
        `Improved performance with lazy loading of images and integrated a loading spinner during data fetching.`,
      ],
      tech: [
        "Reactjs",
        "TailwindCSS",
        "TMDB API",
        "LazyLoadImage",
        "ldrs/quantum",
      ],
      doneIn: "Nov - 2023",
      image: hulu,
      url: "https://github.com/dineshwar19/Hulu-clone",
      website: "https://main--stream-sphere.netlify.app/",
    },
    {
      id: 1,
      title: "LinkedIn - clone",
      work: [
        `LinkedIn-clone is a React-based web application with a sleek and professional user interface, designed using Tailwind CSS. This frontend design project serves as a foundation for a future LinkedIn-like platform, with full functionalities to be added later through Node.js and MongoDB integration`,
      ],
      tech: ["Reactjs", "TailwindCSS"],
      doneIn: "oct - 2023",
      image: linkedIn,
      url: "https://github.com/dineshwar19/linkedin-clone",
      website: "https://linkedin-clone-dineshwar.netlify.app/",
    },
    {
      id: 2,
      title: "Weather Application",
      work: [
        `Developed a Weather App using React.js that allows users to check real-time weather information for a specified location.`,
        `Dynamic Weather Data: Utilized the WeatherAPI to fetch and display current weather conditions, including temperature, humidity, and wind speed.`,
      ],
      tech: ["Reactjs", "TailwindCSS", "Weather API", "JavaScript"],
      doneIn: "June - 2023",
      image: WeatherIndia,
      url: "https://github.com/dineshwar19/WebDevelopment/tree/main/React%20Projects/weatherapi",
      website: "https://main--app-weather-sd.netlify.app/",
    },
    {
      id: 3,
      title: "Image Gallery",
      work: [
        `Developed an Image Search App using React.js that allows users to search for images based on their specified terms, leveraging the Pixabay API.`,
        `A web application that  replicates the functionality and design of the Hulu streaming service, allowing users to browse movies and TV shows by genre.`,
        `Dynamic Image Fetching: Utilized the Pixabay API to fetch and display images based on user-defined search terms`,
        `Search Functionality: Integrated a search bar to input terms and instantly fetch relevant images.`,
      ],
      tech: ["Reactjs", "TailwindCSS", "Pixabay API", "JavaScript"],
      doneIn: "Aug - 2023",
      image: imageGallery,
      url: "https://github.com/dineshwar19/image-gallery",
      website: "https://main--image-gallery19.netlify.app/",
    },
    {
      id: 4,
      title: "Todo List",
      work: [
        ` Created a ToDo list application using React, allowing users to manage tasks with features such as adding, deleting, and marking tasks as complete.`,
        `Utilized React state to dynamically render the task list, updating in real-time as users interact with the application.`,
        `Local Storage Integration: Implemented local storage to persist the task list across browser sessions, enhancing user experience`,
        `Task Operations: Enabled users to add new tasks, mark tasks as complete with a double click, and delete tasks with a dedicated button.`,
      ],
      tech: ["Reactjs", "JavaScript", "CSS3"],
      doneIn: "Oct - 2023",
      image: todoList,
      url: "https://github.com/dineshwar19/WebDevelopment/tree/main/React%20Projects/todo-list",
    },
    {
      id: 5,
      title: "Snake Game",
      work: [
        `Developed a classic Snake Game using HTML, CSS, and JavaScript to provide users with an interactive and engaging gaming experience.`,
        `Utilized the HTML5 canvas element for dynamic rendering of the game board and snake.`,
        `Implemented responsive keyboard controls for users to navigate the snake (left, right, up, down).`,
        `Integrated a scorecard displaying the user's score as they collect food items.`,
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      doneIn: "2022",
      image: snake,
      url: "https://github.com/dineshwar19/WebDevelopment/tree/main/Snake%20game",
    },
  ];
  return (
    <div
      id="experience"
      className={`text-white  relative ${
        selectedWork
          ? "bg-black bg-opacity-30 backdrop-blur-2xl"
          : "bg-gradient-to-b from-slate-900 to-black"
      }`}
    >
      <div className="p-10">
        <div>
          <h1 className="text-3xl font-bold mb-5 uppercase">Experience</h1>
          <hr className="mb-5 w-20 h-1 rounded-lg bg-black" />
        </div>
        <p className="text-center md:px-10 font-name">
          Welcome to the "Experience" section of my portfolio! As a passionate
          and self-motivated developer, I've had the opportunity to work on a
          variety of exciting projects and challenges that have helped me grow
          and develop my skills. While I may not have formal work experience,
          I've dedicated myself to coding and have completed numerous projects
          that demonstrate my proficiency in web development and
          problem-solving. I've worked with different technologies, including
          JavaScript, React.js, and various APIs, to bring my ideas to life.
        </p>
        <div className="mt-10 ">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-8 px-6 sm:px-0">
            {works.map((work, index) => (
              <li
                key={index}
                className="shadow-mg shadow-gray-600 rounded-lg overflow-hidden group"
              >
                <LazyLoadImage
                  loading="lazy"
                  effect="blur "
                  src={work.image}
                  alt={work.title}
                />
                <div className="flex justify-around py-5 bg-white opacity-0 w-0 group-hover:opacity-100 group-hover:w-full transition-w duration-500">
                  <button
                    className="text-black"
                    onClick={() => setSelectedWork(work)}
                  >
                    <AiOutlineZoomIn size={30} />
                  </button>

                  <a href={work.url} className="text-black">
                    <BiCodeAlt size={30} />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative">
        {selectedWork && (
          <DisplayWork
            selectedWork={selectedWork}
            onClose={() => setSelectedWork(null)}
          />
        )}
      </div>
      <a
        href="/Resume.pdf"
        download={true}
        className="p-2 group bg-white text-black flex flex-col items-center cursor-pointer hover:bg-sky-500 transition-p duration-500 hover:p-6 hover:text-white"
      >
        <BsFillPersonLinesFill size={40} className="" />
        <div className="flex items-center gap-4">
          <AiOutlineArrowRight size={25} />
          <p className="font-bold text-2xl font-name">Resume</p>
        </div>
      </a>
    </div>
  );
};

export default Experience;
