import weatherApp from "../assets/weather-app.webp";
import nevermindShop from "../assets/nevermind-shop.webp";
import converterToWebp from "../assets/convertidor-webp.webp";
import beverlyTrends from "../assets/beverly-trends.webp";
import digitalBank from "../assets/digital-bank.webp";
import productList from "../assets/product-list.webp";

export interface ProjectData {
    id: string;
    github: string;
    demo: string;
    img: string;
    alt: string;
}

export const dataProjects: ProjectData[] = [
    {
        id: "nevermindShop",
        github: "https://github.com/Oliver-92/React-Ecommerce-TP-Final",
        demo: "https://react-ecommerce-final-project.netlify.app/",
        img: nevermindShop,
        alt: "nevermind-shop",
    },
    {
        id: "converterToWebp",
        github: "https://github.com/Oliver-92/Convertidor-Webp",
        demo: "https://oliver-92.github.io/Convertidor-Webp/",
        img: converterToWebp,
        alt: "converter-to-webp",
    },
    {
        id: "weatherApp",
        github: "https://github.com/Oliver-92/Weather-App",
        demo: "https://visionary-cupcake-bc5bc6.netlify.app/",
        img: weatherApp,
        alt: "weather-app",
    },
    {
        id: "beverlyTrends",
        github: "https://github.com/Oliver-92/Beverly-Trends",
        demo: "https://oliver-92.github.io/Beverly-Trends/",
        img: beverlyTrends,
        alt: "beverly-trends",
    },
    {
        id: "digitalBank",
        github: "https://github.com/Oliver-92/digitalbank-landing-page",
        demo: "https://fancy-melba-7b1280.netlify.app/",
        img: digitalBank,
        alt: "digital-bank",
    },
    {
        id: "productList",
        github: "https://github.com/Oliver-92/Product-list-with-cart",
        demo: "https://dulcet-pastelito-8cf073.netlify.app/",
        img: productList,
        alt: "product-list",
    },
]