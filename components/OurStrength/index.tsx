"use client";

import SectionTitle from "../Common/SectionTitle";
import Brands from "@/components/Brands";
import {Element} from "react-scroll";
import {useCallback, useEffect, useRef, useState} from "react";
import {Tabs} from "@/components/OurStrength/Tabs";
import Link from "next/link";
import Image from "next/legacy/image";
import {Contents} from "@/components/OurStrength/contents";
import {Content} from "@/types/tab";

const OurStrength = () => {
    const tabsRef = useRef<any>(null);
    const [activeTab, setActiveTab] = useState(1);

    const contentCallback = useCallback((item: Content | null) => {
        return (
            <div className='grid xl:grid-cols-12 grid-cols-1 mb-5 rounded-xl bg-[rgb(248,250,252)] border-[1px] shadow-none border-solid border-[rgb(241,245,249)] h-[auto] w-full'>
                <div className='col-span-5 xl:pt-16 xs:pt-5'>
                    <div className='flex flex-col gap-5 px-5 py-5 md:pl-16 md:pr-16 xl:pt-8 xl:pl-16 xl:pb-24 xl:pr-10'>
                        <div className='text-[rgba(12,74,110,.8)] font-semibold'>{item?.tag || ""}</div>
                        <h3 className='sm:pt-8 rich-black font-semibold sm:text-[1.875rem] leading-8'>{item?.title || ""}</h3>
                        <p className='sm:text-[1rem] leading-8'>{item?.description}</p>
                        {/*<Link href={'/'} className='flex flex-row w-[10rem] gap-1 sm:text-[.938rem] font-semibold leading-6 text-primary transition duration-300 group'>*/}
                        {/*    <span className='transition duration-300 group-hover:text-black'>View Case Study</span>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"*/}
                        {/*         className="transition duration-300 group-hover:translate-y-[-2px] group-hover:text-black w-5 h-5 text-primary">*/}
                        {/*        <path fillRule="evenodd"*/}
                        {/*              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"*/}
                        {/*              clipRule="evenodd"></path>*/}
                        {/*    </svg>*/}
                        {/*</Link>*/}
                    </div>
                </div>
                <Link href={item?.link || '/'}  className='col-span-7 relative lg:order-2 overflow-hidden xl:rounded-tr-2xl xl:rounded-br-2xl lg:rounded-tl-none lg:rounded-bl-none  h-[450px] xl:h-full'>
                    <Image
                        src={item?.image || '/images/our-software/case-study-02.webp'}
                        alt=''
                        priority
                        fetchPriority='auto'
                        layout='fill'
                        sizes="100% 100%"
                        objectFit='contain'
                        className='absolute w-full h-full hover:scale-105 transition duration-300'
                    />
                </Link>
            </div>
        )
    }, [activeTab]);

    useEffect(() => {
        if(!activeTab) return;

        const content = Contents.find(x => x.id === activeTab);
        const getContent = contentCallback(content || null);
        tabsRef.current?.setActiveNode(getContent);
    }, [activeTab]);

    return (
        <Element name='Our Showcases' className="relative z-10 py-16 md:py-20 lg:py-28">
            <div className="container" data-aos="fade-up">
                <SectionTitle
                    title="Our Showcases"
                    paragraph="Explore our showcase to see the innovative software solutions we’ve crafted, reflecting our expertise and commitment to delivering excellence across diverse industries."
                    center
                    mb="40px"
                />
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto max-w-[1280px] overflow-hidden rounded-md">
                            <Brands/>
                            <Tabs ref={tabsRef} activeTab={1} setActiveTab={setActiveTab}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
        </Element>
    );
};

export default OurStrength;