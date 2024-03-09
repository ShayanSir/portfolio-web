import React from "react";

function Aboutme() {
  return (
    <>
      <div id="aboutus" className="w-full lg:h-auto flex bg-gray-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:p-4">
        <div className="text-center">
          <h2 className="text-[40px] font-bold text-black">About Me</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div className="md:py-10 p-2 mx-auto my-auto">
              <img data-aos="fade-down"
                src="/images/shayan.jpg"
                alt=""
                className="md:w-[400px] md:h-[550px] w-[300px] h-[320px] object-cover rounded-[25px]"
              />
            </div>
            <div className="text-black h-auto ms-auto text-left py-16 mx-auto">
              <h2 className="text-[25px] p-2 font-bold" data-aos="fade-down">FrontEnd Developer</h2>
              <p className="px-4" data-aos="fade-down">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Cupiditate placeat dolorum sed vel quis et, possimus in
                repellendus eaque deleniti saepe fugit, nesciunt consequatur
                magni eligendi molestiae sit hic ab quos repellat minima facilis
                doloremque. Culpa quis possimus exercitationem quam quia nihil
                voluptatem odit earum magni error? Tempora, fugiat culpa.
              </p>

              <div className="font-bold" data-aos="fade-down">
                <h4 className="text-[22px] p-2">Skills</h4>
                  <li className="px-2">HTML5</li>
                  <li className="px-2">Bootstrap</li>
                  <li className="px-2">CSS3</li>
                  <li className="px-2">Tailwind</li>
                  <li className="px-2">JavaScript</li>
                  <li className="px-2">Figma</li>
                  <li className="px-2">React JS</li>

              </div>
              <div className="" data-aos="fade-up">
                <h4 className="text-[22px] p-2 font-bold">Exprience</h4>
                <h5 className="text-[18px] font-bold px-2">Frontend Developer</h5>
                <p className="px-4">
                  Digiappsolution "I am currently interning at this company as a
                  Front End Web Developer, and I have gained three months of
                  experience in this role."
                </p>
              </div>
              <div className="font-bold" data-aos="fade-up">
                <h4 className="text-[22px] p-2">Education</h4>
                  <li className="px-2">SSC/MATRIC 2021</li>
                  <li className="px-2">HSC/First year 2022</li>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutme;
