"use client";

import { UseDepeartment } from "@/hooks/depeartment";
import Image from "next/image";

export default function Departments() {
    const departments = UseDepeartment();

    return (
        <section className="w-full py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="inline-block px-4 py-1 rounded-full bg-amber-100 text-amber-700 font-medium text-sm mb-4">
                        Our Departments
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                        Explore Our Specialized Departments
                    </h2>
                    <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {departments?.map((dept, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full transform hover:-translate-y-1"
                        >
                            <div className="relative w-full h-60 overflow-hidden">
                                <Image
                                    src={dept.image}
                                    alt={dept.title}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-50"></div>
                            </div>

                            <div className="p-6 flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {dept.title}
                                </h3>
                                <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                    {dept.description}
                                </p>
                            </div>

                            <div className="px-6 pb-6">
                                <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-amber-600 transition-colors duration-300 flex items-center justify-center group">
                                    <span>LEARN MORE</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
