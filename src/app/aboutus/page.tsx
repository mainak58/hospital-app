import Image from "next/image";
import img1 from "../../../img/About_US_hero_center_desktop.original.jpg";

function page() {
    return (
        <>
            <div className="relative w-full overflow-hidden">
                <div className="relative">
                    <Image
                        src={img1}
                        alt="About us image"
                        height={1000}
                        width={1000}
                        className="w-full h-auto object-cover"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 space-y-4">
                    <p className="text-white font-medium text-lg md:text-xl uppercase tracking-widest">
                        About us
                    </p>

                    <p className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-snug max-w-2xl">
                        Transforming Primary Care
                    </p>

                    <button className="bg-white hover:bg-amber-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition duration-300">
                        Sign Up Today
                    </button>
                </div>
            </div>

            <div className="w-full h-[300px] bg-gray-50 flex justify-center items-center px-6 md:px-12 lg:px-24 text-center rounded-2xl shadow-md">
                <p className="text-gray-800 text-base md:text-lg leading-relaxed tracking-wide max-w-4xl">
                    One Medical is a membership-based primary care practice on a
                    mission to make getting quality care more affordable,
                    accessible, and enjoyable for all through a blend of
                    human-centered design, technology, and an exceptional team.
                    Our members enjoy seamless access to comprehensive care at
                    calming offices near where they work, live, and shop in
                    nineteen major U.S. markets, as well as 24/7 access to
                    virtual care. In addition to a direct-to-consumer membership
                    model, we work with more than 8,500 companies to provide One
                    Medical health benefits to their employees.
                </p>
            </div>
        </>
    );
}

export default page;
