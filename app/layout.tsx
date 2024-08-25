import type {Metadata} from "next";
import {Quicksand} from "next/font/google";
import {Providers} from "@/app/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "../styles/globals.css";

const quicksand = Quicksand({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Genie Solution",
    description: "Genie Solution Company",
};

export default function RootLayout({
   children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
             <body className={`bg-[#FCFCFC] dark:bg-black ${quicksand.className}`}>
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                    <ScrollToTop />
                </Providers>
            </body>
        </html>
    );
}
