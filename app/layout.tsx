import type {Metadata} from "next";
import {ReactNode, StrictMode} from "react"; // Optional Theme applied to the Data Grid
import {Quicksand} from "next/font/google";
import {Providers} from "@/app/providers";
import { Toaster } from 'react-hot-toast';

//Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
//CSS
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "../styles/globals.css";
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css";

const quicksand = Quicksand({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Genie Solution",
    description: "Genie Solution Company",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
             <body className={`bg-[#FCFCFC] dark:bg-black ${quicksand.className}`}>
             <StrictMode>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </Providers>
                <Toaster />
             </StrictMode>
            </body>
        </html>
    );
}