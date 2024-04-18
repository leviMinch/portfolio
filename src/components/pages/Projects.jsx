import React from 'react'
import PytorchLogo from '../../images/pytorch-logo.png'
import FinanceLogo from '../../images/finance-48.png'

const Projects = () => {
  return (
    <div className="bg-slate-800 min-h-screen text-white mt-20 pt-5">
      <ul className="list-none max-w-auto my-12 flex flex-col items-center gap-8">
        <li className="group flex flex-col items-center border-4 bg-slate-600 py-6 px-2 rounded-3xl shadow-xl max-w-md hover:border-blue-400 hover:max-w-xl transition-all duration-300 relative overflow-hidden">
            <img src={PytorchLogo} alt="PyTorch" class="w-2/3 mb-6 group-hover:w-full transition-all duration-400"/>
            <h3 class="text-2xl text-center group-hover:text-4xl transition-all duration-400">
                Training and Testing PyTorch Models
            </h3>
            <div className="text-center text-xl absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>
                  Exploring the use of CNN's in PyTorch. Shown through the use of the FASHIONMNIST dataset.
                </p>
            </div>
        </li>
        <a href="https://www.youtube.com/watch?v=VmFz6sOiWhc&t=13s" target="_blank" className="group flex flex-col items-center border-4 bg-slate-600 py-6 px-2 rounded-3xl shadow-xl max-w-md hover:border-blue-400 hover:max-w-xl transition-all duration-300 relative overflow-hidden">
            <img src={FinanceLogo} alt="FinanceApp" class="w-2/3 mb-6 group-hover:w-full transition-all duration-400"/>
            <h3 className="text-2xl text-center group-hover:text-4xl transition-all duration-400">
                Budgeting App Prototype for Students
            </h3>
            <div className="text-center text-xl absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p>A in-depth look into a prototype app for a budgeting app. Designed by myself and others.</p>
            </div>
        </a>
      </ul>
    </div>
  )
}

export default Projects