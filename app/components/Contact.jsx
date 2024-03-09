// import React from "react";

// function Contact() {
//   return (
//     <>
//     <div id="contact">
//     <section className=" bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto   lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 shadow dark:bg-gray-800 dark:border-gray-700 dark:bg-gray-900">
//   <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
//       <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
//       <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
//       <form action="#" className="space-y-8">
//           <div>
//               <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
//               <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
//           </div>
//           <div>
//               <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
//               <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
//           </div>
//           <div className="sm:col-span-2">
//               <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
//               <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
//           </div>
//           <button type="button" className="text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 dark:focus:ring-gray-700 shadow-lg shadow-gray-500/50 dark:shadow-lg dark:shadow-gray-700/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150">Get started</button>
//       </form>
//   </div>
// </section>
// </div>
//     </>
//   );
// }

// export default Contact;

"use client";
import { useState } from "react";

import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const [conName, setConName] = useState("");
  const [conEmail, setConEmail] = useState("");
  const [conMsg, setConMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
    const emailData = {
      to_name: conName,
      from_name: conEmail,
      to_email: "shapaterpari@gmail.com",
      message: conMsg,
    };

    emailjs
      .send(
        "service_13wdhlk", //service ID
        "template_4n8uqtr", // template ID
        emailData,
        "8QXmzL4n6_qeZdYFB" // Public 
      )
      .then(
        (result) => {
          setConName("");
          setConEmail("");
          setConMsg("");
          
          console.log(result, "result");
          console.log(result.text);
        },
        (error) => {
          console.log(error, "error");
          
        }
      );
    setLoading(false);
  }

  const isPublishButtonDisabled =
    conName.trim() === "" || conEmail.trim() === "" || conMsg.trim() === "";

  // const sendEmail = () => {
  //   let templateParams = {
  //     name: conName,
  //     email: conEmail,
  //     message: conMsg,
  //   };

  //   emailjs
  //     .send("service_3hxhuca", "template_5aqs914", emailData, templateParams)
  //     .then(
  //       function (response) {
  //         console.log("SUCCESS!", response.status, response.text);
  //       },
  //       function (error) {
  //         console.log("FAILED...", error);
  //       }
  //     );
  // };

  return (
      <main id="contact" className="flex flex-col  bg-gray-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:p-4">
        <section className="pb-6 pt-8 backdrop-blur-2xl m-10 max-w-[100%] w-[80%] mx-auto rounded-xl ">
          <div className="mx-auto max-w-screen-xl py-10">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-3xl text-center text-black font-bold sm:text-5xl" data-aos="fade-up">
                Contact Us
              </h1>
              <p className="mt-4 text-center text-gray-800 sm:text-xl/relaxed" data-aos="fade-up">
                Have questions or feedback? Reach out to us using the form
                below..
              </p>
              <div className="mt-8">
                <form onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600" data-aos="fade-up">
                      Your Name
                    </label>
                    <input
                      value={conName}
                      onChange={(e) => setConName(e.target.value)}
                      type="text"
                      className="mt-1 p-2 border rounded placeholder-gray-400 placeholder:text-[14px] w-full transition-all focus:border-gray-600 outline-none text-gray-700 "data-aos="fade-up"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600" data-aos="fade-up">
                      Your Email
                    </label>
                    <input
                      value={conEmail}
                      onChange={(e) => setConEmail(e.target.value)}
                      type="email"
                      className="mt-1 p-2 border rounded placeholder-gray-400 placeholder:text-[14px] w-full transition-all focus:border-gray-600 outline-none text-gray-700 " data-aos="fade-up"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600" data-aos="fade-up">
                      Message
                    </label>
                    <textarea
                      value={conMsg}
                      onChange={(e) => setConMsg(e.target.value)}
                      className="mt-1 p-2 border rounded placeholder-gray-400 placeholder:text-[14px] w-full h-40 focus:border-gray-600 outline-none" data-aos="fade-up"
                      placeholder="Write your message"
                    ></textarea>
                  </div>
                  <button
                    className={`bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 shadow-lg shadow-gray-500/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150 text-white px-4 py-2 rounded ${
                      loading || isPublishButtonDisabled
                        ? "cursor-not-allowed opacity-50"
                        : ""
                    }`}
                    type="submit"
                    disabled={loading || isPublishButtonDisabled}
                  >
                    {loading ? (
                      <span  className=" text-white bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-gray-400 shadow-lg font-medium rounded-lg text-sm px-5 py-2.5 text-center transition ease-in-out duration-150">
                        <span className="loader"></span> Loading
                      </span>
                    ) : (
                      "Send Email" 
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}