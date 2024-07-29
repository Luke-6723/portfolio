"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useId, useRef, useState } from "react";

export default function NavBar() {

  const currentPage = usePathname();

  return (
    <></>
    // <nav className="flex justify-center items-center bg-slate-900">
    //   <div className="flex justify-center border-2 bg-gradient-conic my-4 border-rose-500 rounded-full w-max">
    //     <a className={"hover:bg-white/25 px-4 py-2 rounded-full hover:text-white/75 transition duration-300" + " " + (currentPage === "/" ? "bg-white/25" : "")} href="/">
    //       About
    //     </a>
    //     <a className={"hover:bg-white/25 px-4 py-2 rounded-full hover:text-white/75 transition duration-300" + " " + (currentPage === "/projects" ? "bg-white/25" : "")} href="/projects">
    //       Projects
    //     </a>
    //     <a className={"hover:bg-white/25 px-4 py-2 rounded-full hover:text-white/75 transition duration-300" + " " + (currentPage === "/contact" ? "bg-white/25" : "")} href="/contact">
    //       Contact
    //     </a>
    //   </div>
    // </nav>
  );
}