import React from 'react'
import {NavLink} from 'react-router-dom';


const Home = () => {
  return (
    <div class = "min-h-screen grid place-content-center text-white opacity-85">
      <div className="border-2 border-slate-350 rounded-2xl p-10 text-5xl grid text-center">
        
        <h1 className ="pb-3">
          Welcome to my Webpage!
        </h1>

        <p className="text-2xl">
          Hi, my name is Levi Minch. I'm an undergraduate student at Oregon State 
          University, Studying Computer Science with a focus in Artifical Intelligence 
        </p>
        <div className="pt-3">
          <NavLink to="/projects" className="border-2 border-slate-350 rounded-2xl text-4xl px-3 py-1" activeClassName='active'>Projects</NavLink>
        </div>
        
        
      </div>
    </div>
  )
}

export default Home