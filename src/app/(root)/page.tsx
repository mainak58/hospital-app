import about1 from "@/../img/about-img.jpg";
import Image from "next/image";
import Link from "next/link";
import Departments from "@/components/Depeartments";
import FooterSection from "@/components/FooterSection";

export default function Home() {
    return (
        <>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-800 overflow-hidden">
                {/* Blurred background bubbles */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-10 left-10 w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-emerald-400 blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-60 sm:w-96 h-60 sm:h-96 rounded-full bg-teal-500 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 sm:w-48 h-32 sm:h-48 rounded-full bg-cyan-300 blur-3xl"></div>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-30"></div>

                {/* Main Content */}
                <div className="absolute inset-0 flex items-center justify-center pt-35 sm:justify-start px-4 sm:px-6 md:px-8">
                    <div className="max-w-[90%] sm:max-w-md md:max-w-lg lg:max-w-2xl text-white space-y-4 sm:space-y-5 md:space-y-6">
                        <div className="w-14 sm:w-16 h-1 bg-emerald-400 mb-2 sm:mb-4"></div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            Superior Care and
                            <span className="text-cyan-100">
                                {" "}
                                Skilled Physicians
                            </span>
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
                            Experience superior care provided by a team of
                            highly skilled and dedicated physicians. Your
                            well-being is our top priority.
                        </p>

                        <Link href="/appointments">
                            <button className="mt-3 sm:mt-4 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#0474ed] text-white hover:bg-emerald-500 transition-all duration-300 rounded-md font-semibold text-sm sm:text-base flex items-center group">
                                Make appointment
                                <svg
                                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </button>
                        </Link>

                        {/* Trusted badges */}
                        <div className="flex items-center space-x-4 pt-4 sm:pt-6">
                            <div className="flex -space-x-2">
                                {["PK", "JD", "KL"].map((initials, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-xs font-medium border-2 border-slate-900 bg-opacity-80"
                                        style={{
                                            backgroundColor:
                                                i === 1
                                                    ? "#14b8a6"
                                                    : i === 2
                                                    ? "#06b6d4"
                                                    : "#10b981",
                                        }}
                                    >
                                        {initials}
                                    </div>
                                ))}
                            </div>
                            <p className="text-sm text-gray-300">
                                Trusted by 20000+ patients
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-6 py-16 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <p className="text-[#0474ed] font-semibold uppercase tracking-wide">
                            About Us
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Revitalize Your Well-being with LifeWell
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            LifeWell is your gateway to a revitalized sense of
                            well-being. Our template is thoughtfully designed to
                            provide you with a seamless experience as you embark
                            on a journey towards optimal health.
                        </p>
                        <button className="px-6 py-3 bg-[#0474ed] hover:bg-amber-700 text-white rounded-md font-semibold transition">
                            Learn More
                        </button>
                    </div>

                    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
                        <Image
                            src={about1}
                            alt="About LifeWell"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            <Departments />
            <FooterSection />
        </>
    );
}
