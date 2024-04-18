import React from 'react'

const Contact = () => {
  return (
    <div className='bg-slate-800 min-h-screen text-white mt-20 pt-5'>
      <h1 className='text-4xl font-bold text-center mb-6'>Contact Information</h1>
      <address className='text-2xl text-center mb-6 font-normal'>Please reach out to me on <a href="mailto:leviminch.work@gmail.com" className='text-blue-400'>email</a> or <a href="https://www.linkedin.com/in/levi-minch/" className="text-blue-400" target="_blank"> Linkedin</a>, from there we can move to any other preffered means of communicaiton</address>
    </div>
  )
}

export default Contact