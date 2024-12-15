"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LuBuilding,
    LuHome,
    LuPieChart,
    LuArrowUpRight,
    LuMapPin,
    LuTrendingUp,
    LuCalendarClock,
    LuShieldCheck,
    LuUsers,
    LuCheckCircle2,
    LuArrowUp,
    LuChevronRight,
    LuCircle
} from 'react-icons/lu';
import SliderButton from '@/components/ui/sliderButton';

const ServicesPage = () => {
    const [selectedService, setSelectedService] = useState<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % services.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const services = [
        {
            id: 1,
            icon: <LuBuilding className="text-3xl" />,
            title: "Commercial Investment",
            description: "Premium commercial real estate opportunities in high-growth markets",
            features: [
                { icon: <LuMapPin />, text: "Prime Locations" },
                { icon: <LuTrendingUp />, text: "High ROI Potential" },
                { icon: <LuCalendarClock />, text: "Flexible Terms" }
            ],
            stats: {
                roi: "12-15%",
                minimum: "$50,000",
                term: "36 months"
            },
            theme: "bg-indigo-50 text-indigo-900",
            accent: "bg-indigo-600",
            highlight: "bg-indigo-100"
        },
        {
            id: 2,
            icon: <LuPieChart className="text-3xl" />,
            title: "Portfolio Management",
            description: "Professional management of diversified investment portfolios",
            features: [
                { icon: <LuTrendingUp />, text: "Active Management" },
                { icon: <LuShieldCheck />, text: "Risk Mitigation" },
                { icon: <LuUsers />, text: "Dedicated Support" }
            ],
            stats: {
                roi: "10-14%",
                minimum: "$100,000",
                term: "12 months"
            },
            theme: "bg-amber-50 text-amber-900",
            accent: "bg-amber-600",
            highlight: "bg-amber-100"
        },
        {
            id: 3,
            icon: <LuHome className="text-3xl" />,
            title: "Residential Projects",
            description: "Carefully curated residential properties in developing urban areas",
            features: [
                { icon: <LuShieldCheck />, text: "Verified Properties" },
                { icon: <LuUsers />, text: "Expert Management" },
                { icon: <LuCheckCircle2 />, text: "Guaranteed Returns" }
            ],
            stats: {
                roi: "8-12%",
                minimum: "$25,000",
                term: "24 months"
            },
            theme: "bg-rose-50 text-rose-900",
            accent: "bg-rose-600",
            highlight: "bg-rose-100"
        },
    ];

    const heroVariants = {
        active: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        },
        inactive: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.5 }
        }
    };

    function scrollTo(section: string) {
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior:'smooth' });
        }
    }

    function selectCard(index: number) {
        const element = document.getElementById('section1');
        if (element) {
            element.scrollIntoView({ behavior:'smooth' });
        }
        console.log("INDEX: ", index)
        setTimeout(() => {
            setSelectedService(index - 1)
        }, 800)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Modern Hero Section */}
            <section className="relative h-[80vh] overflow-hidden">
                <div className="absolute inset-0 bg-gray-900">
                    <div className="absolute inset-0 opacity-20">
                        <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,_#4f46e5,_transparent_60%)]" />
                    </div>
                </div>

                <div className="relative h-full container mx-auto px-4">
                    <div className="h-full flex items-center justify-between">
                        <div className="w-1/2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial="inactive"
                                    animate="active"
                                    exit="inactive"
                                    variants={heroVariants}
                                    className="space-y-6"
                                >
                                    <h1 className="text-7xl font-bold text-primary leading-tight">
                                        {services[activeIndex].title}
                                    </h1>
                                    <p className="text-xl text-gray-300 max-w-lg">
                                        {services[activeIndex].description}
                                    </p>
                                    <div className="flex gap-4">
                                        <SliderButton text='Get started' bg='bg-primary' color='white' handlePress={()=> selectCard(services[activeIndex].id)}/>
                                        <SliderButton text='How It Works' bg='bg-white/10' color='primary' handlePress={()=> scrollTo('HowItWorks')} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="w-1/2 flex justify-end">
                            <div className="relative w-96 h-96">
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        className={`absolute inset-0 ${service.theme} rounded-3xl p-8`}
                                        initial={false}
                                        animate={{
                                            scale: activeIndex === index ? 1 : 0.8,
                                            opacity: activeIndex === index ? 1 : 0,
                                            rotateY: activeIndex === index ? 0 : -60,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <div className="h-full flex flex-col">
                                            <div className="flex-1">
                                                <div className={`w-16 h-16 ${service.accent} rounded-2xl flex items-center justify-center text-white mb-6`}>
                                                    {service.icon}
                                                </div>
                                                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                                <div className="space-y-3">
                                                    {service.features.map((feature, idx) => (
                                                        <div key={idx} className="flex items-center gap-3">
                                                            <div className={`w-8 h-8 ${service.highlight} rounded-lg flex items-center justify-center`}>
                                                                {feature.icon}
                                                            </div>
                                                            <span>{feature.text}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className={`${service.highlight} rounded-xl p-4 mt-6`}>
                                                <div className="flex justify-between items-center">
                                                    <span>ROI up to</span>
                                                    <span className="font-bold">{service.stats.roi}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Hero Navigation */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
                        {services.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-12 h-1 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-white/20'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id='section1' className="py-24 px-4">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className={`${service.theme} rounded-3xl p-1`}
                            >
                                <div className="bg-white rounded-[1.4rem] p-8 h-full">
                                    <div className={`w-14 h-14 ${service.accent} rounded-2xl flex items-center justify-center text-white mb-6`}>
                                        {service.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    <div className="space-y-4 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-3">
                                                <div className={`w-8 h-8 ${service.highlight} rounded-lg flex items-center justify-center`}>
                                                    {feature.icon}
                                                </div>
                                                <span className="text-gray-600">{feature.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <AnimatePresence>
                                        {selectedService === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="space-y-4 mb-8"
                                            >
                                                <div className={`${service.highlight} rounded-xl p-4`}>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        <div>
                                                            <div className="text-sm text-gray-600">ROI</div>
                                                            <div className="font-bold">{service.stats.roi}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-gray-600">Minimum</div>
                                                            <div className="font-bold">{service.stats.minimum}</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-sm text-gray-600">Term</div>
                                                            <div className="font-bold">{service.stats.term}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <button
                                        onClick={() => setSelectedService(selectedService === index ? null : index)}
                                        className={`w-full ${service.accent} text-white px-6 py-3 rounded-xl font-medium 
                                            hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2`}
                                    >
                                        {selectedService === index ? 'Show Less' : 'View Details'}
                                        <LuArrowUp
                                            className={`transition-transform duration-300 ${selectedService === index ? 'rotate-0' : 'rotate-180'
                                                }`}
                                        />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works Section (Unchanged) */}
            <section id='HowItWorks' className="py-20 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-center text-text mb-16"
                    >
                        How It Works
                    </motion.h2>
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-primary/20 -translate-y-1/2 hidden md:block" />
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                { number: "01", title: "Choose Investment", desc: "Select your preferred investment option" },
                                { number: "02", title: "Due Diligence", desc: "Review detailed property information" },
                                { number: "03", title: "Secure Investment", desc: "Complete the investment process" },
                                { number: "04", title: "Track Progress", desc: "Monitor your investment growth" }
                            ].map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative"
                                >
                                    <div className="bg-white p-6 rounded-lg shadow-lg">
                                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mb-4">
                                            {step.number}
                                        </div>
                                        <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;