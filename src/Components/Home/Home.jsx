import React from "react";
import hero from "../../assets/heroImage4.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <>
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full pt-20 md:pt-0">
            <h2 className="text-4xl sm:text-7xl font-bold text-white mr-3">
              I'm into Web Development
            </h2>
            <p className="text-gray-500 py-4 max-w-md pr-3">
              Creative Web Developer Specializing in Front-End Design and
              Development. Currently, I am happy 😀 to code on web applications
              using these technologies : 
              React.js, Redux, Tailwind CSS,
              Bootstrap, and Responsive UI for Dynamic User Experiences.
            </p>
            <div>
              <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight 
                  size={20}
                  className="ml-1"/>
                </span>
              </button>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              src={hero}
              alt="profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full max-h-80 md:max-h-screen mb-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
