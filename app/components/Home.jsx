"use client"
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      // You can also pass other AOS options here
      duration: 1000, // Global duration of animations in milliseconds.
      once: true, // Whether animation should happen only once - while scrolling down.
    });
  }, []);

  return (
    <>
      <div id="home" className="w-full h-[50%] border-b-gray-400 border-[1px] lg:h-screen first-line: flex bg-gray-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:bg-gray-200 lg:p-4">
        <div className="justify-center px-10 py-[150px]" data-aos="fade-down">
          <h1 className="md:text-[100px] text-[50px] text-black font-bold leading-tight text-left">
            Muhammad Shayan <br /> Hussain
          </h1>
          <p  className="text-black text-left w-[300px] md:w-[350px]">
            I am a Front End Developer Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Harum, tenetur?
          </p>
          <a href="/images/Resume-Muhammad-Shayan-Hussain.pdf">
          <button
            type="button"
            className="mt-4 text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150"
          >
            Resume
          </button>
          </a>
        </div>
        <div>
          <div className="w-[35%] h-[40%] top-[50%] absolute right-10 bottom-8 borde rounded-lg sm:flex hidden">
            <a href="#">
              <img data-aos="fade-up" className="rounded-t-[30px] bg-cover" src="https://shayanportfolio.web.app/images/sha.jpg" alt="shayan" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
