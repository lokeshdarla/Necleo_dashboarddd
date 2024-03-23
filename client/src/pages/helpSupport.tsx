import React from 'react'
import { Link } from 'react-router-dom'

const HelpSupport = () => {
  return (
    <section className="h-screen flex items-center justify-center  w-screen ">
      <div className="w-full flex flex-col items-center justify-center py-12 mx-auto text-center">
        <div className="text-center">
          <p className="p-2 rounded-xl flex items-center justify-center">
            <img className='h-10' src='logo.png' alt="Logo" />
          </p>
          <h1 className="mt-3 text-2xl font-semibold md:text-3xl">Page not found</h1>
          <p className="mt-4 text-gray-500 px-10">The page you are looking for doesn't exist. Here are some helpful links:</p>

          <div className="flex items-center justify-center mt-6 gap-x-3">
            <Link
              className="px-5 py-2 text-sm text-black transition-colors duration-200 border rounded-lg hover:bg-gray-200"
              to='/my-projects'
            >
              My Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HelpSupport
