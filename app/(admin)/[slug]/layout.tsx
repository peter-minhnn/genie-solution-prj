import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Admin Dashboard | Genie Solution Company",
    description: "This is Admin for Genie Solution Company",
    // other metadata
};

export default function AdminLayout({children}: { children: ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}