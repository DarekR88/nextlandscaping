"use client";

import Link from "next/link";

export function Footer() {
  return (
    <>
      <div className="border-black relative bottom-0 flex flex-col-reverse justify-center items-center w-screen py-6 lg:flex-row lg:px-32 lg:justify-between lg:h-24">
        <p>
          <span>&copy;</span> 2023 Darek Radke
        </p>
        <Link href={"/"} className="font-Anton text-2xl">
          <span className="text-4xl font-Playfair">FLOREO</span> Landscaping & Design
        </Link>
        <Link href={"/contact"} className="text-xl">
          Free Evaluations!
        </Link>
      </div>
    </>
  );
}
