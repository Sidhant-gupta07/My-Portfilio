import React from 'react';
import youTube from '../../assets/Projects/YouTube.jpg';
import buybuzzar from '../../assets/Projects/buy-buzzar.png';
import foodshop from '../../assets/Projects/FoodShop.jpg';
import gitprofile from '../../assets/Projects/ProfileFinder.jpeg';
import todolist from '../../assets/Projects/TodoList.jpg';
import jsprojects from '../../assets/Projects/Jsminiprojects.png';
import meetings from '../../assets/Projects/meetSchedule.jpeg';
import weather from '../../assets/Projects/reactWeather.jpg';
import coffeshop from '../../assets/Projects/Coffee.webp';
import tastyexpress from '../../assets/Projects/TastyExpress.png';

const Project = () => {
  const projects = [
    { id: 1, src: youTube, name: 'Yt-Clone', link: 'https://github.com/Sidhant-gupta07/Youtube-Clone' },
    { id: 2, src: buybuzzar, name: 'Buy-Buzzar', link: 'https://github.com/Sidhant-gupta07/Buy-Buzzar'  },
    { id: 3, src: foodshop, name: 'Food-Shop', link: 'https://github.com/Sidhant-gupta07/Food-Shop'  },
    { id: 4, src: gitprofile, name: 'git-profile', link: 'https://github.com/Sidhant-gupta07/javaScript-mini-projects/tree/main/Git%20profile%20finder'  },
    { id: 5, src: todolist, name: 'Todo-List', link: 'https://github.com/Sidhant-gupta07/Todo-List'  },
    { id: 6, src: jsprojects, name: 'Mini-Pr', link: 'https://github.com/Sidhant-gupta07/javaScript-mini-projects'  },
    { id: 7, src: meetings, name: 'ChecK-Meet', link: 'https://github.com/Sidhant-gupta07/Meeting-Schedule-App' },
    { id: 8, src: weather, name: 'Temperature' , link: 'https://github.com/Sidhant-gupta07/Youtube-Clone' },
    { id: 9, src: coffeshop, name: 'Online-Coffe', link: 'https://github.com/Sidhant-gupta07/Coffee-Crafter'  },
    { id: 10, src: tastyexpress, name: 'order-food', link: 'https://github.com/Sidhant-gupta07/Food-Ordering-Tasty-Express'  },
  ];

  const handleLink = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <div name='Projects' className='bg-gradient-to-b from-black to-gray-800 w-full text-white py-8'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Projects</p>
            <p className='py-6'>Checkout some of my work samples right here.</p>
          </div>

          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {projects.map(({ id, src, name, link }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <button className='w-1/2 sm:px-6 md:px-3 py-3 m-4 duration-200 hover:scale-105'>{name}</button>
                  {link && (
                    <button 
                      className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                      onClick={() => handleLink(link)}
                    >
                      Code
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;

