"use client"

import { LuArrowRight, LuBadgeCheck } from 'react-icons/lu'
import Link from 'next/link'

export default function ServiceCard({ icon: Icon, title, description, features, isActive, onClick }: any) {
    return (
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

                <Link href={'/services'}>
                    <div className={`mt-6 flex items-center gap-2 text-sm font-medium
                            ${isActive ? 'text-white' : 'text-primary'}`}>
                        Learn More
                        <LuArrowRight className={`h-4 w-4 transition-transform duration-300
                              ${isActive ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                    </div>
                </Link>
            </div>
        </section>
    )
}