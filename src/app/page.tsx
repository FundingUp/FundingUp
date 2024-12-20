"use client"

import AboutUsSection from "@/components/home/AboutUsSection"
import HeroSection from "@/components/home/HeroSection"
import InvestKnowlegeInsentive from "@/components/home/InvestKnowlegeInsentive"
import MainFundings from "@/components/home/MainFundings"
import ServicesSection from "@/components/home/ServicesSection"
import Image from "next/image"
import background from '../../public/images/banner.avif'

export default function Home() {
  
  return (
    <div className="relative min-h-screen">

      {/* Fixed Background Image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={background}
          alt="Background"
          fill
          priority
          className="object-cover object-center relative transition-opacity duration-500"
          sizes="100vw"
          quality={100}
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col">

        <HeroSection />

        <div className="w-full bg-background flex flex-col pt-10 pb-10">

          <MainFundings />

          <InvestKnowlegeInsentive />

          <ServicesSection />

          <AboutUsSection />

          <div id="services"></div>

        </div>
      </div>
    </div>
  )
}