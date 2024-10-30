"use client"

import React from 'react'
import { LuArrowUpRight, LuUsers, LuTarget, LuGem } from 'react-icons/lu'
import Link from 'next/link'

const FeatureCard = ({ icon: Icon, title, description }: any) => (
  <div className="relative group p-6 bg-white/50 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-100/5 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
    <Icon className="h-8 w-8 text-primary mb-4" />
    <h3 className="text-lg font-semibold mb-2 text-text">{title}</h3>
    <p className="text-gray-600 text-sm text-gray">{description}</p>
  </div>
)

export default function AboutUsSection() {

  return (
    <section id="about" className="relative py-20 px-5 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                <span className="h-px w-8 bg-primary"></span>
                ABOUT US
              </div>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-text">
              Empowering Dreams Through
              <span className="text-primary block">Collective Funding</span>
            </h2>

            <p className="text-gray-600 text-lg">
              FundingUp is more than just a crowdfunding platform. We're a community
              dedicated to transforming innovative ideas into reality. Our platform
              connects visionary creators with passionate backers, fostering a
              ecosystem of support and success.
            </p>

            <Link href={'/about'} >
              <button className="group flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-text transition-all duration-300">
                Learn More About Us
                <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </Link>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureCard
              icon={LuUsers}
              title="Community First"
              description="Join a thriving community of creators and backers united by passion and innovation."
            />
            <FeatureCard
              icon={LuTarget}
              title="Success Focused"
              description="Our platform is designed to maximize your project's potential and reach."
            />
            <FeatureCard
              icon={LuGem}
              title="Quality Projects"
              description="We carefully curate projects to ensure high-quality opportunities for our backers."
            />
            <div className="relative group p-6 bg-primary text-white rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-white/90">Success rate for fully funded projects</p>
              <div className="absolute bottom-4 right-4 opacity-10">
                <svg width="40" height="40" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}