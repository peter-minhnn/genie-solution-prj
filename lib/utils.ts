import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}


export const ToastPosition = (position: "top-right" = "top-right") => {
    switch (position) {
        default:
            return "top-[-680px] right-0";
    }
}