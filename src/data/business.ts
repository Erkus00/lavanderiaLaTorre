export const business = {
    legalName: "Nombre Fiscal S.L.",
    nif: "B12345678",
    name: "Lavandería La Torre",
    alternateName: "La Torre Lavandería y Tintorería",
    slogan: "Servicio profesional a domicilio",
    description: "Servicio profesional de lavandería industrial y tintorería a domicilio",
    extendedDescription: [
        "En Lavandería La Torre ofrecemos un servicio completo de lavandería y tintorería a domicilio en Málaga y alrededores.",
        "Trabajamos con apartamentos turísticos, hoteles, restaurantes, aviación privada y particulares que buscan calidad y rapidez. Nuestra lavandería industrial está preparada para grandes volúmenes con máxima eficiencia.",
        "En tintorería, cuidamos tus prendas más delicadas: trajes, abrigos, pieles, edredones, cortinas y alfombras.",
        "Si prefieres no invertir en textiles, nuestro servicio de renting te permite alquilar ropa de cama, toallas y mantelería.",
        "Para urgencias, contamos con servicio express 24/7 con entrega en 3-4 horas, todos los días del año.",
        "Recogemos y entregamos en toda la zona: Pedregalejo, Fuengirola, Alhaurín, Cártama, Churriana, Torremolinos, Málaga Centro, Teatinos y puerto.",
        "Confía en nosotros para el cuidado de tus textiles con la comodidad de no moverte de casa."
    ],

    url: "https://lavanderialatorre.com",
    logo: "/images/logo-latorre.png",
    ogImage: "/images/og-image.jpg",

    phone: "+34 XXX XXX XXX",
    phoneDisplay: "XXX XXX XXX", // Para mostrar sin prefijo
    email: "info@lavanderialatorre.com",
    whatsapp: "34XXXXXXXXX", // Sin + ni espacios
    instagram: "",
    twitter: "",

    address: {
        street: "Calle Ejemplo 123",
        locality: "Málaga",
        postalCode: "29001",
        region: "Andalucía",
        country: "ES",
    },

    geo: {
        latitude: 36.7213,
        longitude: -4.4214,
    },

    areaServed: [
        "Málaga",
        "Torremolinos",
        "Fuengirola",
        "Alhaurín de la Torre",
        "Cártama",
        "Churriana",
    ],

    openingHours: [
        {days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "20:00"},
        {days: ["Saturday"], opens: "09:00", closes: "14:00"},
    ],

    openingHoursDisplay: [
        {days: "Lunes a Viernes", hours: "08:00 - 20:00"},
        {days: "Sábados", hours: "09:00 - 14:00"},
        {days: "Domingos", hours: "Cerrado"},
    ],
    openingHoursText: {
        weekdays: "Lun-Vie 8:00-20:00",
        saturday: "Sáb 9:00-14:00"
    },

    services: [
        {
            id: "lavanderia-industrial",
            name: "Lavandería Industrial",
            description: "Servicio especializado para apartamentos turísticos, hoteles, restaurantes y aviación privada. Gran capacidad y máxima eficiencia.",
            icon: "industry",
            images: [
                "/images/servicios/lavanderia-1.jpg",
                "/images/servicios/lavanderia-2.jpg",
                "/images/servicios/lavanderia-3.jpg",
                "/images/servicios/lavanderia-4.jpg",
            ],
            featured: false,
        },
        {
            id: "tintoreria",
            name: "Tintorería",
            description: "Limpieza profesional de trajes, pieles, alfombras y moquetas. Tratamiento especializado para prendas delicadas y de lujo.",
            icon: "sparkles",
            images: [
                "/images/servicios/tintoreria-1.jpg",
                "/images/servicios/tintoreria-2.jpg",
                "/images/servicios/tintoreria-3.jpg",
                "/images/servicios/tintoreria-4.jpg",
            ],
            featured: false,
        },
        {
            id: "renting-textil",
            name: "Renting Textil",
            description: "Alquiler de ropa de cama, toallas y mantelería. Ideal para apartamentos turísticos y negocios sin inversión inicial.",
            icon: "refresh",
            images: [
                "/images/servicios/renting-1.jpg",
                "/images/servicios/renting-2.jpg",
                "/images/servicios/renting-3.jpg",
                "/images/servicios/renting-4.jpg",
            ],
            featured: false,
        },
        {
            id: "express-24h",
            name: "Servicio Express 24/7",
            description: "Recogida y entrega en 3-4 horas. Disponible todos los días.",
            icon: "clock",
            images: [
                "/images/servicios/express-1.jpg",
                "/images/servicios/express-2.jpg",
                "/images/servicios/express-3.jpg",
                "/images/servicios/express-4.jpg",
            ],
            featured: true,
        },
    ],

    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Efectivo", "Tarjeta", "Transferencia", "Bizum"],

    social: {
        facebook: "https://www.facebook.com/lavanderialatorre",
        instagram: "https://www.instagram.com/lavanderialatorre",
        google: "https://g.page/lavanderialatorre",
    },

    // Valoraciones (actualizar manualmente o conectar a API)
    rating: {
        value: 4.8,
        count: 127,
    },

    colors: {
        primary: "#0780FE",
        base: "#FFFFFF",
        accent: "#D4AF37",
        text: "#1a1a1a",
    },

    faqs: [
        {
            question: "¿Cuánto tarda el servicio express?",
            answer: "Entre 3-4 horas, disponible las 24 horas del día, los 7 días de la semana."
        },
        {
            question: "¿Hacéis recogida a domicilio?",
            answer: "Sí, recogemos y entregamos en Málaga y alrededores en un radio de 20km: Torremolinos, Fuengirola, Alhaurín, Cártama, Churriana y más."
        },
        {
            question: "¿Qué tipo de prendas limpiáis?",
            answer: "Trajes, abrigos, pieles, alfombras, moquetas, edredones, cortinas y ropa delicada. También servicio de lavandería industrial para hoteles y apartamentos turísticos."
        },
        {
            question: "¿Ofrecéis servicio para empresas?",
            answer: "Sí, trabajamos con apartamentos turísticos, hoteles, restaurantes, aviación privada y puerto. Incluimos renting textil sin inversión inicial."
        },
        {
            question: "¿Cómo puedo pedir presupuesto?",
            answer: "Por WhatsApp o email. Los precios varían según volumen, por lo que preparamos presupuestos personalizados sin compromiso."
        },
    ],
} as const;

export type Business = typeof business;
export type Service = typeof business.services[number];
