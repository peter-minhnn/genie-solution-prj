"use client";

import { ThemeProvider } from "next-themes";
import React, {useEffect} from "react";
import {QueryClient, QueryClientProvider} from "react-query";
import AOS from "aos";

// Create a client
const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
    //INIT AOS animation
    useEffect(() => {
        if(typeof window === 'undefined') return;
        AOS.init({
            duration: 800
        });
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
                {children}
            </ThemeProvider>
        </QueryClientProvider>
    );
}