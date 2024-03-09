import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
    

<footer className="bg-gray-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:border lg:bg-gray-200 lg:p-4">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://shapaterfix.web.app/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap ">SHAYAN</span>
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                  <ul className="text-gray-600 font-medium">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                  <ul className="text-gray-600 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                  <ul className="text-gray-600 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-600 sm:text-center"><a href="/images/Resume-Muhammad-Shayan-Hussain.pdf" className="hover:underline">Muhammad Shayan</a>. FrontEnd Developer.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg className="w-7 h-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                    </svg>
                  <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://github.com/shapaterbhai" className="text-gray-600 hover:text-gray-900 ms-5">
              <FaGithub className='h-7 w-7 font-bold'/>
              </a>
              <a href="https://www.linkedin.com/in/muhammad-shayan-hussain-38b1a8260/" className="text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaLinkedin className='h-7 w-7 font-bold'/>
              </a>
              <a href="https://www.instagram.com/shayanbhai0308/" className="text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaInstagram className='h-7 w-7 font-bold'/>
              </a>
              <a href="https://wa.me/03082974946" className="text-gray-600 hover:text-gray-900 dark:hover:text-white ms-5">
              <FaWhatsapp className='h-7 w-7 font-bold'/>
              </a>
          </div>
      </div>
    </div>
</footer>

    </>
  )
}

export default Footer