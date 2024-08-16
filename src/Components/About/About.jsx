import React from 'react'

const About = () => {
  return (
    <>
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800
    to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center
        w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4  border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mr-20'>
            I have graduated in 2022 with a strong foundation in 
            Accounting and Finance and I have core interest in web 
            development technologies and a burning desire to create 
            captivating and user-friendly websites. I believe in the 
            power of technology to transform ideas into innovative 
            digital solutions.
            </p>
            <br />
            <p className='text-xl'>
            I have a solid grasp in Node.js, Express, MongoDB, JavaScript, 
            React.js, Redux, TailwindCss and I'm enthusiastic about expanding my 
            knowledge in  Angular, Vue and Three.Js and database 
            like MySql and php My problem-solving mindset and 
            attention to detail drive me to create clean and efficient 
            code.
            </p>
            <br />
            <p className='text-xl mb-5'>
            I'm excited to connect with experienced professionals, 
            mentors, and fellow aspiring developers who share my 
            passion for web development. If you have any advice, 
            opportunities, or insights to share, I'd love to hear 
            from you!
            </p>
        </div>
    </div>
    </>
  )
}

export default About