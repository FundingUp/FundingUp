"use client"

import React from 'react';

const ProgressBar = ({ current = 0, total = 100, className = '' }) => {

    const price = new Intl.NumberFormat('en-US', {
        style: 'decimal',
        currency: 'EUR',
    }).format(total)

    return (
        <div className={`w-full max-w-md ${className}`}>
            {/* Value display */}
            <div className="mt-2 flex justify-between text-sm text-gray-600">
                <span>{current}%</span>
                <span>€{price}</span>
            </div>
            {/* Main container */}
            <div className="relative h-2 bg-slate-100 rounded-lg overflow-hidden shadow-inner">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute h-full w-1 bg-gray-400 transform -skew-x-45"
                            style={{ left: `${i * 8}%` }}
                        />
                    ))}
                </div>

                {/* Progress fill */}
                <div
                    className="absolute h-full bg-gradient-to-r from-primary to-blue-300 rounded-full"
                    style={{ width: `${current}%` }}
                >
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 w-full h-full animate-pulse bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                </div>
            </div>

        </div>
    );
};

export default ProgressBar