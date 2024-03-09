import React from "react";
// import { TiHtml5 } from "react-icons/ti";
// import { FaCss3 } from "react-icons/fa6";
// import { SiTailwindcss } from "react-icons/si";
// import { IoLogoJavascript } from "react-icons/io";
// import { FaReact } from "react-icons/fa6";
// import { RiFlutterFill } from "react-icons/ri";
import Marquee from "react-fast-marquee";
import Image from "next/image";

function Auto() {
  return (
    <>
    <Marquee>
      <div className="gap-6 flex justify-center items-center bg-gray-200 lg:bg-gray-200">
        <Image src="/images/html.jpg" width={250} height={200} className="rounded-lg"/>
        <Image src="/images/css.jpg" width={250} height={180} className="rounded-lg"/>
        <Image src="/images/js.jpg" width={250} height={200} className="rounded-lg"/>
        <Image src="/images/react.png" width={250} height={200} className="rounded-lg"/>
        <Image src="/images/html.jpg" width={250} height={160} className="rounded-lg"/>
        <Image src="/images/css.jpg" width={250} height={200} className="rounded-lg"/>
        <Image src="/images/js.jpg" width={250} height={200} className="rounded-lg"/>
        <Image src="/images/react.png" width={260} height={300} className="rounded-lg mr-4"/>
      </div>
      </Marquee>

      {/* <div className="flex  justify-center items-center gap-20  border-b border-gray-300 bg-gradient-to-b from-zinc-200 lg:bg-gray-200">
      <div>
      <TiHtml5 className="h-10 w-10"/>
      <p>HTML 5</p>
      </div>
      <div>
      <FaCss3 className="h-10 w-10"/>
      <p>CSS 3</p>
      </div>
      <div>
      <SiTailwindcss className="h-10 w-10"/>
      <p>Tailwindcss</p>
      </div>
      <div>
      <IoLogoJavascript className="h-10 w-10"/>
      <p>JavaScript</p>
      </div>
      <div>
      <FaReact className="h-10 w-10"/>
      <p>React</p>
      </div>
      <div>
      <RiFlutterFill className="h-10 w-10"/>
      <p>Flutter</p>
      </div>
      </div> */}
    </>
  )
}

export default Auto