import weatherApp from "../assets/weather-app.webp";
import nevermindShop from "../assets/nevermind-shop.webp";
import converterToWebp from "../assets/convertidor-webp.webp";
import beverlyTrends from "../assets/beverly-trends.webp";
import digitalBank from "../assets/digital-bank.webp";
import productList from "../assets/product-list.webp";
import burgerBrand from "../assets/BurgerBrand.webp";
import loopStudios from "../assets/Loopstudios.webp";
import newsHomepage from "../assets/News_homepage.webp";
import recipesApp from "../assets/Recipes_app.webp";

export interface ProjectData {
    id: string;
    github: string;
    demo: string;
    img: string;
    alt: string;
    tools?: string[];
}

export const dataProjects: ProjectData[] = [
    {
        id: "burgerBrand",
        github: "https://github.com/Oliver-92/Burger-Next-App",
        demo: "https://burger-next-app.vercel.app/",
        img: burgerBrand,
        alt: "burger-brand",
        tools: ["nextjs", "typescript", "zustand", "vercel", "tailwind"]
    },
    {
        id: "recipesApp",
        github: "https://github.com/Oliver-92/Recipes_App",
        demo: "https://recipes-app-react-vite.netlify.app/",
        img: recipesApp,
        alt: "recipes-app",
        tools: ["react", "zustand", "tailwind", "firebase", "netlify"]
    },
    {
        id: "nevermindShop",
        github: "https://github.com/Oliver-92/React-Ecommerce-TP-Final",
        demo: "https://react-ecommerce-final-project.netlify.app/",
        img: nevermindShop,
        alt: "nevermind-shop",
        tools: ["react", "vite", "firebase", "bootstrap", "netlify"]
    },
    {
        id: "converterToWebp",
        github: "https://github.com/Oliver-92/Convertidor-Webp",
        demo: "https://oliver-92.github.io/Convertidor-Webp/",
        img: converterToWebp,
        alt: "converter-to-webp",
        tools: ["html", "css", "javascript", "github_pages"]
    },
    {
        id: "weatherApp",
        github: "https://github.com/Oliver-92/Weather-App",
        demo: "https://visionary-cupcake-bc5bc6.netlify.app/",
        img: weatherApp,
        alt: "weather-app",
        tools: ["react", "vite", "css", "netlify"]
    },
    {
        id: "beverlyTrends",
        github: "https://github.com/Oliver-92/Beverly-Trends",
        demo: "https://oliver-92.github.io/Beverly-Trends/",
        img: beverlyTrends,
        alt: "beverly-trends",
        tools: ["html", "css", "javascript", "bootstrap", "github_pages"]
    },
    {
        id: "productList",
        github: "https://github.com/Oliver-92/Product-list-with-cart",
        demo: "https://dulcet-pastelito-8cf073.netlify.app/",
        img: productList,
        alt: "product-list",
        tools: ["react", "vite", "css", "netlify"]
    },
    {
        id: "loopStudios",
        github: "https://github.com/Oliver-92/Loopstudios-landing-page",
        demo: "https://peaceful-pegasus-1b0d7b.netlify.app/",
        img: loopStudios,
        alt: "loopstudios",
        tools: ["react", "vite", "css", "netlify"]
    },
    {
        id: "newsHomepage",
        github: "https://github.com/Oliver-92/news-homepage",
        demo: "https://gleaming-zuccutto-ab4616.netlify.app/",
        img: newsHomepage,
        alt: "news-homepage",
        tools: ["react", "vite", "css", "netlify"]
    },
    {
        id: "digitalBank",
        github: "https://github.com/Oliver-92/digitalbank-landing-page",
        demo: "https://fancy-melba-7b1280.netlify.app/",
        img: digitalBank,
        alt: "digital-bank",
        tools: ["react", "vite", "css", "netlify"]
    },
]