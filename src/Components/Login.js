import React from 'react'

const Login = () => {
  return (
    <div>
      <div className="mt-20 flex items-center justify-center">
  <div className="w-2/4">
    <header className="flex h-14 items-center justify-center rounded bg-blue-900 text-2xl font-bold text-white uppercase">
      <img src="https://ugelectiveshelper.netlify.app/assets/img/logo.png" className=" h-16" alt="logo"/>
      <h1>UG elective Helper</h1>
    </header>
    <div className="rounded shadow">
      <div className="mt-2 flex justify-center">
        <div className="mt-2 inline-flex hover:shadow-lg focus:shadow-lg" role="group">
          <button type="button" className="inline-block rounded-l bg-white px-6 py-2.5 text-xs font-medium uppercase leading-tight transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-white active:text-white">Student</button>
          <button type="button" className="inline-block rounded-r bg-white px-6 py-2.5 text-xs font-medium uppercase leading-tight transition duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800">Staff</button>
        </div>
      </div>
      <form className="focus:outline-non mt-4 ml-3 flex flex-col bg-gray-50 focus:border-blue-600">
        <label className="mr-2">Student ID:</label>
        <br />
        <input className="mb-4 h-10 rounded-lg border-2" type="text" name="id" required />

        <label className="mr-2">PIN:</label>
        <br />
        <input className="mb-8 h-10 rounded-lg border-2" type="password" name="id" required />
      </form>
      <div className="flex justify-center">
        <button className="mb-4 w-20 rounded-full bg-blue-900 font-bold h-10 text-white">Login</button>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Login
