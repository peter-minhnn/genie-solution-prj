"use client";

import { ThemeProvider } from "next-themes";
import React, {useEffect} from "react";
import AOS from "aos";

export function Providers({ children }: { children: React.ReactNode }) {
    //INIT AOS animation
    useEffect(() => {
        if(typeof window === 'undefined') return;
        AOS.init();
    }, []);

    return (
        <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
            {children}
        </ThemeProvider>
    );
}