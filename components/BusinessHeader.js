import React from "react";
import { roboto } from "@next/font/google";

export default function BusinessHeader() {
  return (
    // <div className={roboto.className}>
    <nav className="px-2 py-3  border-b-gray-200 border-t-gray-200 border-white border ">
      <div className="container flex flex-wrap items-center justify-between md:justify-around text-xs">
        <a href="#" className="">
          <img
            src="/ethio_tel_logo.png"
            className="mr-3 h-8 sm:h-10"
            alt="Flowbite Logo"
          />
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div
          className="  hidden w-full md:block md:w-auto"
          id="navbar-dropdown "
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0  md:font-medium md:border-0 md:bg-white">
            <li className=" ">
              <a
                href="#"
                className=" py-2 pl-3 pr-4 text-gray-700 hover:text-primary  rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto "
              >
                Packages
                <svg
                  className="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                id="dropdownNavbar"
                className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 "
              >
                <ul
                  className="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                      Businesss Mobile
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">
                      Mobile group packages
                    </a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Fixed Landline
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className=" ">
              <a
                href="#"
                className=" hover:text-primary block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 "
              >
                Telecloud
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0  "
              >
                eSim
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
              >
                Fixed Broadband
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
              >
                VPN
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
              >
                DNS & Web Hosting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // </div>
  );
}
