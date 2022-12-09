import React from 'react'

const About = () => {
  return (
    <div>
        {/* <div className=" h-20 bg-white">
            <div className=" h-20 flex justify-start items-center">
                <div className=" h-16 w-16 rounded-full  flex justify-center items-center m-5 bg-gray-300">
                  <img className="h-16 shadow- hover:shadow-md" src="profile-picture-circle-hd.png" alt=""/>   
                </div>
                <h4 className=" m-5 hover:underline">ID number</h4>
                <button className=" m-10 text-blue-400 font-semibold">Logout</button>
            </div>
        </div> */}
        <img src="download.jpg" alt="logo"/>
        <div className="h-60">
            <div className=" flex justify-center">
                <div className=" flex flex-col justify-center items-center bg-white mt-20 w-2/3 h-40 ">
                    <p className=" text-l font-bold text-gray-500 mt-4">OUR MISSION</p>
                    <p className=" mt-4 text-center px-2">This initiative attempts to assist computer science students in determining their career route and right elective course in technology. We empower people to change the world with data.This is the core mission that drives everything we do, and how we do it.</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center uppercase mt-8 text-l font-bold text-gray-500">
            <p>Meet The Team</p>
        </div>
        <div className="">
            <div className=" grid grid-cols-2 mt-8">
                <div className=" grid-cols-1 bg-white h-[500px] text-black shadow-xl rounded-xl w-80 ">
                    <div className=" flex justify-center">
                       <img src="profile-picture-circle-hd.png" alt=""/>
                    </div>
                    <div className="">
                        <div className=" flex flex-col justify-center mt-10">
                            <h4 className=" mt-2 font-semibold">Richard :</h4>
                            <p className=" uppercase mt-2">Project Head</p>
                            <p className=" mt-2">Seriously determined young man. With the passion to develop the nation through technology</p>
                        </div>
                    </div>
                </div>
                <div className=" grid-cols-1 bg-white h-[500px] text-black shadow-xl rounded-xl w-80 ">
                    <div className=" flex justify-center">
                         <img src="profile-picture-circle-hd.png" alt=""/>
                    </div>
                    <div className="">
                        <div className=" flex flex-col justify-center mt-10">
                            <h4 className=" mt-2 font-semibold">Rashid Kebiru :</h4>
                            <p className=" uppercase mt-2">System Analyst</p>
                            <p className=" mt-2">A smart young gentleman, pious and dependable with an innovative mind</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className=" grid grid-cols-2 mt-8 mb-4">
            <div className=" grid-cols-1 bg-white h-[500px] text-black shadow-xl rounded-xl w-80 ">
                    <div className=" flex justify-center">
                      <img src="profile-picture-circle-hd.png" alt=""/>
                    </div>
                    <div className="">
                        <div className=" flex flex-col justify-center mt-10">
                            <h4 className=" mt-2 font-semibold">Bernard Berko :</h4>
                            <p className=" mt-2">SYSTEM TESTER</p>
                            <p className=" mt-2">Well developed in the field of IT and still developing more extraodinary skills</p>
                        </div>
                    </div>
                </div>
                <div className=" grid-cols-1 bg-white h-[500px] text-black shadow-xl rounded-xl w-80 ">
                    <div className=" flex justify-center">
                      <img src="profile-picture-circle-hd.png" alt=""/>
                    </div>
                    <div className="">
                        <div className=" flex flex-col justify-center mt-10">
                            <h4 className=" mt-2 font-semibold">Emmanuel Brew :</h4>
                            <p className=" mt-2">DOCUMENTATION SPECIALIST</p>
                            <p className=" mt-2">A focused young man who always sees the a project is done to it's atmost best, and brings the best out others</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About