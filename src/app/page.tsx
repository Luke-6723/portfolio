"use client";

import { FileIcon, GitForkIcon, Icon, LinkedinIcon, NotebookPenIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Github from "@/icons/github.svg";
import Link from "next/link";
import SpotifySidebar from "@/components/ui/spotifySidebar";

export default function Home() {

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/me.jpg",
    "/images/me-bike.jpg",
  ];

  return (
    <main className="gap-6 grid grid-cols-2 bg-slate-900 mx-auto p-24 w-3/4">
      {/* Column 1 - Row 1 */}
      <div className="flex flex-col justify-end w-full">
        <div className="w-1/2 self-center">
          <Image className="border-2 border-red-500 rounded-xl" width={384} height={384} src={images[currentImage]} alt="me" />
        </div>
      </div>
      {/* Column 2 - Row 1 */}
      <div className="w-full">
        <div className="flex flex-col">
          <span className="pb-4 border-b-2 border-b-white/25">
            I&apos;m a software engineer based in <b className="underline">Westbury, Wiltshire, UK</b>. I have a passion for frontend and backend development.
            <br />I&apos;m currently <b className="underline">looking for work</b>.
            <br /><br />I&apos;m also a keen <button onClick={() => setCurrentImage(1)} className="text-red-500 underline">motorcyclist</button> and enjoy riding my bike around the UK with plans of exploring Europe.
          </span>
          <div className="flex flex-row gap-4 mt-4">
            <Link href="https://github.com/Luke-6723" target="_blank">
              <Image width={40} height={40} className="invert" src="/images/github.svg" alt="Github" />
            </Link>
            <Link href="/files/Luke_Stoodley_CV.pdf" target="_blank">
              <NotebookPenIcon size={40} />
            </Link>
            <Link href="https://www.linkedin.com/in/luke-stoodley-ffltd/" target="_blank">
              <LinkedinIcon size={40} />
            </Link>
          </div>
        </div>
      </div>
      {/* Column 1 - Row 2 */}
      <div className="flex flex-col justify-end w-full">
        <SpotifySidebar />
      </div>
    </main>
  );
}
