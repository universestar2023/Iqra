import { Home } from "lucide-react";
import { Link } from 'react-router-dom';
import React from "react";

function Watch() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 to-blue-500">
      <h1 className="text-4xl px-8 text-white font-bold mb-8 text-center">Watch to explore more!</h1>
      
      {/* Container Wrapper */}
      <div className="flex flex-col items-center">
        
        {/* First Video Row */}
        <div className="flex flex-wrap justify-center mb-10">
          <iframe
            className="w-full sm:w-80 md:w-96 lg:w-[600px] h-72 sm:h-48 md:h-60 lg:h-72 mx-2 rounded-xl mt-8"
            src="https://www.youtube.com/embed/K2mP36DoekA?si=ADJwiqhK25UWKYod"
            title="YouTube video"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full sm:w-80 md:w-96 lg:w-[600px] h-72 sm:h-48 md:h-60 lg:h-72 mx-2 rounded-xl mt-8"
            src="https://www.youtube.com/embed/jtVOhcxvg50?si=04hy_Euje4Dt--ak"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>

        {/* Second Video Row */}
        <div className="flex flex-wrap justify-center mb-10">
          <iframe
            className="w-full sm:w-80 md:w-96 lg:w-[600px] h-72 sm:h-48 md:h-60 lg:h-72 mx-2 rounded-xl mt-8"
            src="https://www.youtube.com/embed/YWVxasaOnNs?si=pgPwRGrcBoEA-vyK"
            title="YouTube video play"
            allowFullScreen
          ></iframe>

          <iframe
            className="w-full sm:w-80 md:w-96 lg:w-[600px] h-72 sm:h-48 md:h-60 lg:h-72 mx-2 rounded-xl mt-8"
            src="https://www.youtube.com/embed/BupBhM3FJ1o?si=HV9_nmDkDNipm0el"
            title="YouTube video player"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center ">
           <Link to='/home'> <button
            
              className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300"
            >
             Back
            </button></Link>
          </div>
      </div>
    </div>
  );
}

export default Watch;
