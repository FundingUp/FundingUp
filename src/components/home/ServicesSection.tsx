"use client"

import React, { useState } from 'react'
import { LuChevronRight, LuRocket, LuBuilding2, LuUsers2, LuShieldCheck } from 'react-icons/lu'
import ServiceCard from '../ui/serviceCard'
import Link from 'next/link'

export default function ServicesSection() {
    const [activeService, setActiveService] = useState(0)

    const services = [
        {
            icon: LuRocket,
            title: "Start Investing",
            description: "Start is the first step to reach the success and WE will help you on this journey",
            features: [
                "Invest Support",
                "Marketing Support",
                "Investor Network Access",
                "Post-funding Support"
            ]
        },
        {
            icon: LuBuilding2,
            title: "Real Estate Projects",
            description: "Fund property developments and real estate ventures through collective investment.",
            features: [
                "Property Verification",
                "Legal Documentation",
                "Investment Structure",
                "ROI Projections"
            ]
        },
        {
            icon: LuUsers2,
            title: "Community Projects",
            description: "Bring community initiatives to life with crowdsourced funding solutions.",
            features: [
                "Community Engagement",
                "Project Planning",
                "Impact Assessment",
                "Progress Tracking"
            ]
        },
        {
            icon: LuShieldCheck,
            title: "Secure Management",
            description: "We keep our users safety first. We care about you. We protect you.",
            features: [
                "Legal Documentation",
                "Refunds on failed projects",
                "No illegal investors",
                "Secure payment methods"
            ]
        }
    ]

    return (
        <section id="services" className="relative py-20 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <div className="flex items-center justify-center gap-2 text-primary font-semibold mb-4">
                        <span className="h-px w-8 bg-primary"></span>
                        OUR SERVICES
                        <span className="h-px w-8 bg-primary"></span>
                    </div>
                    <h2 className="text-4xl font-bold mb-6 text-text">
                        Tailored Funding Solutions for
                        <span className="text-primary block">Every Vision</span>
                    </h2>
                    <p className="text-gray">
                        Discover our comprehensive range of funding services designed to help
                        turn ambitious projects into successful realities.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            {...service}
                            isActive={activeService === index}
                            onClick={() => setActiveService(index)}
                        />
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <Link href={'/services'}>
                        <button className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-text transition-all duration-300">
                            <span>Get Started with Our Services</span>
                            <LuChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

