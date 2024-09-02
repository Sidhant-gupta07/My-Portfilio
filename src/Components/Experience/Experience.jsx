import React from "react";
import Angular from "../../assets/Angular.png";
import Bootstrap2 from "../../assets/Bootstrap.png";
import Css from "../../assets/css.png";
import Express from "../../assets/express.png";
import Firebase from "../../assets/firebase.png";
import github from "../../assets/github.png";
import GraphQL from "../../assets/graphql.png";
import Html from "../../assets/html.png";
import Java from "../../assets/java.png";
import JavaScript from "../../assets/javascript.png";
import MaterialUI from "../../assets/MaterialUI.png";
import MongoDB from "../../assets/MongoDB.png";
import nextJS from "../../assets/nextjs.png";
import Node from "../../assets/node.png";
import reactImage from "../../assets/react.png";
import Redux from "../../assets/redux.png";
import systemdesign from "../../assets/systemdesign.png";
import tailwind from "../../assets/tailwind.png";
import vue from "../../assets/vue.png";
import websecurity from "../../assets/websecurity.png";
import Icon from "../../assets/icon.jpg";

const Experience = () => {
  const skills = [
    {
      id: 1,
      src: Html,
      title: "Html5",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "Css3",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "react.js",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      src: Redux,
      title: "Redux",
      style: "shadow-violet-500",
    },
    {
      id: 6,
      src: Firebase,
      title: "Firebase",
      style: "shadow-orange-400",
    },
    {
      id: 7,
      src: MongoDB,
      title: "MongoDB",
      style: "shadow-green-400",
    },
    {
      id: 8,
      src: Express,
      title: "Express.js",
      style: "shadow-gray-500",
    },
    {
      id: 8,
      src: Node,
      title: "Node.js",
      style: "shadow-green-500",
    },
    {
      id: 9,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-500",
    },
    {
      id: 10,
      src: Bootstrap2,
      title: "Bootstrap",
      style: "shadow-violet-600",
    },
    {
      id: 18,
      src: Angular,
      title: "Angular",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: MaterialUI,
      title: "MaterialUI",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: nextJS,
      title: "nextJS",
      style: "shadow-white",
    },
    {
      id: 13,
      src: vue,
      title: "vue",
      style: "shadow-green-700",
    },
    {
      id: 14,
      src: systemdesign,
      title: "systemdesign",
      style: "shadow-yellow-700",
    },
    {
      id: 16,
      src: websecurity,
      title: "websecurity",
      style: "shadow-rose-500",
    },
    {
      id: 15,
      src: Java,
      title: "Core Java",
      style: "shadow-orange-700",
    },
    {
      id: 17,
      src: GraphQL,
      title: "GraphQL",
      style: "shadow-pink-500",
    },
    {
      id: 18,
      src: github,
      title: "github",
      style: "shadow-gray-500",
    },
  ];

  return (
    <>
      <div
        name="Skills"
        className="bg-gradient-to-b from-gray-800 to-black w-full py-8"
      >
        <div
          className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 border-gray-500 px-2 inline">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with:</p>
          </div>
          <div
            className="w-full grid grid-cols-2 sm:grid-cols-3 gap-6 text-center py-8 px-12 sm:px-0"
          >
            {skills.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
