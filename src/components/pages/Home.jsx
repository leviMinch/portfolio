import React from 'react'
import {NavLink} from 'react-router-dom';
import selfPhoto from '../../images/selfphoto.JPG'


const Home = () => {
  return (
    <div class = "bg-cool-photo h-full bg-cover bg-center min-h-screen">  
      <div class = "min-h-screen grid place-content-center text-white opacity-85">
        <div className="border-2 border-slate-350 rounded-2xl p-10 text-5xl text-center flex flex-col items-center">
          
          <h1 className ="pb-3">
            Welcome to my Webpage!
          </h1>

          <img src={selfPhoto} alt="photo of me" className='items-center border-4 rounded-full opacity-100 w-64 h-64'/>

          <p className="text-2xl">
            Hi, my name is Levi Minch. I'm an undergraduate student at Oregon State 
            University, Studying Computer Science with a focus in Artifical Intelligence 
          </p>
          <div className="pt-3">
            <div className='group hover:text-blue-400'>
              <NavLink to="/projects" className="group group-hover:border-blue-400 border-2 border-slate-350 rounded-2xl text-4xl px-3 py-1 transition-color duration-800" activeClassName='active'>Projects</NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Home