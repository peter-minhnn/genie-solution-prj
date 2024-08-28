"use client";

import SectionTitle from "../Common/SectionTitle";
import Brands from "@/components/Brands";

const OurStrength = () => {
    return (
        <section className="relative z-10 py-16 md:py-20 lg:py-28">
            <div className="container">
                <SectionTitle
                    title="Our Strength"
                    paragraph="Tapping into our blend of visionary creativity and extensive expertise, we stand ready to deliver game-changing IT solutions that empower your business to thrive in today's dynamic landscape."
                    center
                    mb="40px"
                />

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-md">
                            <Brands />
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
        </section>
    );
};

export default OurStrength;