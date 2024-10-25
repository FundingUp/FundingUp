"use client"

import React, { useState } from 'react';
import { LuChevronRight, LuRocket, LuBuilding2, LuUsers2, LuBriefcase, LuArrowRight, LuBadgeCheck, LuShieldCheck } from 'react-icons/lu';

const ServiceCard = ({ icon: Icon, title, description, features, isActive, onClick }: any) => (
    <section
        id='services'
        onClick={onClick}
        className={`relative group cursor-pointer p-8 rounded-2xl transition-all duration-500 transform
      ${isActive
                ? 'bg-primary text-white scale-105 shadow-xl'
                : 'bg-white/50 hover:bg-white/80 hover:shadow-lg'}`}
    >
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl" />

        <div className="relative">
            <div className={`p-3 rounded-xl inline-block mb-4 
        ${isActive ? 'bg-white/10' : 'bg-primary/10'}`}>
                <Icon className={`h-7 w-7 ${isActive ? 'text-white' : 'text-primary'}`} />
            </div>

            <h3 className={`text-xl font-bold mb-3 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                {title}
            </h3>

            <p className={`text-sm mb-6 ${isActive ? 'text-white/90' : 'text-gray-600'}`}>
                {description}
            </p>

            <div className={`space-y-3 ${isActive ? 'block' : 'hidden'}`}>
                {features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                        <LuBadgeCheck className="h-5 w-5 text-white/90" />
                        <span className="text-sm text-white/90">{feature}</span>
                    </div>
                ))}
            </div>

            <div className={`mt-6 flex items-center gap-2 text-sm font-medium
        ${isActive ? 'text-white' : 'text-primary'}`}>
                Learn More
                <LuArrowRight className={`h-4 w-4 transition-transform duration-300
          ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
            </div>
        </div>
    </section>
);

export default function ServicesSection () {
    const [activeService, setActiveService] = useState(0);

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
    ];

    return (
        <section id="services" className="relative py-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-40 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-40 -right-20 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl animate-pulse" />
            </div>

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
                    <button className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-text transition-all duration-300">
                        <span>Get Started with Our Services</span>
                        <LuChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </section>
    );
};

