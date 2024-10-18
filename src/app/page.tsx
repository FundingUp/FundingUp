// app/page.tsx
"use client"

import HeroSection from "@/components/home/HeroSection"
import Image from "next/image"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/images/banner.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <HeroSection />
        {/* Add more sections here */}
        <div className="w-full bg-background flex flex-col" id="section1">

          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
          <span>AAAAA</span>
        </div>
      </div>
    </div>
  )
}