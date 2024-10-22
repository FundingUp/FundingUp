"use client"

import Image from 'next/image';
import { LuArrowUpRight, LuTrendingUp, LuHome, LuBuilding, LuMapPin } from 'react-icons/lu';

type Types = 'Comercial' | 'Residencial'

interface Props {
    title: string
    price: number
    funds: number
    deadline: number
    location: string
    return: number
    type: Types
    image: string
}

export default function InvestCard(props: Props) {
    return (
        <div className="group relative rounded-lg bg-white transition-all duration-300 hover:-translate-y-1 shadow-xl">
            {/* Image Container with Zoom Effect */}
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={props.image}
                    alt={props.title}
                    width={800}
                    height={600}
                    className="h-full w-full transform object-cover rounded-t-md transition-all duration-500 group-hover:scale-105"
                />
            </div>

            {/* Stylized Tag/Flag */}
            <div className="absolute -left-2 top-4 z-10">
                <div className="relative">
                    <div className="flex items-center gap-2 bg-primary px-4 py-1 text-white shadow-lg rounded-r-md">
                        {props.type === 'Comercial' ? <LuBuilding className="text-xl" /> : <LuHome className="text-xl" />}
                        <span className="font-medium text-lg">{props.type}</span>
                    </div>
                    {/* Triangle shape for the flag effect */}
                    <div className="absolute -left-0 -top-2 border-l-8 border-b-8 border-l-transparent border-b-primary/60" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex flex-col">
                <div className="flex-grow">
                    <h2 className="mb-1 text-3xl font-semibold text-text group-hover:text-primary">
                        {props.title}
                    </h2>

                    <div className="mb-4 flex items-baseline justify-between">
                        <div className='flex gap-1 items-center'>
                            <LuMapPin className='text-primary' />
                            <p className="text-primary">
                                {props.location}
                            </p>
                        </div>
                        <div className="flex items-center gap-2 text-lg text-green-500">
                            <LuTrendingUp />
                            <span>{props.return}% ROI</span>
                        </div>
                    </div>
                </div>

                {/* See More Button */}
                <button className="group/button w-full bg-gradient-to-br from-blue-300 via-primary to-primary text-white py-3 rounded-md hover:bg-primary/90 transition-colors duration-300 mt-4 flex items-center justify-center gap-2">
                    See More
                    <LuArrowUpRight className="text-lg group-hover/button:translate-x-1 duration-300" />
                </button>
            </div>
        </div>
    );
}