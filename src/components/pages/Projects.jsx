import React from 'react'
import PytorchLogo from '../../images/pytorch-logo.png'
import FinanceLogo from '../../images/finance-48.png'

const Projects = () => {
  return (
    <div className="bg-slate-800 min-h-screen text-white mt-20 pt-5">
      <h2 className="text-4xl font-bold text-center mb-6">
        Projects
      </h2>
      <ul className="list-none mx-auto my-12 flex flex-col items-center gap-8">
        <li className="w-2/3 flex flex-col items-center border-solid border-white border-2 bg-slate-600 py-6 px-2 rounded-3xl shadow-xl max-w-md">
            <img src={PytorchLogo} alt="Explorer" class="w-2/3 mb-6" />
              <h3 class="text-2xl text-center text-white">
                  Training and Testing PyTorch Models
              </h3>
        </li>
        <li className="w-2/3 flex flex-col items-center border-solid border-white border-2 bg-slate-600 py-6 px-2 rounded-3xl shadow-xl max-w-md">
            <img src={FinanceLogo} alt="Explorer" class="w-2/3 mb-6" />
              <h3 className="text-2xl text-center text-white">
                  Budgeting App for Students
              </h3>
        </li>
      </ul>
    </div>
  )
}

export default Projects