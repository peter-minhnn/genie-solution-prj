import {Brand} from "@/types/brand";
import Image from "next/legacy/image";
import brandsData from "./data";

const Brands = () => {
    return (
        <section className="pt-16">
            <div className="container">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="flex flex-wrap items-center justify-center rounded-sm">
                            {brandsData.map((brand) => (
                                <SingleBrand key={brand.id} brand={brand}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;

const SingleBrand = ({brand}: { brand: Brand }) => {
    const {href, image, name} = brand;

    return (
        <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <a
                href={href}
                target="_blank"
                rel="nofollow noreferrer"
                className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
            >
                <Image src={image} alt={name} className="block dark:hidden" objectFit='contain' layout='fill' sizes='100% 100%'/>
            </a>
        </div>
    );
};