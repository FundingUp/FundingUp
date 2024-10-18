"use client"

import React from 'react'

interface props {
    text: string
    bg: string
    color: string
}

export default function SliderButton({ bg, color, text }: props) {
    return (
            <button
                className={`bg-${bg} text-${text} px-8 py-3 flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 shadow whitespace-pre md:flex group relative justify-center gap-2 rounded-md transition-all duration-300 ease-out `}
            >
                <span
                    className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40"
                ></span>
                <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                    <span
                        className="inline-block tabular-nums tracking-wider font-display font-medium text-white"
                    >{text}</span>
                </div>
            </button>
    )
}
