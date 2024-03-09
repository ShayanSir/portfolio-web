"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

function Hero() {
  return (
    <>
    <div className="fixed top-0 w-full z-50">
      <Navbar fluid rounded className="dark:bg-slate-200 bg-slate-200" id="navbar">
        <Navbar.Brand href="https://shapaterfix.web.app/">
          <span className="self-center whitespace-nowrap text-xl font-semibold ml-4">
            SHAYAN
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2 mr-4">
        <a href="/images/Resume-Muhammad-Shayan-Hussain.pdf" download>
        <button type="button" className="text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">
            Resume
          </button>
          </a>
          <Navbar.Toggle />
        </div>
        <ul class="mt-4 md:flex flex-row md:mt-0 hidden md:space-x-8 md:text-sm md:font-medium">
          <li>
            <a
              class="block py-2 pr-4 pl-3 md:p-0  text-black md:bg-transparent "
              href="#home"
            >
              Home
            </a>
          </li>
          
          <li>
            <a
              class="block py-2 pr-4 pl-3 md:p-0 text-black"
              href="#aboutus"
            >
              About
            </a>
          </li>
          <li>
            <a
              class="block py-2 pr-4 pl-3 md:p-0  text-black"
              href="#ser"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              class="block py-2 pr-4 pl-3 md:p-0  text-black"
              href="#about"
            >
              Services
            </a>
          </li>
          <li>
            <a
              class="block py-2 pr-4 pl-3 md:p-0  text-black"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <Navbar.Collapse>
          <Navbar.Link href="#home" className="text-black dark:text-black">Home</Navbar.Link>
          <Navbar.Link href="#aboutus" className="text-black dark:text-black">About</Navbar.Link>
          <Navbar.Link href="#ser" className="text-black dark:text-black">Project</Navbar.Link>
          <Navbar.Link href="#about" className="text-black dark:text-black">Services</Navbar.Link>
          <Navbar.Link href="#contact" className="text-black dark:text-black">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      </div>
      {/* <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              SHAYAN
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0  text-blackmt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#home"
                  className="block py-2 px-3 text-white bg-gray-700 rounded md:bg-transparent md:text-gray-700 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0  text-blackmd::hover:text-gray-500 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0  text-blackmd::hover:text-gray-500 "
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-700 md:p-0  text-blackmd::hover:text-gray-500 "
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Hero;
