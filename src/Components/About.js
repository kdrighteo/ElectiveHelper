import React from 'react'

const About = () => {
  return (
    <div>
         <div className=" h-20 bg-white">
                <div className=" h-20 flex justify-start items-center">
                    <div className=" h-16 w-16 rounded-full shadow- hover:shadow-md flex justify-center items-center m-5 bg-gray-300">
                        <h6>Pic</h6>
                    </div>
                    <h4 className=" m-5 hover:underline">ID number</h4>
                    <button className=" m-10 text-blue-400 font-semibold">Logout</button>
                </div>
            </div>
            <img src=" " alt="logo"/>
            <div className=" min-h-screen">
                <div className=" flex justify-center">
                    <div className=" flex flex-col justify-center items-center bg-white mt-20 w-2/3 ">
                        <p className=" text-l font-bold text-gray-500 mt-4">OUR MISSION</p>
                        <p className=" mt-4 text-center px-2">This initiative attempts to assist computer science students in determining their career route and right elective course in technology. We empower people to change the world with data.This is the core mission that drives everything we do, and how we do it.</p>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default About