import Image from "next/image";
import {Member} from "@/types/member";
import {Dispatch, SetStateAction} from "react";

type MemberModalProps = {
    selectedMember: Member;
    setSelectedMember: Dispatch<SetStateAction<Member | null>>;
};

export default function MemberModal({ selectedMember, setSelectedMember }: MemberModalProps) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[9999]">
            <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
                <button
                    className="absolute top-4 right-4 text-gray-600"
                    onClick={() => setSelectedMember(null)}
                >
                    &times;
                </button>
                <Image
                    src={selectedMember.imageUrl}
                    alt={selectedMember.name}
                    className="w-full h-64 object-cover rounded-lg"
                    width={400}
                    height={300}
                />
                <div className="mt-4">
                    <h3 className="text-2xl font-bold text-gray-800">{selectedMember.name}</h3>
                    <p className="text-gray-500 mb-2">{selectedMember.title}</p>
                    <p className="text-gray-600 mb-4">{selectedMember.portfolio}</p>
                </div>
            </div>
        </div>
    )
}