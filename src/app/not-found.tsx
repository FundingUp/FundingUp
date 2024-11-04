"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { LuHome, LuCompass, LuArrowLeft } from 'react-icons/lu'


export default function NotFound() {
    const numberVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }
    
      // Floating animation for the compass
      const floatingVariants = {
        animate: {
          y: [0, -10, 0],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }
      }
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-blue-50 p-4">
          <div className="max-w-3xl w-full">
            <div className="text-center">
              {/* Animated 404 */}
              <motion.div 
                className="relative"
                initial="initial"
                animate="animate"
              >
                <motion.div 
                  variants={numberVariants}
                  className="text-[180px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-blue-400 leading-none"
                >
                  404
                </motion.div>
                
                {/* Floating compass icon */}
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <LuCompass className="text-8xl text-primary/20" />
                </motion.div>
              </motion.div>
    
              {/* Message */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl font-bold text-text mb-6"
              >
                Page Not Found
              </motion.h1>
    
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-600 text-lg mb-8"
              >
                Looks like you've ventured into uncharted territory. Let's get you back on track.
              </motion.p>
    
              {/* Action buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link href="/" className="group inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md transition-all duration-300 hover:-translate-y-1">
                  <LuHome className="group-hover:scale-110 transition-transform duration-300" />
                  Back to Home
                </Link>
                
                <button 
                  onClick={() => window.history.back()}
                  className="group inline-flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-md border-2 border-primary transition-all duration-300 hover:-translate-y-1"
                >
                  <LuArrowLeft className="group-hover:scale-110 transition-transform duration-300" />
                  Go Back
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      )
}
