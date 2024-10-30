"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { LuUsers, LuTarget, LuTrophy, LuStar, LuArrowUpRight, LuQuote, LuArrowRight } from 'react-icons/lu'
import Image from 'next/image'
import Link from 'next/link'


export default function About() {

    const stats = [
        { icon: <LuUsers />, value: "1000+", label: "Happy Clients" },
        { icon: <LuTarget />, value: "95%", label: "Success Rate" },
        { icon: <LuTrophy />, value: "150+", label: "Projects" },
        { icon: <LuStar />, value: "4.9", label: "Average Rating" },
    ]

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO at TechCorp",
            content: "Working with this team has transformed our investment strategy. Their expertise and professional approach are unmatched.",
            rating: 5,
            image: "/images/banner.jpg"
        },
        {
            name: "Michael Chen",
            role: "Real Estate Developer",
            content: "Their attention to detail and market insight helped us achieve exceptional returns on our investments.",
            rating: 5,
            image: "/images/banner.jpg"
        }
    ]

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-blue-500 via-primary to-blue-300 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl font-bold mb-6"
                    >
                        Building Your Financial Future
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-xl max-w-2xl mx-auto"
                    >
                        We combine expertise, innovation, and dedication to deliver exceptional investment opportunities
                    </motion.p>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-lg text-center group hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="text-3xl text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-bold text-text mb-2">{stat.value}</h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <motion.section
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="py-16 px-4 bg-white"
            >
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-text mb-6">Our Mission</h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                We're committed to revolutionizing the investment landscape by providing transparent,
                                innovative, and high-performing opportunities. Our expert team combines deep market
                                knowledge with cutting-edge technology to deliver exceptional results.
                            </p>
                            <button className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-300">
                                Learn More
                                <LuArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                            </button>
                        </div>
                        <div className="relative h-96">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg transform rotate-3" />
                            <div className="absolute inset-0 bg-white rounded-lg shadow-2xl -rotate-3 overflow-hidden" >
                                <Image
                                    src={'/images/banner.jpg'}
                                    alt="image"
                                    fill
                                    priority
                                    className="object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials Section */}
            <section className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-text text-center mb-12">What Our Clients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-lg shadow-lg relative group hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="absolute -top-4 -left-4 text-4xl text-primary opacity-20">
                                    <LuQuote />
                                </div>
                                <div className="flex items-center mb-6">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        width={100}
                                        height={100}
                                        className="w-16 h-16 rounded-full mr-4 object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-lg text-text">{testimonial.name}</h3>
                                        <p className="text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">{testimonial.content}</p>
                                <div className="flex mt-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <LuStar key={i} className="text-yellow-400" />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Go to Contacts Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-6xl mx-auto flex flex-col items-center">
                    <h2 className="text-4xl font-bold text-text text-center mb-12">Ready to Get Started?</h2>
                    <Link href={'/contacts'}>
                        <button className="group inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors duration-300">
                            Contact Us
                            <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    )

}