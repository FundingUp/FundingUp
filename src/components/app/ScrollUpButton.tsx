"use client"

import { useState, useEffect } from 'react'
import { LuArrowUp } from 'react-icons/lu'

export default function ScrollUpButton() {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility)

        return () => {
            window.removeEventListener('scroll', toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            onClick={scrollToTop}
            className={`
                fixed bottom-8 right-8 
                p-3 rounded-full 
                bg-primary text-white 
                shadow-xl hover:bg-primary/90 
                transition-all duration-300 ease-in-out
                z-50
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
            aria-label="Scroll to top"
        >
            <LuArrowUp className="w-6 h-6" />
        </button>
    )
}