import { ServiceSvg, ServiceSvg2, ServiceSvg3, ServiceSvg4, TwiterIcon, InstaIcon, TelegramIcon, FacebookIcon } from "../common/Icons";

export const serviceCardItems = [
    {
        id: 1,
        svges: <ServiceSvg />,
        heading: "Content Deepfakes",
        paragraph: "Seize control and elevate your business with our hyper-realistic AI description creation. Immerse in a blend of artistry and technology that promises unparalleled authenticity.",
        width: "sm:w-7/12 md:max-w-[526px]",
    },
    {
        id: 2,
        svges: <ServiceSvg2 />,
        heading: "AI Verifications",
        paragraph: "Streamline your workflow with our AI verification system that boasts a stellar 80% first-time success rate.",
        width: "sm:w-5/12 md:max-w-[416px] ",
    },
    {
        id: 3,
        svges: <ServiceSvg3 />,
        heading: "Content Utilities",
        paragraph: "Consolidate your resources with our comprehensive   description utilities. Access everything you need from a single dashboard.",
        width: "sm:w-5/12 md:max-w-[416px]",
    },
    {
        id: 4,
        svges: <ServiceSvg4 />,
        heading: "Image Generation",
        paragraph: "Transform productivity with our sophisticated automation tools. Let technology work tirelessly behind the scenes, so your creativity never has to pause.",
        width: "sm:w-7/12 md:max-w-[526px]",
    },
]

export const Includedata = [
    {
        description: "Calculator, Quicklinks, Snippets, Window Management, and many more core features",
    },
    {
        description: "More than 1000 Extensions",
    },
    {
        description: "Custom Extensions",
    },
    {
        description: "Developer Tools",
    },
]
export const Enterpreneurdata = [
    {
        description: "Everything in Free"
    },
    {
        description: "Raycast AI"
    },
    {
        description: "Cloud Sync"
    },
    {
        description: "Custom Themes"
    },
    {
        description: "Unlimited Clipboard History"
    },
]

export const Business = [
    {
        description: "Everything in Pro"
    },
    {
        description: "Unlimited Shared Commands"
    },
    {
        description: "Unlimited Shared Quicklinks"
    },
    {
        description: "Unlimited Shared Snippets"
    },
    {
        description: "Unlimited Team Members"
    },
]
export const Button = (props) => {
    return (
        <button className={`${props.name}  items-center justify-center leading-6  ease-linear duration-300   hover:shadow-[0px_0px_12px_0px_#7F04E3]   bg-btngradient text-white text-sm sm:text-xl  rounded-[50px] px-7 relative z-10 py-[14px]  font-medium`}>
            {props.text}
        </button>
    )
}
export const accordionData = [
    { id: 1, title: "How do you handle my data?", description: "Business is the practice of making one's living or making money by producing or buying and selling products It is also any activity or enterprise entered." },
    { id: 2, title: "What's the difference between the Pro and Team plan?", description: "Business is the practice of making one's living or making money by producing or buying and selling products It is also any activity or enterprise entered." },
    { id: 3, title: "Can I use my own OpenAI API key?", description: "Business is the practice of making one's living or making money by producing or buying and selling products It is also any activity or enterprise entered." },
    { id: 4, title: "Which model do you use for Raycast AI?", description: "Business is the practice of making one's living or making money by producing or buying and selling products It is also any activity or enterprise entered." },
    { id: 5, title: "Can I upgrade my Teams subscription to use GPT-4?", description: "Business is the practice of making one's living or making money by producing or buying and selling products It is also any activity or enterprise entered." },
    { id: 6, title: "Does Raycast have a Student Program?", description: "Business is the practice of making one's living or making money by producing or buying and selling products It is also any activity or enterprise entered." },
];

export const linkData = [
    { path: "#Whyus", link: "features" },
    { path: "#service", link: "Services" },
    { path: "#pricing", link: "pricing" },
    { path: "#howtouse", link: "how to use" },
]
export const icons = [
    { link: "http://www.twitter.com", logo: (<TwiterIcon />) },
    { link: "http://www.instagram.com", logo: (<InstaIcon />) },
    { link: "http://www.telegram.com", logo: (<TelegramIcon />) },
    { link: "http://www.facebook.com", logo: (<FacebookIcon />) },
]
export const navLink = [
    {
        linkname: "Home",
        to: "#Home",
    },
    {
        linkname: "Why us",
        to: "#Whyus",
    },
    {
        linkname: "Services",
        to: "#Services",
    },
    {
        linkname: "Faqs",
        to: "#Faqs",
    },
];