"use client"

import Link from 'next/link'
import React from 'react'
import { LuTrendingUp } from 'react-icons/lu'

export default function InvestKnowlegeInsentive() {
    return (
        <section id='InsentiveSection' className='pt-20 pb-20 flex flex-col items-center justify-center bg-slate-100 gap-5 text-center'>

            <h1 className='text-4xl text-text font-semibold'>
                It's important to know what you're doing
            </h1>

            <Link href={'/#'} className='group flex gap-3 text-primary text-2xl items-center'>
                <p>How to start with investments</p>
                <LuTrendingUp className='group-hover:translate-x-1 duration-300' />
            </Link>

        </section>
    )
}
