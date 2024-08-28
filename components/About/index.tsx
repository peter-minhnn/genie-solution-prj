'use client';

import Image from "next/legacy/image";
import SectionTitle from "../Common/SectionTitle";
import {Element} from 'react-scroll';

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
        <path
            d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"/>
    </svg>
);

const AboutSectionOne = () => {
    const List = ({text}: { text: string }) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
            <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                {checkIcon}
            </span>
            {text}
        </p>
    );

    return (
        <Element name="About">
            <section id="A" className="pt-16 md:pt-20 lg:pt-28">
                <div className="container">
                    <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
                        <div className="-mx-4 flex flex-wrap items-center">
                            <div className="w-full px-4 lg:w-1/2" data-aos="fade-up-right">
                                <SectionTitle
                                    title="About us"
                                    paragraph="Welcome to Genie Solution Vietnam, where innovation and expertise converge to drive your software solutions forward to make your wishes come true. <br/> <br/> With a seasoned team of 10 specialists skilled in Node.js, .NET, Flutter, and Automation Testing, we've been at the forefront of software outsourcing since our inception in 2021. Trusted by industry leaders like Lotte and Girache, as well as local clients nationwide, we pride ourselves on delivering tailored solutions that exceed expectations. From concept to execution,
we're dedicated to bringing your vision to life with precision and efficiency. <br/> <br/> Experience the difference with Genie Solution Vietnam and unlock the potential of your software projects today"
                                    mb="44px"
                                />
                            </div>

                            <div className="w-full px-4 lg:w-1/2" data-aos="fade-up-left">
                                <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                                    <Image
                                        src="/images/about/about-image.svg"
                                        alt="about-image"
                                        layout='fill'
                                        className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                                        priority
                                        fetchPriority='auto'
                                    />
                                    <Image
                                        src="/images/about/about-image-dark.svg"
                                        alt="about-image"
                                        layout='fill'
                                        className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                                        priority
                                        fetchPriority='auto'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default AboutSectionOne;