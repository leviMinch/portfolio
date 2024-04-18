import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-800 min-h-screen text-white mt-20 pt-5 flex flex-col'>
      <h1 className='text-4xl font-bold text-center mb-6'>About This Website</h1>
      <p className='text-center text-2xl'>This website was designed the framework React, and Tailwind for styling. It's very much still a work in progress!</p>
      <a href="https://github.com/leviMinch/portfolio" target="_blank" className='text-center text-2xl text-blue-400'>This is the GitHub repository for this website</a>
    </div>
  )
}

export default About