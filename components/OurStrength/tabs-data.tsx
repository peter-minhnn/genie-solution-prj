import {Tab} from "@/types/tab";

const data: Tab[] = [
    {
        id: 1,
        name: "Homepage & CMS",
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="4.11765" cy="4.11814" r="4.11765" fill="#4A6CF7"></circle>
                <circle cx="15.8824" cy="4.11814" r="4.11765" fill="#4A6CF7"></circle>
                <circle opacity="0.5" cx="15.8824" cy="15.8828" r="4.11765" fill="#4A6CF7"></circle>
                <circle cx="4.11765" cy="15.8828" r="4.11765" fill="#4A6CF7"></circle>
            </svg>
        )
    },
    {
        id: 2,
        name: "Operation System",
        icon: (
            <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.5" cx="22" cy="10.0005" r="10" fill="#4A6CF7"></circle>
                <path d="M22 10.0005L12 17.0005L12 3.00049L22 10.0005Z" fill="#4A6CF7"></path>
                <rect y="9.00049" width="12" height="2" fill="#4A6CF7"></rect>
            </svg>
        )
    },
    {
        id: 3,
        name: "Mobile App",
        icon: (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M10 11.563V20.0005L19.9994 14.2192V5.78174L10 11.563Z"
                      fill="#4A6CF7"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M0 14.3755L10 20.0005V11.563L0 5.78174V14.3755Z"
                      fill="#4A6CF7"></path>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10 8.12549L0 14.3755L10 20.0005L20 14.3755L10 8.12549Z"
                      fill="url(#paint0_linear_3:20)" fillOpacity="0.64"></path>
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M10 0.000488281L0 5.78174L10 11.563L20 5.78174L10 0.000488281Z"
                      fill="url(#paint1_linear_3:20)"></path>
                <defs>
                    <linearGradient id="paint0_linear_3:20" x1="-3.86893e-09" y1="11.9781" x2="19.8302" y2="17.6066"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.299"></stop>
                        <stop offset="1" stopColor="#7587E4" stopOpacity="0"></stop>
                    </linearGradient>
                    <linearGradient id="paint1_linear_3:20" x1="3.7182" y1="0.000488354" x2="11.1258" y2="15.7396"
                                    gradientUnits="userSpaceOnUse">
                        <stop stopColor="#7587E4"></stop>
                        <stop offset="1" stopColor="#CCD4FF"></stop>
                    </linearGradient>
                </defs>
            </svg>
        )
    }
];

export default data;