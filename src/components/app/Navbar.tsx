"use client"

import { useEffect, useState } from 'react'
import Link from 'next/link'

const useScrollDirection = () => {
    const [scrollDirection, setScrollDirection] = useState("up")
    const [isAtTop, setIsAtTop] = useState(true)
    const threshold = 100
    let previousScrollY = 0

    useEffect(() => {
        previousScrollY = window.scrollY

        const updateScrollDirection = () => {
            const scrollY = window.scrollY
            const direction = scrollY > previousScrollY ? "down" : "up"

            setIsAtTop(scrollY < threshold)

            if (scrollY - previousScrollY > 10 || previousScrollY - scrollY > 10) {
                setScrollDirection(direction)
            }
            previousScrollY = scrollY > 0 ? scrollY : 0
        }

        const onScroll = () => {
            window.requestAnimationFrame(updateScrollDirection)
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return { scrollDirection, isAtTop }
}

const NavLink = ({ href, title }: { href: string; title: string }) => {
    return (
        <Link
            href={href}
            className="group relative text-text transition-colors duration-300 font-medium"
        >
            {title}
            <span className="absolute bottom-0 rounded-full left-0 h-[2px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full" />
        </Link>
    )
}

export default function Navbar() {
    const { scrollDirection, isAtTop } = useScrollDirection()

    return (
        <header
            className={`fixed w-full bg-white/80 backdrop-blur-md border-b-2 border-b-primary border-stone-300 z-50 transition-all duration-300
        ${(!isAtTop && scrollDirection === 'down') ? '-translate-y-full' : 'translate-y-0'}
        ${(!isAtTop && scrollDirection === 'up') ? 'shadow-md' : ''}
      `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center py-4">
                    {/* Logo/Brand */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="text-xl text-text font-bold">
                            Funding<span className='text-primary'>Up</span>
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <NavLink href="/" title='Home' />
                        <NavLink href="/services" title='Services' />
                        <NavLink href="/contacts" title='Contacts' />
                        <NavLink href="/about" title='About' />
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-950 transition-colors">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-700">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}