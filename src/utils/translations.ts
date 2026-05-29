

export interface ProjectTranslation {
    title: string;
    desc: string;
}

export interface TranslationSchema {
    index: string;
    about: string;
    projects: string;
    contact: string;
    aboutTitle: string;
    projectsTitle: string;
    aboutText: string;
    avatarAlt: string;
    githubButton: string;
    demoButton: string;
    burgerBrand: ProjectTranslation;
    recipesApp: ProjectTranslation;
    nevermindShop: ProjectTranslation;
    converterToWebp: ProjectTranslation;
    weatherApp: ProjectTranslation;
    beverlyTrends: ProjectTranslation;
    digitalBank: ProjectTranslation;
    productList: ProjectTranslation;
    loopStudios: ProjectTranslation;
    newsHomepage: ProjectTranslation;
    contactTitle: string;
    name: string;
    email: string;
    comment: string;
    send: string;
    formMessage: string;
    errorMessage: string;
    headerFooter: string;
    messageFooter: string;
}

export const translations: Record<"es" | "en", TranslationSchema> = {
    es: {
        // Navbar
        index: "Inicio",
        about: "Sobre Mi",
        projects: "Proyectos",
        contact: "Contacto",

        // Main titles
        aboutTitle: "Sobre mi",
        projectsTitle: "Proyectos",

        // Sección About
        aboutText: "Programador apasionado por el desarrollo web orientado al Frontend. Actualmente en búsqueda de oportunidades para aplicar y ampliar mis conocimientos en el mundo real. Poseo habilidades sólidas en HTML, CSS, JavaScript y React, así como un fuerte compromiso con la resolución de problemas y el aprendizaje continuo. Abierto a colaborar en proyectos desafiantes y crecer como profesional en el campo de la tecnología.",
        avatarAlt: "Foto de perfil",

        // Buttons
        githubButton: "Código",
        demoButton: "Ver proyecto",

        // Web Projects
        burgerBrand: {
            title: "BurgerBrand",
            desc: "Plataforma de delivery de hamburguesas artesanales que incluye un menú dinámico, personalización de productos, carrito de compras y panel de administración."
        },
        recipesApp: {
            title: "App de recetas",
            desc: "Aplicación de exploración de recetas de cocina con búsqueda inteligente, detalles de recetas y sistema personalizado de colección de recetas favoritas."
        },
        nevermindShop: {
            title: "Tienda Nevermind",
            desc: "Tienda online de indumentaria. Incluye un CRUD completo de los productos, carrito de compras, búsqueda y filtrado de productos por nombre y categoría.",
        },
        converterToWebp: {
            title: "Convertidor a WebP",
            desc: "Convertidor de imágenes a formato WebP que permite a los usuarios seleccionar varias imágenes, ver una vista previa selección, convertirlas a WebP y descargarlas en un archivo ZIP.",
        },
        weatherApp: {
            title: "App Clima",
            desc: "Una aplicación meteorológica que permite a los usuarios buscar el tiempo en una ciudad específica y ver los resultados en una interfaz moderna y animada.",
        },
        beverlyTrends: {
            title: "Beverly Trends",
            desc: "Página web funcional para una tienda de ropa que incluye un sistema de carrito de compras dinámico, navegación por categorías y formulario de contacto.",
        },
        digitalBank: {
            title: "Banco Digital",
            desc: "Landing page de una entidad bancaria con una interfaz moderna y responsiva. Este proyecto es una solución completa al desafío de Frontend Mentor.",
        },
        productList: {
            title: "Lista de Productos con carrito",
            desc: "Landing page que muestra una lista de productos con un carrito de compras dinámico. Este proyecto es una solución completa al desafío de Frontend Mentor.",
        },
        loopStudios: {
            title: "Loopstudios",
            desc: "Landing page de una empresa de realidad virtual, con un diseño moderno y minimalista. Este proyecto es una solución completa al desafío de Frontend Mentor.",
        },
        newsHomepage: {
            title: "Landing page Noticias",
            desc: "Landing page de noticias, con un diseño minimalista y moderno, responsivo y accesible. Este proyecto es una solución completa al desafío de Frontend Mentor.",
        },

        // Contact section
        contactTitle: "Contacto",
        name: "Nombre",
        email: "Email",
        comment: "Comentario",
        send: "Enviar",
        formMessage: "Mensaje enviado correctamente",
        errorMessage: "Hubo un error al enviar el mensaje",
        headerFooter: "Conectemos",
        messageFooter: "Listo para colaborar en tu próximo desafío",
    },

    en: {
        // Navbar
        index: "Home",
        about: "About Me",
        projects: "Projects",
        contact: "Contact",

        // Main titles
        aboutTitle: "About me",
        projectsTitle: "Projects",

        // About Section
        aboutText: "Passionate programmer focused on Front-End web development. Currently seeking opportunities to apply and expand my knowledge in real-world environments. I have solid skills in HTML, CSS, JavaScript, and React, as well as a strong commitment to problem-solving and continuous learning. Open to collaborating on challenging projects and growing as a professional in the technology field.",
        avatarAlt: "Profile picture",

        // Buttons
        githubButton: "Code",
        demoButton: "See project",

        // Web Projects
        burgerBrand: {
            title: "BurgerBrand",
            desc: "A delivery app for a craft burger joint featuring a dynamic menu, product customization, shopping cart, and admin panel.",
        },
        recipesApp: {
            title: "Recipes App",
            desc: "Recipe exploration app with intelligent search, recipe details, and custom collection system for favorite recipes."
        },
        nevermindShop: {
            title: "Nevermind Shop",
            desc: "Online store for clothing. It includes a complete CRUD of products, shopping cart, search and filter of products by name and category.",
        },
        converterToWebp: {
            title: "WebP Converter",
            desc: "Image converter to WebP format that allows users to select multiple images, preview the selection, convert them to WebP, and download them in a ZIP file.",
        },
        weatherApp: {
            title: "Weather App",
            desc: "A weather app that allows users to search for the weather in a specific city and view the results in a modern and animated interface.",
        },
        beverlyTrends: {
            title: "Beverly Trends",
            desc: "Functional website for a clothing store featuring a dynamic shopping cart system, navigation by categories and contact form.",
        },
        digitalBank: {
            title: "Digital Bank",
            desc: "Landing page of a banking institution with a modern and responsive interface. This project is a complete solution to the Frontend Mentor challenge.",
        },
        productList: {
            title: "Product List",
            desc: "Landing page that shows a list of products with a dynamic shopping cart. This project is a complete solution to the Frontend Mentor challenge.",
        },
        loopStudios: {
            title: "Loopstudios",
            desc: "Landing page of a virtual reality company, with a modern and minimalist design. This project is a complete solution to the Frontend Mentor challenge.",
        },
        newsHomepage: {
            title: "News Homepage",
            desc: "News landing page, with a minimalist and modern design, responsive and accessible. This project is a complete solution to the Frontend Mentor challenge.",
        },

        // Contact section
        contactTitle: "Contact",
        name: "Name",
        email: "Email",
        comment: "Comment",
        send: "Send",
        formMessage: "Message sent successfully",
        errorMessage: "There was an error sending the message",
        headerFooter: "Let's connect",
        messageFooter: "Ready to collaborate on your next challenge",

    }
}