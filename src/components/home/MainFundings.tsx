"use client"

import InvestCard from "./InvestCard"

type Types = 'Comercial' | 'Residencial'

export default function MainFundings() {
    const investments = [
        {
            title: "T3 Cascais",
            image: "/images/building1.jpg",
            price: 250000,
            deadline: 11,
            type: 'Residencial' as Types,
            funds: 50000,
            location: "Cascais, Lisboa",
            return: 11
        },
        {
            title: "Office Space",
            image: "/images/building2.jpg",
            price: 380000,
            deadline: 21,
            type: 'Comercial' as Types,
            funds: 220000,
            location: "Porto, Portugal",
            return: 13
        },
        {
            title: "Villa Algarve",
            image: "/images/building3.jpg",
            price: 420000,
            deadline: 30,
            type: 'Residencial' as Types,
            funds: 200000,
            location: "Faro, Algarve",
            return: 15
        }
    ];

    return (
        <section id="section1" className="container mx-auto py-16">
            <h1 className="bg-gradient-to-t from-slate-500 via-primary to-primary bg-clip-text text-center text-5xl font-semibold text-transparent md:text-6xl">
                Make Your Investments
            </h1>

            <p className="mb-16 text-center text-gray md:mb-20">
                Easy way to make money trusting someone else
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {investments.map((item, index) => (
                    <InvestCard
                        key={index}
                        title={item.title}
                        image={item.image}
                        deadline={item.deadline}
                        funds={item.funds}
                        location={item.location}
                        price={item.price}
                        return={item.return}
                        type={item.type}
                    />
                ))}
            </div>
        </section>
    )
}