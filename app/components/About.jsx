import React from "react";
import Marquee from "react-fast-marquee";

function About() {
  return (
    <>
      <div id="about" className="p-10 w-full text-center bg-gray-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:bg-gray-200 lg:p-4 shadow">
        <div className="mt-12 mb-12">
        <h2 className="text-4xl font-[10px] font-bold">Services</h2>
        <p className="mt-2 text-lg text-black">This is My Services</p>
        <div className="mx-auto mt-4 grid sm:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-2 flex flex-col md:flex-row gap-4">
         {/* first card  */}
          <div className="group relative" data-aos="fade-up">
            <div className="bg-gray-100 border-gray-200 border-2 rounded-lg shadow-xl transform transition-transform duration-1000 ease-in-out group-hover:scale-105">
              <div className="pt-4 px-4">
                <div className="mt-4">
                  <h2 className="text-2xl font-bold">Figma Design</h2>
                  <div className="flex justify-center mt-2 gap-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <path d="M5 21v-14l8 -4v18" />
                        <path d="M19 21v-10l-6 -4" />
                        <line x1="9" y1="9" x2="9" y2="9.01" />
                        <line x1="9" y1="12" x2="9" y2="12.01" />
                        <line x1="9" y1="15" x2="9" y2="15.01" />
                        <line x1="9" y1="18" x2="9" y2="18.01" />
                      </svg>
                    </a>
                    <p className="text-gray-500">Company Name</p>
                  </div>
                  <p className="text-sm text-gray-900 pt-2">
                    Product description goes here. It should be a short and
                    concise description of the product.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="border-t-2 border-gray-300 pt-4 m-2">
                  <a href="/images/Resume-Muhammad-Shayan-Hussain.pdf" download>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      Resume
                    </button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
{/* second card  */}
          <div className="group relative" data-aos="fade-up">
            <div className="bg-gray-100 border-gray-200 border-2 rounded-lg shadow-xl transform transition-transform duration-1000 ease-in-out group-hover:scale-105">
              <div className="pt-4 px-4">
                <div className="mt-4">
                  <h2 className="text-2xl font-bold">Flutter UI</h2>
                  <div className="flex justify-center mt-2 gap-1">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-gray-900"
                    >
                      <svg
                        className="h-6 w-6 text-gray-500"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <line x1="3" y1="21" x2="21" y2="21" />
                        <path d="M5 21v-14l8 -4v18" />
                        <path d="M19 21v-10l-6 -4" />
                        <line x1="9" y1="9" x2="9" y2="9.01" />
                        <line x1="9" y1="12" x2="9" y2="12.01" />
                        <line x1="9" y1="15" x2="9" y2="15.01" />
                        <line x1="9" y1="18" x2="9" y2="18.01" />
                      </svg>
                    </a>
                    <p className="text-gray-500">Company Name</p>
                  </div>
                  <p className="text-sm text-gray-900 pt-2">
                    Product description goes here. It should be a short and
                    concise description of the product.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="border-t-2 border-gray-300 pt-4 m-2">
                  <a href="/images/Resume-Muhammad-Shayan-Hussain.pdf" download>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                    >
                      Resume
                    </button>
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </div>
      </div>
    </>
  );
}

export default About;
