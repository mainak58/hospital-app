import banner1 from "@/../img/banner-img2.jpg";
import about1 from "@/../img/about-img.jpg";
import ortho1 from "@/../img/orthopedic.png";
import Image from "next/image";
import Link from "next/link";
import Departments from "@/components/Depeartments";

export default function Home() {
    return (
        <>
            <div className="relative w-full h-[700px] md:h-screen">
                {/* Banner Image */}
                <Image src={banner1} alt="banner" fill className="object-fit" />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-start">
                    <div className="max-w-2xl px-8 text-black space-y-6">
                        <h2 className="text-4xl md:text-5xl font-bold">
                            Superior Care and Skilled Physicians
                        </h2>
                        <p className="text-lg md:text-xl leading-relaxed">
                            Experience superior care provided by a team of
                            highly skilled and dedicated physicians. Your
                            well-being is our top priority.
                        </p>
                        <button className="px-6 py-3 bg-[#0474ed] text-white hover:bg-amber-700 transition rounded-md font-semibold">
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
        </>
    );
}
