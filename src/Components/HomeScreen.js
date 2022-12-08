import React from 'react'

const HomeScreen = () => {
  return (
    <div>
        <div>
            <div className=" bg-blue-900 h-20 w-auto">
                <header className=" text-white ">
                    <div className=" grid grid-cols-3">
                        <div className=" grid-cols-1">
                            <img src="https://ugelectiveshelper.netlify.app/assets/img/logo.png" className=" h-16 translate-x-32" alt="logo"/>
                        </div>
                        <div className=" grid-cols-1 -translate-x-56 mt-3">
                             <h1 className=" text-2xl">UNIVEERSITY OF GHANA</h1>
                             <p className=" text-xs font-mono">ELECTIVES SELECTION HELPER</p>    
                        </div>
                        <div className=" grid-cols-1 flex justify-start uppercase mt-5 font-semibold">
                            <ul className=" -translate-x-96">
                                <li className=" flex text-xs m-4">
                                    <h3 className="mr-4">Home</h3>
                                    <h3 className=" mr-4">About</h3>
                                    <h3 className=" mr-4">Contact Us</h3>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
            </div>
            <div className=" h-20 bg-white">
                <div className=" h-20 flex justify-start items-center">
                    <div className=" h-16 w-16 rounded-full shadow- hover:shadow-md flex justify-center items-center m-5 bg-gray-300">
                        <h6>Pic</h6>
                    </div>
                    <h4 className=" m-5 hover:underline">ID number</h4>
                    <button className=" m-10 text-blue-400 font-semibold">Logout</button>
                </div>
            </div>
            <div className=" min-h-screen bg-gray-100">
                <div className=" flex justify-center">
                    <div className=" flex flex-col justify-center items-center bg-white mt-20 w-2/3 ">
                        <img src="https://ugelectiveshelper.netlify.app/assets/img/undraw_team_collaboration_re_ow29.svg" className=" h-40 mt-10" alt="logo"/>
                        <p className=" text-l font-bold text-gray-500 mt-4">FIND YOUR PATH</p>
                        <p className=" text-3xl mt-4 font-bold">Which Elective Course is Right for You?</p>
                        <p className=" mt-4 text-center px-2">With not less than two elective courses available for students to enroll in each semester, it’s imperative to find and know which is right for you. This is why we have a created this pool of questions survey to match you with the perfect elective course based on your interest and skills.</p>

                        <button className=" mt-4 mb-4  border rounded-xl w-28 h-10 bg-yellow-200">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeScreen
