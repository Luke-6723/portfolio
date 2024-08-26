"use client";

import { LinkedinIcon, NotebookPenIcon } from "lucide-react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiPostgresql, SiVisualbasic } from "react-icons/si";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import SpotifySidebar from "@/components/ui/spotifySidebar";
import { FaBusinessTime, FaCss3, FaGolang, FaHtml5 } from "react-icons/fa6";

export default function Home() {

  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/images/me.jpg",
    "/images/me-bike.jpg",
  ];

  const handleImageClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <main className="gap-6 grid grid-cols-2 bg-slate-900 mx-auto p-24 w-[60%]">
      {/* Column 1 - Row 1 */}
      <div className="flex flex-col w-full">
        <div className="w-5/6 self-center">
          <Image className="border-2 border-red-500 rounded-xl" width={384} height={384} src={images[currentImage]} alt="me" />
        </div>
      </div>
      {/* Column 2 - Row 1 */}
      <div className="w-full">
        <div className="flex flex-col justify-center items-center">
          <span className="pb-4 border-b-2 border-b-white/25">
            <span className="mb-2 text-3xl">Hi, I&apos;m Luke Stoodley<br /></span>
            <br />I&apos;m a software engineer based in <b className="underline">Westbury, Wiltshire, UK</b>. I have a passion for frontend and backend development.
            <br />I&apos;m currently <b className="underline">looking for work</b>.
            <br /><br />I&apos;m also a keen <button onClick={() => handleImageClick(1)} className="text-red-500 underline">motorcyclist</button> and enjoy riding my bike around the UK with plans of exploring Europe.
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
      {/* Column 2 - Row 2 */}
      <div className="flex flex-col items-center">
        <span className="pb-2 border-b-2 border-b-white/25">Technologies I&apos;ve worked with:</span>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-row gap-4">
            <FaNodeJs size={48} />
            <SiMongodb size={48} />
            <SiPostgresql size={48} />
            <FaGolang size={48} />
            <SiCplusplus size={48} />
            <SiVisualbasic size={48} />
          </div>
          <div className="flex flex-row gap-4">
            <FaReact size={48} />
            <FaHtml5 size={48} />
            <FaCss3 size={48} />
          </div>
        </div>
        <div className="my-4" />
        <span className="pb-2 border-b-2 border-b-white/25">Technologies I&apos;m highly proficient in:</span>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-row gap-4">
            <FaNodeJs size={48} />
            <FaReact size={48} />
            <SiMongodb size={48} />
            <SiPostgresql size={48} />
            <FaHtml5 size={48} />
            <FaCss3 size={48} />
          </div>
          <div className="flex flex-row gap-4">

          </div>
        </div>
        <span className="mb-4 pb-2 border-b-2 border-b-white/25">What I&apos;ve worked on:</span>
        <div className="flex flex-col w-full">
          <div className="flex flex-row gap-4">
            <div>
              <FaBusinessTime size={48} />
            </div>
            <div className="flex flex-col w-full">
              <div>Orca Scan</div>
              <div>Dec 2022 - Jan 2024</div>
              <div className="border-white my-2 border-b-2"></div>
              <ul className="list-disc">
                <li>
                  Skilfully detected and fixed minor bugs on software, completing within deadline dependent
                  situations
                </li>
                <li>
                  Conducted thorough quality assessments to determine if products met the companys high quality standards.
                </li>
                <li>
                  Wrote front-end and backend unit tests to ensure that functionality worked as expected before being shipped to the end user.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <div>
              <FaBusinessTime size={48} />
            </div>
            <div className="flex flex-col w-full">
              <div>Cloud Heroes</div>
              <div>Dec 2022 - Dec 2022</div>
              <div className="border-white my-2 border-b-2"></div>
              <ul className="list-disc">
                <li>
                  Wrote and developed new and well-tested code for different software projects internal and external.
                </li>
                <li>
                  Built and maintained code libraries used to produce consistent and reliable code as well and rewriting and refactoring existing code for efficiency.
                </li>
                <li>
                  Wrote clean and dynamic code, leveraging expertise across multiple programming languages to meet diverse requirements.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
