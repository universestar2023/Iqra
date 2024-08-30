// import React, { useState } from "react";
// import { Link, NavLink } from 'react-router-dom';
// import logo from "../Images/logo.png";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <header className="shadow sticky z-50 top-0">
//       <nav className="bg-slate-400 border-gray-200 px-2 lg:px-6 py-2.5">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <img src={logo} className="mr-3 h-20" alt="Logo" />
//           </Link>
//           <button
//             onClick={toggleMenu}
//             className="lg:hidden text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2.5"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//           <div
//             className={`lg:flex lg:order-2 ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
//             style={{ maxHeight: isOpen ? "1000px" : "0px" }} // Adjust maxHeight for smooth transition
//           >
//             <div className="flex items-center lg:order-2">
//               <Link
//                 to="#"
//                 className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//               >
//                 Log in
//               </Link>
//               <Link
//                 to="#"
//                 className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//               >
//                 Get started
//               </Link>
//             </div>
//           </div>
//           <div
//             className={`lg:flex lg:w-auto ${isOpen ? "block" : "hidden"} transition-all duration-300 ease-in-out`}
//             id="mobile-menu"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/about"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/contact"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Contact
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to="/github"
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                   }
//                 >
//                   Github
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from "../Images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-gray-800 border-gray-200 px-2 lg:px-6 py-2">
        <div className="flex justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            {/* Decreased logo size */}
            <img src={logo} className="h-12 lg:h-20 w-auto" alt="Logo" />
          </Link>
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-200 hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2.5"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div
            className={`lg:flex lg:items-center lg:space-x-8 ${isOpen ? "block" : "hidden"} lg:block lg:static lg:bg-transparent absolute top-16 left-0 w-full bg-gray-700 transition-all duration-300 ease-in-out`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-8 lg:mt-0 lg:items-center ml-auto">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-200"} border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-200"} border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-200"} border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-400" : "text-gray-200"} border-b border-gray-100 hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-400 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
            <div className="flex flex-col lg:flex-row lg:space-x-4 lg:ml-auto lg:mt-0 mt-4 lg:items-center">
              <Link
                to="#"
                className="text-gray-200 hover:bg-gray-700 focus:ring-4 focus:ring-gray-500 font-medium rounded-lg text-sm px-4 py-2.5 mr-2 lg:mr-0"
              >
                Log in
              </Link>
              <Link
                to="#"
                className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-400 font-medium rounded-lg text-sm px-4 py-2.5"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
