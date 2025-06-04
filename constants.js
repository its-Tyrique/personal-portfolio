export const METADATA = {
    author: "Tyrique de Bruin",
    title: "Portfolio | Tyrique de Bruin",
    description:
        "Tyrique de Bruin is a recent software engineering graduate and full stack developer with a passion for building innovative solutions. Explore my portfolio to see my projects and skills.",
    siteUrl: "https://www.shubhporwal.me/",
    twitterHandle: "@shubhporwal24",
    keywords: [
        "Tyrique de Bruin",
        "FullStack Engineer",
        "Software Developer",
        "Software Engineer",
        "Portfolio",
        "Devfolio",
        "Folio",
    ].join(", "),
    image:
        "https://personal-portfolio-39x1c71dj-tyriques-projects-c275d275.vercel.app/preview.png",
    language: "English",
    themeColor: "#000000",
};

export const MENULINKS = [
    {
        name: "Home",
        ref: "home",
    },
    {
        name: "Skills",
        ref: "skills",
    },
    {
        name: "Projects",
        ref: "projects",
    },
    {
        name: "Work",
        ref: "work",
    },
    {
        name: "Contact",
        ref: "contact",
    },
];

export const TYPED_STRINGS = [
    "Recent Software Engineering Graduate",
    "Data Driven Full Stack Developer",
    "Professional overthinker",
];

export const SOCIAL_LINKS = [
    {
        name: "mail",
        url: "mailto: tyriquedebruin@gmail.com",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/tyrique-de-bruin",
    },
    {
        name: "github",
        url: "https://github.com/its-Tyrique",
    }
];

export const SKILLS = {
    languagesAndTools: [
        "html",
        "css",
        "javascript",
        "java",
        "sass",
        "jetbrains",
        "figma",
        "php"
    ],
    librariesAndFrameworks: [
        "react",
        "bootstrap",
        "tailwindcss",
        "vite",
        "laravel",
    ],
    databases: ["mysql",],
    other: ["git", "docker"],
};

export const PROJECTS = [
    {
        name: "Thrift-Marketplace",
        image: "/projects/airbnb.webp",
        blurImage: "/projects/blur/airbnb-blur.webp",
        description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
        gradient: ["#F14658", "#DC2537"],
        url: "https://shubh73-airbnb.vercel.app/",
        tech: ["react", "nextjs", "tailwindcss", "mapbox"],
    },
    {
        name: "ShiftSync",
        image: "/projects/medium.webp",
        blurImage: "/projects/blur/medium-blur.webp",
        description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
        gradient: ["#FFA62E", "#EA4D2C"],
        url: "https://shubh73-medium.vercel.app/",
        tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
    },
    {
        name: "Moyo",
        image: "/projects/inshorts.webp",
        blurImage: "/projects/blur/airbnb-blur.webp",
        description:
            "Conversational Voice Controlled React News Application using Alan AI 🎙",
        gradient: ["#000066", "#6699FF"],
        url: "https://shubh73-inshorts.netlify.app/",
        tech: ["react", "chakra-ui", "alan"],
    },
];

export const WORK_CONTENTS = {
    FIRMLINX: [
        {
            title: "Voice Technician",
            description:
                "Started at Firmlinx as a Voice Technician, where I was responsible for setting up and maintaining VoIP systems, troubleshooting call issues, and ensuring smooth communication infrastructure for clients.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white px-4">
                    Entry into the ICT industry
                </div>
            ),
        },
        {
            title: "Workshop Technician",
            description:
                "Transitioned into a Workshop Technician role, focusing on hardware diagnostics, laptop and PC repairs, and system upgrades, honing my technical troubleshooting skills.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white px-4">
                    Hardware repair and diagnostics
                </div>
            ),
        },
        {
            title: "Field Technician",
            description:
                "Advanced to Field Technician, responsible for on-site client support, network setups, and deploying ICT solutions tailored to small and medium-sized businesses.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white px-4">
                    On-site client service and deployment
                </div>
            ),
        },
    ],
    ELITE_X: [
        {
            title: "Intern - Proof of Concept",
            description:
                "Completed a 6-week internship at EliteX where we built a proof of concept for Mobilife: an automated change request management system with Trello integration. Gained experience in team collaboration, requirements gathering, and rapid prototyping.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white px-4">
                    Collaborative innovation experience
                </div>
            ),
        },
    ],
    STRATUSOLVE: [
        {
            title: "Junior Software Developer",
            description:
                "Currently working at StratuSolve as a Junior Software Developer on Theodore AI — a document management system with AI features tailored for financial industries. Focus areas include API integration, secure document handling, and intelligent data extraction.",
            content: (
                <div className="h-full w-full flex items-center justify-center text-white px-4">
                    Empowering financial tech with AI
                </div>
            ),
        },
    ],
};

export const GTAG = "G-5HCTL2TJ5W";
