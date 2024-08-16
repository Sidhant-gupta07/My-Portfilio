import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimesCircle } from "react-icons/fa";

// bg-[#232F3E]

const Links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "About",
  },
  {
    id: 3,
    link: "Projects",
  },
  {
    id: 4,
    link: "Skills",
  },
  {
    id: 5,
    link: "Contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <>
      <div
        className="flex justify-between items-center 
      w-full h-20 fixed text-white  bg-[#0F1111] px-4"
      >
        <div>
          <h1 className="text-5xl font-signature ml-2">Sidhant</h1>
        </div>
        <ul className="hidden md:flex">
          {Links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium 
text-gray-500 hover:scale-105 duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
        <div
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimesCircle size={20} /> : <FaBarsStaggered size={25} />}
        </div>

        {nav && (
          <ul
            className="flex flex-col justify-center items-center
    absolute top-0 left-0 w-full h-screen bg-gradient-to-b
    from-black to-gray-800 text-gray-500"
          >
            {Links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                {link}
              </li>
            ))}

            {/* <li className="px-4 cursor-pointer capitalize py-6 text-4xl">Home</li> */}
          </ul>
        )}
      </div>
    </>
  );
};

export default Navbar;
