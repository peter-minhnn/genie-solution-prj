import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
    const { icon, title, paragraph } = feature;
    return (
        <div className="w-full" data-aos="flip-up">
            <div
                className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
                {icon}
            </div>
            <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                {title}
            </h3>
            <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color text-left">
                {paragraph}
            </p>
        </div>
    );
};

export default SingleFeature;