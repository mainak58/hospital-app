import Image from "next/image";
import img1 from "../../../img/About_US_hero_center_desktop.original.jpg";
import img2 from "../../../img/media-about-1_jWULUF1.original.jpg";
import img3 from "../../../img/Iora_About_Us.width-1440.png";
import img4 from "../../../img/Screen_Shot_2021-06-17_at_11.12.07_AM.original.png";

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

            <div className="w-full h-[300px] bg-gray-50 flex justify-center items-center px-6 md:px-12 lg:px-24 text-center rounded-2xl">
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

            <div className="flex flex-col w-full max-w-7xl mx-auto py-8">
                {/* Feature Card 1 */}
                <div className="w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center m-3 p-6 gap-8 transition-transform hover:scale-[1.01]">
                    <Image
                        src={img2}
                        alt="Love image"
                        height={600}
                        width={600}
                        className="w-full md:w-1/2 rounded-lg object-cover"
                    />
                    <div className="flex flex-col w-full md:w-[400px] space-y-4 p-4">
                        <h2 className="text-[35px] md:text-[35px] font-bold text-gray-800">
                            We make people fall in love with their office
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            One member experience is powered by intelligent uses
                            of technology, including a mobile app that helps
                            schedule appointments, renew prescriptions, and
                            message with a provider. Consistent, quality care is
                            ensured through up-to-date digital health records
                            and with proactive digital health reminders. And if
                            you cant make it in to the office, One Medical makes
                            access to care frictionless with face-to-face care
                            over Video Chat available anytime.
                        </p>
                    </div>
                </div>

                <div className="w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row-reverse justify-between items-center m-3 p-6 gap-8 transition-transform hover:scale-[1.01]">
                    <Image
                        src={img3}
                        alt="Love image"
                        height={600}
                        width={600}
                        className="w-full md:w-1/2 rounded-lg object-cover"
                    />
                    <div className="flex flex-col w-full md:w-[400px] space-y-4 p-4">
                        <h2 className="text-[35px] md:text-[35px] font-bold text-gray-800">
                            Mission-driven leadership
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            One Medicals member experience is powered by
                            intelligent uses of technology, including a mobile
                            app that helps schedule appointments, renew
                            prescriptions, and message with a provider.
                            Consistent, quality care is ensured through
                            up-to-date digital health records and with proactive
                            digital health reminders. And if you cant make it in
                            to the office, One Medical makes access to care
                            frictionless with face-to-face care over Video Chat
                            available anytime.
                        </p>
                    </div>
                </div>

                {/* Feature Card 3 */}
                <div className="w-full bg-white rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center m-3 p-6 gap-8 transition-transform hover:scale-[1.01]">
                    <Image
                        src={img4}
                        alt="Love image"
                        height={600}
                        width={600}
                        className="w-full md:w-1/2 rounded-lg object-cover"
                    />
                    <div className="flex flex-col w-full md:w-[400px] space-y-4 p-4">
                        <h2 className="text-[35px] md:text-[35px] font-bold text-gray-800">
                            One Medical acquires Iora Health
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            One Medicals member experience is powered by
                            intelligent uses of technology, including a mobile
                            app that helps schedule appointments, renew
                            prescriptions, and message with a provider.
                            Consistent, quality care is ensured through
                            up-to-date digital health records and with proactive
                            digital health reminders. And if you cant make it in
                            to the office, One Medical makes access to care
                            frictionless with face-to-face care over Video Chat
                            available anytime.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
