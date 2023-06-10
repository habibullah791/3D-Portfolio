import React from 'react'

const About = () => {
  return (
    <div className="relative z-0">
      <div className="flex flex-col items-center justify-center w-full h-screen bg-primary">
        <div className="flex flex-col items-center justify-center w-11/12 h-full mx-auto my-0 space-y-4 text-center md:w-10/12 lg:w-8/12">
          <h1 className="text-4xl font-bold text-white md:text-5xl">About Me</h1>
          <p className="text-xl font-medium text-white md:text-2xl">  
            I am a full-stack web developer with a passion for creating beautiful, responsive, and user-friendly websites. I am a self-taught developer with a background in business and finance. I am a quick learner and I am always looking to learn new technologies and improve my skills. I am currently looking for a full-time position as a web developer.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About