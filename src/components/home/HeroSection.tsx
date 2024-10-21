"use client"

import { motion } from 'framer-motion'
import { LuChevronDown } from 'react-icons/lu'
import SliderButton from '../ui/sliderButton'

export default function HeroSection() {
    const scrollToNextSection = () => {
        const nextSection = document.getElementById('section1')
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <div className="relative min-h-[70vh] w-full">
            {/* Content Container */}
            <div className="relative h-[90vh] flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                        <SliderButton text='Get started' bg='bg-primary' color='white'/>
                        <SliderButton text='Learn More' bg='bg-white/10' color='white'/>
                    </motion.div>
                </div>

                {/* Scroll Down Button */}
                <motion.button
                    onClick={scrollToNextSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-5 self-center -translate-x-1/2 text-white flex items-center cursor-pointer bg-primary animate-bounce p-1 rounded-full"
                >
                    <LuChevronDown className="w-6 h-6 duration-200" />
                </motion.button>
            </div>
        </div>
    )
}