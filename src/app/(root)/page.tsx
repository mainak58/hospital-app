import banner1 from "@/../img/isolated-1188036_1280.webp";
import about1 from "@/../img/about-img.jpg";
import Image from "next/image";
import Link from "next/link";
import Departments from "@/components/Depeartments";
import FooterSection from "@/components/FooterSection";

export default function Home() {
    return (
        <>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen">
                <Image src={banner1} alt="banner" fill className="object-fit" />
                <div className="absolute inset-0 flex items-center justify-start">
                    <div className="max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 sm:px-6 md:px-8 text-black space-y-3 sm:space-y-4 md:space-y-6">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            Superior Care and Skilled Physicians
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            Experience superior care provided by a team of
                            highly skilled and dedicated physicians. Your
                            well-being is our top priority.
                        </p>
                        <button className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-[#0474ed] text-white hover:bg-amber-700 transition rounded-md font-semibold text-sm sm:text-base">
                            <Link href="/appointments">Make appointment</Link>
                        </button>
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
