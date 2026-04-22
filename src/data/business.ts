export const business = {
    legalName: "Ismael Pagés Conejo",
    nif: "76638115E",
    name: "Lavandería a domicilio La Torre",
    alternateName: "La Torre Lavandería y Tintorería a domicilio",
    slogan: "Servicio profesional a domicilio",
    description: "Servicio profesional de lavandería industrial y tintorería a domicilio",
    extendedDescription: [
        "En Lavandería La Torre ofrecemos un servicio completo de lavandería y tintorería a domicilio en Málaga y alrededores.",
        "Trabajamos con apartamentos turísticos, hoteles, restaurantes, aviación privada y particulares que buscan calidad y rapidez. " +
        "Nuestra lavandería industrial está preparada para grandes volúmenes con máxima eficiencia.",
        "En tintorería, cuidamos tus prendas más delicadas: trajes, abrigos, pieles, edredones, cortinas y alfombras.",
        "Si prefieres no invertir en textiles, nuestro servicio de renting te permite alquilar ropa de cama, toallas y mantelería.",
        "Para urgencias, contamos con servicio express 24/7 con entrega en 3-4 horas, todos los días del año.",
        "Recogemos y entregamos en toda la zona: Pedregalejo, Fuengirola, Alhaurín, Cártama, Churriana, Torremolinos, Málaga Centro, Teatinos y puerto.",
        "Confía en nosotros para el cuidado de tus textiles con la comodidad de no moverte de casa."
    ],

    url: "https://lavanderialatorre.com",
    logo: "/images/logo-latorre.webp",
    ogImage: "/images/logo-latorre.webp",

    phone: "633334555",
    phoneDisplay: "633 33 45 55",
    email: "lavanderialatorre@gmail.com",
    whatsapp: "633334555",
    instagram: "https://www.instagram.com/lavanderialatorre/",
    address: {
        street: "C/ Alcalde Juan Rodríguez Ruíz 8 Bj A. Alhaurín De La Torre 29130",
        locality: "Málaga",
        postalCode: "29130",
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
            description: "Servicio de lavandería industrial a domicilio para apartamentos turísticos, hoteles, restaurantes y aviación privada en Málaga. Máxima capacidad y eficiencia para negocios con alta rotación de textiles. Recogida y entrega a domicilio en toda la Costa del Sol.",
            images: [
                "/images/lav_ind_1.webp",
                "/images/lav_ind_2.webp",
                "/images/lav_ind_3.webp",
                "/images/lav_ind_4.webp",
            ],
            featured: false,
        },
        {
            id: "tintoreria",
            name: "Tintorería",
            description: "Limpieza profesional a domicilio de trajes, abrigos, pieles, alfombras y moquetas en Málaga. Tratamiento especializado para prendas delicadas y de lujo: edredones, cortinas y textiles que requieren cuidado experto. Servicio a domicilio con resultados impecables.",
            images: [
                "/images/tintoreria_1.webp",
                "/images/tintoreria_2.webp",
                "/images/tintoreria_3.webp",
                "/images/tintoreria_4.webp",
            ],
            featured: false,
        },
        {
            id: "renting-textil",
            name: "Renting Textil",
            description: "Alquiler de ropa de cama, toallas y mantelería para apartamentos turísticos y hostelería en la Costa del Sol. Sin inversión inicial, sin preocupaciones. Reposición y lavado incluidos para mantener tu negocio siempre impecable.",
            images: [
                "/images/renting_textil_1.webp",
                "/images/renting_textil_2.webp",
                "/images/renting_textil_3.webp",
                "/images/renting_textil_4.webp",
            ],
            featured: false,
        },
        {
            id: "express-24h",
            name: "Servicio Express 24/7",
            description: "Lavandería urgente con recogida y entrega en 3-4 horas, disponible todos los días del año en Málaga. Ideal para aviación privada, emergencias y clientes que necesitan resultados inmediatos sin esperas.",
            images: [
                "/images/express_1.webp",
                "/images/express_2.webp",
            ],
            featured: true,
        }
    ],

    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: ["Efectivo", "Tarjeta", "Transferencia", "Bizum"],

    social: {
        instagram: "https://www.instagram.com/lavanderialatorre/",
        google: "https://share.google/6o2f6DRHlmYhm9vDP",
    },

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
            question: "¿Cuánto cuesta el servicio de lavandería a domicilio en Málaga?",
            answer: "Lavandería La Torre ofrece lavandería a domicilio en Málaga desde 15€ la bolsa de ropa doméstica para particulares. Para empresas (hoteles, apartamentos turísticos, restaurantes) aplicamos tarifas especiales por volumen con descuentos progresivos. El servicio express 24/7 tiene un suplemento del 30% sobre tarifa estándar. Presupuesto personalizado sin compromiso por WhatsApp 633 33 45 55 o lavanderialatorre@gmail.com."
        },
        {
            question: "¿Cuánto tarda el servicio express de lavandería?",
            answer: "El servicio express de Lavandería La Torre entrega en 3-4 horas desde la recogida, disponible 24 horas al día, 7 días a la semana, los 365 días del año incluyendo festivos. Ideal para emergencias en hoteles, aviación privada o eventos. Cobertura en Málaga, Torremolinos, Fuengirola, Alhaurín de la Torre y localidades próximas. Confirmación inmediata por WhatsApp 633 33 45 55."
        },
        {
            question: "¿Dónde ofrece servicio Lavandería La Torre?",
            answer: "Lavandería La Torre ofrece recogida y entrega a domicilio en Málaga capital (Centro, Teatinos, Pedregalejo, Puerto), Torremolinos, Fuengirola, Alhaurín de la Torre, Cártama y Churriana. Radio de cobertura: 20km desde Alhaurín de la Torre. Para zonas de la Costa del Sol fuera de este radio, consultar disponibilidad según volumen. Servicio sin coste adicional de desplazamiento en zona de cobertura."
        },
        {
            question: "¿Cómo funciona la recogida y entrega a domicilio?",
            answer: "Proceso de Lavandería La Torre: (1) Solicitud por WhatsApp 633 33 45 55, teléfono o email lavanderialatorre@gmail.com. (2) Recogida programada en domicilio o negocio en horario acordado. (3) Procesamiento en lavandería industrial profesional. (4) Entrega limpia, planchada y empaquetada. Plazo estándar 24-48h, express 3-4h. Sin permanencia ni pedido mínimo para particulares."
        },
        {
            question: "¿Qué prendas lava Lavandería La Torre?",
            answer: "Lavandería La Torre procesa dos categorías: (1) Lavandería industrial para volumen: sábanas, toallas, manteles, ropa de trabajo, uniformes para hoteles, apartamentos turísticos y restaurantes. (2) Tintorería especializada para prendas delicadas: trajes, abrigos, vestidos de fiesta, pieles, alfombras, moquetas, edredones, cortinas. Tratamiento diferenciado según tipo de tejido con maquinaria profesional."
        },
        {
            question: "¿Cuál es la diferencia entre lavandería y tintorería?",
            answer: "Lavandería: limpieza con agua y detergentes de tejidos resistentes (sábanas, toallas, ropa de trabajo). Tintorería: limpieza con solventes químicos especializados para tejidos delicados que no admiten agua (trajes, pieles, alfombras, cortinas, vestidos de gala). Lavandería La Torre ofrece ambos servicios. La tintorería requiere procesos más largos (48-72h estándar) y tiene precio superior por la especialización del tratamiento."
        },
        {
            question: "¿Lavandería La Torre trabaja con empresas?",
            answer: "Sí. Lavandería La Torre es especialista en lavandería industrial B2B para: apartamentos turísticos, hoteles, restaurantes, aviación privada, puerto deportivo y empresas con alto volumen textil. Servicios empresariales: contratos estables, recogidas programadas, facturación mensual, tarifas por volumen, renting textil (alquiler de sábanas, toallas, mantelería con lavado incluido, sin inversión inicial). Contacto empresas: 633 33 45 55."
        },
        {
            question: "¿Ofrecéis servicio regular para apartamentos turísticos?",
            answer: "Sí. Lavandería La Torre ofrece servicio especializado para apartamentos turísticos, VUT y Airbnb en Costa del Sol. Incluye: recogidas programadas post-checkout, lavandería industrial de sábanas y toallas, contratos estables con facturación mensual, coordinación de horarios según rotación de huéspedes, opción de renting textil (alquiler con lavado incluido). Ideal para gestores multi-propiedad. Presupuesto personalizado según volumen."
        },
        {
            question: "¿Las prendas están aseguradas durante el proceso?",
            answer: "Sí. Lavandería La Torre tiene seguro de responsabilidad civil profesional que cubre todas las prendas durante el proceso completo (recogida, lavado, entrega). Sistema de trazabilidad con etiquetado individual por cliente para garantizar devolución correcta. En caso de incidencia, aplicación de condiciones de póliza según tipo de prenda y tratamiento. Protocolo de inspección previa para identificar daños existentes antes del lavado."
        },
        {
            question: "¿Qué es el servicio de renting textil?",
            answer: "El renting textil de Lavandería La Torre es alquiler de textiles profesionales (sábanas, toallas, mantelería) para hoteles, apartamentos turísticos y restaurantes en Málaga. Ventajas: sin inversión inicial en textiles, reposición automática de piezas desgastadas, lavado industrial incluido en cuota mensual, sin preocupación por stock ni almacenaje. Ideal para negocios con alta rotación. Cuota según volumen y frecuencia de cambio. Presupuesto personalizado."
        },
        {
            question: "¿Cómo solicitar presupuesto en Lavandería La Torre?",
            answer: "Solicitud de presupuesto sin compromiso en Lavandería La Torre: WhatsApp 633 33 45 55 (respuesta <2h), email lavanderialatorre@gmail.com, o formulario web lavanderialatorre.com. Información necesaria para presupuesto: tipo de servicio (lavandería/tintorería), volumen aproximado (kg/semana o unidades), frecuencia deseada (diaria/semanal/mensual), ubicación. Presupuestos personalizados para empresas con tarifas especiales por volumen. Horario atención: Lun-Vie 8:00-20:00, Sáb 9:00-14:00."
        },
    ]
} as const;

export type Business = typeof business;
export type Service = typeof business.services[number];
