"use client"

import { motion } from 'framer-motion'
import { LuChevronDown } from 'react-icons/lu'
import SliderButton from '../ui/sliderButton'

export default function HeroSection() {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('next-section')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="relative min-h-[70vh] w-full">
            {/* Content Container */}
            <div className="relative h-[80vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="space-y-8">
                    {/* Hero Title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-bold text-white max-w-3xl"
                    >
                        Empowering Your
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="text-primary ml-3"
                        >
                            Financial Future
                        </motion.span>
                    </motion.h1>

                    {/* Hero Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-lg md:text-xl text-zinc-300 max-w-2xl"
                    >
                        Transform your financial journey with our innovative funding solutions.
                        We provide the tools and expertise you need to reach your goals faster.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-wrap gap-4"
                    >
                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-blue-950 transition-colors"
                        >
                            Get Started
                        </motion.button> */}
                        <SliderButton text='Get started' bg='primary' color='white'/>
                        <SliderButton text='Learn More' bg='white/10' color='white'/>
                        {/* <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 bg-white/10 text-white rounded-md font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
                        >
                            Learn More
                        </motion.button> */}
                    </motion.div>
                </div>

                {/* Scroll Down Button */}
                <motion.button
                    onClick={scrollToNextSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.9,
                        duration: 0.8,
                        y: {
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut"
                        }
                    }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 cursor-pointer"
                >
                    <span className="text-sm font-medium">Explore</span>
                    <LuChevronDown className="w-6 h-6 animate-bounce" />
                </motion.button>

                {/* Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ delay: 1, duration: 1.5 }}
                    className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary rounded-full blur-3xl"
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    transition={{ delay: 1.2, duration: 1.5 }}
                    className="absolute bottom-1/4 left-[10%] w-96 h-96 bg-blue-600 rounded-full blur-3xl"
                />
            </div>
        </div>
    )
}