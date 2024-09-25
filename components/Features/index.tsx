'use client';

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import data from "./data";
import {Element} from "react-scroll";

const Features = () => {
    return (
        <Element name='Features'>
            <section id="features" className="py-16 md:py-20 lg:py-28">
                <div className="container">
                    <SectionTitle
                        title="Main Features"
                        paragraph="At Genie Solution Vietnam, we bring innovation to life with our powerful suite of solutions, from marketplace systems and tracking tools to loyalty programs, CMS platforms, fitness apps, and seamless payment integrations."
                        center
                    />

                    <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((feature: any) => (
                            <SingleFeature key={feature.id} feature={feature}/>
                        ))}
                    </div>
                </div>
            </section>
        </Element>
    );
};

export default Features;