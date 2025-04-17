import NavbarCheck from "@/components/NavbarCheck";
import banner1 from "@/../img/banner-img2.jpg";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <NavbarCheck />
            <div className="pt-20">
                <div className=" w-[700px] flex flex-col justify-center items-center absolute mt-80 bg-amber-800">
                    <p className="">Superior Care and Skilled Physicians</p>
                    <p>
                        Experience superior care provided by a team of highly
                        skilled and dedicated physicians. Your well-being is our
                        top priority
                    </p>
                    <button>Make appointment</button>
                </div>
                <Image
                    src={banner1}
                    alt="banner"
                    height={500}
                    width={500}
                    className="w-full object-cover"
                />
            </div>
        </>
    );
}
