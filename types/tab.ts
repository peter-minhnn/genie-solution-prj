import {ReactElement} from "react";

export type Tab = {
    id: number;
    name: string;
    icon?: ReactElement;
}

export type Content = {
    id: number;
    title: string;
    tag: string;
    description: string;
    linkText?: string;
    image: string;
    link?: string;
}