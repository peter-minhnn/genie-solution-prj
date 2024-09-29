"use client";

import Image from 'next/image';
import {teams} from "@/components/Teams/data";
import {Element} from "react-scroll";
import SectionTitle from "@/components/Common/SectionTitle";

const TeamSection = () => {
    // const [selectedMember, setSelectedMember] = useState<Member | null>(null);
    //
    // const openModal = (member: Member) => {
    //     setSelectedMember(member);
    // };

    return (
        <Element name="Teams" className="py-16 md:py-20 lg:py-28">
            <SectionTitle
                title="Team Profile"
                paragraph="Boasting a seasoned team of 10+ experts with over a decade of collective experience, Genie Solution is primed to craft tailored solutions that meet and exceed your project requirements"
                center
                mb="40px"
            />
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-wrap justify-center">
                        {teams.map((member, index) => (
                            <div
                                key={index}
                                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 cursor-pointer transform transition-transform duration-300 hover:scale-105"
                            >
                                <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                                    <Image
                                        src={member.imageUrl}
                                        alt={member.name}
                                        className="w-full h-96 object-cover"
                                        width={400}
                                        height={300}
                                    />
                                    <div className="p-6 min-h-60">
                                        <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                                        <p className="text-gray-500 mb-3">{member.title}</p>
                                        <p className="text-gray-600">{member.bio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal Section */}
                {/*{selectedMember && (*/}
                {/*    <MemberModal selectedMember={selectedMember} setSelectedMember={setSelectedMember}/>*/}
                {/*)}*/}
            </section>
        </Element>
    );
};

export default TeamSection;